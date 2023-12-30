import React from 'react';

import Javascript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import Github from '../assets/github.png';
import Mongo from '../assets/mongo.png';
import CPlus from '../assets/c-logo.png';
import HtmlLogo from '../assets/html.png';
import CssLogo from '../assets/css.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#1F2839] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#FF572A]'>Skills</p>
                <p className='py-4'>These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                   <img className='w-20 mx-auto' src={CPlus} alt="C++" />
                   <p className='my-4'>C++</p> 
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                   <img className='w-20 mx-auto' src={HtmlLogo} alt="HTML" />
                   <p className='my-4'>HTML</p> 
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                   <img className='w-20 mx-auto' src={CssLogo} alt="Css" />
                   <p className='my-4'>CSS</p> 
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                   <img className='w-20 mx-auto' src={Github} alt="Github" />
                   <p className='my-4'>GITHUB</p> 
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                   <img className='w-20 mx-auto' src={Javascript} alt="Javascript" />
                   <p className='my-4'>JAVASCRIPT</p> 
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                   <img className='w-20 mx-auto' src={ReactImg} alt="React" />
                   <p className='my-4'>REACT</p> 
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                   <img className='w-20 mx-auto' src={Node} alt="Node" />
                   <p className='my-4'>NODE JS</p> 
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                   <img className='w-20 mx-auto' src={Mongo} alt="Mongo" />
                   <p className='my-4'>MONGO DB</p> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills