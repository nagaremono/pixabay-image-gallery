import React from 'react';

export default function ImageCard({ image }) {
  const tags = image.tags.split(',');

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={image.webformatURL} alt="random"></img>
      <div className="px-6 px-4 mt-4">
        <div className="font-bold text-xl mb-2 text-gray-800">
          Photo by {image.user}
        </div>
        <ul>
          <li className="text-gray-700 text-base">
            <strong>Views:</strong> {image.views}
          </li>
          <li className="text-gray-700 text-base">
            <strong>Downloads:</strong> {image.downloads}
          </li>
          <li className="text-gray-700 text-base">
            <strong>Likes:</strong> {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => {
          return (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
            >
              #{tag}
            </span>
          );
        })}
      </div>
    </div>
  );
}
