import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: 'Home', href: '/', hasPage: true },
    { name: 'About', href: '/about', hasPage: true },
    { name: 'Services', href: '/services', hasPage: true },
    { name: 'Publications', href: '/publications', hasPage: true },
    { name: 'Pricing', href: '#pricing', hasPage: false },
    { name: 'Team', href: '/team', hasPage: true },
    { name: 'Gallery', href: '/gallery', hasPage: true },
    { name: 'Testimonials', href: '#testimonials', hasPage: false },
    { name: 'Contact us', href: '#contact', hasPage: false },
  ];

  const handleMenuClick = (item) => {
    if (item.hasPage) {
      navigate(item.href);
    } else {
      // For sections, navigate to home first if not already there, then scroll
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(item.href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsMenuOpen(false);
  };

  const handleGetInTouch = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-nav border-b border-white/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={logo} 
              alt="Esanad Consult Limited"
              className="h-8 sm:h-9 lg:h-10 w-auto"
            />
            {/* <div className="hidden md:block">
              <h2 className="text-lg font-bold text-gray-800">Esanad Consult</h2>
              <p className="text-xs text-gray-600">Limited</p>
            </div> */}
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleMenuClick(item)}
                className="text-[#120463] hover:text-blue-600 font-medium transition-colors duration-200 relative group text-sm lg:text-base"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Get in Touch Button */}
          <div className="hidden lg:block">
            <Button 
              onClick={handleGetInTouch}
              className="bg-orange-500 hover:bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-b-lg shadow-lg hover:shadow-xl transition-transform hover:-translate-y-1 flex items-center text-sm lg:text-base"
            >
              <Phone className="w-4 h-4 mr-2" />
              Get in Touch
            </Button>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/20">
            <div className="flex flex-col space-y-2 sm:space-y-3">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleMenuClick(item)}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 text-left py-2 sm:py-3 text-sm sm:text-base"
                >
                  {item.name}
                </button>
              ))}
              <Button 
                onClick={handleGetInTouch}
                className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white px-6 py-2 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl mt-4 w-full text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 mr-2" />
                Get in Touch
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

