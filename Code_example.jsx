import React from 'react';
import useTheme from '../context/theme';

function Code_example() {
  const { themeMode } = useTheme();

  return (
    <section
      id="code_examples"
      className={`font-sans rounded-md shadow-lg border  p-4 sm:p-6 lg:p-8 mt-8 mb-8 mx-4 sm:mx-6 lg:mx-32 xl:mx-32
        ${themeMode === 'dark' ? 'bg-[#1e293b] border-[#334155] text-[#e2e8f0]' : 'bg-gray-200 border-gray-300 text-gray-800'}`}
    >
      <h2 className={`text-xl sm:text-2xl lg:text-3xl mt-4 mb-6 font-bold ${themeMode === 'dark' ? 'text-[#a5b4fc]' : 'text-[#4b5563]'}`}>
        Code Examples
      </h2>

      <h3 className={`text-lg sm:text-xl lg:text-2xl mt-4 font-bold ${themeMode === 'dark' ? 'text-[#a5b4fc]' : 'text-[#4b5563]'}`}>
        Python
      </h3>
      <pre className={`bg-[#1e293b] font-mono p-3 sm:p-4 lg:p-5 break-all text-sm sm:text-base border border-[#334155] rounded mt-4 overflow-x-auto
        ${themeMode === 'dark' ? 'bg-[#1e293b] border-[#334155]' : 'bg-gray-100 border-gray-300'}`}>
        <code className={`text-sm sm:text-base rounded border-[#334155] border p-3 sm:p-4 lg:p-5 text-[#e2e8f0] bg-[#1e293b] font-mono
          ${themeMode === 'dark' ? 'bg-[#1e293b] text-[#e2e8f0]' : 'bg-gray-100 text-gray-800'}`}>
          {`import requests

API_KEY = "your_api_key_here"
API_ENDPOINT = "https://tryBookAI.com/api/generate-book"

headers = {
    "Content-Type": "application/json",
    "X-API-Key": API_KEY
}

data = {
    "api": "openai",
    "model": "gpt-3.5-turbo",
    "topic": "The Future of Artificial Intelligence",
    "language": "English",
    "word_count": 5000
}

response = requests.post(API_ENDPOINT, json=data, headers=headers)

if response.status_code == 200:
    result = response.json()
    print(f"Book generation started. Job ID: {result['job_id']}")
else:
    print(f"Error: {response.status_code} - {response.text}")`}
        </code>
      </pre>

      <h3 className={`text-lg sm:text-xl lg:text-2xl mt-6 font-bold ${themeMode === 'dark' ? 'text-[#a5b4fc]' : 'text-[#4b5563]'}`}>
        JavaScript (Node.js)
      </h3>
      <pre className={`bg-[#1e293b] font-mono p-3 sm:p-4 lg:p-5 break-all text-sm sm:text-base border border-[#334155] rounded mt-4 overflow-x-auto
        ${themeMode === 'dark' ? 'bg-[#1e293b] border-[#334155]' : 'bg-gray-100 border-gray-300'}`}>
        <code className={`text-sm sm:text-base rounded border-[#334155] border p-3 sm:p-4 lg:p-5 text-[#e2e8f0] bg-[#1e293b] font-mono
          ${themeMode === 'dark' ? 'bg-[#1e293b] text-[#e2e8f0]' : 'bg-gray-100 text-gray-800'}`}>
          {`const axios = require('axios');

const API_KEY = 'your_api_key_here';
const API_ENDPOINT = 'https://tryBookAI.com/api/generate-book';

const headers = {
    'Content-Type': 'application/json',
    'X-API-Key': API_KEY
};

const data = {
    api: 'openai',
    model: 'gpt-3.5-turbo',
    topic: 'The Future of Artificial Intelligence',
    language: 'English',
    word_count: 5000
};

axios.post(API_ENDPOINT, data, { headers })
    .then(response => {
        console.log('Book generation started. Job ID: {response.data.job_id}');
    })
    .catch(error => {
        console.error('Error:', error.response ? error.response.data : error.message);
    });`}
        </code>
      </pre>
    </section>
  );
}

export default Code_example;
