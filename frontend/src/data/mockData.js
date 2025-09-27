// Mock data for Muhammad Ainul Yaqin Portfolio

export const personalInfo = {
  name: "Muhammad Ainul Yaqin",
  title: "FullStack Developer • Cybersecurity • AI Developer",
  tagline: "I build efficient web applications, secure systems, and AI-powered solutions.",
  location: "Purwoasri Kediri, Jawa Timur, Indonesia",
  email: "aanainul110303@gmail.com",
  phone: "088805403414",
  github: "github.com/ainoeljaqin",
  linkedin: "linkedin.com/in/muhammad-ainul-yaqin-36bb88297",
  bio: [
    "Hi, I'm Ainul — an Informatics Engineering student passionate about fullstack web development, cybersecurity, and artificial intelligence. With experience at Adisatya IT Consultant, I specialize in creating scalable web applications and implementing secure, AI-driven solutions.",
    "I'm currently pursuing my degree at Universitas Nusantara PGRI Kediri with a 3.88 GPA, while actively contributing to the Himaditi student organization and working on innovative projects that bridge technology and real-world applications."
  ]
};

export const skills = {
  "Programming Languages": ["Python", "JavaScript", "GDScript"],
  "Frameworks & Tools": ["Django", "Celery", "Tailwind", "Astro"],
  "Game Development": ["Godot Engine", "DRL integration", "Joystick systems"],
  "Other": ["Git", "Linux", "REST API", "Research Writing"]
};

export const projects = [
  {
    id: 1,
    title: "MFA Enforcement System",
    description: "Django-based policy & middleware enforcing MFA and API key usage with email notifications",
    category: "Web Backend & APIs",
    techStack: ["Django", "Python", "Celery", "Email Integration"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
    codeUrl: "#",
    demoUrl: "#",
    bgColor: "dark-green"
  },
  {
    id: 2,
    title: "ARPG with Adaptive Combo Boss",
    description: "Godot + Deep RL training for adaptive combo attack mage boss with intelligent behavior patterns",
    category: "Game Development",
    techStack: ["Godot", "Python", "Deep RL", "GDScript"],
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop",
    codeUrl: "#",
    demoUrl: "#",
    bgColor: "mid-purple"
  },
  {
    id: 3,
    title: "Sentiment Analysis Barbershop",
    description: "Naïve Bayes + TF-IDF with oversampling to analyze customer reviews and feedback",
    category: "Research & Academic",
    techStack: ["Python", "Scikit-learn", "NLTK", "Pandas"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    codeUrl: "#",
    demoUrl: "#",
    bgColor: "mid-blue"
  },
  {
    id: 4,
    title: "Virtual Joystick System",
    description: "Custom analog joystick for 2D mobile games in Godot with smooth touch controls",
    category: "Game Development",
    techStack: ["Godot", "GDScript", "Mobile UI"],
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800&h=600&fit=crop",
    codeUrl: "#",
    demoUrl: "#",
    bgColor: "mid-orange"
  },
  {
    id: 5,
    title: "Cultural & SME Mapping Website",
    description: "Static mapping website using JSON & Leaflet for KKN project, deployed on GitHub Pages",
    category: "Web Backend & APIs",
    techStack: ["JavaScript", "Leaflet", "JSON", "GitHub Pages"],
    image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=600&fit=crop",
    codeUrl: "#",
    demoUrl: "#",
    bgColor: "light-yellow"
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "Implementing Adaptive Boss AI with Deep Reinforcement Learning in Godot",
    summary: "A deep dive into creating intelligent game enemies that adapt to player behavior using reinforcement learning algorithms integrated with Godot Engine.",
    tags: ["Game Development", "AI", "Godot", "Deep Learning"],
    date: "2024-12-15",
    slug: "adaptive-boss-ai-drl-godot"
  },
  {
    id: 2,
    title: "Why Django Middleware Is Perfect for Enforcing MFA Policies",
    summary: "Exploring how Django's middleware system provides an elegant solution for implementing multi-factor authentication requirements across web applications.",
    tags: ["Django", "Security", "Backend", "Python"],
    date: "2024-11-28",
    slug: "django-middleware-mfa-policies"
  },
  {
    id: 3,
    title: "Weekend Notes: Hydroponics + Coding Flow 🌱💻",
    summary: "Personal reflections on finding balance between technical work and gardening hobbies, and how both activities complement creative problem-solving.",
    tags: ["Personal", "Work-Life Balance", "Gardening"],
    date: "2024-11-10",
    slug: "hydroponics-coding-flow"
  }
];

export const experience = [
  {
    title: "Thesis (2025)",
    role: "Academic Research",
    description: "Development of Adaptive Combo Attack System using Deep Reinforcement Learning in ARPG",
    details: "Developed a mage boss using DRL in Godot for adaptive attack patterns.",
    period: "2024 - 2025"
  },
  {
    title: "KKN Project",
    role: "Web Developer",
    description: "Cultural & SME Mapping Website",
    details: "Developed a static mapping website using JSON & Leaflet, deployed on GitHub Pages.",
    period: "2024"
  }
];

export const education = {
  degree: "Bachelor of Informatics Engineering",
  institution: "University Name",
  expectedGraduation: "2025",
  relevantCourses: ["AI", "Software Engineering", "Game Development", "Backend Systems"]
};

export const categories = [
  "All",
  "Web Backend & APIs",
  "Game Development", 
  "Research & Academic"
];