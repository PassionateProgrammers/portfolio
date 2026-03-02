import React from 'react';
import tactEdge from '../assets/TacticalEdge.png';
import ap76logo from '../assets/ap76.png';
import csslogo from '../assets/css.png';
import htmllogo from '../assets/html.png';
import wordpress from '../assets/wordpress.png';
import elementor from '../assets/elementor.png';
import javascript from '../assets/javascript.png';
import node from '../assets/node.png';
import react from '../assets/react.png';
import github from '../assets/github.png';
import larder from '../assets/larder.png';
import swift from '../assets/swift.png';
import firebase from '../assets/firebase.png';
import gatekeeper from '../assets/gatekeeper.png';
import python from '../assets/python.png';
import docker from '../assets/docker.png';
import postgres from '../assets/postgres.png';
import redis from '../assets/redis.png';
import fastapi from '../assets/fastapi.png';

const Work = () => {
  return (
    <div name='work' className='w-full min-h-screen text-gray-300 bg-[#1F2839]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col w-full'>

        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#FF572A]'>
            Work
          </p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>

        {/* Projects Container */}
        <div className='space-y-24'>

          {/* Project 1 - Gatekeeper */}
          <div className='grid sm:grid-cols-2 gap-8 items-center'>
            <div
              style={{ backgroundImage: `url(${gatekeeper})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              <div className='opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  API Gateway
                </span>
                <div className='pt-8 text-center'>
                  <a
                    href="https://github.com/PassionateProgrammers/Gatekeeper"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h2 className='text-2xl font-bold mb-4'>Gatekeeper</h2>
              <p>
                Gatekeeper is a multi-tenant API gateway that authenticates requests with API keys,
                enforces per-key rate limits, logs usage metrics, and provides administrative
                analytics and abuse controls. Built with Python, FastAPI, Postgres, Redis,
                SQLAlchemy, and Docker.
              </p>

              <div className="flex items-center mt-4">
                <p className="mr-4">Technologies used:</p>
                <img src={python} alt="Python" className="mr-4 h-6" />
                <img src={docker} alt="Docker" className="mr-4 h-6" />
                <img src={postgres} alt="PostgreSQL" className="mr-4 h-6" />
                <img src={redis} alt="Redis" className="mr-4 h-6" />
                <img src={fastapi} alt="FastAPI" className="mr-4 h-6" />
              </div>
            </div>
          </div>

          {/* Project 2 - Larder */}
          <div className='grid sm:grid-cols-2 gap-8 items-center'>
            <div
              style={{
                backgroundImage: `url(${larder})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
              }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              <div className='opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Mobile App
                </span>
                <div className='pt-8 text-center'>
                  <a
                    href="https://github.com/PassionateProgrammers/Larder"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h2 className='text-2xl font-bold mb-4'>Larder</h2>
              <p>
                Larder is a modern, minimalistic kitchen inventory iOS application that helps users
                track everything in their refrigerator, freezer, and pantry. Built with Swift and
                powered by Firebase.
              </p>

              <div className="flex items-center mt-4">
                <p className="mr-4">Technologies used:</p>
                <img src={swift} alt="Swift" className="mr-4 h-6" />
                <img src={firebase} alt="Firebase" className="mr-4 h-6" />
              </div>
            </div>
          </div>

          {/* Project 3 - Tactical Edge */}
          <div className='grid sm:grid-cols-2 gap-8 items-center'>
            <div
              style={{ backgroundImage: `url(${tactEdge})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              <div className='opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  E-Commerce Site
                </span>
                <div className='pt-8 text-center'>
                  <a
                    href="https://woo-lovely-magnetic-nacho.wpcomstaging.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Visit Site
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h2 className='text-2xl font-bold mb-4'>Tactical Edge & Armor</h2>
              <p>
                Built a responsive body armor storefront using WordPress and Elementor.
                Integrated search, filtering, product categories, cart, checkout,
                and payment workflows.
              </p>

              <div className="flex items-center mt-4">
                <p className="mr-4">Technologies used:</p>
                <img src={htmllogo} alt="HTML" className="mr-4 h-6" />
                <img src={csslogo} alt="CSS" className="mr-4 h-6" />
                <img src={wordpress} alt="WordPress" className="mr-4 h-6" />
                <img src={elementor} alt="Elementor" className="mr-4 h-6" />
              </div>
            </div>
          </div>

          {/* Project 4 - ap76 */}
          <div className='grid sm:grid-cols-2 gap-8 items-center'>
            <div
              style={{ backgroundImage: `url(${ap76logo})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              <div className='opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Custom Website
                </span>
                <div className='pt-8 text-center'>
                  <a
                    href="https://ap76.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h2 className='text-2xl font-bold mb-4'>ap76</h2>
              <p>
                A web application for a non-profit organization built with React,
                JavaScript, TailwindCSS, and custom CSS.
              </p>

              <div className="flex items-center mt-4">
                <p className="mr-4">Technologies used:</p>
                <img src={htmllogo} alt="HTML" className="mr-4 h-6" />
                <img src={csslogo} alt="CSS" className="mr-4 h-6" />
                <img src={javascript} alt="JavaScript" className="mr-4 h-6" />
                <img src={node} alt="NodeJS" className="mr-4 h-6" />
                <img src={react} alt="React" className="mr-4 h-6" />
                <img src={github} alt="GitHub" className="mr-4 h-6" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Work;