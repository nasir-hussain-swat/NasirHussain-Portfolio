import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { SiDatabricks } from "react-icons/si";
import pricerImg from "@/public/Pricer.png";
import InvitationImg from "@/public/InvitationIEEE.png";
import CustomerAnalysisImg from "@/public/Customerana.png";
import CovidAnalysisImg from "@/public/CovidAnalysis.png";
import SwatValleyImg from "@/public/swatvalley.png";
import taxicompanyImg from "@/public/taxicompany.png";
import pricetrendsImg from "@/public/pricetrends.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
];

export const experiencesData = [
  {
    title: "Under Graduate Software Engineer",
    location: "University of Malakand, Lower Dir",
    description:
      "I am a software engineering Final year Student, currently working on ADHD detection Modal using Machine Learning and Deep Learning as my Fyp",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2021 - June 2024",
  },
  {
    title: "FirstNet Systems",
    location: "Golders Green, London",
    description: "I am working as a Junior Data Scientist",
    icon: React.createElement(SiDatabricks ),
    date: "Jul 2022 - Present",
  },
];

export const projectsData = [
  {
    title: "Covid 19 Data Analysis",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["python", "pandas", "numpy", "seaborn", "matplotlib"],
    imageUrl: CovidAnalysisImg,
  },
  {
    title: "SmartMart Data Analysis Project",
    description:
      "In this project, I analyzed SmartMart's sales transactions data to identify areas for operational optimization and profitability improvement, using various statistical and data science techniques",
    tags: ["python", "pandas", "numpy", "seaborn", "matplotlib"],
    imageUrl: pricetrendsImg,
  },
  {
    title: "Customer Analysis Tableau",
    description:
      "A public dashboard for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["python", "pandas", "numpy", "seaborn", "matplotlib", "Tableau"],
    imageUrl: CustomerAnalysisImg,
  },
  {
    title: "Chicago Taxi Trips Analysis",
    description:
      "In this project, I analyzed Chicago taxi trip data from January to July 2023, providing insights, forecasts, and regression analysis for the Office for National Statistics in Chicago",
    tags: ["pandas", "numpy", "matplotlib", "seaborn", "scikit-learn", "statsmodels"],
    imageUrl: taxicompanyImg,
  },


  {
    title: "Pricer",
    description:
      "I worked on this project  resembling a price sheet for each district that is handed by each Administrative office to the retailers",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    imageUrl: pricerImg,
  },
  {
    title: "IEEE Registration Welcome Party",
    description:
      "I Designed this website for registration of an event of IEEE Student Branch UOM",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: InvitationImg,
  },
  
  
  {
    title: "Visit Swat Valley",
    description:
      "A website regarding swat valley which is situated in the KPK Province of Pakistan (where i am from).Providing Information about its culture and tourist popular sites",
    tags: ["HTML", "CSS", "JAVASCRIPT"],
    imageUrl: SwatValleyImg,
  },
 
];

export const skillsData = [
  "Python",
  "numpy",
  "pandas",
  "matplotlib",
  "seaborn",
  "scikit-learn",
  "tensorflow",
  "keras",
  "statsmodels",
  "scipy",
  "Tableau",
  "PowerBI",
  "Django",
  "MYSQL",
  "MongoDB",
  "HTML",
  "CSS",
  "JavaScript",
  "PHP",
  "Wordpress",
  
  
  "Git",
  "Github",
  "AnyDisk",
];
