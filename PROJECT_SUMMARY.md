# Esanad Consult Limited - Web Application

## Project Overview
A modern, responsive React web application built for Esanad Consult Limited, an Islamic fact-checking and ethical information management organization based in Ilorin, Kwara State, Nigeria.

## Features Implemented

### 1. Sliding Text Headers
- **Top Banner**: Orange gradient background with shield icon, sliding right-to-left
  - Text: "Protecting the truth and trust with modern technology inspired by the timeless Islamic principles of isnad (authentic chain of verification)"
- **Location Banner**: Blue gradient background with map pin icon, sliding left-to-right
  - Text: Complete contact information including address, phone, and email

### 2. Navigation Menu
- **Logo Integration**: Company logo positioned on the left side
- **Backdrop Filter**: Modern glass-morphism effect with blur
- **Menu Items**: Home, About Us, Services, Publications, Contact Us, Pricing
- **Smart Navigation**: Pages (About, Services, Publications) route to separate pages; sections (Contact, Pricing) scroll to home page sections
- **Get in Touch Button**: Orange gradient button on the right side

### 3. Pages Created
- **Home Page**: Hero section, services preview, contact section, pricing plans
- **About Us Page**: Mission, vision, core values, methodology explanation
- **Services Page**: Detailed service offerings with 6 main categories
- **Publications Page**: Research papers, filtering system, newsletter signup

### 4. Design & Styling
- **Brand Colors**: Light blue, light navy blue, light orange based on company logo
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Cards, gradients, shadows, hover effects, smooth transitions
- **Typography**: Clear hierarchy with appropriate font sizes and weights

### 5. Contact Information Integration
- **Complete Address**: Suite 2, Yusuf SK Shopping Complex, Beside Federal Secretariat, Fate Road, Ilorin, Kwara State, Nigeria
- **Phone**: +234 916 506 7261
- **Email**: esanadconsult@gmail.com
- **Icons**: Appropriate Lucide React icons for each contact method

## Technical Stack
- **Frontend**: React 18 with JSX
- **Styling**: Tailwind CSS with custom animations
- **Icons**: Lucide React
- **UI Components**: shadcn/ui
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Package Manager**: pnpm

## File Structure
```
esanad-consult-app/
├── public/
├── src/
│   ├── assets/
│   │   └── logo.png
│   ├── components/
│   │   ├── ui/
│   │   ├── Navigation.jsx
│   │   └── SlidingText.jsx
│   ├── pages/
│   │   ├── AboutUs.jsx
│   │   ├── Services.jsx
│   │   └── Publications.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── AppRouter.jsx
│   └── main.jsx
├── package.json
└── PROJECT_SUMMARY.md
```

## Key Features
1. **Sliding Text Animations**: Smooth marquee effects with company messaging
2. **Responsive Navigation**: Works on desktop and mobile devices
3. **Multi-page Application**: Proper routing between different sections
4. **Islamic Branding**: Incorporates Islamic principles and terminology
5. **Professional Design**: Modern, clean, and trustworthy appearance
6. **Contact Integration**: Multiple ways to reach the organization
7. **Service Showcase**: Comprehensive display of offerings
8. **Research Publications**: Academic credibility through publications section

## Running the Application
1. Navigate to the project directory: `cd esanad-consult-app`
2. Install dependencies: `pnpm install`
3. Start development server: `pnpm run dev`
4. Open browser to: `http://localhost:5173`

## Deployment Ready
The application is fully functional and ready for deployment to any modern web hosting platform that supports React applications.

## Brand Compliance
- Uses official company logo
- Incorporates brand colors (purple, orange, blue)
- Maintains professional Islamic business aesthetic
- Includes all required contact information
- Emphasizes Islamic principles and methodology

