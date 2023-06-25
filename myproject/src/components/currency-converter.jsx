import React, { useState } from 'react';
import '../App.css';
import '../index.css';

export default function Currency() {
    const [converted, setconverted] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const value = parseFloat(document.getElementById('currency').value);
        const selectedCurrency = document.querySelector("input[name='single']:checked");

        if (!isNaN(value) && selectedCurrency) {
            const currencyType = selectedCurrency.value;

            let convertedAmount;
            if (currencyType === 'dollar') {
                convertedAmount = value / 287.15;
            } else if (currencyType === 'pound') {
                convertedAmount = value / 367.36;
            } else if (currencyType === 'yuan') {
                convertedAmount = value / 40.03;
            }

            if (convertedAmount >= 0) {
                setconverted(convertedAmount);
                setErrorMessage('');
              } else {
                setconverted(null);
                setErrorMessage('Invalid currency value. Please enter a positive value.');
              }
            } else {
              setconverted(null);
              setErrorMessage('Please select one of the above Currencies');
            }
    };

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='w-2/5 shadow-gray-500 shadow-lg'>
                <form
                    method="post"
                    id="pkrtocurr"
                    className="shadow-lg rounded px-8 pt-6 pb-8 mb-4 bg-black opacity-50"
                    onSubmit={handleFormSubmit}
                >
                    <h1
                        className="text-2xl font-bold font-serif mb-4 text-center"
                        style={{ color: '#03e9f4' }}
                    >
                        Currency Converter
                    </h1>
                    <label
                        id="amount"
                        className="block text-sm font-bold mb-2 font-serif"
                        style={{ color: '#03e9f4' }}
                    >
                        Currency
                    </label>
                    <input
                        type="number"
                        step="0.000001"
                        id="currency"
                        style={{
                            width: '80%',
                            padding: '1px',
                            color: '#fff',
                            border: 'transparent',
                            backgroundColor: 'transparent',
                            borderBottom: '1px solid #03e9f4',
                            borderBottomWidth: '1px',
                            margin: '5px',
                            fontSize: '16px',
                            borderRadius: '2px',
                        }}
                        placeholder="Enter Amount in PKR"
                        required
                    />
                    <p
                        className="block text-sm font-bold mb-2 mt-2 font-serif text-center"
                        style={{ color: '#03e9f4' }}
                    >
                        <u>Select Currency to Convert In</u>
                    </p>
                    <label style={{ color: '#fff' }}>
                        <input type="radio" name="single" value="dollar" />
                        Dollars
                    </label>
                    <br />
                    <label style={{ color: '#fff' }}>
                        <input type="radio" name="single" value="pound" />
                        Pounds
                    </label>
                    <br />
                    <label style={{ color: '#fff' }}>
                        <input type="radio" name="single" value="yuan" />
                        Yuan
                    </label>
                    <br />
                    <input
                        id="button"
                        type="submit"
                        className="rounded p-1 bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400"
                        style={{ marginLeft: '38%' }}
                    />
                    <div
                        id="output"
                        className="flex-auto text-center m-3 border-2 border-blue-400"
                        style={{ color: '#03e9f4' }}
                    >
                        {converted ? (
              <p>Converted Value: {converted.toFixed(2)}</p>
            ) : (
              <p>{errorMessage}</p>
            )}
                    </div>
                </form>
            </div>
        </div>
    );
}
