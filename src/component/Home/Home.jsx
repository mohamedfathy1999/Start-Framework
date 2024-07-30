import React from 'react';
import { Helmet } from 'react-helmet';
import img from '../../assets/avataaars.svg'; // تأكد من إضافة الامتداد الصحيح للملف

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Start-Framework/</title>
      </Helmet>

      <div className="home flex justify-center items-center text-white h-screen bg-teal-500 pt-24">
        <div className="text-center">
          <div className="relative rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img
              src={img} 
              alt="Avatar"
              className="mb-3 mx-auto rounded-lg w-3/5"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-teal-600 bg-opacity-90 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <i className="text-white fa-solid fa-plus fa-6x"></i>
            </div>
          </div>

          <div className="pt-4">
            <h2 className="text-5xl uppercase mb-3 font-bold hover:text-red-300">
              Start Framework
            </h2>
            <div className="flex items-center justify-center mb-3">
              <div className="w-1/4 h-1 bg-white mr-3 hover:text-red-300"></div>
              <i className="fa-solid fa-star hover:text-red-300"></i>
              <div className="w-1/4 h-1 bg-white ml-3 hover:text-red-300"></div>
            </div>
            <div className="text-center font-semibold text-white hover:text-red-300">
              Graphic Artist - Web Designer - Illustrator
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
