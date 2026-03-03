import React from 'react'

const Contact = () => {
  return (
    <div
      name='contact'
      className='w-full min-h-screen bg-[#1F2839] flex justify-center items-center px-4 py-20'
    >
      <form
        method='POST'
        action='https://getform.io/f/5a681e3a-762f-47f6-9266-ffb37b530468'
        className='w-full max-w-[650px] rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-10 shadow-lg shadow-[#040c16]'
      >
        {/* Header */}
        <div className='mb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#FF572A] text-gray-300'>
            Contact
          </p>
          <p className='text-gray-300 mt-4'>
            Submit the form below or email me at{' '}
            <a
              className='text-[#FF572A] hover:underline'
              href='mailto:jameskirk561@gmail.com'
            >
              jameskirk561@gmail.com
            </a>
          </p>
        </div>

        {/* Inputs */}
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <label className='text-sm text-gray-300/80'>Name</label>
            <input
              className='rounded-lg bg-white/10 text-gray-200 placeholder:text-gray-400 px-4 py-3 outline-none border border-white/10 focus:border-[#FF572A] focus:ring-2 focus:ring-[#FF572A]/40'
              type='text'
              placeholder='Your name'
              name='name'
              required
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label className='text-sm text-gray-300/80'>Email</label>
            <input
              className='rounded-lg bg-white/10 text-gray-200 placeholder:text-gray-400 px-4 py-3 outline-none border border-white/10 focus:border-[#FF572A] focus:ring-2 focus:ring-[#FF572A]/40'
              type='email'
              placeholder='you@example.com'
              name='email'
              required
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label className='text-sm text-gray-300/80'>Message</label>
            <textarea
              className='rounded-lg bg-white/10 text-gray-200 placeholder:text-gray-400 px-4 py-3 outline-none border border-white/10 focus:border-[#FF572A] focus:ring-2 focus:ring-[#FF572A]/40 resize-none'
              name='message'
              rows='8'
              placeholder='What can I help you with?'
              required
            />
          </div>

          {/* Button */}
          <button
            type='submit'
            className='mt-2 inline-flex items-center justify-center rounded-lg bg-[#FF572A] px-6 py-3 font-semibold text-white shadow-md shadow-[#040c16] hover:brightness-110 active:scale-[0.98] transition'
          >
            Get in Touch
          </button>

        </div>
      </form>
    </div>
  )
}

export default Contact