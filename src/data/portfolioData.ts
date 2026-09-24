import { Project, SkillItem, ProcessStep, EducationItem, CertificationPlaceholder } from '../types';

export const PERSONAL_INFO = {
  name: "Shubhangi Biradar",
  initials: "SB",
  roleTitle: "Java Developer | Software Developer",
  roleSubtitle: "JAVA DEVELOPER • SOFTWARE DEVELOPER",
  careerStage: "Fresher",
  headlineIntro: "Computer Science graduate passionate about Java, software development, problem solving, and building practical applications.",
  aboutText: "I am a Computer Science and Technology graduate from Presidency University, Bangalore. As a fresher, I am focused on building a strong foundation in Java, SQL, object-oriented programming, data structures, and software development. I enjoy understanding how applications work behind the scenes and turning ideas into practical software solutions.",
  availability: "OPEN TO SOFTWARE DEVELOPMENT OPPORTUNITIES",
  email: "biradarshubhangi22@gmail.com",
  linkedin: "https://linkedin.com/in/shubhangi-biradar",
  github: "https://github.com/shubhangibiradar",
  location: "Bangalore, India",
  graduationPercent: "88%",
  twelfthPercent: "93.4%",
  cgpa: "7.84",
  university: "Presidency University, Bangalore",
  degree: "B.Tech in Computer Science and Technology"
};

export const PROJECTS: Project[] = [
  {
    id: "career-compass",
    number: "01",
    title: "One Stop Personalized Education & Career Advisor System",
    subtitle: "CareerCompass — Final Year Project",
    category: "Final Year Capstone Project",
    description: "A personalized education and career guidance platform designed to help students make better academic and career decisions based on their interests, skills, preferences, and academic information.",
    longDescription: "CareerCompass integrates academic profiling, adaptive career questionnaires, ML-powered dropout risk estimation, and welfare scheme discovery into a cohesive guidance system. It enables students to evaluate personalized pathways and academic trajectories through data-driven recommendations.",
    problem: "Students frequently struggle to align their academic strengths and personal interests with viable career paths, while early signs of academic disengagement and dropout risk often go unnoticed until it is too late.",
    solution: "Engineered a centralized platform combining adaptive diagnostic questionnaires, content-based recommendation logic (TF-IDF & Cosine Similarity), machine learning dropout risk evaluation, and welfare support discovery.",
    technologies: [
      "Streamlit",
      "Flask",
      "SQLAlchemy",
      "SQLite",
      "Pandas",
      "Scikit-learn",
      "TF-IDF",
      "Cosine Similarity",
      "Joblib"
    ],
    modules: [
      {
        title: "1. Adaptive Career Assessment",
        description: "Helps users understand suitable career directions based on their dynamic interests, strengths, and questionnaire responses."
      },
      {
        title: "2. Career GPS Module",
        description: "Provides personalized career route mapping, milestone navigation, and step-by-step guidance across potential career tracks."
      },
      {
        title: "3. Personalized Recommendations",
        description: "Utilizes content-based matching logic (TF-IDF & Cosine Similarity) to recommend tailored academic programs and career options."
      },
      {
        title: "4. 7-Day Trial Experience",
        description: "Provides users with trial access to test-drive personalized guidance modules, assessments, and roadmap previews."
      },
      {
        title: "5. Welfare Scheme Recommendations",
        description: "Curates and delivers accessible information on relevant government and institutional student welfare schemes."
      },
      {
        title: "6. Dropout Risk Calculator",
        description: "Employs a trained machine-learning model (Joblib/Scikit-learn) to estimate dropout risk factors using academic and attendance variables."
      },
      {
        title: "7. Career and Education Guidance",
        description: "Unifies assessment results and recommendation insights into a single clear, actionable dashboard for student counseling."
      }
    ],
    roleSummary: "Engineered full application flow, integrated recommendation pipelines and ML prediction components, managed SQLite schema with SQLAlchemy, and structured interactive frontend with Streamlit and Flask backend services.",
    impactOrOutcome: "Successfully demonstrated practical end-to-end software integration bridging machine learning inference, relational data persistence, and interactive user interfaces."
  },
  {
    id: "dropout-analysis",
    number: "02",
    title: "School Dropout Analysis",
    subtitle: "Data-Driven Academic Analysis",
    category: "Data Analysis / Academic Project",
    description: "A data-driven project focused on analyzing student dropout patterns and identifying factors associated with dropout risk.",
    longDescription: "Investigated demographic, academic, and socio-economic variables affecting school retention rates. Performed descriptive statistics, exploratory analysis, and feature correlation to uncover early-warning indicators for student disengagement.",
    problem: "Educational institutions lack clear statistical visibility into which demographic, academic, and attendance variables contribute most heavily to student attrition.",
    solution: "Conducted rigorous data processing and exploratory analysis using Python, SQLite, and Pandas to uncover statistical correlation patterns associated with dropout probabilities.",
    technologies: [
      "Python",
      "SQLite",
      "Pandas",
      "Data Analysis",
      "Statistical Modeling"
    ],
    modules: [
      {
        title: "Exploratory Data Analysis",
        description: "Cleaned and processed academic datasets to identify key demographic and performance variances."
      },
      {
        title: "Risk Factor Correlation",
        description: "Analyzed statistical correlations between attendance rates, academic performance, and dropout incidence."
      },
      {
        title: "Insights & Pattern Extraction",
        description: "Synthesized core trends into actionable observations for early academic intervention."
      }
    ],
    roleSummary: "Executed dataset preparation, relational queries in SQLite, statistical evaluations in Python/Pandas, and compiled findings on educational retention.",
    impactOrOutcome: "Formed the foundational research and domain understanding that later informed the machine-learning dropout risk calculator in CareerCompass."
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "UNDERSTAND",
    description: "Deeply analyze the problem statement, user requirements, and constraints before writing code.",
    focus: "Requirements gathering & domain logic clarification"
  },
  {
    number: "02",
    title: "PLAN",
    description: "Break the problem into modular features, map data entities, and define clean application flow.",
    focus: "System structure, database schemas & flowcharts"
  },
  {
    number: "03",
    title: "BUILD",
    description: "Develop the application using appropriate programming concepts, clean OOP patterns, and proven technologies.",
    focus: "Java, SQL querying, OOP design & clean implementations"
  },
  {
    number: "04",
    title: "TEST",
    description: "Test functionality rigorously, identify syntax and logical edge-cases, and eliminate runtime bugs.",
    focus: "Input verification, validation & exception handling"
  },
  {
    number: "05",
    title: "IMPROVE",
    description: "Refine application structure, optimize database queries, and polish user experience based on testing feedback.",
    focus: "Performance refinement & maintainable code structure"
  }
];

export const TECHNICAL_SKILLS: SkillItem[] = [
  {
    name: "Java",
    category: "core",
    description: "Core programming language for software development, robust backends, and algorithmic problem solving.",
    practicalContext: "Object-oriented design, collections framework, exception handling, multithreading basics"
  },
  {
    name: "SQL",
    category: "database",
    description: "Relational database querying, schema definition, filtering, aggregation, and data normalization.",
    practicalContext: "Complex queries, joins, constraints, subqueries, indexing principles"
  },
  {
    name: "Object-Oriented Programming (OOP)",
    category: "fundamentals",
    description: "Core paradigm for structuring maintainable, extensible, and modular software architectures.",
    practicalContext: "Encapsulation, inheritance, polymorphism, abstraction, design patterns"
  },
  {
    name: "Data Structures & Algorithms",
    category: "fundamentals",
    description: "Foundational techniques for efficient memory utilization and optimal computational complexity.",
    practicalContext: "Arrays, Linked Lists, Stacks, Queues, Trees, Searching & Sorting algorithms"
  },
  {
    name: "JDBC",
    category: "core",
    description: "Java Database Connectivity API for executing SQL statements and managing database transactions.",
    practicalContext: "Connection pooling concepts, PreparedStatements, ResultSet processing"
  },
  {
    name: "Hibernate",
    category: "core",
    description: "Object-Relational Mapping (ORM) framework bridging Java domain models with relational databases.",
    practicalContext: "Entity mappings, HQL queries, session lifecycle, transaction management"
  },
  {
    name: "Basic Spring Boot",
    category: "framework",
    description: "Foundational knowledge of modern Java backend enterprise application scaffolding.",
    practicalContext: "Dependency injection, inversion of control, application configuration, REST fundamentals"
  },
  {
    name: "Streamlit",
    category: "framework",
    description: "Rapid interactive application framework utilized for data science and machine learning prototypes.",
    practicalContext: "User-facing dashboard interfaces, reactive controls, ML pipeline visualization"
  },
  {
    name: "Flask",
    category: "framework",
    description: "Lightweight WSGI Python web application framework for structuring modular endpoints.",
    practicalContext: "Routing, request handling, lightweight API endpoints, backend orchestration"
  },
  {
    name: "SQLAlchemy",
    category: "database",
    description: "Python SQL toolkit and Object Relational Mapper for reliable relational data management.",
    practicalContext: "Declarative model mapping, session management, relational querying"
  },
  {
    name: "SQLite",
    category: "database",
    description: "Self-contained, serverless, transactional SQL database engine ideal for application data persistence.",
    practicalContext: "Schema modeling, transactional consistency, local data storage"
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "B.Tech in Computer Science and Technology",
    institution: "Presidency University, Bangalore",
    score: "7.84",
    scoreType: "CGPA",
    details: "Comprehensive undergraduate engineering curriculum covering Core Java, Database Management Systems, Data Structures & Algorithms, Object-Oriented Software Engineering, and Operating Systems."
  },
  {
    degree: "Graduation Aggregate",
    institution: "Presidency University, Bangalore",
    score: "88%",
    scoreType: "Graduation Percentage",
    details: "High academic consistency across core engineering semesters, practical laboratory coursework, and technical evaluations."
  },
  {
    degree: "Pre-University / 12th Standard",
    institution: "Higher Secondary Board",
    score: "93.4%",
    scoreType: "Academic Percentage",
    details: "Strong academic foundation in Mathematics, Physics, and analytical sciences."
  }
];

export const CERTIFICATIONS: CertificationPlaceholder[] = [
  {
    id: "cert-01",
    title: "Java Programming Specialization / Certification",
    issuer: "Placeholder — Ready to customize with your verified certificate",
    status: "Placeholder (Ready to customize)",
    note: "Reserved slot to add your verified Java SE / Java Development certification details, credential ID, and issuance date."
  },
  {
    id: "cert-02",
    title: "Relational Database Management & SQL Certification",
    issuer: "Placeholder — Ready to customize with your verified certificate",
    status: "Placeholder (Ready to customize)",
    note: "Reserved slot to add your SQL, Relational Database, or Query Optimization certificate credentials."
  },
  {
    id: "cert-03",
    title: "Data Structures, Algorithms & OOP Fundamentals",
    issuer: "Placeholder — Ready to customize with your verified certificate",
    status: "Placeholder (Ready to customize)",
    note: "Reserved slot to link coursework, competitive programming badges, or verified academic credentials."
  }
];
