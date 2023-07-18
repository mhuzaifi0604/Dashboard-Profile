import React, { useState, useEffect } from 'react';
import RotateLoader from 'react-spinners/RotateLoader';
import io from 'socket.io-client';
import {useNavigate} from 'react-router-dom';

const Chat = ({isLoggedIn, setIsLoggedIn}) => {
    const [text, setText] = useState('');
    const [check, setCheck] = useState(true);
    const [check1, setCheck1] = useState(false);
    const [loading, setLoading] = useState(true);
    const [messages, setMessages] = useState([]);
    const [getuser, setgetuser] = useState('');
    const [counter, setCounter] = useState(0);
    const [error, setError] = useState('');
    const socket = io('http://localhost:8000');
    const sqlInjectionPattern = /[';]|(--[^\r\n]*)|(\/\*[\w\W]*?(?=\*)\*\/)/gi;
    const navigate = useNavigate();
    useEffect(() => {
        const handleChatMessage = (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        };

        socket.on('connect', () => {
            console.log('CONNECTED');
        });

        socket.on('chat_message', handleChatMessage);

        return () => {
            socket.off('chat_message', handleChatMessage);
        };
        }, [getuser]);
        
    const handleSubmit = (event) => {
        console.log(messages);
        event.preventDefault();
        if (text.trim() === '') {
            setError('Empty Query Cannot be Passed!');
            return;
        }
        if (sqlInjectionPattern.test(text)) {
            setError('Possible SQL injection Detected');
            return;
        }
        setError('');
        setText('');
        setCheck(false);
        setLoading(false);
        socket.emit('chat_message', { data: text, username: getuser, key: counter });
        setCounter(counter + 1);
    };

    const handleChange = (event) => {
        setText(event.target.value);
    };
    const handleusername = (event) => {
        setgetuser(event.target.value);
    };
    const enterchat = (event) => {
        event.preventDefault();
        if (getuser.trim() === '') {
            setError('Enter Username!');
            return;
        }
        if (sqlInjectionPattern.test(getuser)) {
            setError('Possible SQL injection Detected');
            return;
        }
        setError('');
        setCheck1(true);
        //setIsLoggedIn(true);
    };
    const handledelete = () => {
        setMessages([]);
    }

      
    const handlelogout = () => {
        if (isLoggedIn) {
            //setIsLoggedIn(false);
            navigate('/Login');
        }
      };

    return (
        <div className="flex flex-col h-screen p-4 m-2 overflow-hidden">
            {check1 ?
                (
                    <div className="h-full w-full justify-center items-center">
                        <div className="h-4/5 w-full justify-center items-center overflow-auto">
                            {check ? (
                                <div className='flex justify-center items-center text-center text-white font-bold text-xl'>
                                    Welcome To Chat Mr. {getuser}!
                                </div>
                            ) : (
                                <div>
                                    {messages.map((message, _index) => (
                                        message.username === getuser ?
                                            (
                                                <div key={message.key} className="flex justify-start">
                                                    <div className="p-1 mt-2 bg-black bg-opacity-40 border border-pink-900 text-white text-md font-sans rounded-full h-10 w-10 text-center">
                                                        You
                                                    </div>
                                                    <div className="p-2 m-2 bg-black bg-opacity-40 border border-pink-900 text-white font-bold text-md font-sans rounded-full">
                                                        {message.data}
                                                    </div>
                                                </div>
                                            )
                                            : (
                                                <div className="flex flex-col justify-end">
                                                    <div
                                                        key={message.key}
                                                        className="flex justify-end"
                                                    >
                                                        <div className="p-2 m-2 bg-black bg-opacity-40 border border-pink-900 text-white font-bold text-md font-sans rounded-full inline-block max-w-80">
                                                            {message.data}
                                                        </div>
                                                        <div className="p-2 m-2 bg-black bg-opacity-40 border border-pink-900 text-white font-bold text-md font-sans rounded-full inline-block max-w-80">
                                                            {message.username}
                                                        </div>
                                                    </div>
                                                </div>
                                            )

                                    ))}
                                </div>
                            )}
                        </div>
                        <div className="flex 1-4/5 w-full justify-center items-center mt-4">
                            <form className="flex w-full text-white">
                                <button
                                    type="button"
                                    className="h-10 w-12 m-3 rounded-md p-1 text-md font-bold bg-pink-500"
                                    onClick={handledelete}
                                >
                                    &#x1F5D1;
                                </button>
                                <button
                                    type="button"
                                    className="h-10 w-12 m-3 rounded-md p-1 text-md font-bold bg-pink-500"
                                    onClick={handlelogout}
                                >
                                    🛅
                                </button>
                                <input
                                    type="text"
                                    className="w-full h-12 m-2 p-2 text-white bg-black bg-opacity-40 rounded-full border-2 border-pink-70"
                                    placeholder="Enter Query ..."
                                    value={text}
                                    onChange={handleChange}
                                    onKeyDown={(event) => {
                                        if (event.key === 'Enter') handleSubmit(event);
                                    }}
                                    required
                                />
                                <button
                                    type="button"
                                    className="h-10 w-12 m-3 rounded-md p-1 text-md font-bold bg-pink-500"
                                    onClick={handleSubmit}
                                >
                                    Chat
                                </button>
                                {error !== '' ? (<p className='text-red-500'>{error}</p>) : ''}

                            </form>
                        </div>
                    </div>
                ) : (
                    <div className='flex flex-col h-full w-full justify-center items-center m-0'>
                        <div className='flex flex-col basis-4/5 w-full text-white m-0'>
                            <div className='flex justify-center items-center'>
                                <h1 className='text-xl m-0 font-bold text-white'>Some Rules To Get By</h1>
                            </div>
                            <div className='flex m-4'>
                                <ol className='m-2 text-lg font-white font-bold font-sans'>
                                    <li className='flex m-4'> Rule # 01 👇
                                        <p className='mt-6 ml-4'>Use of Abusive Language is Strictly Prohibited.</p>
                                    </li>
                                    <li className='flex m-4'> Rule # 02 👇
                                        <p className='mt-6 ml-4'>Remain Professional and refrain from personal comments.</p>
                                    </li>
                                    <li className='flex m-4'> Rule # 03 👇
                                        <p className='mt-6 ml-4'>Give Respect Take Respect. Be respectful to your fellows and guide them.</p>
                                    </li>
                                    <li className='flex m-4'> Rule # 04 👇
                                        <p className='mt-6 ml-4'>No irrelevat Marketing Posts/ Self promotion without owner's approval.</p>
                                    </li>
                                    <li className='flex m-4'> Rule # 05 👇
                                        <p className='mt-6 ml-4'>Violation of these rules will result in severe penalization.</p>
                                    </li>
                                </ol>
                            </div>
                            <p className='text-center text-white'>Enter your username below to begin chatting.👇</p>
                        </div>
                        <div className='flex flex-col basis-1/5 w-full'>
                            <form className="flex w-full text-white">
                                <input
                                    type="text"
                                    className="w-full h-12 m-2 p-2 text-white bg-black bg-opacity-40 rounded-full border-2 border-pink-70"
                                    placeholder="Enter Username ..."
                                    value={getuser}
                                    onChange={handleusername}
                                    onKeyDown={(event) => {
                                        if (event.key === 'Enter') enterchat(event);
                                    }}
                                    required
                                />
                                <button
                                    type="button"
                                    className="h-10 w-12 m-3 rounded-md p-1 mdtext- font-bold bg-pink-500"
                                    onClick={enterchat}
                                >
                                    Chat
                                </button>
                                {error !== '' ? (<p className='text-red-500'>{error}</p>) : ''}
                            </form>
                        </div>
                    </div>
                )}

        </div>
    );
};

export default Chat;
