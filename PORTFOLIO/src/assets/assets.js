import { FaDribbble, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import brightMatterImg from '../assets/Brigthmatter.png'
import brightImg from '../assets/bright.png'
import profileImg from '../assets/profile.avif';
import project1Img from '../assets/project1.avif';
import project2Img from '../assets/project2.avif';
import project3Img from '../assets/project3.avif';
import project4Img from '../assets/project4.avif';
import project5Img from '../assets/project5.avif';
import project6Img from '../assets/project6.avif';
import project7Img from '../assets/project7.avif';
import { FiCpu, FiLayers, FiMonitor, FiSettings, FiSmartphone } from 'react-icons/fi';





export const assets = {
    brightMatterImg,
    brightImg,
    profileImg,
    project1Img,
    project2Img,
    project3Img,
    project4Img,
    project5Img,
    project6Img,
    project7Img,
}

export const navItems = [
    { label: "Home", href: "#home" },
    { label: "Work", href: "#work" },
    { label: "Skills", href: "#skills" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
];

export const socialPlatforms = [
    { icon: FaTwitter, href: '#' },
    { icon: FaGithub, href: '#' },
    { icon: FaLinkedinIn, href: '#' },
    { icon: FaDribbble, href: '#' },
];

export const projects = [ 
    {
        id: 1,
        title: "Craving",
        description: "Food ordering web app with curated menus and smooth checkout",
        category: "WEB APP",
        color: "primary",
        image: project1Img,
        link: '#',
        youtube: '#'
    },
    {
        id: 2,
        title: "College-Portal",
        description: "Student portal for attendance, notices, assignments, and results",
        category: "EDTECH",
        color: "accent",
        image:project2Img,
        link: '#',
        youtube: '#'
    },
    {
        id: 3,
        title: "HealthNexus",
        description: "Healthcare management app for appointments, records, and patient insights",
        category: "HEALTHCARE",
        color: "secondary",
        image:project3Img,
        link: '#',
        youtube: '#'
    },
    {
        id: 4,
        title: "Chatty",
        description: "Real-time chat application with private and group conversations",
        category: "SOCIAL APP",
        color: "primary",
        image:project4Img,
        link: '#',
        youtube: '#'
    },
    {
        id: 5,
        title: "AI-Invoice",
        description: "AI-assisted invoicing platform with automated bill generation",
        category: "FINTECH",
        color: "primary",
        image: project5Img,
        link: 'https://brightmatter.vercel.app/',
        youtube: '#'
    },
    {
        id: 6,
        title: "Blush and Glow",
        description: "Beauty and skincare storefront with product highlights and offers",
        category: "E-COMMERCE",
        color: "primary",
        image: project6Img,
        link: '#',
        youtube: '#'
    },
    {
        id: 7,
        title: "Weather App",
        description: "Live weather forecast app with location-based updates and search",
        category: "UTILITY",
        color: "primary",
        image: project7Img,
        link: '#',
        youtube: '#'
    },
     {
        id: 8,
        title: "Material Tailwind",
        description: "Component-driven UI project built with Material Tailwind design system",
        category: "UI LIBRARY",
        color: "primary",
        image: brightMatterImg,
        link: '#',
        youtube: '#'
    },
];

export const skills = [
    {
      id: 1,
      title: "UI/UX Design",
      description: "User research, wireframing, prototyping, interaction design",
      icon: FiMonitor,
    },
    {
      id: 2,
      title: "Frontend Dev",
      description: "React, Vue, Next.js, Tailwind, GSAP, Three.js",
      icon: FiCpu,
    },
    {
      id: 3,
      title: "Backend Dev",
      description: "Node.js, Express, MongoDB, GraphQL, Firebase",
      icon: FiLayers ,
    },
    {
      id: 4,
      title: "Mobile Dev",
      description: "React Native, Flutter, SwiftUI, Kotlin",
      icon: FiSmartphone ,
    },
    {
      id: 5,
      title: "DevOps",
      description: "Docker, AWS, CI/CD, Serverless, Microservices",
      icon: FiSettings,
    },
  ];