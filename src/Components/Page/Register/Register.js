import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
const Register = () => {

    const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div>
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-50 text-gray-800">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Create Account</h1>
          <p className="text-sm text-gray-600">Sign in to access your account</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-12 ng-untouched ng-pristine ng-valid">
        
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
                {...register("name")}
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                data-temp-mail-org="0"
              />
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
                {...register("email")}
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                data-temp-mail-org="0"
              />
            </div>
            {/* Password field */}
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <Link className="text-xs hover:underline text-gray-600">
                  Forgot password?
                </Link>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                {...register("password")}
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-pink-600 text-gray-50">
                Sign in
              </button>
            </div>
            <p className="px-6 text-sm text-center text-gray-600">
              Already have an account?
              <Link to="/Login" className="hover:underline text-pink-600">
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
