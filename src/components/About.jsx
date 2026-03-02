import React from 'react';
import James from '../assets/james.png'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#1F2839] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full flex flex-col sm:flex-row justify-center items-center gap-8 px-4'>
          <div className='sm:w-1/2'>
            {/* Text content */}
            <div className='sm:text-4xl sm:text-left text-2xl font-bold'>
              <p className='text-4xl font-bold inline border-b-4 border-[#FF572A]'>About</p>
              <p className='text-base font-normal py-4'>I’m a software engineer focused on building reliable backend systems and data-driven applications. I recently earned a B.S. in Computer Science with a minor in Artificial Intelligence from Florida Atlantic University.
              </p>
              <p className='text-base font-normal py-4'>My work centers around designing scalable APIs, building structured data pipelines, and integrating hardware and software systems. I’ve developed multi-service backend platforms using FastAPI, PostgreSQL, Redis, and Docker, and I’ve built production-ready mobile applications with SwiftUI and Firebase.
              </p>
              <p className='text-base font-normal'>I care about clean architecture, thoughtful system design, and writing software that’s maintainable under real-world constraints.
              </p>
            </div>
          </div>
          <div className='sm:w-1/2 sm:text-right order-first sm:order-none'>
            {/* Image */}
            <div className='hidden sm:block'>
              {/* Display on larger screens */}
              <img src={James} alt='James Kirk' className='w-full border-2 border-[#FF572A]' style={{borderRadius: "20%"}} />
            </div>
          </div>
          <div className='sm:hidden w-full'>
            {/* Image */}
            <img src={James} alt='James Kirk' className='w-full border-2 border-[#FF572A]' style={{borderRadius: "20%"}}/>
          </div>
        </div>
      </div>
    </div>
  

  )
}

export default About