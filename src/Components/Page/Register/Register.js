import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { authContext } from "../../../Context/AuthContext/AuthContext";
import { getAuth } from "firebase/auth";
import app from "../../../Firebase/FirebaseConfig/Firebase.config";
import Loading from "../../Loading/Loading";
import { setAuthToken } from "../../../Context/AuthToken/AuthToken";
import toast from "react-hot-toast";

const auth = getAuth(app);
const Register = () => {
  const [error, setError] = useState();
  const location = useLocation()
  const navigate = useNavigate()

  const from = location?.state?.from?.pathname || '/';
  const { user, creatingUserWithEp, updatingUser, loading, setLoading } = useContext(authContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleCreatingUser = (e) => {

    const formData = new FormData();
    formData.append("image", e.image[0]);


    const url = "https://api.imgbb.com/1/upload?key=66ec6767006d71f52c699460fc28550b";
    fetch(url, {
      method: "POST",
      body: formData,
    })

    .then(res => res.json())
    .then(data => {
      const  image = data.data.display_url;
      console.log(image)
      // create User 
      creatingUserWithEp(e.email, e.password)
      .then(users => {
        
        const userInformation = {
          userName: e.name,
          userEmail: e.email,
          userRole: e.role
        }
        setAuthToken(users.user)
        updatingUser( e.name, image)
          .then(()=> alert('created account successfully'))
          .catch(error=> {
            const errors = error.message;
          })

        fetch('http://localhost:5000/allUser', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(userInformation)
        })
        .then(res => res.json())
        .then(data =>{
          setAuthToken(data.user)
          setLoading(true)
          
        })
        .catch(error => {
          const errors = error.message
        })
        // navigating
        navigate(from , {replace: true })

      })
      .catch(err=> console.error(err))
    })
  }
        
  
  return (
    <div>
      <div className="flex flex-col max-w-md my-3 mx-auto p-6 rounded-md sm:p-10 bg-gray-50 text-gray-800">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Create Account</h1>
          <p className="text-sm text-gray-600">Sign in to access your account</p>
        </div>
        <form onSubmit={handleSubmit(handleCreatingUser)} className="space-y-12 ng-untouched ng-pristine ng-valid">
          <div className="space-y-4">
            {/* name field */}
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Your Name"
                {...register("name", { required: true, message: "Name required" })}
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                data-temp-mail-org="0"
              />
              {errors.name?.type === "required" && (
                <p className="text-red-600" role="alert">
                  {" "}
                  Name is required
                </p>
              )}
            </div>
            {/* email field */}
            <div>
              <label htmlFor="Email" className="block mb-2 text-sm">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email"
                {...register("email", { required: true, message: "Email required" })}
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                data-temp-mail-org="0"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-600" role="alert">
                  {" "}
                  Email is required
                </p>
              )}
            </div>
            <div className="col-span-full sm:col-span-3 my-3">
              <label forHtml="select" className=" text-black text-sm font-bold">
                What's your Purpose
              </label>
              <select
                {...register("role")}
                className="select w-full py-3 px-2 border border-primary-focus my-2 rounded-md focus:ring focus:ring-opacity-75  dark:border-primary-focus "
              >
                <option disabled selected value="Select role">
                  Select Role
                </option>
                <option value="Normal">Normal User</option>
                <option value="Seller">Seller</option>
                <option value="Buyer">Buyer</option>
              </select>
            </div>
            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                image
              </label>
              <input
                type="file"
                name="image"
                id="image"
                placeholder="Your image"
                {...register("image", { required: true, message: "image required" })}
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                data-temp-mail-org="0"
              />
              {errors.image?.type === "required" && (
                <p className="text-red-600" role="alert">
                  {" "}
                  image is required
                </p>
              )}
            </div>
            {/* Password field */}
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                {...register("password", { required: true, message: "password required" })}
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600" role="alert">
                  {" "}
                  Password is required
                </p>
              )}
            </div>
            <p className="text-red-500">{error}</p>
          </div>
          <div className="space-y-2">
            <div>
              {loading ? (
                <Loading></Loading>
              ) : (
                <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-red-700 text-gray-50">
                  Create Account
                </button>
              )}
            </div>
            <p className="px-6 text-sm text-center text-gray-600">
              Already have an account?
              <Link to="/Login" className="hover:underline text-red-700">
                login here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
