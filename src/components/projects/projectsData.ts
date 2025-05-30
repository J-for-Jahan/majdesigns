
import { Project } from './types';

// Import local images
import site01 from '../../assets/Site 01.jpg';
import site02 from '../../assets/Site 02.jpg';
import site04 from '../../assets/site 04.png';
import site05 from '../../assets/site 05.png';
import site06 from '../../assets/site 06.jpg';
import site07 from '../../assets/site 07.png';
import site08 from '../../assets/site 08.png';

export const projects: Project[] = [
  {
    title: "Stardust Real Estate",
    image: site01,
    description: "Turning Real Estate Dreams into Reality. A luxury real estate platform with advanced search filters and comprehensive property listings.",
    achievement: "950+ Satisfied Customers",
    tags: ["Real Estate", "Property Search", "Luxury Homes"],
    link: "#",
    isNew: false
  },
  {
    title: "Biggest Atlas Luxury Mansions",
    image: site02,
    description: "Discover Luxurious Mansions Reimagined for You. Showcasing high-end properties like The Sapphire Estate, Azure Manor, and The Royal Crest.",
    achievement: "10.3k+ Satisfied Clients",
    tags: ["Luxury Real Estate", "Mansions", "Property Showcase"],
    link: "#",
    isNew: true
  },
  {
    title: "Jane Cooper - Boston Realtor",
    image: site04,
    description: "Personal real estate agent portfolio showcasing Jane's 15+ years of experience helping clients find their perfect homes across 4 locations.",
    achievement: "260+ Satisfied Clients",
    tags: ["Realtor Portfolio", "Property Listings", "Real Estate Services"],
    link: "#",
    isNew: false
  },
  {
    title: "Femme Business Consulting",
    image: site05,
    description: "Helping Women Find Business Solutions. A coaching and consulting service tailored specifically for women entrepreneurs with comprehensive support packages.",
    achievement: "4,218 Project Success",
    tags: ["Women Entrepreneurs", "Business Coaching", "Consulting"],
    link: "#",
    isNew: false
  },
  {
    title: "LifePath Coaching",
    image: site06,
    description: "Individually Designed Coaching Exclusively For You. Facilitating Swift Achievement Of Your Goals through personalized coaching packages.",
    achievement: "94% Client Satisfaction",
    tags: ["Life Coaching", "Personal Development", "Mentorship"],
    link: "#",
    isNew: false
  },
  {
    title: "Online Wellness Courses",
    image: site07,
    description: "Life is a journey, make it an amazing one. Join our online courses and unlock your full potential with classes in Personal Healing, Career Coaching, and more.",
    achievement: "Choose The Most Comfortable Way To Train",
    tags: ["Online Courses", "Wellness", "Self-Development"],
    link: "#",
    isNew: false
  },
  {
    title: "Easy Solution Career Coaching",
    image: site08,
    description: "I can help you create positive & permanent changes in your life. Professional development coaching for business planning, career advancement, and problem solving.",
    achievement: "85M+ People Coached",
    tags: ["Career Coaching", "Business Planning", "Professional Development"],
    link: "#",
    isNew: false
  }
];
