import React from 'react';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { signInWithPopup } from "firebase/auth";
import { auth, provider, db } from '../firebase/firebase'; 
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate(); 

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const userDoc = await getDoc(doc(db, 'users', user.uid));

      if (userDoc.exists()) {
        toast.success("Logged in successfully!");
        navigate('/dashboard');
      } else {
        toast.error('No account found. Please sign up first.');
        navigate('/signup');
      }
    } catch (error) {
      toast.error('Error logging in with Google');
      console.error('Error logging in with Google', error);
    }
  };

  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            Welcome Back
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            Login to your account to continue.
          </p>
          <form
            action="#"
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 bg-slate-200"
            onSubmit={(e) => e.preventDefault()}
          >
            <p className="text-center text-lg font-medium">Sign in now</p>

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
              Sign in
            </button>

            <p className="text-center text-sm text-gray-500">
              Don't have an account?
              <a className="underline" href="#">
                {" "}
                Sign up
              </a>
            </p>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 m-5">
              <div
                onClick={loginWithGoogle}
                className="h-10 rounded-lg bg-gray-100 text-black text-xl justify-center items-center flex cursor-pointer"
              >
                <h2>
                  <FaGoogle />
                </h2>
              </div>
              <div className="h-10 rounded-lg bg-gray-100 text-black text-xl justify-center items-center flex">
                <h2>
                  <FaGithub />
                </h2>
              </div>
            </div>
          </form>
        </div>
      </div>  
    </>
  );
}

export default Login;
