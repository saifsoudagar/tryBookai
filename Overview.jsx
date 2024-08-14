import React from 'react';
import useTheme from '../context/theme';

function Overview() {
  const { themeMode } = useTheme();

  return (
    <section
      id="overview"
      className={`font-sans shadow-lg rounded-md border-[1px] p-4 sm:p-6 lg:p-8 mt-8 mb-8 mx-4 sm:mx-6 lg:mx-32
        ${themeMode === 'dark' ? 'bg-[#1e293b] border-[#334155] text-[#e2e8f0]' : 'bg-gray-200 border-gray-300 text-gray-800 backdrop-blur-md'}`}
    >
      <h2 className={`text-[1.25rem] sm:text-[1.5rem] mt-4 font-bold ${themeMode === 'dark' ? 'text-[#a5b4fc]' : 'text-[#4b5563]'}`}>
        Overview
      </h2>
      <p className={`text-[0.875rem] sm:text-[1rem] font-normal mt-4`}>
        The Book Generator API allows you to generate books on various topics using different language models. This documentation provides details on how to use the API, including authentication, available endpoints, and code examples.
      </p>
    </section>
  );
}

export default Overview;
