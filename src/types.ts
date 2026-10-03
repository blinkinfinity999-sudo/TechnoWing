export interface Solution {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'ai' | 'cloud' | 'security' | 'advisory' | 'data';
  iconName: string;
  benefits: string[];
  features: string[];
  caseStudyTitle?: string;
  caseStudyImpact?: string;
}

export interface IndustryOption {
  id: string;
  label: string;
  icon: string;
  desc: string;
}

export interface BlueprintState {
  industry: string;
  companySize: string;
  primaryGoals: string[];
  timeline: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
}
