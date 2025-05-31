import { Project } from './types';

// Import local images with proper naming
import stardustRealEstate from '../../assets/projects/stardust-real-estate.jpg';
import atlasLuxuryMansions from '../../assets/projects/atlas-luxury-mansions.jpg';
import janeCooperRealtor from '../../assets/projects/jane-cooper-realtor.png';
import femmeBusinessConsulting from '../../assets/projects/femme-business-consulting.png';
import lifePathCoaching from '../../assets/projects/life-path-coaching.jpg';
import onlineWellnessCourses from '../../assets/projects/online-wellness-courses.png';
import easySolutionCoaching from '../../assets/projects/easy-solution-coaching.png';

export const projects: Project[] = [
  {
    title: "Stardust Real Estate",
    image: stardustRealEstate,
    description: "Turning Real Estate Dreams into Reality. A luxury real estate platform with advanced search filters and comprehensive property listings.",
    achievement: "950+ Satisfied Customers",
    tags: ["Real Estate", "Property Search", "Luxury Homes"],
    link: "https://stardust-realestate.com",
    isNew: false
  },
  {
    title: "Biggest Atlas Luxury Mansions",
    image: atlasLuxuryMansions,
    description: "Discover Luxurious Mansions Reimagined for You. Showcasing high-end properties like The Sapphire Estate, Azure Manor, and The Royal Crest.",
    achievement: "10.3k+ Satisfied Clients",
    tags: ["Luxury Real Estate", "Mansions", "Property Showcase"],
    link: "https://atlas-luxury-mansions.com",
    isNew: true
  },
  {
    title: "Jane Cooper - Boston Realtor",
    image: janeCooperRealtor,
    description: "Personal real estate agent portfolio showcasing Jane's 15+ years of experience helping clients find their perfect homes across 4 locations.",
    achievement: "260+ Satisfied Clients",
    tags: ["Realtor Portfolio", "Property Listings", "Real Estate Services"],
    link: "https://jane-cooper-realtor.com",
    isNew: false
  },
  {
    title: "Femme Business Consulting",
    image: femmeBusinessConsulting,
    description: "Helping Women Find Business Solutions. A coaching and consulting service tailored specifically for women entrepreneurs with comprehensive support packages.",
    achievement: "4,218 Project Success",
    tags: ["Women Entrepreneurs", "Business Coaching", "Consulting"],
    link: "https://femme-business-consulting.com",
    isNew: false
  },
  {
    title: "LifePath Coaching",
    image: lifePathCoaching,
    description: "Individually Designed Coaching Exclusively For You. Facilitating Swift Achievement Of Your Goals through personalized coaching packages.",
    achievement: "94% Client Satisfaction",
    tags: ["Life Coaching", "Personal Development", "Mentorship"],
    link: "https://lifepath-coaching.com",
    isNew: false
  },
  {
    title: "Online Wellness Courses",
    image: onlineWellnessCourses,
    description: "Life is a journey, make it an amazing one. Join our online courses and unlock your full potential with classes in Personal Healing, Career Coaching, and more.",
    achievement: "Choose The Most Comfortable Way To Train",
    tags: ["Online Courses", "Wellness", "Self-Development"],
    link: "https://online-wellness-courses.com",
    isNew: false
  },
  {
    title: "Easy Solution Career Coaching",
    image: easySolutionCoaching,
    description: "I can help you create positive & permanent changes in your life. Professional development coaching for business planning, career advancement, and problem solving.",
    achievement: "850+ People Coached",
    tags: ["Career Coaching", "Business Planning", "Professional Development"],
    link: "https://easy-solution-coaching.com",
    isNew: false
  }
];
