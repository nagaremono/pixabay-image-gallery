import React, { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';

function App() {
  const [images, setImages] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${term}&image_type=photo`,
      { mode: 'cors' }
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <div className="App container mx-auto">
      <ImageSearch searchImage={(text) => setTerm(text)}></ImageSearch>

      {!isloading && images.length === 0 && (
        <h1 className="text-6xl text-center mx-auto mt-2">No Image Found</h1>
      )}

      {isloading ? (
        <h1 className="text-6xl text-center mx-auto mt-2">Loading...</h1>
      ) : (
        <div className="grid grid-cols-3 grid-gap-4 row-gap-6">
          {images.map((image) => {
            return <ImageCard key={image.id} image={image} />;
          })}
        </div>
      )}
    </div>
  );
}

export default App;
