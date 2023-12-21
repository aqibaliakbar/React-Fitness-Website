import { BiDumbbell } from "react-icons/bi";
import { GiRunningShoe, GiWeightLiftingUp, GiMuscleUp } from "react-icons/gi";
import { LiaDumbbellSolid } from "react-icons/lia";
import { SiRunkeeper } from "react-icons/si";
import { GiHeartBeats } from "react-icons/gi";
import avatar1 from "./assets/images/avatar1.svg";
import avatar2 from "./assets/images/avatar2.svg";
import avatar3 from "./assets/images/avatar3.svg";
import avatar4 from "./assets/images/avatar4.svg";
import avatar5 from "./assets/images/avatar5.svg";

export const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  {
    name: "Plans",
    path: "/plans",
  },
  {
    name: "Trainers",
    path: "/trainers",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export const programs = [
  {
    id: 1,
    icon: <BiDumbbell />,
    title: "Strength Training",
    info: "Build strength and tone your muscles with our personalized strength training programs.",
    path: "/programs/strength-training",
  },
  {
    id: 2,
    icon: <GiRunningShoe />,
    title: "Cardio Workouts",
    info: "Improve your cardiovascular health and endurance with our dynamic cardio workout sessions.",
    path: "/programs/cardio-workouts",
  },
  {
    id: 3,
    icon: <GiWeightLiftingUp />,
    title: "Weightlifting Classes",
    info: "Join our weightlifting classes to enhance your power and achieve your fitness goals.",
    path: "/programs/weightlifting-classes",
  },
  {
    id: 4,
    icon: <GiMuscleUp />,
    title: "Functional Training",
    info: "Experience functional movements that enhance your daily activities and overall fitness.",
    path: "/programs/functional-training",
  },
];

export const values = [
  {
    id: 1,
    icon: <LiaDumbbellSolid />,
    title: "Strength",
    desc: "Build strength and achieve your fitness goals with our personalized training programs.",
  },
  {
    id: 2,
    icon: <SiRunkeeper />,
    title: "Endurance",
    desc: "Improve your cardiovascular health and endurance through dynamic workout sessions.",
  },
  {
    id: 3,
    icon: <GiHeartBeats />,
    title: "Wellness",
    desc: "Prioritize your well-being with programs designed to enhance both physical and mental health.",
  },
  {
    id: 4,
    icon: <GiMuscleUp />,
    title: "Muscle Building",
    desc: "Experience targeted workouts to sculpt and tone your muscles for a strong and fit physique.",
  },
];

export const faqs = [
  {
    id: 1,
    question: "How often should I work out at the gym?",
    answer:
      "For optimal results, aim for at least three to four gym sessions per week. Consistency is key to achieving your fitness goals. Remember to allow your body to rest and recover as well.",
  },
  {
    id: 2,
    question: "What is the best time to work out at the gym?",
    answer:
      "The ideal time to work out at the gym varies from person to person. Some prefer morning workouts to kickstart their day, while others find evening sessions more convenient. Choose a time that aligns with your schedule and when you feel most energized.",
  },
  {
    id: 3,
    question: "How long should my gym workouts be?",
    answer:
      "The duration of your gym session depends on your fitness goals. Generally, aim for 45 minutes to an hour of effective exercise. Focus on quality over quantity, ensuring each exercise is performed with proper form.",
  },
  {
    id: 4,
    question: "Is warming up necessary before gym workouts?",
    answer:
      "Absolutely! Warming up is crucial to prepare your body for the workout ahead, increasing blood flow to your muscles and reducing the risk of injuries. Spend 5-10 minutes on dynamic stretches or light cardio before diving into your main workout.",
  },
  {
    id: 5,
    question:
      "Should I prioritize strength training, cardio, or both at the gym?",
    answer:
      "A well-rounded fitness routine often includes a mix of strength training and cardio. Strength training builds muscle, while cardio enhances cardiovascular health. Find a balance that suits your goals, whether it's weight loss, muscle gain, or overall fitness.",
  },
  {
    id: 6,
    question: "Is lifting weights essential for strength training at the gym?",
    answer:
      "Yes, lifting weights is an effective way to build strength and muscle. Incorporate compound exercises like squats, deadlifts, and bench presses into your routine. Start with a weight that challenges you but allows for proper form, gradually increasing as you get stronger.",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Alex Strong",
    quote:
      "I've transformed my fitness journey with this amazing gym! The workouts are challenging and effective. It's not just a gym; it's a community that motivates me to push my limits every day.",
    job: "Fitness Enthusiast",
    avatar: avatar1,
  },
  {
    id: 2,
    name: "Ryan FitnessPro",
    quote:
      "The variety of workouts here keeps me engaged and motivated. As a software engineer, finding time for fitness is crucial, and this gym fits perfectly into my schedule. It's a game-changer for my health.",
    job: "Software Engineer",
    avatar: avatar3,
  },
  {
    id: 3,
    name: "Emma FitLife",
    quote:
      "Teaching at the university is demanding, but this gym helps me stay energized and focused. The trainers are fantastic, and the atmosphere is uplifting. It's not just a workout; it's a lifestyle.",
    job: "University Lecturer",
    avatar: avatar2,
  },
  {
    id: 4,
    name: "Chris IronBeast",
    quote:
      "This gym has become my second home. The workouts are intense, and the results are real. I never thought staying fit could be this enjoyable. It's not just a gym; it's a place where I've found my strength.",
    job: "Fitness Enthusiast",
    avatar: avatar4,
  },
  {
    id: 5,
    name: "Olivia Healthwise",
    quote:
      "The professional approach of this gym sets it apart. As a pharmacist, health is my priority, and this gym aligns perfectly with my fitness goals. It's not just a workout; it's a prescription for a healthy life.",
    job: "Pharmacist",
    avatar: avatar5,
  },
];

export const plans = [
  {
    id: 1,
    name: "Silver Package",
    desc: "This package is perfect for beginners who need constant help",
    price: 29.99,
    features: [
      { feature: "Personalized Orientation", available: true },
      { feature: "Customized Workout Plans", available: true },
      { feature: "Access to Group Classes", available: true },
      { feature: "24/7 Gym Access", available: true },
      { feature: "Nutritional Guidance", available: true },
      { feature: "Extended Gym Hours (Plus)", available: false },
      { feature: "Virtual Trainer Support", available: false },
      { feature: "Fitness Assessment", available: false },
      { feature: "Progress Tracking App", available: false },
      { feature: "Exclusive Workout Videos", available: false },
      { feature: "Monthly Wellness Workshops", available: false },
      { feature: "Online Community Access", available: false },
      { feature: "Priority Event Invitations", available: false },
    ],
  },
  {
    id: 2,
    name: "Gold Package",
    desc: "This is the perfect package for beginners who know what they're doing",
    price: 49.99,
    features: [
      { feature: "Personal Trainer Sessions", available: true },
      { feature: "Advanced Workout Plans", available: true },
      { feature: "Unlimited Group Classes", available: true },
      { feature: "Pro-level Equipment Access", available: true },
      { feature: "Nutrition Plan Included", available: true },
      { feature: "Extended Gym Hours (Plus)", available: true },
      { feature: "Virtual Trainer Sessions", available: true },
      { feature: "Progress Tracking App", available: true },
      { feature: "Exclusive Workout Videos", available: true },
      { feature: "Wellness Seminars", available: false },
      { feature: "Online Community Access", available: false },
      { feature: "Monthly Fitness Challenges", available: false },
      { feature: "VIP Event Invitations", available: false },
    ],
  },
  {
    id: 3,
    name: "Platinum Package",
    desc: "This package is perfect for busy people who need home service",
    price: 89.99,
    features: [
      { feature: "Home Workout Service", available: true },
      { feature: "Personalized Home Training", available: true },
      { feature: "Virtual Personal Trainer", available: true },
      { feature: "Nutritionist Consultations", available: true },
      { feature: "Access to All Classes (Online)", available: true },
      { feature: "Extended Gym Hours (Plus)", available: true },
      { feature: "Virtual Trainer Sessions", available: true },
      { feature: "Progress Tracking App", available: true },
      { feature: "Exclusive Workout Videos", available: true },
      { feature: "Wellness Retreats", available: true },
      { feature: "Online Community Access", available: true },
      { feature: "Monthly Fitness Challenges", available: true },
      { feature: "Exclusive Event Invitations", available: true },
    ],
  },
];

import Trainer1 from "./assets/images/trainer1.svg";
import Trainer2 from "./assets/images/trainer2.svg";
import Trainer3 from "./assets/images/trainer3.svg";
import Trainer4 from "./assets/images/trainer4.svg";
import Trainer5 from "./assets/images/trainer5.svg";
import Trainer6 from "./assets/images/trainer6.svg";

export const trainers = [
  {
    id: 1,
    image: Trainer1,
    name: "Alex Johnson",
    job: "Strength and Conditioning Coach",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  {
    id: 2,
    image: Trainer2,
    name: "David Smith",
    job: "Endurance Trainer",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  {
    id: 3,
    image: Trainer3,
    name: "John Adams",
    job: "Yoga Instructor",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  {
    id: 4,
    image: Trainer4,
    name: "Michael Brown",
    job: "Nutrition Specialist",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  {
    id: 5,
    image: Trainer5,
    name: "Tony Williams",
    job: "HIIT Trainer",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  {
    id: 6,
    image: Trainer6,
    name: "Jack Turner",
    job: "Functional Training Expert",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
];