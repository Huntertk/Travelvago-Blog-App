import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaAlignRight } from 'react-icons/fa';
import { RiCloseLargeLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import '../../styles/header.scss';

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
    const easeScaleUp = {
        initial:{
          scale:0,
          opacity:0
        },
        whileInView:{
          scale:1,
          opacity: 1
        }
      }
  return (
    <header>
        <div className="header_main_container">
            <div className="logo_component">
                <img src="/assets/images/tgvlogo.png" alt="Travelvago" />
            </div>
            
            <motion.div className='nav_toggle_container_icon' {...easeScaleUp}>
                {
                    isNavOpen ? (
                        <RiCloseLargeLine onClick={() => setIsNavOpen(false)}/>
                    ) : (
                        <FaAlignRight onClick={() => setIsNavOpen(true)}/>
                    )
                }
            </motion.div>
               
            {
                isNavOpen && (
                    <ul className="small_device_nav_links_container">
                        <NavLink to="/" onClick={() => setIsNavOpen(false)}>Home</NavLink>
                        <NavLink to="/blog" onClick={() => setIsNavOpen(false)}>Blogs</NavLink>
                        <NavLink to="/about" onClick={() => setIsNavOpen(false)}>About</NavLink>
                    </ul>
                )
            }
            <ul className="big_device_nav_links_container">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/blog">Blogs</NavLink>
                <NavLink to="/about">About</NavLink>
            </ul>
        </div>
    </header>
  )
}

export default Header