import React from 'react';
import { Shield, MapPin } from 'lucide-react';

const SlidingText = ({ text, direction = 'right-to-left', backgroundColor, icon: Icon }) => {
  const animationClass = direction === 'right-to-left' 
    ? 'animate-marquee-right' 
    : 'animate-marquee-left';

  return (
    <div className={`w-full overflow-hidden ${backgroundColor} py-3 relative`}>
      <div className={`flex items-center whitespace-nowrap ${animationClass}`}>
        <div className="flex items-center space-x-3 text-white font-medium">
          {Icon && <Icon className="w-5 h-5" />}
          <span className="text-sm md:text-base">{text}</span>
        </div>
      </div>
    </div>
  );
};

export const TruthSlider = () => (
  <SlidingText 
    text="Protecting the truth and trust with modern technology inspired by the timeless Islamic principles of isnad (authentic chain of verification)"
    direction="right-to-left"
    backgroundColor="bg-gradient-to-r from-orange-500 to-orange-400"
    icon={Shield}
  />
);

export const LocationSlider = () => (
  <SlidingText 
    text="Suite 2, Yusuf SK Shopping Complex, Beside Federal Secretariat, Fate Road, Ilorin, Kwara State, Nigeria | Phone: +234 916 506 7261 | Email: esanadconsult@gmail.com"
    direction="left-to-right"
    backgroundColor="bg-gradient-to-r from-blue-900 to-blue-800"
    icon={MapPin}
  />
);

export default SlidingText;

