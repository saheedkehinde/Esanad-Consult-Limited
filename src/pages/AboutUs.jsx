import React from 'react';
import { Shield, Eye, Target, CheckCircle, Users, BookOpen, Award, MapPin, Phone, Mail } from 'lucide-react';
import rollupImage from '../assets/rollup-design.jpg';

const AboutUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#120452' }}>
            About Esanad Consult Ltd
          </h1>
          <div className="w-60 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto my-6 mb-6"></div>
          <p className="text-xl font-semibold text-blue-600 mb-6">
            Ethical Information Management Experts
          </p>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            At Esanad Consult Ltd, we specialize in ethical information management, Islamic fact-checking, 
            and Shariah-compliant verification services. Guided by Islamic principles and powered by advanced 
            technology, we help individuals, institutions, organizations, and governments protect their data, 
            combat misinformation, and communicate with integrity.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img 
                  src={rollupImage} 
                  alt="E-Sanad Academy - Apply the Isnad System to Fight Fake News" 
                  className="w-full rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              </div>
            </div>

            {/* Right Column - Vision & Mission */}
            <div className="order-1 lg:order-2 space-y-20">
              {/* Our Vision */}
              <div className="bg-white rounded-xl shadow-lg p-15 py-50 space-y-20 hover:shadow-xl transition-all duration-200">
                <div className="flex items-center ">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl lg:text-5xl  font-bold text-gray-800">Our Vision</h2>
                </div>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mb-6"></div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To be the world's leading provider of ethical, Shariah-compliant information management 
                  solutions that are technologically advanced, morally sound, and universally trusted.
                </p>
              </div>

              {/* Our Mission */}
              <div className="bg-white rounded-xl shadow-lg p-15 py-50 space-y-20 hover:shadow-xl transition-all duration-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
                </div>
                <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mb-6"></div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To ensure that information serves as a valuable, secure, and ethically managed asset—empowering 
                  people and organizations to act responsibly in the digital age.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Divider */}
      <div className="py-8">
        <div className="container mx-auto px-4">
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>
      </div>

      {/* Core Values Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ color: '#120452' }}>Our Core Values</h2>
          <div className="w-60 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto my-6 mb-6"></div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Integrity</h3>
              <p className="text-gray-600 leading-relaxed">
                We uphold the highest standards of honesty and moral principles in all our operations, 
                ensuring that truth and authenticity guide every decision we make.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Authenticity</h3>
              <p className="text-gray-600 leading-relaxed">
                Rooted in the Islamic principle of Isnad, we verify information through rigorous 
                authentication processes that honor traditional scholarship while embracing modern technology.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Responsibility</h3>
              <p className="text-gray-600 leading-relaxed">
                We take responsibility for protecting communities from misinformation and empowering 
                individuals and organizations to make informed, ethical decisions in the digital age.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ color: '#120452' }}>What Sets Us Apart</h2>
          <div className="w-60 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto my-6 mb-6"></div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="flex items-center mb-6">
                <BookOpen className="w-8 h-8 text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-800">Islamic Scholarship Foundation</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Our methodology is deeply rooted in traditional Islamic sciences, particularly the science of 
                Isnad (chain of transmission), which has been used for over 1,400 years to verify the 
                authenticity of information.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 text-orange-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-800">Modern Technology Integration</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We seamlessly blend traditional verification methods with cutting-edge AI and machine learning 
                technologies to provide comprehensive, efficient, and accurate fact-checking services.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-purple-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-800">Ethical Framework</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                All our services are guided by Islamic ethical principles, ensuring that our work not only 
                meets technical standards but also adheres to moral and spiritual guidelines.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="flex items-center mb-6">
                <Users className="w-8 h-8 text-green-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-800">Community-Centered Approach</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We understand the unique challenges facing Muslim communities and organizations, providing 
                culturally sensitive and contextually appropriate information management solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learn More Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-orange-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ color: '#120452' }}>Ready to Learn More?</h2>
          <div className="w-60 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto my-6 mb-6"></div>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover how our ethical information management and Islamic fact-checking services can benefit 
            your organization. Contact us today for a consultation.
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 text-white px-12 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
            Learn More
          </button>
        </div>
      </section>

      {/* Horizontal Divider */}
      <div className="py-8">
        <div className="container mx-auto px-4">
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>
      </div>

      
    </div>
  );
};

export default AboutUs;

