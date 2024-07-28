import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { auth, provider } from "../firebase/firebase";
import { signInWithPopup } from "firebase/auth";


function Signup() {
  
  const signUpWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // You can also create a user document in your Firestore database here if needed
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            Get started today
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            sunt dolores deleniti inventore quaerat mollitia?
          </p>

          <form
            action="#"
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 bg-slate-200"
          >
            <p className="text-center text-lg font-medium">
              Sign up now
            </p>

            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>

              <div className="relative">
                <input
                  type="name"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-lg"
                  placeholder="Enter name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  type="email"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                />

              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>

              <div className="relative">
                <input
                  type="password"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter password"
                />
              </div>
            </div>

            <button
              type="submit"
              className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
            >
              Sign up
            </button>

            <p className="text-center text-sm text-gray-500">
              Don't have an account?
              <a className="underline" href="#">
                {" "}
                Sign in
              </a>
            </p>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 m-5">
              <div
                onClick={signUpWithGoogle}
                className="h-10 rounded-lg bg-gray-100 text-black text-xl justify-center items-center flex cursor-pointer"
              >
                <h2><FaGoogle /></h2>
              </div>
              <div className="h-10 rounded-lg bg-gray-100 text-black text-xl justify-center items-center flex">
                <h2><FaGithub /></h2>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
