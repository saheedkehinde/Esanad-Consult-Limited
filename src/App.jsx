import React, { useState, useCallback, useMemo } from 'react';
import { TruthSlider, LocationSlider } from './components/SlidingText';
import Navigation from './components/Navigation';
import { useNavigate } from 'react-router-dom';
import { Shield, Users, FileText, Mail, DollarSign, Phone, MapPin, ArrowRight, BookOpen, Target, Eye, Quote, Star, Building } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardHeader, CardFooter, CardContent } from './components/ui/card';
import { Tooltip, TooltipTrigger, TooltipContent } from './components/ui/tooltip';
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from './components/ui/alert-dialog';
import './App.css';



function App() {
  const navigate = useNavigate();

  // Testimonials data
  // Memoize testimonials data to prevent recreation on each render
  const testimonials = useMemo(() => [
    {
      id: 1,
      name: "Dr. Ibrahim Abdullahi",
      position: "Director, Islamic Research Institute",
      organization: "University of Ilorin",
      rating: 5,
      testimonial: "Esanad Consult Limited has revolutionized how we approach information verification in our research. Their Islamic methodology combined with modern technology provides unparalleled accuracy and authenticity.",
      category: "Academic Institution"
    },
    {
      id: 2,
      name: "Hajiya Fatima Suleiman",
      position: "Executive Director",
      organization: "Muslim Women's Council Nigeria",
      rating: 5,
      testimonial: "The training programs provided by Esanad Consult have empowered our organization to combat misinformation effectively. Their approach respects our Islamic values while providing practical, modern solutions.",
      category: "NGO"
    },
    {
      id: 3,
      name: "Sheikh Muhammad Bello",
      position: "Chief Imam",
      organization: "Central Mosque Ilorin",
      rating: 5,
      testimonial: "As religious leaders, we face constant challenges with misinformation affecting our communities. Esanad Consult's Isnad-based methodology has given us the tools to verify information authentically.",
      category: "Religious Organization"
    },
    {
      id: 4,
      name: "Alhaji Yusuf Adebayo",
      position: "Managing Director",
      organization: "Halal Media Network",
      rating: 5,
      testimonial: "Working with Esanad Consult has transformed our media operations. Their ethical information management framework has helped us maintain the highest standards of truthfulness and integrity in our reporting.",
      category: "Media Organization"
    },
    {
      id: 5,
      name: "Prof. Aisha Mahmoud",
      position: "Head of Islamic Studies",
      organization: "Ahmadu Bello University",
      rating: 5,
      testimonial: "The research collaboration with Esanad Consult has produced groundbreaking work in digital Islamic scholarship. Their team's expertise in both traditional Islamic sciences and modern technology is remarkable.",
      category: "Academic Institution"
    },
    {
      id: 6,
      name: "Ustaz Abdulrahman Isa",
      position: "Director of Education",
      organization: "Islamic Education Trust",
      rating: 5,
      testimonial: "Esanad Consult's educational programs have equipped our teachers with essential digital literacy skills grounded in Islamic principles. The impact on our educational quality has been tremendous.",
      category: "Educational Institution"
    },
    {
      id: 7,
      name: "Dr. Khadijah Olanrewaju",
      position: "Research Coordinator",
      organization: "Centre for Islamic Legal Studies",
      rating: 5,
      testimonial: "Their fact-checking methodology is scientifically rigorous yet deeply rooted in authentic Islamic scholarship. We've adopted their framework for all our research verification processes.",
      category: "Research Institution"
    },
    {
      id: 8,
      name: "Alhaji Musa Yakubu",
      position: "Chairman",
      organization: "Northern Nigeria Muslim Forum",
      rating: 5,
      testimonial: "Esanad Consult has been instrumental in helping our forum combat harmful misinformation in our communities. Their culturally sensitive approach makes them the perfect partner.",
      category: "Community Organization"
    }
  ], []);




  // Contact form state
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [showModal, setShowModal] = useState(false);

  // Memoize navigation handler to prevent recreation on each render
  const handleNavigate = useCallback((path) => {
    navigate(path);
  }, [navigate]);

  // Memoize form change handler
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  }, []);

  // Memoize form submit handler
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback('');
    try {
      const response = await fetch('https://formspree.io/f/mdklanvr', { // Replace YOUR_FORM_ID with the one from Formspree
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          subject: form.subject,
          message: form.message
        })
      });
      
      if (response.ok) {
        setFeedback('Message sent successfully!');
        setForm({ name: '', email: '', phone: '', subject: '', message: '' });
        setShowModal(true);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error(error);
      setFeedback('Failed to send message. Please try again.');
    }
    setLoading(false);
  }, [form]);

  return (
    <div>
     
      <main className="flex-1">
      
          <AlertDialog open={showModal} onOpenChange={setShowModal}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="text-green-700">Success!</AlertDialogTitle>
                <AlertDialogDescription>
                  Your message has been sent successfully.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction 
                  onClick={() => setShowModal(false)}
                  className="bg-orange-600 hover:bg-orange-700"
                  aria-label="Contact us"
                >
                  Close
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          
          {/* Hero Section */}
          <section id="home" className="relative py-40 px-4 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 opacity-75"></div>
            <div className="container mx-auto text-center relative z-10">
              <h1 className="text-5xl md:text-6xl lg:text-7xl-  font-bold text-[#160769] mb-6 ">
                
                Esanad Consult Limited
              </h1>
              <p className="text-xl md:text-2xl text-blue-600 mb-8 max-w-3xl mx-auto">
                Islamic Fact-checking & Ethical Information Management Solutions
              </p>
              
              <div className="w-full max-w-4xl mx-auto mb-12">
                
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700  text-white px-10 py-6 rounded-b-lg border-2 border-from-blue-500 text-lg shadow-lg hover:shadow-xl transition-transform hover:-translate-y-1 flex items-center"
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  aria-label="Contact us"
                >
                  Get in Touch
                </Button>
                <Button 
                  variant="outline" 
                  className="border-2 border-orange-400 text-orange-600  hover:text-blue-700 px-10 py-[23px] rounded-b-lg text-lg transition-transform hover:-translate-y-1 flex items-center"
                  onClick={() => handleNavigate("/about")}
                >
                  Learn More
                </Button>
              </div>
            </div>
          </section>

          {/* About Us Section */}
          <section id="about" className="py-16 bg-white/50  backdrop-blur-sm">
            <div className=" container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#120452' }}>
                  About Esanad Consult Ltd
                </h2>
                <div className="w-60 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto my-6 mb-6"></div>
                <p className="text-xl font-semibold mb-6 text-blue-600">
                  Ethical Information Management Experts
                </p>
                <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                  At Esanad Consult Ltd, we specialize in ethical information management, Islamic fact-checking, 
                  and Shariah-compliant verification services. Guided by Islamic principles and powered by advanced 
                  technology, we help individuals, institutions, organizations, and governments protect their data, 
                  combat misinformation, and communicate with integrity.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {/* Mission */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-200 text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: '#120452' }}>Our Mission</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To promote truth, transparency, and ethical information practices through Islamic principles 
                    and modern technology, creating a more informed and trustworthy digital environment.
                  </p>
                </div>

                {/* Vision */}
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-200 text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Eye className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: '#120452' }}>Our Vision</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To be the leading authority in Islamic fact-checking and ethical information management, 
                    setting global standards for truth verification and responsible communication.
                  </p>
                </div>

                {/* Values */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-200 text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: '#120452' }}>Our Values</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Integrity, authenticity, and accountability guide everything we do. We uphold Islamic 
                    principles while embracing innovation to serve our communities with excellence.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <Button 
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-200"
                  onClick={() => handleNavigate("/about")}
                  aria-label="View more about our company"
                >
                  Learn More About Us
                </Button>
              </div>
            </div>
          </section>

          {/* Our Services Section */}
          <section id="services" className="py-16 bg-white/50 backdrop-blur-sm">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ color: '#120452' }}>
                Our Core Services in Ethical & Islamic Information Management
              </h2>
              <div className="w-60 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto my-6 mb-6"></div>
              <p className="text-xl font-semibold text-center mb-6 text-blue-600">
                Practical solutions for the misinformation era.
              </p>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {/* Service Card 1: Fact-Checking & Misinformation Monitoring */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-all duration-200">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: '#120452' }}>Fact-Checking & Misinformation Monitoring</h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    We rigorously identify, verify, and counter false claims and narratives using internationally 
                    recognized fact-checking methodologies combined with deep insights from Islamic ethics. 
                    Our monitoring systems help you stay ahead of misinformation, protecting your reputation 
                    and ensuring the integrity of information you consume and disseminate.
                  </p>
                </div>

                {/* Service Card 2: Information & Digital Literacy Training */}
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-all duration-200">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: '#120452' }}>Information & Digital Literacy Training</h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Empower your communities, educational institutions, and corporate teams with essential 
                    critical thinking skills and digital literacy. Our training programs equip individuals 
                    to navigate complex digital spaces responsibly, discern credible information, and avoid 
                    the pitfalls of online deception and manipulation.
                  </p>
                </div>

                {/* Service Card 3: Shariah-Compliant Background Verification */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-all duration-200">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FileText className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: '#120452' }}>Shariah-Compliant Background Verification</h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    We provide ethical vetting services for individuals and entities, ensuring full respect 
                    for privacy and strict adherence to Islamic guidelines. Our verification processes are 
                    meticulous, transparent, and designed to provide accurate insights while upholding the 
                    highest moral and religious standards.
                  </p>
                </div>

                {/* Service Card 4: Islamic Media Ethics Education */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-all duration-200">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 transform hover:scale-105 transition-transform duration-200">
                    <BookOpen className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{ color: '#120452' }}>Islamic Media Ethics Education</h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Our specialized programs train journalists, community leaders, and media professionals 
                    in responsible communication, guided by faith-based principles. We emphasize the importance 
                    of truthfulness, fairness, and accountability in media content creation and dissemination, 
                    fostering a media landscape rooted in Islamic values.
                  </p>
                </div>
              </div>

              <div className="text-center mt-12">
                <Button 
                  className="bg-orange-600 hover:bg-orange-700 text-white lg:px-13 py-6 rounded-b-lg text-lg shadow-lg hover:shadow-xl transition-all duration-200"
                  onClick={() => handleNavigate("/services")}
                  aria-label="View our services in detail"
                >
                  Learn More About Our Services
                </Button>
              </div>
            </div>
          </section>

          {/* Our Publications Section */}
          <section id="publications" className="py-16 bg-gradient-to-r from-blue-50 to-orange-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center" style={{ color: '#120452' }}>
                  Our Publications
                </h2>
                <div className="w-60 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto my-6 mb-6"></div>
                <p className="text-xl font-semibold mb-6 text-blue-600 text-center">
                  Research and insights on Islamic fact-checking and ethical information management
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
                {/* Featured Publication 1 */}
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-200">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                      <FileText className="w-6 h-6 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="text-sm text-blue-600 font-semibold">Research Paper</span>
                      <p className="text-xs text-gray-500">2024</p>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">
                    The Digital Isnad: Applying Classical Islamic Verification Methods to Modern Information
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-4">
                    This paper explores how the traditional Islamic science of Isnad can be adapted and applied 
                    to verify information in the digital age, providing a framework for Islamic fact-checking methodologies.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Isnad</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Digital Verification</span>
                  </div>
                </div>

                {/* Featured Publication 2 */}
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-200">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                      <BookOpen className="w-6 h-6 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="text-sm text-orange-600 font-semibold">Journal Article</span>
                      <p className="text-xs text-gray-500">2024</p>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-3" style={{ color: '#120452' }}>
                    Combating Misinformation in Muslim Communities: An Ethical Framework
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-4">
                    An examination of misinformation's impact on Muslim communities and the development of an 
                    ethical framework based on Islamic principles for addressing false information.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">Misinformation</span>
                    <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">Islamic Ethics</span>
                  </div>
                </div>

                {/* Featured Publication 3 */}
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-200">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                      <FileText className="w-6 h-6 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="text-sm text-green-600 font-semibold">White Paper</span>
                      <p className="text-xs text-gray-500">2023</p>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">
                    Ethical Guidelines for Information Management in Islamic Organizations
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-4">
                    Comprehensive guidelines for Islamic organizations on ethical information management, 
                    covering content creation, verification, and dissemination practices.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Guidelines</span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Organizations</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button 
                  className="bg-orange-600 hover:bg-orange-700 text-white px-13 py-6 rounded-b-lg text-lg shadow-lg hover:shadow-xl transition-all duration-200"
                  onClick={() => handleNavigate("/publications")}
                  aria-label="Browse all our publications"
                >
                  View All Publications
                </Button>
              </div>
            </div>
          </section>

          

          {/* Pricing Section */}
          <section id="pricing" className="py-16 bg-white/50 backdrop-blur-sm">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center" style={{ color: '#120452' }}>
                Affordable Ethical Information Services – Choose Your Plan
              </h2>
              <div className="w-60 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto my-6 mb-6"></div>
              <p className="text-xl font-semibold text-center mb-6 text-blue-600">
                Flexible options for schools, organizations, and media outlets.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {/* Package 1: Digital Literacy Training */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-200">
                  <h3 className="text-2xl font-bold mb-4" style={{ color: '#120452' }}>Digital Literacy Training</h3>
                  <p className="text-lg text-gray-600 mb-2">(For Corporations & NGOs)</p>
                  <p className="text-4xl font-bold text-blue-600 mb-6">₦150,000<span className="text-lg text-gray-500">/session ($100 USD)</span></p>
                  <ul className="text-left space-y-3 text-gray-700 mb-8">
                    <li>✓ On-site workshop</li>
                    <li>✓ Up to 50 participants</li>
                    <li>✓ Custom training materials</li>
                    <li>✓ Certificate of Participation</li>
                  </ul>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button 
                        className="w-full bg-orange-600 hover:bg-orange-700 text-white flex items-center justify-center gap-2"
                        onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                        aria-label="Request a quote for Digital Literacy Training"
                      >
                        <Mail className="w-5 h-5" aria-hidden="true" />
                        Contact for Quote
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Get a customized quote for your organization's digital literacy needs</p>
                    </TooltipContent>
                  </Tooltip>
                </div>

                {/* Package 2: Background Verification (Most Popular) */}
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl shadow-xl p-8 border-2 border-orange-300 hover:border-orange-400 transition-all duration-200 transform scale-105 relative">
                  <div className="bg-orange-400 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block absolute -top-4 left-1/2 -translate-x-1/2">Most Popular</div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: '#120452' }}>Background Verification</h3>
                  <p className="text-lg text-gray-600 mb-2">(For Employers)</p>
                  <p className="text-4xl font-bold text-orange-600 mb-6">₦25,000<span className="text-lg text-gray-500">/check ($17 USD)</span></p>
                  <ul className="text-left space-y-3 text-gray-700 mb-8">
                    <li>✓ Shariah-compliant process</li>
                    <li>✓ Credential verification</li>
                    <li>✓ Character reference checks</li>
                    <li>✓ Confidential report</li>
                  </ul>
                  <Button 
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white flex items-center justify-center gap-2"
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                    aria-label="Request a quote for Background Verification"
                  >
                    <Mail className="w-5 h-5" aria-hidden="true" />
                    Contact for Quote
                  </Button>
                </div>

                {/* Package 3: Fact-Checking Services */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-200">
                  <h3 className="text-2xl font-bold mb-4" style={{ color: '#120452' }}>Fact-Checking Services</h3>
                  <p className="text-lg text-gray-600 mb-2">(For Media & Organizations)</p>
                  <p className="text-4xl font-bold text-purple-600 mb-6">By Retainer</p>
                  <ul className="text-left space-y-3 text-gray-700 mb-8">
                    <li>✓ Misinformation monitoring</li>
                    <li>✓ Claim verification</li>
                    <li>✓ Detailed reports</li>
                    <li>✓ Priority support</li>
                  </ul>
                  <Button 
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white flex items-center justify-center gap-2"
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                    aria-label="Request a quote for Fact-Checking Services"
                  >
                    <Mail className="w-5 h-5" aria-hidden="true" />
                    Contact for Quote
                  </Button>
                </div>

                

                {/* Package 4: Islamic Media Ethics Training */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-200">
                  <h3 className="text-2xl font-bold mb-4" style={{ color: '#120452' }}>Islamic Media Ethics Training</h3>
                  <p className="text-lg text-gray-600 mb-2">(For Leaders & Media Professionals)</p>
                  <p className="text-4xl font-bold text-green-600 mb-6">Custom</p>
                  <ul className="text-left space-y-3 text-gray-700 mb-8">
                    <li>✓ Executive briefings</li>
                    <li>✓ Policy development</li>
                    <li>✓ Curriculum design</li>
                    <li>✓ Strategic advisory</li>
                  </ul>
                  <Button 
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white flex items-center justify-center gap-2"
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                    aria-label="Request a quote for Islamic Media Ethics Training"
                  >
                    <Mail className="w-5 h-5" aria-hidden="true" />
                    Contact for Quote
                  </Button>
                </div>
              </div>
            </div>
          </section>
          



          {/* Testimonials Section */}
          <section id="testimonials" className="py-20 px-4">
            <div className="container mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#120452' }}>
                Testimonials
              </h1>
              <div className="w-60 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto my-6 mb-6"></div>
              <p className="text-xl font-semibold mb-6 text-blue-600 max-w-3xl mx-auto">
                Hear from our clients about their experience with our Islamic fact-checking and ethical information management services
              </p>
              <p className="text-lg text-blue-600 max-w-4xl lg:ml-35 leading-relaxed">
                From academic institutions to religious organizations, our clients trust us to provide 
                authentic,<br></br> reliable, and Islamically-grounded information verification services.
              </p>
            </div>
          </section>

          <section className="py-16 relative bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50">
            
            {/* Background decoration */}
            <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-slate-100/50 via-blue-100/30 to-orange-100/30 backdrop-blur-sm"></div>
            
            {/* Statistics Section */}
            <div className="container mx-auto px-4 relative z-10">
              <div className="grid md:grid-cols-4 gap-8 mb-20">
                <div className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-200">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-4xl font-bold text-gray-800 mb-2">98%</h3>
                  <p className="text-gray-600">Client Satisfaction Rate</p>
                </div>
                <div className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-200">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-4xl font-bold text-gray-800 mb-2">150+</h3>
                  <p className="text-gray-600">Organizations Served</p>
                </div>
                <div className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-200">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-4xl font-bold text-gray-800 mb-2">500+</h3>
                  <p className="text-gray-600">Professionals Trained</p>
                </div>
                <div className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-200">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-4xl font-bold text-gray-800 mb-2">50+</h3>
                  <p className="text-gray-600">Research Projects</p>
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ color: '#120452' }}>
                What Our Clients Say
              </h2>
              <div className="w-60 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto my-6 mb-6"></div>
              
              {/* Testimonials Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20">
                {/* Original testimonial cards here... */}
                {testimonials.map((testimonial) => (
                  <Card 
                    key={testimonial.id} 
                    className="transition-all duration-200 hover:-translate-y-1"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-2">
                          <Quote className="w-6 h-6 text-blue-500" aria-hidden="true" />
                          <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                            {testimonial.category}
                          </span>
                        </div>
                        <div className="flex space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" aria-hidden="true" />
                          ))}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-6 leading-relaxed italic">
                        "{testimonial.testimonial}"
                      </p>
                    </CardContent>
                    <CardFooter className="flex flex-col items-start border-t">
                      <h4 className="font-semibold text-gray-800 text-lg">{testimonial.name}</h4>
                      <p className="text-blue-600 font-medium">{testimonial.position}</p>
                      <p className="text-gray-500 text-sm">{testimonial.organization}</p>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              

              {/* Call to Action */}
              <div className="text-center bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl p-12 mb-20">
                <div className="lg:w-250 lg:h-[3px] lg:bg-gradient-to-r from-blue-800 to-orange-800 mt-0 mx-auto mb-20"></div>
                <h2 className="text-4xl font-bold text-gray-800 mb-8">Join Our Satisfied Clients</h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Experience the difference that authentic Islamic fact-checking and ethical information management can make for your organization.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://wa.me/2349165067261"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
                    aria-label="Contact us on WhatsApp"
                  >
                    <svg width="20" height="20" fill="currentColor" className="w-5 h-5">
                      <path d="M17.472 14.382c-0.297-0.149-1.758-0.867-2.03-0.967-0.273-0.099-0.472-0.149-0.67 0.149-0.198 0.297-0.767 0.967-0.94 1.166-0.173 0.198-0.347 0.223-0.644 0.074-0.297-0.149-1.255-0.463-2.39-1.475-0.883-0.788-1.48-1.761-1.653-2.059-0.173-0.297-0.018-0.458 0.13-0.606 0.134-0.133 0.298-0.347 0.447-0.52 0.149-0.173 0.198-0.297 0.298-0.495 0.099-0.198 0.05-0.372-0.025-0.521-0.074-0.149-0.67-1.611-0.917-2.207-0.242-0.579-0.487-0.5-0.67-0.51-0.173-0.008-0.372-0.008-0.571-0.008s-0.521 0.074-0.795 0.372c-0.273 0.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.877 1.213 3.075 0.149 0.198 2.099 3.205 5.077 4.372 0.711 0.306 1.264 0.489 1.697 0.625 0.713 0.227 1.362 0.195 1.875 0.118 0.572-0.085 1.758-0.719 2.007-1.413 0.248-0.694 0.248-1.288 0.173-1.413-0.074-0.124-0.272-0.198-0.57-0.347z"/>
                    </svg>
                    Get Started Today
                  </a>
                  <button 
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                    className="border-2 border-orange-400 text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-full text-lg transition-all duration-200 flex items-center justify-center gap-2"
                    aria-label="Schedule a consultation"
                  >
                    <Mail className="w-5 h-5" aria-hidden="true" />
                    Schedule Consultation
                  </button>
                </div>
              </div>

              {/* Client Categories */}
              <div className="mb-12">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">We Serve Diverse Organizations</h2>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-200">
                    <BookOpen className="w-12 h-12 text-blue-500 mx-auto mb-4" aria-hidden="true" />
                    <h3 className="font-semibold text-gray-800 mb-2">Academic Institutions</h3>
                    <p className="text-gray-600 text-sm">Universities, research centers, and educational organizations</p>
                  </div>
                  <div className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-200">
                    <Building className="w-12 h-12 text-orange-500 mx-auto mb-4" aria-hidden="true" />
                    <h3 className="font-semibold text-gray-800 mb-2">Religious Organizations</h3>
                    <p className="text-gray-600 text-sm">Mosques, Islamic centers, and religious institutions</p>
                  </div>
                  <div className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-200">
                    <Users className="w-12 h-12 text-purple-500 mx-auto mb-4" aria-hidden="true" />
                    <h3 className="font-semibold text-gray-800 mb-2">NGOs & Nonprofits</h3>
                    <p className="text-gray-600 text-sm">Community organizations and charitable foundations</p>
                  </div>
                  <div className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-200">
                    <Star className="w-12 h-12 text-green-500 mx-auto mb-4" aria-hidden="true" />
                    <h3 className="font-semibold text-gray-800 mb-2">Media Organizations</h3>
                    <p className="text-gray-600 text-sm">News outlets, publishing houses, and media companies</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-16 bg-gradient-to-r from-blue-200 to-orange-200">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ color: '#120452' }}>Get in Touch</h2>
              <div className="w-60 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto my-6 mb-6"></div>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-4xl font-semibold text-blue-600 mb-6">Contact Information</h3>
                  <div className="w-60 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto my-6 mb-6"></div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 mt-15">
                      <MapPin className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Address</h4>
                        <p className="text-gray-600 text-lg">Suite 2, Yusuf SK Shopping Complex,<br />Beside Federal Secretariat, Fate Road,<br />Ilorin, Kwara State, Nigeria</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 mt-12">
                      <Phone className="w-5 h-5 text-green-500 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Phone</h4>
                        <p className="text-gray-600 text-lg">+234 916 506 7261</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <h4 className="font-semibold text-gray-800 text-lg">Email</h4>
                        <p className="text-gray-600 text-lg">esanadconsult@gmail.com</p>
                      </div>
                    </div>
                    {/* Social Media Handles */}
                    <div className="flex flex-wrap items-center gap-3 mt-2">
                      <a href="https://www.facebook.com/share/19btist2pX/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 flex items-center space-x-1" aria-label="Facebook"><svg width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M18 0H2C0.9 0 0 0.9 0 2V18C0 19.1 0.9 20 2 20H10V12H8V9.5H10V8C10 6.3 11.3 5 13 5H15V7.5H13C12.7 7.5 12.5 7.7 12.5 8V9.5H15L14.5 12H12.5V20H18C19.1 20 20 19.1 20 18V2C20 0.9 19.1 0 18 0Z"/></svg>Facebook</a>
                      <a href="https://wa.me/2349165067261" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 flex items-center space-x-1" aria-label="WhatsApp"><svg width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-0.297-0.149-1.758-0.867-2.03-0.967-0.273-0.099-0.472-0.149-0.67 0.149-0.198 0.297-0.767 0.967-0.94 1.166-0.173 0.198-0.347 0.223-0.644 0.074-0.297-0.149-1.255-0.463-2.39-1.475-0.883-0.788-1.48-1.761-1.653-2.059-0.173-0.297-0.018-0.458 0.13-0.606 0.134-0.133 0.298-0.347 0.447-0.52 0.149-0.173 0.198-0.297 0.298-0.495 0.099-0.198 0.05-0.372-0.025-0.521-0.074-0.149-0.67-1.611-0.917-2.207-0.242-0.579-0.487-0.5-0.67-0.51-0.173-0.008-0.372-0.008-0.571-0.008s-0.521 0.074-0.795 0.372c-0.273 0.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.877 1.213 3.075 0.149 0.198 2.099 3.205 5.077 4.372 0.711 0.306 1.264 0.489 1.697 0.625 0.713 0.227 1.362 0.195 1.875 0.118 0.572-0.085 1.758-0.719 2.007-1.413 0.248-0.694 0.248-1.288 0.173-1.413-0.074-0.124-0.272-0.198-0.57-0.347z"/></svg>WhatsApp</a>
                      <a href="tiktok.com/@esanad.media" target="_blank" rel="noopener noreferrer" className="hover:text-black flex items-center space-x-1" aria-label="TikTok"><svg width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M17.5 6.5c-1.4 0-2.5-1.1-2.5-2.5V1h-2v12c0 1.1-0.9 2-2 2s-2-0.9-2-2 0.9-2 2-2c0.2 0 0.4 0 0.5 0.1V8.5c-0.2 0-0.3 0-0.5 0-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4V8.5c0.2 0 0.3 0 0.5 0 1.4 0 2.5-1.1 2.5-2.5z"/></svg>TikTok</a>
                      <a href="https://x.com/esanadmedia?t=nFACRZo5jYGstKtEXsK2tA&s=09" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 flex items-center space-x-1" aria-label="X (Twitter)"><svg width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M20 3.924c-0.735 0.326-1.523 0.547-2.352 0.646 0.846-0.507 1.497-1.311 1.803-2.269-0.792 0.47-1.67 0.812-2.604 0.997-0.748-0.797-1.815-1.295-2.995-1.295-2.267 0-4.106 1.839-4.106 4.106 0 0.322 0.036 0.636 0.106 0.936-3.414-0.171-6.44-1.808-8.466-4.297-0.354 0.607-0.557 1.312-0.557 2.065 0 1.425 0.726 2.683 1.832 3.422-0.674-0.021-1.308-0.206-1.863-0.515v0.052c0 1.991 1.417 3.652 3.299 4.029-0.345 0.094-0.709 0.145-1.085 0.145-0.266 0-0.522-0.026-0.773-0.074 0.523 1.632 2.037 2.822 3.834 2.854-1.404 1.1-3.174 1.757-5.099 1.757-0.332 0-0.659-0.019-0.981-0.057 1.818 1.166 3.981 1.847 6.307 1.847 7.569 0 11.719-6.273 11.719-11.719 0-0.179-0.004-0.357-0.012-0.534z"/></svg>X</a>
                      <a href="https://www.instagram.com/esanad.academy/profilecard/?igsh=ZzZ3aWI1MmJiaTZr" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 flex items-center space-x-1" aria-label="Instagram"><svg width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M10 2.2c2.7 0 3 .01 4.1.06 1.1.05 1.7.22 2.1.36.5.2.9.44 1.3.84.4.4.64.8.84 1.3.14.4.31 1 .36 2.1.05 1.1.06 1.4.06 4.1s-.01 3-.06 4.1c-.05 1.1-.22 1.7-.36 2.1-.2.5-.44.9-.84 1.3-.4.4-.8.64-1.3.84-.4.14-1 .31-2.1.36-1.1.05-1.4.06-4.1.06s-3-.01-4.1-.06c-1.1-.05-1.7-.22-2.1-.36-.5-.2-.9-.44-1.3-.84-.4-.4-.64-.8-.84-1.3-.14-.4-.31-1-.36-2.1C2.21 13.1 2.2 12.8 2.2 10s.01-3 .06-4.1c.05-1.1.22-1.7.36-2.1.2-.5.44-.9.84-1.3.4-.4.8-.64 1.3-.84.4-.14 1-.31-2.1-.36C7 2.21 7.3 2.2 10 2.2zm0-2.2C7.26 0 6.96.01 5.86.06 4.75.11 4.02.28 3.4.5c-.62.22-1.15.51-1.68 1.04-.53.53-.82 1.06-1.04 1.68-.22.62-.39 1.35-.44 2.46C.01 6.96 0 7.26 0 10c0 2.74.01 3.04.06 4.14.05 1.11.22 1.84.44 2.46.22.62.51 1.15 1.04 1.68.53.53 1.06.82 1.68 1.04.62.22 1.35.39 2.46.44C6.96 19.99 7.26 20 10 20c2.74 0 3.04-.01 4.14-.06 1.11-.05 1.84-.22 2.46-.44.62-.22 1.15-.51 1.68-1.04.53-.53.82-1.06 1.04-1.68.22-.62.39-1.35.44-2.46.05-1.1.06-1.4.06-4.14 0-2.74-.01-3.04-.06-4.14-.05-1.11-.22-1.84-.44-2.46-.22-.62-.51-1.15-1.04-1.68-.53-.53-1.06-.82-1.68-1.04-.62-.22-1.35-.39-2.46-.44C13.04.01 12.74 0 10 0z"/><circle cx="10" cy="10" r="3.5"/><circle cx="15.5" cy="4.5" r="1"/></svg>Instagram</a>
                      <a href="https://youtube.com/@esanadmedia?si=R_0cUWRKcMczAM5B" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 flex items-center space-x-1" aria-label="YouTube"><svg width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M19.615 5.184c-.215-.81-.85-1.445-1.66-1.66C16.345 3.2 10 3.2 10 3.2s-6.345 0-7.955.324c-.81.215-1.445.85-1.66 1.66C.06 6.794.06 10 .06 10s0 3.206.324 4.816c.215.81.85 1.445 1.66 1.66C3.655 16.8 10 16.8 10 16.8s6.345 0 7.955-.324c.81-.215 1.445-.85 1.66-1.66.324-1.61.324-4.816.324-4.816s0-3.206-.324-4.816zM8.2 13.2V6.8l6.4 3.2-6.4 3.2z"/></svg>YouTube</a>
                    </div>
                  </div>
                </div>
                {/* Contact Form */}
                <div className="bg-gradient-to-br from-blue-100 via-orange-50 to-slate-100 rounded-xl p-6 shadow-lg">
                  <h3 className="text-2xl font-semibold mb-6" style={{ color: '#120452' }}>Send Us a Message</h3>
                  <form className="space-y-4 text-left" onSubmit={handleSubmit}>
                    <label className="block mb-1 font-semibold" style={{ color: '#120452' }}>Name</label>
                    <input 
                      name="name" 
                      type="text" 
                      placeholder="Name" 
                      value={form.name} 
                      onChange={handleChange} 
                      required 
                      className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white" 
                      aria-label="Your name"
                    />
                    <label className="block mb-1 font-semibold" style={{ color: '#120452' }}>Email</label>
                    <input 
                      name="email" 
                      type="email" 
                      placeholder="Email" 
                      value={form.email} 
                      onChange={handleChange} 
                      required 
                      className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white" 
                      aria-label="Your email address"
                    />
                    <label className="block mb-1 font-semibold" style={{ color: '#120452' }}>Phone</label>
                    <input 
                      name="phone" 
                      type="tel" 
                      placeholder="Phone" 
                      value={form.phone} 
                      onChange={handleChange} 
                      className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white" 
                      aria-label="Your phone number (optional)"
                    />
                    <label className="block mb-1 font-semibold" style={{ color: '#120452' }}>Subject</label>
                    <input 
                      name="subject" 
                      type="text" 
                      placeholder="Subject" 
                      value={form.subject} 
                      onChange={handleChange} 
                      required 
                      className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white" 
                      aria-label="Message subject"
                    />
                    <label className="block mb-1 font-semibold" style={{ color: '#120452' }}>Message</label>
                    <textarea 
                      name="message" 
                      placeholder="Message" 
                      rows="5" 
                      value={form.message} 
                      onChange={handleChange} 
                      required 
                      className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white" 
                      aria-label="Your message"
                    />
                    <button type="submit" disabled={loading} className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 rounded shadow transition-all duration-300 ease-in-out hover:scale-105">
                      {loading ? 'Sending...' : 'Send Message'}
                    </button>
                    {feedback && (
                      <div className={`mt-3 text-center font-semibold ${feedback.includes('success') ? 'text-green-600' : 'text-red-600'}`}>{feedback}</div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* Newsletter Section */}
          <section id="newsletter" className="py-16 bg-gradient-to-r from-blue-50 to-orange-50">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ color: '#120452' }}>
                Subscribe to Our Newsletter
              </h2>
              <div className="w-60 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto my-6 mb-6"></div>
              <p className="text-xl font-semibold text-center mb-6 text-blue-600">
                Stay updated with the latest insights on Islamic fact-checking and ethical information management
              </p>
              
              <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
                <div className="mb-6 text-center">
                  <p className="text-gray-700">
                    Join our community of scholars, researchers, and professionals committed to upholding truth and integrity in information.
                  </p>
                </div>
                
                {/* Newsletter Form */}
                
                <form 
                  action="https://formspree.io/f/mdklanvr" 
                  method="POST"
                  className="space-y-4"
                  onSubmit={useCallback((e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target);
                    fetch('https://formspree.io/f/mdklanvr', {
                      method: 'POST',
                      body: formData,
                      headers: {
                        'Accept': 'application/json'
                      }
                    })
                    .then(response => {
                      if (response.ok) {
                        // Reset form
                        e.target.reset();
                        // Show success message
                        setShowModal(true);
                      } else {
                        throw new Error('Network response was not ok');
                      }
                    })
                    .catch(error => {
                      console.error('Error:', error);
                      alert('There was an error submitting the form. Please try again.');
                    });
                  }, [setShowModal])}
                >
                  <input type="hidden" name="form-type" value="newsletter" />
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <input 
                        type="email" 
                        name="email" 
                        placeholder="Your email address" 
                        required 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        aria-label="Your email address for newsletter subscription"
                      />
                    </div>
                    <div>
                      <button 
                        type="submit" 
                        className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                        aria-label="Subscribe to newsletter"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-600 mt-4">
                    <label className="flex items-start gap-2">
                      <input type="checkbox" required className="mt-1" aria-label="Agree to receive newsletters" />
                      <span>
                        I agree to receive email newsletters and updates from Esanad Consult.<br></br>
                        We respect your privacy and will never share your information.
                      </span>
                    </label>
                  </div>
                </form>
                
                <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                  <p className="text-sm text-gray-600">
                    You can unsubscribe at any time by clicking the link in the footer of our emails.
                  </p>
                </div>
              </div>
              
            </div>
            
          </section>


      </main>
    </div>
  );
}

export default App;
