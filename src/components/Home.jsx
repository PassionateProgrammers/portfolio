import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Home = () => {
  return (
    <div name='home' className='relative z-40 w-full h-screen bg-[#1F2839]'>
        {/* Container */}
        <div className='max-w-[800px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#FF572A]'>Hi, I'm</p>
            <h1 className='mt-2 text-4xl sm:text-7xl font-bold text-gray-300'>James</h1>
            <h2 className='mt-2 text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Software Engineer</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a Software Engineer with experience in full-stack development of
                responsive web applications from start to finish.
            </p>
            <div>
            <Link to="work" spy={true} smooth={true} offset={-85} duration={500}>
                <button className='group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#FF572A] hover:border-[#FF572A]'>
                    View Work 
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3'/>
                    </span>
                </button>
            </Link>
            </div>
        </div>
        {/* mobile social icons */}
        <div className='lg:hidden flex justify-center items-center absolute bottom-8 w-full'>
            <a className='text-gray-300 mx-4' href="https://www.linkedin.com/in/james-kirk-1208581b2" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={40} className='my-2'/>
                LinkedIn
            </a>
            <a className='text-gray-300 mx-4' href="https://github.com/PassionateProgrammers" target="_blank" rel="noopener noreferrer">
                <FaGithub size={40} className='my-2'/>
                GitHub
            </a>
            <a className='text-gray-300 mx-4' href="mailto:jameskirk561@gmail.com" target="_blank" rel="noopener noreferrer">
                <HiOutlineMail size={40} className='my-2'/>
                Email
            </a>
            <a className='text-gray-300 mx-4' href="https://drive.google.com/file/d/1m_d3zcu0u-BqvkewmkMbyJZBIEEwu3X5/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                <BsFillPersonLinesFill size={40} className='my-2'/>
                Resume
            </a>
        </div>
    </div>
  )
}

export default Home