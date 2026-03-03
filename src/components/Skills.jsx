import React from 'react';

// Frontend
import Javascript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import HtmlLogo from '../assets/html.png';
import CssLogo from '../assets/css.png';

// Backend / Data
import Node from '../assets/node.png';
import Python from '../assets/python.png';
import FastAPI from '../assets/fastapi.png';
import Postgres from '../assets/postgres.png';
import Redis from '../assets/redis.png';
import Mongo from '../assets/mongo.png';

// DevOps / Tools
import Docker from '../assets/docker.png';
import Github from '../assets/github.png';

// Mobile
import Swift from '../assets/swift.png';
import Firebase from '../assets/firebase.png';

// Systems
import CPlus from '../assets/c-logo.png';

//AI/ML
import PyTorch from '../assets/pytorch.png';

const Skills = () => {

  const skills = [
    // Core Languages
    { name: 'JavaScript', image: Javascript },
    { name: 'Python', image: Python },
    { name: 'C++', image: CPlus },

    // Frontend
    { name: 'React', image: ReactImg },
    { name: 'HTML', image: HtmlLogo },
    { name: 'CSS', image: CssLogo },

    // Backend
    { name: 'Node.js', image: Node },
    { name: 'FastAPI', image: FastAPI },
    { name: 'PostgreSQL', image: Postgres },
    { name: 'Redis', image: Redis },
    { name: 'MongoDB', image: Mongo },

    // DevOps / Tools
    { name: 'Docker', image: Docker },
    { name: 'GitHub', image: Github },

    // Mobile
    { name: 'Swift', image: Swift },
    { name: 'Firebase', image: Firebase },

    // AI/ML
    { name: 'PyTorch', image: PyTorch }

  ];

  return (
   <div name='skills' className='w-full min-h-screen bg-[#1F2839] text-gray-300 pt-12 pb-10'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

        <div>
          <p className='text-4xl font-bold inline border-b-4 border-[#FF572A]'>
            Skills
          </p>
          <p className='py-4'>
            Technologies I’ve worked with:
          </p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-center py-8'>
          {skills.map((skill) => (
            <div
              key={skill.name}
              className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4 rounded-md'
            >
              <img
                className='w-16 mx-auto'
                src={skill.image}
                alt={skill.name}
              />
              <p className='mt-4'>{skill.name}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Skills;