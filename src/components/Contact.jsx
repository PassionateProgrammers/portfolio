import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#1F2839] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/5a681e3a-762f-47f6-9266-ffb37b530468" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#FF572A] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or email me at JamesKirk561@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#FF572A] hover:border-[#FF572A] px-4 py-3 my-8 mx-auto flex items-center'>Get in Touch</button>
        </form>
    </div>
  )
}

export default Contact