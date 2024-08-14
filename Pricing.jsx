import React from 'react';
import useTheme from '../context/theme';

function Pricing() {
  const { themeMode } = useTheme();
  return (
    <section
      id="pricing"
      className={`font-sans rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 mb-8 border mx-4 sm:mx-6 lg:mx-32
        ${themeMode === 'dark' ? 'bg-[#1e293b] border-[#334155] text-[#e2e8f0]' : 'bg-gray-200 border-gray-300 text-gray-800'}`}
    >
      <h2 className={`text-[1.25rem] sm:text-[1.5rem] mt-4 font-bold ${themeMode === 'dark' ? 'text-[#a5b4fc]' : 'text-[#4b5563]'}`}>
        API Pricing
      </h2>
      <p className={`text-[0.875rem] sm:text-[1rem] font-normal mb-4 mt-4 ${themeMode === 'dark' ? 'text-[#e2e8f0]' : 'text-gray-800'}`}>
        Our API pricing is based on the model used and the number of tokens processed. Here's a breakdown of the costs:
      </p>

      <table  className={`table-auto w-full text-left border-collapse border rounded-lg 
        ${themeMode === 'dark' ? 'border-[#334155]' : 'border-gray-300'}`}>
        <thead className={`${themeMode === 'dark' ? 'bg-[#6366f1] text-white' : 'bg-gray-400 text-gray-800'}`}>
          <tr>
            <th className="text-[12.8px] p-4 border-b border-[#334155]">API</th>
            <th className="text-[12.8px] p-4 border-b border-[#334155]">MODEL</th>
            <th className="text-[12.8px] p-4 border-b border-[#334155]">PRICE PER 1K TOKENS</th>
          </tr>
        </thead>
        <tbody>
          <tr className={`border-b border-[#334155] ${themeMode === 'dark' ? 'hover:bg-[#2c3e50]' : 'hover:bg-gray-300'}`}>
            <td className="font-bold p-4 text-[#22d3ee]">OpenAI</td>
            <td className={`p-4 ${themeMode === 'dark' ? 'text-[#e2e8f0]' : 'text-gray-800'}`}>GPT-3.5</td>
            <td className={`p-4 ${themeMode === 'dark' ? 'text-[#e2e8f0]' : 'text-gray-800'}`}>$0.002</td>
          </tr>
          <tr className={`border-b border-[#334155] ${themeMode === 'dark' ? 'hover:bg-[#2c3e50]' : 'hover:bg-gray-300'}`}>
            <td className="font-bold p-4 text-[#22d3ee]">OpenAI</td>
            <td className={`p-4 ${themeMode === 'dark' ? 'text-[#e2e8f0]' : 'text-gray-800'}`}>GPT-4</td>
            <td className={`p-4 ${themeMode === 'dark' ? 'text-[#e2e8f0]' : 'text-gray-800'}`}>$0.03</td>
          </tr>
          <tr className={`border-b border-[#334155] ${themeMode === 'dark' ? 'hover:bg-[#2c3e50]' : 'hover:bg-gray-300'}`}>
            <td className="font-bold p-4 text-[#22d3ee]">Together AI</td>
            <td className={`p-4 ${themeMode === 'dark' ? 'text-[#e2e8f0]' : 'text-gray-800'}`}>Llama-2-70b</td>
            <td className={`p-4 ${themeMode === 'dark' ? 'text-[#e2e8f0]' : 'text-gray-800'}`}>$0.0008</td>
          </tr>
          <tr className={`border-b border-[#334155] ${themeMode === 'dark' ? 'hover:bg-[#2c3e50]' : 'hover:bg-gray-300'}`}>
            <td className="font-bold p-4 text-[#22d3ee]">Together AI</td>
            <td className={`p-4 ${themeMode === 'dark' ? 'text-[#e2e8f0]' : 'text-gray-800'}`}>Llama-2-13b</td>
            <td className={`p-4 ${themeMode === 'dark' ? 'text-[#e2e8f0]' : 'text-gray-800'}`}>$0.0006</td>
          </tr>
        </tbody>
      </table>

      <h3 className={`text-[1rem] mt-12 mb-2 font-bold ${themeMode === 'dark' ? 'text-[#a5b4fc]' : 'text-[#4b5563]'}`}>
        Token Estimation
      </h3>
      <p className={`text-[0.875rem]  sm:text-[1rem] font-normal ${themeMode === 'dark' ? 'text-[#e2e8f0]' : 'text-gray-800'}`}>
        On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool.
      </p>

      <h3 className={`text-[1rem] mt-12 mb-2 font-bold ${themeMode === 'dark' ? 'text-[#a5b4fc]' : 'text-[#4b5563]'}`}>
        Billing
      </h3>
      <p className={`text-[0.875rem] sm:text-[1rem] font-normal ${themeMode === 'dark' ? 'text-[#e2e8f0]' : 'text-gray-800'}`}>
        You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard.
      </p>
    </section>
  );
}

export default Pricing;
