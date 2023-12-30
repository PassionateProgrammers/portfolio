import React from 'react';
import James from '../assets/james.png'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#1F2839] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full flex flex-col sm:flex-row justify-center items-center gap-8 px-4'>
          <div className='sm:w-1/2'>
            {/* Text content */}
            <div className='sm:text-4xl sm:text-right text-2xl font-bold'>
              <p className='text-4xl font-bold inline border-b-4 border-[#FF572A]'>About</p>
              <p className='mt-4 pb-4'>Hi. I'm James, nice to meet you. Please take a look around.</p>
              <p className='text-base font-normal'>I'm passionate about building software that improves the lives of
                people around me. I specialize in creating software from start to
                finish by designing, implementing, and testing software based on
                the needs of the client.
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