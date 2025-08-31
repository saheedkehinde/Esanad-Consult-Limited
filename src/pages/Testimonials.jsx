// import React from 'react';
// import { Quote, Star } from 'lucide-react';
// import Navigation from '../components/Navigation';

// const Testimonials = () => {
//   // Using the same testimonials data from App.jsx
//   const testimonials = [
//     {
//       id: 1,
//       name: "Dr. Ibrahim Abdullahi",
//       position: "Director, Islamic Research Institute",
//       organization: "University of Ilorin",
//       rating: 5,
//       testimonial: "Esanad Consult Limited has revolutionized how we approach information verification in our research. Their Islamic methodology combined with modern technology provides unparalleled accuracy and authenticity.",
//       category: "Academic Institution"
//     },
//     {
//       id: 2,
//       name: "Hajiya Fatima Suleiman",
//       position: "Executive Director",
//       organization: "Muslim Women's Council Nigeria",
//       rating: 5,
//       testimonial: "The training programs provided by Esanad Consult have empowered our organization to combat misinformation effectively. Their approach respects our Islamic values while providing practical, modern solutions.",
//       category: "NGO"
//     },
//     {
//       id: 3,
//       name: "Sheikh Muhammad Bello",
//       position: "Chief Imam",
//       organization: "Central Mosque Ilorin",
//       rating: 5,
//       testimonial: "As religious leaders, we face constant challenges with misinformation affecting our communities. Esanad Consult's Isnad-based methodology has given us the tools to verify information authentically.",
//       category: "Religious Organization"
//     },
//     {
//       id: 4,
//       name: "Alhaji Yusuf Adebayo",
//       position: "Managing Director",
//       organization: "Halal Media Network",
//       rating: 5,
//       testimonial: "Working with Esanad Consult has transformed our media operations. Their ethical information management framework has helped us maintain the highest standards of truthfulness and integrity in our reporting.",
//       category: "Media Organization"
//     },
//     {
//       id: 5,
//       name: "Prof. Aisha Mahmoud",
//       position: "Head of Islamic Studies",
//       organization: "Ahmadu Bello University",
//       rating: 5,
//       testimonial: "The research collaboration with Esanad Consult has produced groundbreaking work in digital Islamic scholarship. Their team's expertise in both traditional Islamic sciences and modern technology is remarkable.",
//       category: "Academic Institution"
//     },
//     {
//       id: 6,
//       name: "Ustaz Abdulrahman Isa",
//       position: "Director of Education",
//       organization: "Islamic Education Trust",
//       rating: 5,
//       testimonial: "Esanad Consult's educational programs have equipped our teachers with essential digital literacy skills grounded in Islamic principles. The impact on our educational quality has been tremendous.",
//       category: "Educational Institution"
//     },
//     {
//       id: 7,
//       name: "Dr. Khadijah Olanrewaju",
//       position: "Research Coordinator",
//       organization: "Centre for Islamic Legal Studies",
//       rating: 5,
//       testimonial: "Their fact-checking methodology is scientifically rigorous yet deeply rooted in authentic Islamic scholarship. We've adopted their framework for all our research verification processes.",
//       category: "Research Institution"
//     },
//     {
//       id: 8,
//       name: "Alhaji Musa Yakubu",
//       position: "Chairman",
//       organization: "Northern Nigeria Muslim Forum",
//       rating: 5,
//       testimonial: "Esanad Consult has been instrumental in helping our forum combat harmful misinformation in our communities. Their culturally sensitive approach makes them the perfect partner.",
//       category: "Community Organization"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
//       <Navigation />
      
//       {/* Header Section */}
//       <section className="py-20 px-4">
//         <div className="container mx-auto text-center">
//           <h1 className="text-5xl md:text-6xl font-bold text-[#06086b] mb-6">
//             Client Testimonials
//           </h1>
//           <div className="w-60 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-6"></div>
//           <p className="text-xl text-blue-600 mb-8 max-w-3xl mx-auto">
//             See what our clients say about our Islamic fact-checking and ethical information management services
//           </p>
//         </div>
//       </section>

//       {/* Testimonials Grid */}
//       <section className="py-12 px-4">
//         <div className="container mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {testimonials.map((testimonial) => (
//               <div key={testimonial.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 p-8">
//                 <div className="flex items-start justify-between mb-4">
//                   <div className="flex items-center space-x-2">
//                     <Quote className="w-6 h-6 text-blue-500" />
//                     <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
//                       {testimonial.category}
//                     </span>
//                   </div>
//                   <div className="flex space-x-1">
//                     {[...Array(testimonial.rating)].map((_, i) => (
//                       <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
//                     ))}
//                   </div>
//                 </div>
//                 <p className="text-gray-700 mb-6 leading-relaxed italic">
//                   "{testimonial.testimonial}"
//                 </p>
//                 <div className="border-t pt-4">
//                   <h4 className="font-semibold text-gray-800 text-lg">{testimonial.name}</h4>
//                   <p className="text-blue-600 font-medium">{testimonial.position}</p>
//                   <p className="text-gray-500 text-sm">{testimonial.organization}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Testimonials;
