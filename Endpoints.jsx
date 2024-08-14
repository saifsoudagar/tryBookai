import React from 'react';
import useTheme from '../context/theme';

function Endpoints() {
  const { themeMode } = useTheme();

  return (
    <section
      id="endpoints"
      className={`font-sans rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 mb-8 border mx-4 sm:mx-6 lg:mx-32
        ${themeMode === 'dark' ? 'bg-[#1e293b] border-[#334155] text-[#e2e8f0]' : 'bg-gray-200 border-gray-300 text-gray-800'}`}
    >
      <div className="container mx-auto px-4">
        <h2 className={`text-[1.25rem] sm:text-[1.5rem] mt-4 font-bold ${themeMode === 'dark' ? 'text-[#a5b4fc]' : 'text-[#4b5563]'}`}>
          Endpoints
        </h2>

        <h3 className={`text-[1.17rem] sm:text-[1.34rem] mt-4 font-bold mb-2 ${themeMode === 'dark' ? 'text-[#a5b4fc]' : 'text-[#4b5563]'}`}>
          Generate book
        </h3>

        <p className="block">
          <span className={`text-[#0f172a] bg-[#22d3ee] py-1 px-2 text-[1rem] rounded font-bold mr-2
            ${themeMode === 'dark' ? 'text-[#e2e8f0]' : 'text-gray-800'}`}>
            POST
          </span>
          <span className={`text-[#e2e8f0] bg-[#6366f1] text-[1rem] rounded font-bold py-1 px-4 mt-4 inline-block
            ${themeMode === 'dark' ? 'text-[#e2e8f0]' : 'text-gray-800'}`}>
            /api/generate-book
          </span>
        </p>

        <h4 className={`text-[1rem] mt-12 mb-2 font-bold ${themeMode === 'dark' ? 'text-[#a5b4fc]' : 'text-[#4b5563]'}`}>
          Requested Body
        </h4>

        <div className="overflow-x-auto">
          <table className={`table-auto w-full text-left border-collapse border rounded-lg 
            ${themeMode === 'dark' ? 'border-[#334155]' : 'border-gray-300'}`}>
            <thead className={`bg-[#6366f1] rounded-t-md text-white 
              ${themeMode === 'dark' ? 'bg-[#6366f1] text-white' : 'bg-gray-400 text-gray-800'}`}>
              <tr>
                <th className={`text-[12.8px] p-4 border-b ${themeMode === 'dark' ? 'border-[#334155]' : 'border-gray-300'}`}>PARAMETER</th>
                <th className={`text-[12.8px] p-4 border-b ${themeMode === 'dark' ? 'border-[#334155]' : 'border-gray-300'}`}>TYPE</th>
                <th className={`text-[12.8px] p-4 border-b ${themeMode === 'dark' ? 'border-[#334155]' : 'border-gray-300'}`}>DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              <tr className={`border-b ${themeMode === 'dark' ? 'border-[#334155] hover:bg-[#2c3e50]' : 'border-gray-300 hover:bg-gray-300'}`}>
                <td className={`font-bold text-[#22d3ee] p-4 ${themeMode === 'dark' ? 'text-[#22d3ee]' : 'text-blue-600'}`}>api</td>
                <td className={`p-4 ${themeMode === 'dark' ? 'text-[#e2e8f0]' : 'text-gray-800'}`}>string</td>
                <td className={`p-4 ${themeMode === 'dark' ? 'text-[#e2e8f0]' : 'text-gray-800'}`}>The API provider to use. Options: "openai" or "together"</td>
              </tr>
              <tr className={`border-b ${themeMode === 'dark' ? 'border-[#334155] hover:bg-[#2c3e50]' : 'border-gray-300 hover:bg-gray-300 '}`}>
                <td className={`font-bold text-[#22d3ee] p-4 ${themeMode === 'dark' ? 'text-[#22d3ee]' : 'text-blue-600'}`}>model</td>
                <td className={`p-4 ${themeMode === 'dark' ? 'text-[#e2e8f0]' : 'text-gray-800'}`}>string</td>
                <td className={`p-4 ${themeMode === 'dark' ? 'text-[#e2e8f0]' : 'text-gray-800'}`}>The specific model to use (e.g., "gpt-3.5-turbo", "gpt-4", "llama-2-70b")</td>
              </tr>
              <tr className={`border-b ${themeMode === 'dark' ? 'border-[#334155] hover:bg-[#2c3e50]' : 'border-gray-300 hover:bg-gray-300'}`}>
                <td className={`font-bold text-[#22d3ee] p-4 ${themeMode === 'dark' ? 'text-[#22d3ee]' : 'text-blue-600'}`}>topic</td>
                <td className={`p-4 ${themeMode === 'dark' ? 'text-[#e2e8f0]' : 'text-gray-800'}`}>string</td>
                <td className={`p-4 ${themeMode === 'dark' ? 'text-[#e2e8f0]' : 'text-gray-800'}`}>The main topic or theme of the book</td>
              </tr>
              <tr className={`border-b ${themeMode === 'dark' ? 'border-[#334155] hover:bg-[#2c3e50]' : 'border-gray-300 hover:bg-gray-300'}`}>
                <td className={`font-bold text-[#22d3ee] p-4 ${themeMode === 'dark' ? 'text-[#22d3ee]' : 'text-blue-600'}`}>language</td>
                <td className={`p-4 ${themeMode === 'dark' ? 'text-[#e2e8f0]' : 'text-gray-800'}`}>string</td>
                <td className={`p-4 ${themeMode === 'dark' ? 'text-[#e2e8f0]' : 'text-gray-800'}`}>The language in which the book should be generated</td>
              </tr>
              <tr className={`border-b border-[#334155] ${themeMode === 'dark' ? 'border-[#334155] hover:bg-[#2c3e50]' : 'border-gray-300 hover:bg-gray-300'}`}>
                <td className={`font-bold text-[#22d3ee] p-4 ${themeMode === 'dark' ? 'text-[#22d3ee]' : 'text-blue-600'}`}>word_count</td>
                <td className={`p-4 ${themeMode === 'dark' ? 'text-[#e2e8f0]' : 'text-gray-800'}`}>string</td>
                <td className={`p-4 ${themeMode === 'dark' ? 'text-[#e2e8f0]' : 'text-gray-800'}`}>The approximate number of words for the generated book</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 className={`text-[1rem] mt-12 font-bold ${themeMode === 'dark' ? 'text-[#a5b4fc]' : 'text-[#4b5563]'}`}>
          Response
        </h4>

        <pre className={`bg-[#1e293b] font-mono p-3 sm:p-4 lg:p-5 break-all text-sm sm:text-base border border-[#334155] rounded mt-4 overflow-x-auto
        ${themeMode === 'dark' ? 'bg-[#1e293b] border-[#334155]' : 'bg-gray-100 border-gray-300'}`}>
        <code className={`text-sm sm:text-base rounded border-[#334155] border p-3 sm:p-4 lg:p-5 text-[#e2e8f0] bg-[#1e293b] font-mono
          ${themeMode === 'dark' ? 'bg-[#1e293b] text-[#e2e8f0]' : 'bg-gray-100 text-gray-800'}`}>
            {`{
  "message": "Book generation started",
  "status": "processing",
  "job_id": "unique-job-identifier"
}`}
          </code>
        </pre>
      </div>
    </section>
  );
}

export default Endpoints;
