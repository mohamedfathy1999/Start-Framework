import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import img1 from '../../assets/poert1.png';
import img2 from '../../assets/port2.png';
import img3 from '../../assets/port3.png';

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    img1,
    img2,
    img3,
    img1,
    img2,
    img3
  ];

  const toggleImage = (img) => {
    if (selectedImage === img) {
      setSelectedImage(null);
    } else {
      setSelectedImage(img);
    }
  };

  return (
    <>
      <Helmet>
        <title>Portfolio</title>
      </Helmet>

      <div className="mb-4 pt-24">
        <div className="pt-4">
          <div className="text-center pt-4">
            <h2 className="uppercase mb-3 text-4xl font-bold hover:text-red-300">Portfolio Component</h2>
            <div className="flex items-center justify-center mb-3">
              <div className="w-24 h-1 bg-slate-800 mr-3"></div>
              <i className="fa-solid fa-star hover:text-red-300"></i>
              <div className="w-24 h-1 bg-slate-800 ml-3"></div>
            </div>
          </div>
          <div className="container mx-auto w-full">
            <div className="flex flex-wrap mx-4">
              {images.map((img, index) => (
                <div key={index} className="w-1/3 px-4 mb-8 relative">
                  <div
                    className="relative rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
                    onClick={() => toggleImage(img)}
                  >
                    <img
                      alt=""
                      className="w-full h-auto rounded-xl"
                      src={img}
                    />
                    <div className="absolute inset-0 flex justify-center items-center bg-teal-600 bg-opacity-90 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <i className="text-white fa-solid fa-plus fa-6x"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={() => setSelectedImage(null)}>
            <img
              alt=""
              className="max-w-full max-h-full"
              src={selectedImage}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </>
  );
}





