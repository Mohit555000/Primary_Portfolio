// Personal Information
export const personalInfo = {
  name: "Mohit Gangwani",
  title: "Associate Software Engineer",
  tagline: "Crafting digital experiences with precision and passion",
  email: "mohit.gangwani@example.com",
  location: "India",
};

// About Section
export const aboutInfo = {
  description: [
    "Hi, I'm Mohit Gangwani, a Computer Science graduate student at NYU Tandon School of Engineering with a passion for building scalable software and AI-driven applications. Before starting my master's, I worked as an Associate Software Engineer at Saint-Gobain for 2 years, where I developed enterprise integration solutions using technologies such as webMethods, Talend, Kafka, and REST APIs, contributing to real-world business systems.",
    "My academic and professional journey has strengthened my foundation in software engineering while fueling my interest in artificial intelligence, backend development, distributed systems, and cloud technologies. I enjoy transforming complex problems into reliable, scalable solutions and continuously challenge myself by building projects that combine innovation with practical impact."
  ],
  skills: [
    // { label: 'Frontend', value: 'React, Next.js' },
    // { label: 'Styling', value: 'Tailwind CSS' },
    // { label: 'Animation', value: 'Framer Motion' },
    // { label: 'Backend', value: 'Node.js, Express' }
  ]
};

// Projects
export const projects = [
  {
    id: 1,
    title: 'InterviewAI',
    description: 'Practice role-specific interviews by voice, with adaptive questions based on your resume and job description—and actionable feedback on technical accuracy, clarity, confidence, and problem-solving.',
    tags: ['React', 'Vite', 'FastAPI', 'LangChain', 'LangGraph', 'OpenAI', 'Qdrant', 'Neo4j'],
    color: 'from-blue-400 to-blue-600',
    video: '/assets/Interview_AI.mp4',
    github: 'https://github.com/Mohit555000/Interview_Platform_FullStack_AI',
    live: 'https://interview-platform-full-stack-ai-u3.vercel.app/',
  }
];

// Education
export const education = [
  {
    id: 1,
    degree: 'Master of Science in Computer Science',
    institution: 'NYU Tandon School Of Engineering',
    year: '2026 - 2028',
    description: 'Graduate student in Computer Science, focusing on AI, software engineering, and scalable systems.'
  },
  {
    id: 2,
    degree: 'Bachelor of Engineering in Computer Engineering',
    institution: 'University Of Mumbai',
    year: '2020 - 2024',
    description: 'Completed undergraduate studies with a CGPA of 9.14,developing a strong foundation in core computer science principles while gaining hands-on experience through research, AI projects, and software development.'
  }
];

// Testimonials (LinkedIn-style recommendations — replace with your own quotes)
export const testimonials = [
  {
    id: 1,
    quote: "I had the opportunity to see Mohit grow as a software engineer at Saint-Gobain. His ability to quickly learn technologies like webMethods, Talend, and Axway, while taking ownership of complex integration work, really stood out. He is a dedicated, adaptable, and dependable engineer who consistently embraces new challenges.",
    name: 'Harshit Kumar Joshi',
    role: 'Senior Delivery Manager',
    company: 'Saint-Gobain',
    relationship: 'Managed Mohit directly',
    color: 'from-orange-400 to-orange-600'
  },
  {
    id: 2,
    quote: "I had the opportunity to work with Mohit on complex SAP, Salesforce, and MDM integration projects. He consistently demonstrated strong technical expertise, practical problem-solving, and the ability to handle production challenges independently. His reliability, adaptability, and collaborative approach made him someone the team could always count on.",
    name: 'Youssed EL Asraoui',
    role: 'MDM Project Manager',
    company: 'Saint-Gobain',
    relationship: 'Worked on the same team',
    color: 'from-blue-400 to-blue-600'
  },
  {
    id: 3,
    quote: "I had the opportunity to work with Mohit on the Talend team at Saint-Gobain, where he quickly stood out for his analytical thinking and problem-solving skills. He took ownership of a complex monitoring solution, translating a business requirement into a practical and reliable technical solution. Mohit is a collaborative and dedicated engineer with a strong ability to turn challenging problems into effective solutions.",
    name: 'Ajitem Oak',
    role: 'Technical Lead',
    company: 'Saint-Gobain',
    relationship: 'Worked on the different teams',
    color: 'from-purple-400 to-purple-600'
  },
  {
    id:4,
    quote:"A fresher into a dependable integration engineer. He quickly picked up webMethods and expanded his skills across MDM, Salesforce, Kafka, and Talend. What stands out most is his curiosity and commitment to continuous learning, especially his exploration of GenAI and data engineering. He is technically strong, easy to work with, and always eager to learn.",
    name: 'Shekhar Mangonda',
    role: 'Senior Software Engineer',
    company: 'Saint-Gobain',
    relationship: 'Mentor',
    color: 'from-green-400 to-green-600'
  }
];

// Certifications
export const certifications = [
  {
    id: 1,
    title: 'Certificate of completion: Claude code 101',
    issuer: 'Anthropic',
    year: '2026',
    credentialId: 'xrauu2v5t4t7',
    skills: ['AI Coding Agents', 'Agentic Workflows', 'Context Window Management', 'Prompt Engineering for Agents','Claude Code CLI','Model Context Protocol (MCP) Integration','Project Personalization via CLAUDE.md','Automated Code Review & Bug Analysis','Developing Custom Skills & Hooks','Tool-Calling Integration'],
    color: 'from-orange-400 to-orange-600',
    verifyUrl: 'https://verify.skilljar.com/c/xrauu2v5t4t7'
  },
  {
    id: 2,
    title: 'Certificate of completion: Claude 101',
    issuer: 'Anthropic',
    year: '2026',
    credentialId: 'pfek7tky3krq',
    skills: ['AI Prompting', 'Artifacts', 'Workspaces','Research Skills','Automation','Model Context Protocol (MCP)'],
    color: 'from-sky-400 to-blue-600',
    verifyUrl: 'https://verify.skilljar.com/c/pfek7tky3krq'
  },
  {
    id: 3,
    title: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
    issuer: 'Oracle',
    year: '2025',
    credentialId: 'C8560102FA729B4EBE85D5D80C739531879AF3545445919334AE0099802023AF',
    skills: ['Artificial Intelligence (AI)', 'Machine Learning (ML)', 'Large Language Models (LLMs)','Generative AI','Oracle Cloud Infrastructure (OCI)','OCI Generative AI Service','Retrieval-Augmented Generation (RAG)','Prompt Engineering','vector search'],
    color: 'from-emerald-400 to-teal-500',
    verifyUrl: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=C8560102FA729B4EBE85D5D80C739531879AF3545445919334AE0099802023AF'
  },
  {
    id: 4,
    title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    issuer: 'Oracle',
    year: '2025',
    credentialId: '548726881912DCB2037A26BD6B6D4C2E87E52933C102050C3F5215C3338A5EEB',
    skills: ['Artificial Intelligence (AI)', 'Machine Learning', 'Deep Learning','Generative AI','Large Language Models (LLMs)','Natural Language Processing (NLP)','Oracle Cloud Infrastructure (OCI)','OCI AI Services','Cloud Computing','Data Science Basics','Neural Networks','Supervised & Unsupervised Learning','Prompt Engineering','AI Prompting'],
    color: 'from-fuchsia-400 to-pink-600',
    verifyUrl: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=548726881912DCB2037A26BD6B6D4C2E87E52933C102050C3F5215C3338A5EEB'
  },
  {
    id: 5,
    title: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    year: '2025',
    credentialId: '786B52C637CDCA1E',
    skills: ['cloud concepts', 'Azure architecture and services', 'Azure management and governance'],
    color: 'from-violet-400 to-indigo-600',
    verifyUrl: 'https://learn.microsoft.com/en-in/users/mohitgangwani-0274/credentials/786b52c637cdca1e?ref=https%3A%2F%2Fwww.linkedin.com%2F'
  },
    {
    id: 6,
    title: 'Introduction to Big Data with Spark and Hadoop',
    issuer: 'IBM',
    year: '2023',
    credentialId: 'AZ3HQTF66CPV',
    skills: ['Big Data', 'Data Transformation', 'Hadoop','Distributed Computing',''],
    color: 'from-amber-400 to-yellow-500',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/AZ3HQTF66CPV'
  },
    {
    id: 7,
    title: 'Supervised Machine Learning: Regression and Classification',
    issuer: 'DeepLearning.AI',
    year: '2023',
    credentialId: 'MZXVX4V6XK3Y',
    skills: ['Python', 'Model Training', 'Feature Engineering','Logistic Regression','Classification Algorithms','Algorithms','Supervised Learning','NumPy','Applied Machine Learning','Model Evaluation','Artificial Intelligence','Model Optimization'],
    color: 'from-cyan-400 to-sky-600',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/MZXVX4V6XK3Y'
  },
    {
    id: 8,
    title: 'Distributed Computing with Spark SQL',
    issuer: 'University of California, Davis',
    year: '2024',
    credentialId: 'Z2FQP6AW8QZE',
    skills: ['Machine Learning', 'Azure Databricks', 'Applied Machine Learning','Data Architecture','Distributed Computing','Data Warehousing','Data Manipulation','Data Import/export','Extract, Transform, Load (ETL)','Apache Spark','Big Data','Data Lakes'],
    color: 'from-rose-400 to-red-500',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/Z2FQP6AW8QZE'
  },
    {
    id: 9,
    title: 'Generative AI: Introduction and Applications',
    issuer: 'IBM',
    year: '2025',
    credentialId: 'RFM2XDR2U27Z',
    skills: ['Chagpt', 'Machine Learning (ML)', 'Generative AI','Data Storytelling','AI Literacy'],
    color: 'from-indigo-500 to-violet-700',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/RFM2XDR2U27Z?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course'
  }
];

// Social Media Links
export const socialLinks = [
  {
    name: 'GitHub',
    icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
    url: 'https://github.com/Mohit555000'
  },
  {
    name: 'LinkedIn',
    icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
    url: 'https://www.linkedin.com/in/mohit-gangwani'
  },

  {
    name: 'Email',
    icon: 'M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z',
    url: 'mailto:mohit.gangwani@example.com'
  }
];