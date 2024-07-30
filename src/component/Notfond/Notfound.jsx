import React from 'react'

export default function Notfound() {
  return <>
  
<div className="about bg-red-950 flex justify-center items-center h-screen">
      <div className="text-center pt-4">
        <h2 className="text-uppercase mb-3 text-6xl font-bold text-red-500 hover:text-red-300">Page Not Found</h2>
        <div className="flex items-center justify-center mb-3">
        
        </div>
        <div className="container mx-auto px-5 py-10">
      <div className="flex flex-col md:flex-row md:space-x-10">
        <div className="flex-1 mb-6 md:mb-0 text-center">
              <p className=' text-red-400 text-5xl  hover:text-red-300'>
              We couldn't find what you were looking for.
              </p>
            </div>
            <div className="flex-1 mb-6 md:mb-0 text-center">
              <span className='text-justify leading-relaxed text-red-300 text-4xl hover:text-red-300'>
              Please contact the owner of the site that linked you to the original URL and let them know their link is broken.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  
 
  </>
 
  
}
