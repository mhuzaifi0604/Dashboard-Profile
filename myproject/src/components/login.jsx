// LoginPage.jsx
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './Configuration';

initializeApp(firebaseConfig);

const LoginPage = ({setIsLoggedIn, isLoggedIn}) => {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [check, setcheck] = useState(false);

  const handleLogin = async(event) => {
    event.preventDefault();
    try{
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      const uid = user.uid;
      setIsLoggedIn(true);
      navigate('/Chat');
    }catch (error) {
      setIsLoggedIn(false);
      navigate('/login');
      setError('Invalid Email or Password');
      setEmail('');
      setPassword('');
      console.log('error: ', error)
  }
  };

  return (
    <div className="flex flex-col h-full w-full items-center"> 
      <div className='flex basis-full w-full items-center justify-center'>
      <form onSubmit={handleLogin} className="m-5 mt-0 p-6 w-2/5 h-3/5 border-2 border-pink-900 bg-[#1b1b1e] backdrop-filter backdrop-blur-md shadow-md shadow-gray-700 rounded-md">
      <div className='flex flex-col justify-center items-center text-center'>
      <h2 className="text-3xl mb-2 font-serif text-justify italic font-semibold text-white text-opacity-90" >Not So Fast, Bud!</h2>
      <h3 className="text-white block mb-5 font-serif italic">
                        You need to Login to Chat
                    </h3></div>
      <label htmlFor="email" className="block mb-6 text-white font-serif italic">
                    Email
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="border mt-2 mb-6 border-white p-2 w-full rounded-md focus:outline-none focus:border-pink-500 bg-transparent text-white"
                    />
                </label>

                <label htmlFor="password" className="block mb-3 text-white font-serif italic">
                    Password
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="border mt-2 mb-6 border-white p-2 w-full rounded-md focus:outline-none focus:border-pink-500 bg-transparent text-white"
                        autoComplete='new-password'
                    />
                </label>
                {!check && <p className="text-red-500 text-sm mb-3">{error}</p>}
        <button 
        type='submit'
          className="bg-pink-500 border-black border rounded-md p-1 text-xl font-bold"
        >
          Login
        </button>
        <p className='text-center mt-4'>
                    <a href="#!" className="text-pink-500 text-sm font-serif font-bold italic hover:underline">
                        Have No Account! Mail me To sign you up.
                    </a>
                </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
