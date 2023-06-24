import React, { useState } from 'react';

const SearchBox = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center">
      <input
        type="text"
        placeholder="Search Here ..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="ml-4 px-4 py-1 border border-gray-300 rounded-3xl focus:outline-none focus:ring focus:border-blue-500 bg-[#27282b] text-white"
      />
      <button
        type="submit"
        className="ml-2 px-4 py-2 text-white rounded-md hover:bg-blue-600"
      >
        🔍
      </button>
    </form>
  );
};

export default SearchBox;
