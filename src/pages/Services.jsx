import React from 'react';
import { Shield, Users, FileText, Search, BookOpen, Zap, Globe, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Islamic Fact Checking",
      description: "Comprehensive verification of information using Islamic principles of authentication",
      features: [
        "Hadith verification and authentication",
        "Islamic content fact-checking",
        "Religious claim verification",
        "Source authenticity validation"
      ],
      color: "from-blue-400 to-blue-500"
    },
    {
      icon: Users,
      title: "Ethical Information Management",
      description: "Information management solutions guided by Islamic ethical frameworks",
      features: [
        "Content moderation policies",
        "Ethical guidelines development",
        "Information governance consulting",
        "Digital ethics training"
      ],
      color: "from-orange-400 to-orange-500"
    },
    {
      icon: Search,
      title: "Research & Analysis",
      description: "In-depth research and analysis on information integrity and Islamic scholarship",
      features: [
        "Academic research projects",
        "Information integrity studies",
        "Islamic scholarship analysis",
        "Custom research reports"
      ],
      color: "from-purple-400 to-purple-500"
    },
    {
      icon: BookOpen,
      title: "Educational Services",
      description: "Training and educational programs on Islamic fact-checking methodologies",
      features: [
        "Isnad methodology training",
        "Fact-checking workshops",
        "Islamic research methods",
        "Digital literacy programs"
      ],
      color: "from-green-400 to-green-500"
    },
    {
      icon: Globe,
      title: "Digital Monitoring",
      description: "Real-time monitoring of digital content for misinformation and harmful content",
      features: [
        "Social media monitoring",
        "News verification services",
        "Misinformation tracking",
        "Alert systems"
      ],
      color: "from-red-400 to-red-500"
    },
    {
      icon: Zap,
      title: "Technology Solutions",
      description: "Advanced technological tools for automated fact-checking and content analysis",
      features: [
        "AI-powered fact-checking tools",
        "Content analysis platforms",
        "Automated verification systems",
        "Custom software development"
      ],
      color: "from-indigo-400 to-indigo-500"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#120452' }}>
            Our Services
          </h1>
          <div className="w-60 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto my-6 mb-6"></div>
          <p className="text-xl font-semibold text-blue-600 mb-6 max-w-3xl mx-auto">
            Comprehensive Islamic fact-checking and ethical information management solutions
          </p>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            We offer a complete suite of services designed to protect truth and trust in the digital age, 
            all grounded in authentic Islamic principles and modern technological capabilities.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 p-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ color: '#120452' }}>Our Process</h2>
          <div className="w-60 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto my-6 mb-6"></div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <h3 className="font-semibold text-gray-800 mb-2">Assessment</h3>
                <p className="text-gray-600 text-sm">Initial evaluation of information and sources</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <h3 className="font-semibold text-gray-800 mb-2">Verification</h3>
                <p className="text-gray-600 text-sm">Rigorous fact-checking using Isnad methodology</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <h3 className="font-semibold text-gray-800 mb-2">Analysis</h3>
                <p className="text-gray-600 text-sm">Comprehensive analysis and documentation</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                <h3 className="font-semibold text-gray-800 mb-2">Reporting</h3>
                <p className="text-gray-600 text-sm">Detailed reports and recommendations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-orange-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ color: '#120452' }}>Ready to Get Started?</h2>
          <div className="w-60 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto my-6 mb-6"></div>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our Islamic fact-checking and ethical information management services can benefit your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-200">
              Get a Quote
            </Button>
            <Button variant="outline" className="border-2 border-orange-400 text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-full text-lg transition-all duration-200">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Services;

