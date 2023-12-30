import React, {useState, useEffect} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo.png'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const handleClick = () => setNav(!nav);
  
    const handleSectionScroll = () => {
      const sections = ['home', 'about', 'skills', 'work', 'contact'];
  
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const { top, bottom } = section.getBoundingClientRect();
          if (top <= 0 && bottom >= 0) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleSectionScroll);
      return () => {
        window.removeEventListener('scroll', handleSectionScroll);
      };
    }, []);

    const scrollToSection = (sectionId) => {
        setActiveSection(sectionId);
      };

  return (
    <div className='fixed z-50 w-full h-[80px] flex justify-between items-center px-4 bg-[#1F2839] text-gray-300'>
        <div>
            <Link to="home" spy={true} smooth={true} onClick={() => scrollToSection('home')}>
            <img src={Logo} alt="Logo" style={{width: "50px"}}/>
            </Link>
        </div>

        {/* menu */}
        <ul className='navbar hidden md:flex'>
            <li className={activeSection === 'home' ? 'active-link' : ''}>
                <Link to="home" spy={true} smooth={true} duration={500} 
                onClick={() => scrollToSection('home')}
                className="hover:text-[#FF572A]">
                Home
                </Link>
            </li>
            <li className={activeSection === 'about' ? 'active-link' : ''}>
                <Link to="about" spy={true} smooth={true} offset={-20} duration={500} 
                onClick={() => scrollToSection('about')}
                className="hover:text-[#FF572A]">
                About
                </Link>
            </li>
            <li className={activeSection === 'skills' ? 'active-link' : ''}>
                <Link 
                to="skills" spy={true} smooth={true} duration={500}
                onClick={() => scrollToSection('skills')} 
                className="hover:text-[#FF572A]">
                Skills
                </Link>
            </li>
            <li className={activeSection === 'work' ? 'active-link' : ''}>
                <Link to="work" spy={true} smooth={true} offset={-50} duration={500} 
                onClick={() => scrollToSection('work')}
                className="hover:text-[#FF572A]">
                Work
                </Link>
            </li>
            <li className={activeSection === 'contact' ? 'active-link' : ''}>
                <Link to="contact" spy={true} smooth={true} duration={500} 
                onClick={() => scrollToSection('contact')}
                className="hover:text-[#FF572A]">
                Contact
                </Link>
            </li>
        </ul>

        {/* hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#1F2839] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="home" spy={true} smooth={true} duration={500}>
                Home
                </Link></li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="about" spy={true} smooth={true} offset={-20} duration={500}>
                About
                </Link></li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="skills" spy={true} smooth={true} offset={-50} duration={500}>
                Skills
                </Link></li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="work" spy={true} smooth={true} offset={-85} duration={500}>
                Work
                </Link></li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="contact" spy={true} smooth={true} duration={500}>
                Contact
                </Link></li>
        </ul>

        {/* social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justified-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/james-kirk-1208581b2" target="_blank" rel="noopener noreferrer">
                        Linkedin <FaLinkedin size={30} />
                    </a> 
                </li>
                <li className='w-[160px] h-[60px] flex justified-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/PassionateProgrammers" target="_blank" rel="noopener noreferrer">
                        Github <FaGithub size={30} />
                    </a> 
                </li>
                <li className='w-[160px] h-[60px] flex justified-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="mailto:jameskirk561@gmail.com" target="_blank" rel="noopener noreferrer">
                        Email <HiOutlineMail size={30} />
                    </a> 
                </li>
                <li className='w-[160px] h-[60px] flex justified-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://drive.google.com/file/d/1m_d3zcu0u-BqvkewmkMbyJZBIEEwu3X5/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                        Resume <BsFillPersonLinesFill size={30} />
                    </a> 
                </li>
            </ul>

        </div>
    </div>
    
  )
}

export default Navbar