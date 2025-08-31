import React from 'react';
import { Users, BookOpen, Award, Linkedin, Mail, Phone, MapPin, Briefcase, Clipboard, Projector } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Prof. Abdulwahab Muhammad Jamiu",
      position: "Chairman, Board of Directors",
      education: "HOD of Islamic Law, Kwara State University",
      specialization: "Islamic Law",
      experience: "",
      image: "/api/placeholder/300/300",
      bio: "Prof. Abdulwahab Muhammad Jamiu is the Head of Department of Islamic Law at Kwara State University and serves as the Chairman of our Board of Directors.",
      icon: Award
    },
    {
      name: "Mr. Abdulganiy Yusuf Opeyemi",
      position: "CEO & Founder",
      education: "Researcher, University of Ilorin",
      specialization: "Islamic studies, misinformation analysis, and ethical information systems",
      experience: "",
      image: "/api/placeholder/300/300",
      bio: "Mr. Abdulganiy Yusuf Opeyemi is the CEO and Founder of Esanad Consult. He is a researcher at the University of Ilorin, specializing in Islamic studies, misinformation analysis, and ethical information systems.",
      icon: Briefcase
    },
    {
      name: "Mrs. Akinsola Busirat Motunrayo",
      position: "Secretary, Board of Directors",
      education: "",
      specialization: "Skilled administrator with a background in educational and social projects",
      experience: "",
      image: "/api/placeholder/300/300",
      bio: "Mrs. Akinsola Busirat Motunrayo serves as the Secretary of our Board of Directors. She is a skilled administrator with a strong background in educational and social projects.",
      icon: Clipboard
    },
    {
      name: "Mr. Ridwan Bolaji",
      position: "Project Manager, Esanad Academy",
      education: "",
      specialization: "Coordinates training programs and partnerships",
      experience: "",
      image: "/api/placeholder/300/300",
      bio: "Mr. Ridwan Bolaji is the Project Manager for Esanad Academy, responsible for coordinating our training programs and partnerships.",
      icon: Projector
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#120452' }}>
            Meet Our Experts in Islamic Fact-Checking & Media Ethics
          </h1>
          <div className="w-60 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto my-6 mb-6"></div>
          <p className="text-xl font-semibold text-blue-600 mb-6 max-w-3xl mx-auto">
            Leadership rooted in scholarship, experience, and integrity.
          </p>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Our multidisciplinary team combines deep Islamic scholarship with modern technological expertise 
            to provide authentic, reliable fact-checking and ethical information management services.
          </p>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                      {member.icon && <member.icon className="w-16 h-16 text-white" />}
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{member.name}</h3>
                    <p className="text-lg font-semibold text-blue-600 mb-3">{member.position}</p>
                    
                    <div className="space-y-2 mb-4">
                      {member.education && (
                        <div className="flex items-start space-x-2">
                          <BookOpen className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{member.education}</span>
                        </div>
                      )}
                      {member.specialization && (
                        <div className="flex items-start space-x-2">
                          <Award className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{member.specialization}</span>
                        </div>
                      )}
                      {member.experience && (
                        <div className="flex items-start space-x-2">
                          <Users className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{member.experience}</span>
                        </div>
                      )}
                    </div>
                    
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">{member.bio}</p>
                    
                    <div className="flex space-x-3">
                      <button className="p-2 bg-blue-100 hover:bg-blue-200 rounded-full transition-colors duration-200">
                        <Mail className="w-4 h-4 text-blue-600" />
                      </button>
                      <button className="p-2 bg-blue-100 hover:bg-blue-200 rounded-full transition-colors duration-200">
                        <Linkedin className="w-4 h-4 text-blue-600" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



     
    </div>
  );
};

export default Team;

