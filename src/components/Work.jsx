import React from 'react';
import tactEdge from '../assets/TacticalEdge.png';
import gphysique from '../assets/gphysique.png';
import csslogo from '../assets/css.png';
import htmllogo from '../assets/html.png';
import wordpress from '../assets/wordpress.png';
import elementor from '../assets/elementor.png';
import javascript from '../assets/javascript.png';
import node from '../assets/node.png';
import mongo from '../assets/mongo.png';
import react from '../assets/react.png';
import github from '../assets/github.png';
import express from '../assets/express.png';

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#1F2839]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#FF572A]'>Work</p>
                <p className='py-6'>Check out some of my recent work</p>
            </div>

            {/* Project 1 */}
            <div className='grid sm:grid-cols-2 gap-8 mb-16'>
                <div style={{backgroundImage: `url(${tactEdge})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center'>
                        <span className='text 2xl font-bold text-white tracking-wider'>
                            E-Commerce Site
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://woo-lovely-magnetic-nacho.wpcomstaging.com/" target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Visit Site</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className='text-2xl font-bold mb-4 text-gray-300'>Tactical Edge & Armor</h2>
                    <p className='text-gray-300'>
                    Translated client requirements into a responsive body armor storefront, leveraging a web-builder application. 
                    Identified and integrated essential E-commerce functionalities including a comprehensive search bar, refined product filters, intuitive product categories, streamlined cart and checkout processes, diverse payment options, and visually engaging product galleries.
                    </p>
                    <div className="flex items-center mt-4">
                        <p className="text-gray-300 mr-4">Technologies used:</p>
                        <span className="mr-1" title="HTML">
                            <img src={htmllogo} alt="HTML" className="mr-4 h-6" />
                        </span>
                        <span className="mr-1" title="CSS">
                            <img src={csslogo} alt="CSS" className="mr-4 h-6" />
                        </span>
                        <span className="mr-1" title="WordPress">
                            <img src={wordpress} alt="WordPress" className="mr-4 h-6" />
                        </span>
                        <span className="mr-1" title="Elementor">
                            <img src={elementor} alt="Elementor" className="mr-4 h-6" />
                        </span>
                    </div>
                </div>
            </div>

            {/* Project 2 */}
            <div className='grid sm:grid-cols-2 gap-8'>
                <div style={{backgroundImage: `url(${gphysique})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center'>
                        <span className='text 2xl font-bold text-white tracking-wider'>
                            Workout App
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://greekphysiqueclient.onrender.com/" target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/PassionateProgrammers/GreekPhysique" target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className='text-2xl font-bold mb-4 text-gray-300'>Greek Physique</h2>
                    <p className='text-gray-300'>
                    Workout tracker web application built using the MERN stack - MongoDB for data storage, Express.js as the backend server connecting to the database, React for the dynamic frontend interface, and Node.js to run the server-side logic.
                    Includes user authentication, bcrypt password encryption, signup page, login page, session management, a personal dashboard, and darkmode. Made using custom CSS   
                    </p>
                    <div className="flex items-center mt-4">
                        <p className="text-gray-300 mr-4">Technologies used:</p>
                        <span className="mr-1" title="HTML">
                            <img src={htmllogo} alt="HTML" className="mr-4 h-6" />
                        </span>
                        <span className="mr-1" title="CSS">
                            <img src={csslogo} alt="CSS" className="mr-4 h-6" />
                        </span>
                        <span className="mr-1" title="Javascript">
                            <img src={javascript} alt="Javascript" className="mr-4 h-6" />
                        </span>
                        <span className="mr-1" title="Node.Js">
                            <img src={node} alt="nodejs" className="mr-4 h-6" />
                        </span>
                        <span className="mr-1" title="MongoDB">
                            <img src={mongo} alt="MongoDB" className="mr-4 h-6" />
                        </span>
                        <span className="mr-1" title="React">
                            <img src={react} alt="React" className="mr-4 h-6" />
                        </span>
                        <span className="mr-1" title="Express">
                            <img src={express} alt="express" className="mr-4 h-6" />
                        </span>
                        <span className="mr-1" title="Github">
                            <img src={github} alt="Github" className="mr-4 h-6" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Work