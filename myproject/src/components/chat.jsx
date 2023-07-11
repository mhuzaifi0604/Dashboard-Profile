import React, { useState } from 'react';
import axios from 'axios';

const Chat = () => {
  const [text, setText] = useState('');
  const [array, setArray] = useState([]);
  const [result, setResult] = useState('');
  const [check, setCheck] = useState(true);
  const API_KEY = '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';

  const handleSubmit = async (event) => {
    event.preventDefault();
    setCheck(false);

    if (text.trim() !== '') {
      setArray((prevTasks) => [...prevTasks, text.trim()]);
      setText('');
    }

    try {
      const requestBody = {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: text }],
        temperature: 0.7,
      };

      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        requestBody,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      );

      setResult(response.data.choices[0].message.content);
    } catch (error) {
      console.error('Failed to complete communication:', error);
      console.log('Error response:', error.response); // Log the error response
      setResult('Something went wrong!');
    }
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="flex flex-col h-screen p-4 m-4">
      <div className="h-full w-full justify-center items-center">
        <div className="h-4/5 w-full justify-center items-center">
          {check ? (
            '1st Half'
          ) : (
            <div>
              {array.map((element, index) => (
                <div
                  key={index}
                  className="flex w-4/5 pt-1 pl-4 pb-1 m-2 bg-black bg-opacity-40 border border-pink-900 text-white font-bold text-md font-sans rounded-full"
                >
                  {element}
                </div>
              ))}
              <div className="flex w-4/5 pt-1 pl-4 pb-1 m-2 bg-black bg-opacity-40 border border-pink-900 text-white font-bold text-md font-sans rounded-full">
                {result}
              </div>
            </div>
          )}
        </div>
        <div className="flex 1-4/5 w-full justify-center items-center mt-4">
          <form className="flex w-full text-white">
            <input
              type="text"
              className="w-full h-12 m-2 p-2 text-white bg-black bg-opacity-40 rounded-full border-2 border-pink-70"
              placeholder="Enter Query ..."
              value={text}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="h-10 w-12 m-3 rounded-md p-1 mdtext- font-bold bg-pink-500"
              onClick={handleSubmit}
            >
              Chat
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
