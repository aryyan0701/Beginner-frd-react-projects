import React from "react";
import axios from "axios";
import { ClipLoader } from 'react-spinners'; 
import { useNavigate, Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('First name is required')
    .min(2, 'First name must be at least 2 characters long'),
  lastName: Yup.string()
    .required('Last name is required')
    .min(2, 'Last name must be at least 2 characters long'),
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email format'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters long'),
  cnfpassword: Yup.string()
    .required('Confirm password is required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

function Signup() {
  const navigate = useNavigate();

  const onSubmit = async (values, { setSubmitting, setStatus }) => {
    setStatus({ isLoading: true });

    try {
      const res = await axios.post("http://localhost:3000/users", values, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    //   console.log(res.data);

      setStatus({ message: "Signup successful! Redirecting to login page..." });
      setTimeout(() => {
        navigate('/');
      }, 5000);
    } catch (error) {
      console.error(error.response.data);
      setStatus({ message: "Registration failed. Please try again." });
    } finally {
      setStatus({ isLoading: false });
      setSubmitting(false);
    }
  };

  return (
    <div>
      <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="hidden lg:block lg:w-1/2 lg:h-full">
          <img
            src="https://img.freepik.com/premium-photo/student-office-concept-back-school_41471-9383.jpg"
            alt="Sample"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative flex items-center w-full h-full px-8 py-8 sm:px-12 lg:w-1/2 lg:px-16 lg:py-12 xl:py-16 bg-slate-700">
          <div className="max-w-lg mx-auto lg:mx-0">
            <h2 className="mt-6 text-2xl font-bold text-gray-200 sm:text-3xl md:text-4xl">
              Sign up 🦑
            </h2>
            <p className="mt-4 leading-relaxed text-gray-200">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              nam dolorum aliquam, quibusdam aperiam voluptatum.
            </p>
            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                cnfpassword: ''
              }}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ isSubmitting, status }) => (
                <Form className="mt-8 grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-200">
                      First Name
                    </label>
                    <Field
                      id="firstName"
                      name="firstName"
                      type="text"
                      className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                    <ErrorMessage name="firstName" component="div" className="text-red-500 text-xs" />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-200">
                      Last Name
                    </label>
                    <Field
                      id="lastName"
                      name="lastName"
                      type="text"
                      className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                    <ErrorMessage name="lastName" component="div" className="text-red-500 text-xs" />
                  </div>
                  <div className="col-span-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                      Email
                    </label>
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-xs" />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-200">
                      Password
                    </label>
                    <Field
                      id="password"
                      name="password"
                      type="password"
                      className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                    <ErrorMessage name="password" component="div" className="text-red-500 text-xs" />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="cnfpassword" className="block text-sm font-medium text-gray-200">
                      Confirm Password
                    </label>
                    <Field
                      id="cnfpassword"
                      name="cnfpassword"
                      type="password"
                      className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                    <ErrorMessage name="cnfpassword" component="div" className="text-red-500 text-xs" />
                  </div>
                  <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                    <button
                      type="submit"
                      className="inline-block shrink-0 rounded-md border border-blue-700 bg-blue-700 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-700 focus:outline-none focus:ring active:text-blue-700"
                      disabled={isSubmitting}
                    >
                      {status && status.isLoading ? (<ClipLoader size={20} color={"#fff"} />) : ("Sign Up")}
                    </button>
                    <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                      Already have an account?
                      <Link to="/" className="text-blue-700"> Log in </Link>.
                    </p>
                  </div>
                </Form>
              )}
            </Formik>
            {status && status.message && (
              <p className="mt-4 text-center text-sm text-gray-400">
                {status.message}
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signup;
