export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  longDescription: string;
  problem: string;
  solution: string;
  technologies: string[];
  modules?: {
    title: string;
    description: string;
  }[];
  roleSummary: string;
  impactOrOutcome: string;
}

export interface SkillItem {
  name: string;
  category: 'core' | 'database' | 'framework' | 'fundamentals';
  description: string;
  practicalContext: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  focus: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  score: string;
  scoreType: string;
  year?: string;
  details: string;
}

export interface CertificationPlaceholder {
  id: string;
  title: string;
  issuer: string;
  status: 'Placeholder (Ready to customize)' | 'In Progress';
  note: string;
}
