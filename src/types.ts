export type ServiceCategory = 'all' | 'web' | 'mobile' | 'backend' | 'ai' | 'design';

export interface ServiceItem {
  id: string;
  category: 'web' | 'mobile' | 'backend' | 'ai' | 'design';
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  deliverables: string[];
  techStack: string[];
  avgTimeline: string;
  badge?: string;
}

export interface CaseStudy {
  id: string;
  clientName: string;
  industry: string;
  tag: string;
  title: string;
  headline: string;
  description: string;
  results: { label: string; value: string }[];
  tags: string[];
  image: string;
  solutionOverview: string;
  architectureDetails: string[];
  clientQuote: {
    quote: string;
    author: string;
    role: string;
    avatar: string;
  };
}

export interface PricingPlan {
  id: string;
  name: string;
  tier: string;
  price: string;
  billingPeriod: string;
  description: string;
  popular?: boolean;
  features: string[];
  idealFor: string;
  turnaroundTime: string;
  ctaText: string;
}

export interface Testimonial {
  id: string;
  client: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  metric: string;
  metricLabel: string;
  serviceProvided: string;
}

export interface ProjectScopeSelection {
  platform: 'web' | 'mobile' | 'both' | 'saas';
  features: string[];
  timeline: 'rush' | 'standard' | 'flexible';
  designNeeded: boolean;
  budgetRange: string;
  projectDescription: string;
  contactEmail: string;
  contactName: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export type InquiryStatus = 'new' | 'contacted' | 'in_progress' | 'advance_paid' | 'completed' | 'archived';

export interface Inquiry {
  id: string;
  ticketId: string;
  name: string;
  phone: string;
  email: string;
  businessName?: string;
  serviceRequested: string;
  budgetTier: string;
  timeline: string;
  projectDescription?: string;
  source: 'contact_modal' | 'estimator' | 'seo_audit' | 'manual_entry';
  status: InquiryStatus;
  notes?: string;
  createdAt: string;
  updatedAt?: string;
}
