import React from 'react'
import logo from '../assets/logo.png' // Import your logo image
import { MapPin, Phone, Mail } from 'lucide-react';    

const Footer = () => {
  return (
    <>
     {/* Footer */}
          <footer className="bg-gray-800 text-white pt-12 pb-6">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-4 gap-8 mb-8">
                {/* Company Info */}
                <div className="md:col-span-1">
                  <img 
                    src={logo} 
                    alt="Esanad Consult Limited" 
                    className="h-16 w-auto mb-4"
                  />
                  <p className="text-gray-300 mb-4 text-sm">
                    Protecting truth and trust with Islamic principles
                  </p>
                  {/* Social Media Icons */}
                  <div className="flex space-x-4">
                    <a href="https://www.facebook.com/share/19btist2pX/" target="_blank" rel="noopener noreferrer" 
                      className="text-gray-400 hover:text-blue-500 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                      </svg>
                    </a>
                    <a href="https://wa.me/2349165067261" target="_blank" rel="noopener noreferrer"
                      className="text-gray-400 hover:text-green-500 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.149-.67.149-.198.297-.767.967-.94 1.166-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      </svg>
                    </a>
                    <a href="tiktok.com/@esanad.media" target="_blank" rel="noopener noreferrer"
                      className="text-gray-400 hover:text-black transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                      </svg>
                    </a>
                    <a href="https://www.instagram.com/esanadmedia?igsh=MTdlYzN2NWp2NzU2OA==" target="_blank" rel="noopener noreferrer"
                      className="text-gray-400 hover:text-pink-500 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a href="https://youtube.com/@esanadmedia?si=R_0cUWRKcMczAM5B" target="_blank" rel="noopener noreferrer"
                      className="text-gray-400 hover:text-red-500 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="md:col-span-1">
                  <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                  <div className="space-y-3 text-gray-300 text-sm">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 mt-1 text-orange-400 flex-shrink-0" />
                      <span>Suite 2, Yusuf SK Shopping Complex, Beside Federal Secretariat, Fate Road, Ilorin, Kwara State, Nigeria</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>+234 916 506 7261</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <span>esanadconsult@gmail.com</span>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="md:col-span-1">
                  <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="hover:text-white transition-colors cursor-pointer">About Us</li>
                    <li className="hover:text-white transition-colors cursor-pointer">Services</li>
                    <li className="hover:text-white transition-colors cursor-pointer">Publications</li>
                    <li className="hover:text-white transition-colors cursor-pointer">Contact</li>
                  </ul>
                </div>

                {/* Services */}
                <div className="md:col-span-1">
                  <h4 className="text-lg font-semibold mb-4">Our Services</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="hover:text-white transition-colors cursor-pointer">Islamic Fact Checking</li>
                    <li className="hover:text-white transition-colors cursor-pointer">Ethical Information Management</li>
                    <li className="hover:text-white transition-colors cursor-pointer">Research & Publications</li>
                    <li className="hover:text-white transition-colors cursor-pointer">Educational Services</li>
                  </ul>
                </div>
              </div>

              {/* Copyright - Dynamic Year */}
              <div className="border-t border-gray-700 pt-6 mt-8">
                <p className="text-center text-gray-400 text-sm">
                  © {new Date().getFullYear()} Esanad Consult Limited. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
      
    </>
  )
}

export default Footer







