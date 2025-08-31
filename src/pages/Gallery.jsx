import React, { useState, useMemo } from 'react';
import { Image, Users, BookOpen, Award, Calendar, MapPin, Phone, Mail } from 'lucide-react';
// Import images with explicit names for better code readability
import galleryImage1 from '../assets/galleryImages/lv_0_20250627081924 (1).jpg';
import galleryImage2 from '../assets/galleryImages/Pic (2).jpg';
import galleryImage3 from '../assets/galleryImages/Pic (3).jpg';
import galleryImage4 from '../assets/galleryImages/Pic.jpg';
import galleryImage5 from '../assets/galleryImages/Pics.jpg';
import esanad from '../assets/galleryImages/Esanad .jpg';
import esanad1 from '../assets/galleryImages/Esanad1 .jpg';
import esanad2 from '../assets/galleryImages/Esanad2.jpg';
import esanad3 from '../assets/galleryImages/Esanad3.jpg';
import esanad4 from '../assets/galleryImages/Eaanad4 .jpg';

// Lazy loading image component
const LazyImage = ({ src, alt, className }) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      className={className}
      loading="lazy" // Native lazy loading
      decoding="async" // Async decoding for performance
    />
  );
};

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Events', 'Workshops', 'Research', 'Team', 'Facilities'];
  
  // Memoize galleryItems to prevent recreation on each render
  const galleryItems = useMemo(() => [
    {
      id: 1,
      title: "Islamic Fact-Checking Workshop 2024",
      category: "Workshops",
      description: "Training session on Isnad methodology for digital age verification",
      date: "March 2024",
      location: "Ilorin, Kwara State",
      image: galleryImage1
    },
    {
      id: 2,
      title: "Research Team Meeting",
      category: "Team",
      description: "Monthly research coordination meeting with our scholarly team",
      date: "February 2024",
      location: "Esanad Consult Office",
      image: galleryImage2
    },
    {
      id: 3,
      title: "Digital Ethics Conference",
      category: "Events",
      description: "Annual conference on Islamic perspectives in digital information management",
      date: "January 2024",
      location: "University of Ilorin",
      image: galleryImage3
    },
    {
      id: 4,
      title: "Hadith Authentication Research",
      category: "Research",
      description: "Ongoing research project on classical Islamic verification methods",
      date: "Ongoing",
      location: "Research Laboratory",
      image: galleryImage4
    },
    {
      id: 5,
      title: "Community Outreach Program",
      category: "Events",
      description: "Educational program for local Muslim communities on misinformation awareness",
      date: "December 2023",
      location: "Central Mosque, Ilorin",
      image: galleryImage5
    },
    {
      id: 6,
      title: "Technology Integration Workshop",
      category: "Workshops",
      description: "Training on AI-powered fact-checking tools with Islamic ethical frameworks",
      date: "November 2023",
      location: "Tech Hub Ilorin",
      image: esanad
    },
    {
      id: 7,
      title: "Office Facilities",
      category: "Facilities",
      description: "Modern office space equipped with research and technology infrastructure",
      date: "2023",
      location: "Yusuf SK Shopping Complex",
      image: esanad1
    },
    {
      id: 8,
      title: "Scholarly Consultation Session",
      category: "Team",
      description: "Weekly consultation with Islamic scholars on verification methodologies",
      date: "Weekly",
      location: "Conference Room",
      image: esanad2
    },
    {
      id: 9,
      title: "Publication Launch Event",
      category: "Events",
      description: "Launch of our latest research publication on digital Isnad methodology",
      date: "October 2023",
      location: "University Auditorium",
      image: esanad3
    },
    {
      id: 10,
      title: "Islamic Digital Ethics Seminar",
      category: "Workshops",
      description: "Seminar on ethical considerations in digital information verification",
      date: "September 2023",
      location: "Islamic Center Auditorium",
      image: esanad4
    }
  ], []); // Empty dependency array since these values never change

  // Memoize filtered items to prevent unnecessary recalculations
  const filteredItems = useMemo(() => {
    return selectedCategory === 'All' 
      ? galleryItems 
      : galleryItems.filter(item => item.category === selectedCategory);
  }, [selectedCategory, galleryItems]);

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#120452' }}>
            Gallery
          </h1>
          <div className="w-60 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto my-6 mb-6"></div>
          <p className="text-xl font-semibold text-blue-600 mb-6 max-w-3xl mx-auto">
            Explore our work, events, and activities in Islamic fact-checking and ethical information management
          </p>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            From workshops and conferences to research activities and community outreach, 
            see how we're making a difference in protecting truth and trust in the digital age.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-blue-50 shadow-md hover:shadow-lg'
                }`}
                aria-pressed={selectedCategory === category}
                aria-label={`Filter by ${category}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <article key={item.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 overflow-hidden">
                <div className="h-48 overflow-hidden">
                  {item.image ? (
                    <LazyImage 
                      src={item.image} 
                      alt={`${item.title} - ${item.description}`} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="h-full bg-gradient-to-br from-blue-400 via-purple-500 to-orange-400 flex items-center justify-center" aria-label="No image available">
                      <Image className="w-16 h-16 text-white" aria-hidden="true" />
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" aria-hidden="true" />
                      {item.date}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight" id={`gallery-item-${item.id}`}>
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center text-gray-500 text-sm">
                    <MapPin className="w-4 h-4 mr-2" aria-hidden="true" />
                    {item.location}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ color: '#120452' }}>Our Impact</h2>
          <div className="w-60 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto my-6 mb-6"></div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">50+</h3>
              <p className="text-gray-600">Research Publications</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">1000+</h3>
              <p className="text-gray-600">People Trained</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">25+</h3>
              <p className="text-gray-600">Workshops Conducted</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Image className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">100+</h3>
              <p className="text-gray-600">Community Events</p>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Gallery;

