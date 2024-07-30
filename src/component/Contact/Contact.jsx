import React from 'react'
import { Helmet } from 'react-helmet'

export default function Contact() {
  return <>

  <Helmet>
  <title>Contact</title>
  </Helmet>

    <section className='my-6 pt-24 mx-auto min-h-[75vh] '>
      <div className='text-gray-900 text-center '>
        <h2 className='uppercase mb-6 text-4xl font-bold hover:text-red-300'>Contact Section</h2>
        <div className="flex items-center justify-center mb-3">
          <div className="w-1/12 h-px bg-gray-900 mr-3"></div>
          <i className="fa-solid fa-star hover:text-red-300"></i>
          <div className="w-1/12 h-px bg-gray-900 ml-3"></div>
        </div>
      </div>
      <form className='w-1/2 mt-12 mx-auto p-4 static' >
        <div className='input-container w-10/12 relative mb-6 z-0'>
          <input type="text" id='userName' className="input-field w-full p-4 outline-none border-solid border-b border-[#212529]" placeholder='' />
          <label htmlFor="userName" className='input-label'>userName</label>
        </div>

        <div className='input-container w-10/12 relative mb-6'>
          <input type="text" id='userAge' className='input-field w-full p-4 outline-none border-solid border-b border-[#212529]' placeholder='' />
          <label htmlFor="userAge" className='input-label'>userAge</label>
        </div>

        <div className='input-container w-10/12 relative mb-6'>
          <input type="email" id='userEmail' className='input-field w-full p-4 outline-none border-solid border-b border-[#212529]' placeholder='' />
          <label htmlFor="userEmail" className='input-label'>userEmail</label>
        </div>

        <div className='input-container w-10/12 relative mb-6'>
          <input type="password" id='userPassword' className='input-field w-full p-4 outline-none border-solid border-b border-[#212529]' placeholder='' />
          <label htmlFor="userPassword" className='input-label'>userPassword</label>
        </div>
        <button className='bg-[#1abc9c] p-3 mt-6 text-white rounded-xl outline-none hover:bg-[#409180] duration-500'>Send message</button>
      </form>
    </section>

  </>

}
