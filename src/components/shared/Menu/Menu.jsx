import React, { useState, useEffect } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom'

export function Menu() {
  const [menu, setMenu] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
      setMenu(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      const aboutSection = document.getElementById('about');
      const servicesSection = document.getElementById('services');
      const porfolioSection = document.getElementById('porfolio');
      const contactSection = document.getElementById('contact');

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      if (isInViewport(homeSection)) {
        setActiveSection('home');
      } else if (isInViewport(aboutSection)) {
        setActiveSection('about');
      } else if (isInViewport(servicesSection)) {
        setActiveSection('services');
      } else if (isInViewport(porfolioSection)) {
        setActiveSection('porfolio');
      } else if (isInViewport(contactSection)) {
        setActiveSection('contact');
      }
    };

    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <= window.innerHeight / 2 &&
        rect.bottom >= window.innerHeight / 2
      );
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header >
        <nav className={`Cabecera ${menu ? 'isActive' : ''} ${scrolling ? 'isScrolling' : ''}`}>
          <ul className="Cabecera-ul ">
            
            <li onClick={() => scrollToSection('home')} className={`Cabecera-li ${activeSection === 'home' ? 'active' : ''}`}><Link className='linkmn' to="/">HOME</Link> </li>
            <li onClick={() => scrollToSection('about')} className={`Cabecera-li ${activeSection === 'about' ? 'active' : ''}`}><Link className='linkmn' to="/rooms">ROOMS</Link> </li>
            <img className='logo' src="https://firebasestorage.googleapis.com/v0/b/hacienda-44f62.appspot.com/o/logo1-removebg-preview.png?alt=media&token=ecf62a60-f0ea-4ca2-b728-5602083b6682" alt="" />
            <li onClick={() => scrollToSection('porfolio')} className={`Cabecera-li ${activeSection === 'porfolio' ? 'active' : ''}`}><Link className='linkmn' to="/winery">WINNERY</Link> </li>
            <li onClick={() => scrollToSection('contact')} className={`Cabecera-li ${activeSection === 'contact' ? 'active' : ''}`}><Link className='linkmn' to="/events">EVENTS</Link></li>
          </ul>
        </nav>
      </header>
    </>
  );
}