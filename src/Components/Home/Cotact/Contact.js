import React from "react";

const Contact = () => {
  return (
    <div className="py-4 px[10%]">
      <div className=" p-10   bg-gray-900 text-gray-800">
        <h1 className="text-center text-3xl font-extrabold text-white">Keep to touch with us</h1>
        <form novalidate=""  className="space-y-6 my-8 w-1/2 mx-auto ng-untouched ng-pristine ng-valid">
          <div className="w-full">
            <label for="name" className="text-sm shadow-2xl text-white">
              Full name
            </label>
            <input id="name" type="text" placeholder="" className="w-full p-3 rounded bg-gray-100" />
          </div>
          <div className="w-full">
            <label for="email" className="text-sm shadow-2xl text-white">
              Email
            </label>
            <input id="email" type="email" className="w-full p-3 rounded bg-gray-100" data-temp-mail-org="1" />
          </div>
          <div className="w-full">
            <label for="message" className="text-sm shadow-2xl text-white">
              Message
            </label>
            <textarea id="message" rows="3" className="w-full p-3 rounded bg-gray-100"></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-sm shadow-2xl text-white font-bold tracking-wide uppercase rounded bg-red-600 text-gray-50"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
