import React, { useState } from "react";
import { FaCopy } from "react-icons/fa6";

const Home = () => {
  const [activeTab, setActiveTab] = useState("preview");
  const [copySuccess, setCopySuccess] = useState(false);

  const cardJSX = `
  <div className="card card-compact bg-base-100 w-96 shadow-xl">
    <figure>
      <img
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        alt="Shoes" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">Shoes!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
  `;

  const handleCopy = () => {
    navigator.clipboard.writeText(cardJSX).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 1000); 
    }, (err) => {
      console.error("Could not copy text: ", err);
    });
  };

  return (
    <div className="w-full h-full bg-slate-900 flex flex-col space-y-4 items-center justify-center p-5 text-white">
      <div className="card card-compact bg-base-100 w-[40rem] shadow-xl p-5 flex flex-col items-center">
        <div className="tabs mb-5">
          <button
            className={`tab ${activeTab === "preview" ? "tab-active text-green-600" : ""}`}
            onClick={() => setActiveTab("preview")}
          >
            Preview
          </button>
          <button
            className={`tab ${activeTab === "jsx" ? "tab-active text-green-600" : ""}`}
            onClick={() => setActiveTab("jsx")}
          >
            JSX
          </button>
        </div>

        {activeTab === "preview" && (
          <div className="card card-compact bg-base-100 w-[25rem] shadow-xl flex items-center justify-center">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        )}

        {activeTab === "jsx" && (
          <pre className="bg-gray-800 p-5 mt-5 rounded-lg relative">
            <button className="absolute top-3 right-3" onClick={handleCopy}>
              <FaCopy />
              {copySuccess && (
                <div className="absolute top-[-1.5rem] right-0 bg-gray-700 text-white text-xs px-2 py-1 rounded">
                  Copied!
                </div>
              )}
            </button>
            <code className="text-xs font-medium">{cardJSX}</code>
          </pre>
        )}
      </div>
    </div>
  );
};

export default Home;
