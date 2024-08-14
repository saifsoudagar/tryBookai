import React from 'react';
import useTheme from '../context/theme';

function Tutorial() {
  const { themeMode } = useTheme();

  return (
    <section
      id="tutorial"
      className={`font-sans rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 mb-8 border mx-4 sm:mx-6 lg:mx-32
        ${themeMode === 'dark' ? 'bg-[#1e293b] border-[#334155] text-[#e2e8f0]' : 'bg-gray-200 border-gray-300 text-gray-800 backdrop-blur-md'}`}
    >
      <h2 className={`text-[1.25rem] sm:text-[1.5rem] mt-4 mb-8 font-bold ${themeMode === 'dark' ? 'text-[#a5b4fc]' : 'text-[#4b5563]'}`}>
        Tutorial
      </h2>

      <h3 className={`text-[1.17rem] mt-4 font-bold ${themeMode === 'dark' ? 'text-[#a5b4fc]' : 'text-[#4b5563]'}`}>
        Step 1: Obtain an API Key
      </h3>
      <p className={`text-[0.875rem] sm:text-[1rem] font-normal ${themeMode === 'dark' ? 'text-[#e2e8f0]' : 'text-gray-800'}`}>
        Generate an API key using the button in the Authentication section above.
      </p>

      <h3 className={`text-[1.17rem] mt-4 font-bold ${themeMode === 'dark' ? 'text-[#a5b4fc]' : 'text-[#4b5563]'}`}>
        Step 2: Make a Request
      </h3>
      <p className={`text-[0.875rem] sm:text-[1rem] font-normal ${themeMode === 'dark' ? 'text-[#e2e8f0]' : 'text-gray-800'}`}>
        Use your preferred programming language or tool to make a POST request to the /api/generate-book endpoint. Include your API key in the header and the required parameters in the request body.
      </p>

      <h3 className={`text-[1.17rem] mt-4 font-bold ${themeMode === 'dark' ? 'text-[#a5b4fc]' : 'text-[#4b5563]'}`}>
        Step 3: Handle the Response
      </h3>
      <p className={`text-[0.875rem] sm:text-[1rem] font-normal ${themeMode === 'dark' ? 'text-[#e2e8f0]' : 'text-gray-800'}`}>
        The API will return a response with a job ID. You can use this ID to check the status of your book generation job.
      </p>

      <h3 className={`text-[1.17rem] mt-4 font-bold ${themeMode === 'dark' ? 'text-[#a5b4fc]' : 'text-[#4b5563]'}`}>
        Step 4: Retrieve the Generated Book
      </h3>
      <p className={`text-[0.875rem] sm:text-[1rem] font-normal ${themeMode === 'dark' ? 'text-[#e2e8f0]' : 'text-gray-800'}`}>
        Once the job is complete, you can retrieve the generated book using the job ID (endpoint to be implemented).
      </p>
    </section>
  );
}

export default Tutorial;
