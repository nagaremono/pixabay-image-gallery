import React, { useState } from 'react';

export default function ImageSearch() {
  const [text, setText] = useState('');

  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form className="w-full max-w-sm">
        <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search Image Here..."
            onChange={(e) => setText(e.target.value)}
            value={text}
          ></input>
          <button
            type="submit"
            className="flex-shirnk-0 bg-teal-500 hover:bg-teal700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
