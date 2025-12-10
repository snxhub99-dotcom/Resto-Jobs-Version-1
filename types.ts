import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
  icon: LucideIcon;
}

export interface Service {
  title: string;
  icon: LucideIcon;
  benefits: string[];
}

export interface Project {
  title: string;
  category: string;
  challenge: string;
  solution: string;
  impact: string;
  image: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}