import React, { useRef , useState} from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ClipLoader } from 'react-spinners'; 

function ContactForm() {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true)
    emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(
      () => {
        toast.success('Message sent successfully!');
        setIsLoading(false)
      },
      (error) => {
        toast.error(`Failed to send message: ${error.text}`);
      }
    );
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-lg">
      <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
        Get in Touch
      </h1>
      <form
        ref={form}
        className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-xl sm:p-6 lg:p-8 bg-gray-50"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <div className="relative">
            <input
              type="text"
              name="name"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-lg"
              placeholder="Enter name"
              required
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
              name="email"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-lg"
              placeholder="Enter email"
              required
            />
          </div>
        </div>
        <div>
          <label className="sr-only" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            className="w-full rounded-lg border-gray-200 p-3 text-sm shadow-lg"
            placeholder="Message"
            rows="8"
            id="message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
        >
               {isLoading ? (
                <ClipLoader size={20} color={"#fff"} /> // Show spinner while loading
              ) : (
                "Send Message"
              )}
        </button>
      </form>
    </div>
    <ToastContainer />
  </div>
);
}

export default ContactForm;