import React, { useState } from 'react';
import { FileText, BookOpen, Download, Calendar, User, Tag, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
const Publications = () => {
  const publications = [
    {
      title: "The Digital Isnad: Applying Classical Islamic Verification Methods to Modern Information",
      authors: ["Dr. Ahmad Hassan", "Prof. Fatima Al-Zahra"],
      date: "2024",
      type: "Research Paper",
      category: "Methodology",
      abstract: "This paper explores how the traditional Islamic science of Isnad can be adapted and applied to verify information in the digital age, providing a framework for Islamic fact-checking methodologies.",
      tags: ["Isnad", "Digital Verification", "Islamic Methodology"]
    },
    {
      title: "Combating Misinformation in Muslim Communities: An Ethical Framework",
      authors: ["Dr. Yusuf Ibrahim", "Dr. Aisha Mohammed"],
      date: "2024",
      type: "Journal Article",
      category: "Ethics",
      abstract: "An examination of misinformation's impact on Muslim communities and the development of an ethical framework based on Islamic principles for addressing false information.",
      tags: ["Misinformation", "Islamic Ethics", "Community Impact"]
    },
    {
      title: "Technology and Truth: Islamic Perspectives on Information Integrity",
      authors: ["Prof. Omar Abdullah", "Dr. Khadija Ali"],
      date: "2023",
      type: "Book Chapter",
      category: "Technology",
      abstract: "This chapter discusses the intersection of technology and Islamic principles in maintaining information integrity, exploring both opportunities and challenges.",
      tags: ["Technology", "Information Integrity", "Islamic Principles"]
    },
    {
      title: "The Role of Scholars in Digital Age Fact-Checking",
      authors: ["Dr. Mahmoud Hassan", "Dr. Zainab Ahmed"],
      date: "2023",
      type: "Conference Paper",
      category: "Scholarship",
      abstract: "An analysis of how Islamic scholars can contribute to fact-checking efforts in the digital age, maintaining traditional scholarly rigor while embracing modern tools.",
      tags: ["Islamic Scholarship", "Digital Age", "Fact-Checking"]
    },
    {
      title: "Ethical Guidelines for Information Management in Islamic Organizations",
      authors: ["Dr. Abdullah Rahman", "Prof. Maryam Khalil"],
      date: "2023",
      type: "White Paper",
      category: "Guidelines",
      abstract: "Comprehensive guidelines for Islamic organizations on ethical information management, covering content creation, verification, and dissemination practices.",
      tags: ["Ethical Guidelines", "Information Management", "Islamic Organizations"]
    },
    {
      title: "Case Studies in Islamic Fact-Checking: Lessons from Practice",
      authors: ["Dr. Hassan Ali", "Dr. Fatima Zahra"],
      date: "2022",
      type: "Case Study",
      category: "Practice",
      abstract: "Real-world case studies demonstrating the application of Islamic fact-checking methodologies, including challenges faced and solutions implemented.",
      tags: ["Case Studies", "Practical Application", "Methodology"]
    }
  ];
  const categories = ["All", "Methodology", "Ethics", "Technology", "Scholarship", "Guidelines", "Practice"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  
  // Newsletter state
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    email: ''
  });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState('');
  const filteredPublications = selectedCategory === "All" 
    ? publications 
    : publications.filter(pub => pub.category === selectedCategory);
    
  // Handle newsletter form submission
  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback('');
    try {
      const formData = new FormData(e.target);
      const response = await fetch('https://formspree.io/f/mdklanvr', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        // Reset form
        e.target.reset();
        setForm({ email: '' });
        // Show success message
        setShowModal(true);
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Error:', error);
      setFeedback('There was an error submitting the form. Please try again.');
    }
    setLoading(false);
  };
  
  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#120452' }}>
            Publications
          </h1>
          <div className="w-60 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto my-6 mb-6"></div>
          <p className="text-xl font-semibold text-blue-600 mb-6 max-w-3xl mx-auto">
            Research, insights, and scholarly work on Islamic fact-checking and ethical information management
          </p>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Our team of scholars and researchers regularly publish academic papers, research studies, and practical 
            guides that advance the field of Islamic fact-checking and ethical information management.
          </p>
        </div>
      </section>
      {/* Success Modal */}
      <AlertDialog open={showModal} onOpenChange={setShowModal}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-green-700">Success!</AlertDialogTitle>
            <AlertDialogDescription>
              Thank you for subscribing to our newsletter. You will now receive updates on our latest publications and research.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction 
              onClick={() => setShowModal(false)}
              className="bg-orange-600 hover:bg-orange-700"
            >
              Close
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
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
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredPublications.map((publication, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <FileText className="w-5 h-5 text-blue-500" />
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {publication.type}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {publication.date}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight">
                  {publication.title}
                </h3>
                
                <div className="flex items-center text-gray-600 text-sm mb-4">
                  <User className="w-4 h-4 mr-2" />
                  {publication.authors.join(", ")}
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {publication.abstract}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {publication.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="flex items-center text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Read More
                  </Button>
                  <Button variant="outline" className="border border-gray-300 text-gray-600 hover:bg-gray-50 px-4 py-2 rounded-lg text-sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ color: '#120452' }}>Our Research Areas</h2>
          <div className="w-60 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto my-6 mb-6"></div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Islamic Methodology</h3>
              <p className="text-gray-600">Research on applying traditional Islamic verification methods to modern contexts</p>
            </div>
            <div className="text-


center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Digital Ethics</h3>
              <p className="text-gray-600">Exploring ethical frameworks for information management in the digital age</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Community Impact</h3>
              <p className="text-gray-600">Studying the effects of misinformation on Muslim communities worldwide</p>
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
              onSubmit={handleNewsletterSubmit}
            >
              <input type="hidden" name="form-type" value="newsletter" />
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Your email address" 
                    value={form.email}
                    onChange={handleChange}
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <button 
                    type="submit" 
                    className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                    disabled={loading}
                  >
                    {loading ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </div>
              </div>
              
              <div className="text-sm text-gray-600 mt-4">
                <label className="flex items-start gap-2">
                  <input type="checkbox" required className="mt-1" />
                  <span>
                    I agree to receive email newsletters and updates from Esanad Consult.<br></br>
                    We respect your privacy and will never share your information.
                  </span>
                </label>
              </div>
              
              {feedback && (
                <div className={`mt-3 text-center font-semibold ${feedback.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
                  {feedback}
                </div>
              )}
            </form>
            
            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-600">
                You can unsubscribe at any time by clicking the link in the footer of our emails.
              </p>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default Publications;

