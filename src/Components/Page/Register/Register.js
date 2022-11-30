import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { authContext } from "../../../Context/AuthContext/AuthContext";
import { getAuth } from "firebase/auth";
import app from "../../../Firebase/FirebaseConfig/Firebase.config";
import Loading from "../../Loading/Loading";

import toast from "react-hot-toast";
import useToken from "../../../Context/AuthToken/useToken";

const auth = getAuth(app);

const Register = () => {
  const [error, setError] = useState();
  const location = useLocation();
  const navigate = useNavigate();
  const [createEmail, setCreateEmail] = useState("");
  const [token] = useToken(createEmail);
  // const [token] = AuthToken(createEmail);

  const from = location?.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

  const { user, loginWithGitHub, loginWithGoogle, creatingUserWithEp, updatingUser, loading, setLoading } =useContext(authContext);
  const {register,handleSubmit, formState: { errors },} = useForm();

  const handleCreatingUser = (e) => {
    const formData = new FormData();
    formData.append("image", e.image[0]);

    const url = "https://api.imgbb.com/1/upload?key=66ec6767006d71f52c699460fc28550b";
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        const image = data.data.display_url;
        console.log(image);
        // create User

        creatingUserWithEp(e.email, e.password)
          .then((res) => {
            const user = res.user;

            const userInfo = {
              displayName: e.name,
              email: e.email,
              photoURL: image,
              role: e.role,
              signMethod: "Register",
            };
            updatingUser(userInfo)
              .then(() => {
                const userInformation = {
                  userName: e.name,
                  email: e.email,
                  role: e.role,
                  signMethod: "Register",
                };
                setCreateEmail(userInfo.email)
                console.log(userInformation);

                fetch("http://localhost:5000/allUser", {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify(userInfo),
                })
                  .then((res) => res.json())
                  .then((data) => {
                    // console.log(data)
                    
                    setLoading(false);
                  })
                  .catch((error) => {
                    const errors = error.message;
                  });
              })
              
              .catch((error) => {
                const errors = error.message;
              });

            // fetch("http://localhost:5000/allUser", {
            //   method: "POST",
            //   headers: {
            //     "content-type": "application/json",
            //   },
            //   body: JSON.stringify(userInformation),
            // })
            //   .then((res) => res.json())
            //   .then((data) => {
            //     setAuthToken(data.user);
            //     setLoading(true);
            //   })
            //   .catch((error) => {
            //     const errors = error.message;
            //   });
            // navigating
          })
          .catch((err) => console.error(err));
      });
  };

  // const signMethod = "Registration";
  // const SaveUsers = (email, userName) => {
  //   const saveUsers = { userName, email };
  //   console.log(saveUsers);
  //   fetch("http://localhost:5000/allUser", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(saveUsers),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("saveUser", data);
  //       setLoading(true);
  //       setCreateEmail(email);
  //       // getUserToken(email)(66)
  //     });
  // };

  // login with Google Handler
  const googleHandler = () => {
    loginWithGoogle()
      .then((result) => {
        const userName = result.user.displayName;
        const email = result.user.email;
        const userImg = result.user.photoURL;
        const userinfoFromGoogle = {
          userName: userName,
          email: email,
          userImg: userImg,
          signMethod: "google",
          role: "Normal user",
        };
        console.log(result);

        fetch("http://localhost:5000/allUser", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userinfoFromGoogle),
        })
          .then((res) => res.json())
          .then((data) => {
            setLoading(true);
            console.log(result);
            toast.success("Welcome to Your Dream Bike");
            navigate(from, { replace: true });
          })
          .catch((error) => {
            const errors = error.message;
          });

        toast.success("Welcome to Your Dream Bike");
      })
      .catch((error) => console.error(error));
  };

  const githubHandler = () => {
    loginWithGitHub()
      .then((result) => {
        console.log(result);
        toast.success("Welcome to Your Dream Bike");
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };
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
            <div className="flex justify-center space-x-4">
              <button onClick={googleHandler} aria-label="Log in with Google" className="p-3 rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
              </button>
              <button aria-label="Log in with Twitter" className="p-3 rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                  <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
                </svg>
              </button>
              <button onClick={githubHandler} aria-label="Log in with GitHub" className="p-3 rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                  <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                </svg>
              </button>
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
