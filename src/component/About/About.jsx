import React from 'react'
import { Helmet } from 'react-helmet'


export default function About() {
  return <>
<Helmet>
  <title>About</title>
</Helmet>

<div className="about bg-teal-500 text-white flex justify-center items-center h-screen">
      <div className="text-center pt-4">
        <h2 className="text-uppercase mb-3 text-4xl font-bold hover:text-red-300">ABOUT COMPONENT</h2>
        <div className="flex items-center justify-center mb-3">
          <div className="w-24 h-1 bg-white mr-3 " ></div>
          <i className="fa-solid fa-star hover:text-red-300"></i>
          <div className="w-24 h-1 bg-white ml-3" ></div>
        </div>
        <div className="container mx-auto px-5 py-10">
      <div className="flex flex-col md:flex-row md:space-x-10">
        <div className="flex-1 mb-6 md:mb-0 text-center">
              <p className='text-justify leading-relaxed hover:text-red-300'>
                Freelancer is a free bootstrap theme created by Route. The download includes <br /> the complete source files including HTML, CSS, and JavaScript as well as <br /> optional SASS stylesheets for easy customization.
              </p>
            </div>
            <div className="flex-1 mb-6 md:mb-0 text-center">
              <p className='text-justify leading-relaxed hover:text-red-300'>
              Freelancer is a free bootstrap theme created by Route. The download includes <br /> the complete source files including HTML, CSS, and JavaScript as well as <br /> optional SASS stylesheets for easy customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </>
   
  
}
