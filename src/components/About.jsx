import React from 'react';
import James from '../assets/james.png';

const About = () => {
  return (
    <div
      name='about'
      className='w-full min-h-screen bg-[#1F2839] text-gray-300 pt-[96px] pb-10'
    >
      <div className='max-w-[1000px] mx-auto px-4'>
        <div className='w-full flex flex-col sm:flex-row items-center gap-8'>
          {/* Image */}
          <div className='w-full sm:w-1/2 flex justify-center sm:justify-end order-first sm:order-none'>
            <img
              src={James}
              alt='James Kirk'
              className='w-full max-w-[320px] sm:max-w-none border-2 border-[#FF572A]'
              style={{ borderRadius: '20%' }}
            />
          </div>

          {/* Text */}
          <div className='w-full sm:w-1/2'>
            <p className='text-4xl font-bold inline border-b-4 border-[#FF572A]'>
              About
            </p>

            <p className='text-base font-normal py-4'>
              I’m a software engineer focused on building reliable backend systems and data-driven applications. I recently earned a B.S. in Computer Science with a minor in Artificial Intelligence from Florida Atlantic University.
            </p>

            <p className='text-base font-normal py-4'>
              My work centers around designing scalable APIs, building structured data pipelines, and integrating hardware and software systems. I’ve developed multi-service backend platforms using FastAPI, PostgreSQL, Redis, and Docker, and I’ve built production-ready mobile applications with SwiftUI and Firebase.
            </p>

            <p className='text-base font-normal'>
              I care about clean architecture, thoughtful system design, and writing software that’s maintainable under real-world constraints.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;