import React, { useState } from "react";
import useTheme from "../context/theme";

function Authentication() {
  const [apiKey, setApiKey] = useState("");
  const { themeMode } = useTheme();

  const generateApiKey = () => {
    const randomKey = `API_${Math.random().toString(36).substring(2, 15)}_${Math.random().toString(36).substring(2, 15)}`;
    setApiKey(randomKey);
  };

  return (
    <section
      id="authentication"
      className={`font-sans rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 mb-8 border mx-4 sm:mx-6 lg:mx-32
        ${themeMode === 'dark' ? 'bg-[#1e293b] border-[#334155] text-[#e2e8f0]' : 'bg-gray-200 border-gray-300 text-gray-800 backdrop-blur-md'}`}
    >
      <h2 className={`text-[1.25rem] sm:text-[1.5rem] mt-4 font-bold ${themeMode === 'dark' ? 'text-[#a5b4fc]' : 'text-[#4b5563]'}`}>
        Authentication
      </h2>
      <p className="text-[0.875rem] sm:text-[1rem] mt-4">
        To use the API, you need to include your API key in the header of each request:
      </p>
      <pre className={`font-[fira code] p-3 sm:p-4 lg:p-5 break-words text-[0.875rem] sm:text-[0.9rem] border rounded mt-4
        ${themeMode === 'dark' ? 'bg-[#1e293b] border-[#334155] text-[#e2e8f0]' : 'bg-gray-300 border-gray-400 text-gray-900'}`}>
        <code className="text-[14.4px] p-[1rem] font-mono">
          X-API: YOUR_API_KEY
        </code>
      </pre>
      <p className="text-[0.875rem] sm:text-[1rem] mt-4">
        To generate an API key, use the button below:
      </p>
      <button
        onClick={generateApiKey}
        className={`cursor-pointer shadow-sm rounded font-semibold text-[0.875rem] sm:text-[1rem] px-4 sm:px-6 py-2 sm:py-3 mt-4 transition ease-in-out delay-75
          ${themeMode === 'dark' ? 'bg-[#22d3ee] text-[#0f172a] hover:bg-[#42bef8] transition ease-in-out delay-75' : 'bg-[#22d3ee] text-white  hover:text-white  hover:-translate-y-1 hover:bg-[#42bef8] transition ease-in-out delay-75'}`}
      >
        Generate API Key
      </button>
      <div className={`font-[fira code] p-3 sm:p-4 break-words text-[0.875rem] sm:text-[0.9rem] border rounded mt-4
        ${themeMode === 'dark' ? 'bg-[#1e293b] border-[#334155] text-[#ffff]' : 'bg-gray-300 border-gray-400 text-gray-900'}`}>
        {apiKey && <p>Your API Key: <span>{apiKey}</span></p>}
      </div>
    </section>
  );
}

export default Authentication;
