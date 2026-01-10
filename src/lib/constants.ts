import { Cloud } from "lucide-react";

// Social Links Configuration
export const SOCIAL_LINKS = [
  {
    icon: 'Linkedin',
    href: 'https://www.linkedin.com/in/princi-jain-501538260/',
    label: 'LinkedIn',
  },
  {
    icon: 'Github',
    href: 'https://github.com/j-princi3',
    label: 'GitHub',
  },
  {
    icon: 'Code',
    href: 'https://leetcode.com/u/j_princi3/',
    label: 'LeetCode',
  },
];

// Contact Information
export const CONTACT_INFO = {
  email: 'jainprinci00@gmail.com',
  linkedin: 'https://www.linkedin.com/in/princi-jain-501538260/',
  github: 'https://github.com/j-princi3',
  leetcode: 'https://leetcode.com/u/j_princi3/',
};

// Experience Data
export const EXPERIENCE_DATA = [
  {
    title: 'Software Engineer Intern',
    company: 'EVENTBRITE , JULY 2025 - DEC 2025',
    type: 'main' as const,
    achievements: [
      'Improved backend access control for a Retool LCNC application by updating AWS Lambda authorization logic behind API Gateway — restoring 100% user access.',
      'Migrated internal Retool(LCNC) configurations from deprecated YAML to ToolScript, improving system security, readability, and maintainability with zero client impact.',

      'Designed an end-to-end automation strategy for service-level AWS Budget Alarms in TLZ, including spend analysis, IAM policies, CDK deployment patterns — enabling proactive cost governance.',
      'Upgraded AWS Lambda runtimes (Python & Node.js) and patched 25+ vulnerable dependencies using Snyk, hardening production security posture.',
      'Boosted code quality to 80% by enforcing PR linting gates (Pylint, ESLint/Prettier), standardized PR templates, and mandatory JIRA ticket linkage for deployment traceability.',
      'Converted manually created CloudWatch dashboards into AWS CDK infrastructure-as-code, improving deployment speed, consistency, and scalability for observability',
    ],
    icon: 'Bug',
    delay: 0.1,
  },
  {
    title: 'Developer',
    company: 'TECH FOR AUTISM & DYSLEXIA , APRIL 2024 - SEPT 2024',
    type: 'side' as const,
    achievements: [
       'Designed and built an interactive memory game for children with dyslexia using a drag-and-drop interface.',
       'Collaborated with educators and therapists to ensure the game content was educationally relevant and engaging for the target audience.',
       'Developed frontend and backend with the MERN stack and Tailwind CSS for responsive, accessible UI. And built backend APIs for sessions, game logic, and results with secure, efficient database access.',

    ],
    icon: 'Gamepad2',
    delay: 0.25,
  },
];

// Projects Data
export const PROJECTS_DATA = [
  {
    title: 'AQUA SENTINEL',
    description: 'Engineered a dual deep learning pipeline (YOLOv11/Faster R-CNN) to integrate SAR and optical satellite imagery for accurate vessel and marine debris detection. Designed and validated a spatial-temporal correlation algorithm to link detected ships to newly formed debris zones, generating reliable proximity-based pollution alerts. Deployed a secure full-stack visualization platform (React.js/Flask) for interactive map analysis, and established an automated alerting pipeline for regulatory reporting.',
    breathingStyle: 'water' as const,
    icon: 'Droplets',
    tags: ['YOLOv11', 'SAR', 'Computer Vision', 'Python', 'R-CNN', 'Flask', 'React.js','JavaScript','Firebase Authentication'],
    achievement: 'Filed a Patent',
    delay: 0.1,
  },
  {
    title: 'REMOTE SENSING GENAI',
    description: 'Our fully trained and fine-tuned models—including the Vision Transformer (ViT) for crop classification, UNETR for flood detection in SAR images, and Pix2Pix GAN for SAR image colorization—have each achieved an accuracy exceeding 92%. These advancements significantly enhance agricultural decision-making, optimize disaster response strategies, and improve image interpretability for defense and research applications. Developed using FastAPI, Flutter, Ngrok, Firebase, and Python libraries(Tensors, Keras).',
    breathingStyle: 'thunder' as const,
    icon: 'Zap',
    tags : ['FastAPI', 'Flutter', 'Ngrok', 'Firebase', 'Python', 'ViT', 'UNETR', 'Pix2Pix GAN'],
    delay: 0.25,
  },
  {
    title: 'STUDY R',
    description: 'Developed a full-stack collaborative study platform using Flutter and Node.js, featuring community-based discussions, real-time one-to-one and group chat, video study sessions, note management, and a RESTful client-server architecture. Implemented AI-powered learning tools, including a virtual chatbot for student doubt resolution and a PDF-based question retrieval system, improving student engagement, collaboration, and access to learning resources.',
    breathingStyle: 'fire' as const,
    icon: 'Trophy',
    tags: ['Flutter', 'Node.js', 'MongoDB', 'OpenAI GPT-3.5'],
    delay: 0.4,
  },
  {
    title: 'Project Platform',
    description: 'Created a full-stack project-sharing site with plagiarism detection via Hugging Face built-in model and custom parsers. Developed secure REST APIs in Node.js and handled auth with tokens; used MongoDB and React for dynamic UI.',
    breathingStyle: 'mist' as const,
    icon: 'Cloud',
    tags : ['React.js', 'Node.js', 'MongoDB', 'RESTful API','Hugging Face', 'Plagiarism Detection','Express'],
    delay: 0.25,
  },
  {
    title: 'Hisab Kitaab',
    description: 'Designed and developed HisabKitab, a full‑stack bookkeeping application that streamlines ledger management, invoicing, and expense tracking by implementing user authentication, persistent data storage, and a responsive UI to simplify small‑business accounting workflows. Created documentation and automated tests, and applied version‑control and CI practices to improve code quality and enable reliable iterative releases.',
    breathingStyle: 'insect' as const,
    icon: 'Bug',
    tags : ['Flutter', 'MySQL', 'RESTful API'],
    delay: 0.25,
  },
  {
    title: 'Campusify',
    description: 'Built a full‑stack blogging website with Next.js and TypeScript, styling with CSS; implemented client‑side API calls (fetch / axios) to the Campusify RESTful API for CRUD operations on posts, comments, and user profiles, leveraging Next.js rendering to optimize performance and SEO.Designed and implemented the Campusify API in TypeScript using Next.js API routes (RESTful endpoints) — including typed request/response interfaces, input validation, authentication' ,   
    breathingStyle: 'butterfly' as const,
    icon: 'Sparkles',
    tags : ['Next.js', 'TypeScript', 'CSS', 'RESTful API'],
    delay: 0.25,
  },
];

// Skills/Breathing Styles Data
export const SKILLS_DATA = [
  {
    name: 'CLOUD BREATHING',
    subtitle: 'DevOps Mastery',
    icon: 'Cloud',
    skills: ['AWS', 'Docker', 'Git/Github', 'CI/CD', 'Cloud Formation','Jenkins'],
    color: 'water-breathing',
    glowClass: 'text-breathing-water',
    level: 50,
  },
  {
    name: 'CODE BREATHING',
    subtitle: 'Language Arts',
    icon: 'Code',
    skills: ['Python', 'Java', 'C/C++', 'JavaScript', 'TypeScript', 'SQL'],
    color: 'tanjiro-green',
    glowClass: 'text-primary',
    level: 90,
  },
  {
    name: 'DEVELOPER BREATHING',
    subtitle: 'Fusion',
    icon: 'Globe',
    skills: ['React.js', 'Next.js', 'Node.js', 'Express', 'Flutter', 'FastAPI', 'Flask', 'MongoDB'],
    color: 'hinokami-fire',
    glowClass: 'text-hinokami-fire',
    level: 88,
  },
  {
    name: 'MIND BREATHING',
    subtitle: 'Conceptual Combat',
    icon: 'Brain',
    skills: ['DSA (475+ LC)','OOP', 'AI/ML','Agentic AI', 'System Design','DM', 'CN','OS'],
    color: 'thunder-breathing',
    glowClass: 'text-breathing-thunder',
    level: 85,
  },
  {
    name: 'AI BREATHING',
    subtitle: 'Intelligent Innovations',
    icon: 'Cpu',
    skills: ['TensorFlow', 'Keras', 'PyTorch', 'OpenCV', 'NLP', 'Computer Vision'],
    color: 'water-breathing',
    glowClass: 'text-breathing-water',
    level: 50,
  }
];

// Animation Variants
export const FADE_IN_UP = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export const STAGGER_CONTAINER = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
