import React from 'react';

export default function ImageCard() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src="https://source.unsplash.com/random"
        alt="random"
      ></img>
      <div className="px-6 px-4 mt-4">
        <div className="font-bold text-xl mb-2 text-gray-800">
          Photo by John Doe
        </div>
        <ul>
          <li className="text-gray-700 text-base">
            <strong>Views:</strong> 100
          </li>
          <li className="text-gray-700 text-base">
            <strong>Downloads:</strong> 200
          </li>
          <li className="text-gray-700 text-base">
            <strong>Likes:</strong> 300
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #1
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #2
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #3
        </span>
      </div>
    </div>
  );
}
