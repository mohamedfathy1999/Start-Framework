import React from 'react'

export default function Footer() {
  return <>
    <footer className="bg-slate-800 text-white py-8 ">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-4 text-center">
        
          <div className=" p-4 rounded-lg">
            <h3 className="text-xl font-bold mb-2 hover:text-red-300">LOCATION</h3>
            <p className='hover:text-red-300'>2215 John Daniel Drive</p>
            <p className='hover:text-red-300'>Clark, MO 65243</p>
          </div>
          <div className=" p-4 rounded-lg">
            <h3 className="text-xl font-bold mb-2 hover:text-red-300">AROUND THE WEB</h3>
            <div className="flex justify-center space-x-3">
              <a href="#" aria-label="Facebook" className="text-blue-600 hover:text-red-300">
                <i className="fab fa-facebook text-2xl"></i>
              </a>
              <a href="#" aria-label="Twitter" className="text-blue-400 hover:text-white">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-blue-700 hover:text-white">
                <i className="fab fa-linkedin-in text-2xl"></i>
              </a>
              <a href="#" aria-label="Website" className="text-green-500 hover:text-red-300">
                <i className="fas fa-globe text-2xl"></i>
              </a>
            </div>
          </div>
          <div className=" p-4 rounded-lg">
            <h3 className="text-xl font-bold mb-2 hover:text-red-300">ABOUT FREELANCER</h3>
            <p className='hover:text-red-300'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>
      </div>
    </footer>
    <div className="text-center py-4 bg-gray-900 text-white pb-9 hover:text-red-300">
<p>Copyright © Your Website 2021</p>
</div>

  </>
}

