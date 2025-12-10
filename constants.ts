import { 
  Users, 
  TrendingUp, 
  MapPin, 
  PenTool, 
  Share2, 
  Search, 
  Bot,
  Zap,
  BarChart,
  Layout
} from 'lucide-react';
import { NavItem, Stat, Service, Project, ProcessStep, PricingTier } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export const STATS: Stat[] = [
  { label: 'Brands Served', value: '150+', icon: Users },
  { label: 'Avg. Lead Growth', value: '3x', icon: TrendingUp },
  { label: 'Cities Covered', value: '12', icon: MapPin },
];

export const SERVICES: Service[] = [
  {
    title: 'Copywriting & Creative',
    icon: PenTool,
    benefits: [
      'Menu launch campaigns & Promo ads',
      'High-conversion landing pages',
      'WhatsApp/Instagram persuasive copy'
    ]
  },
  {
    title: 'Social Strategy',
    icon: Share2,
    benefits: [
      'Content calendar for Reels & Posts',
      'Influencer tie-ups & Community building',
      'Real-time reporting dashboards'
    ]
  },
  {
    title: 'SEO Optimization',
    icon: Search,
    benefits: [
      'Local "Near Me" search dominance',
      'Google Business Profile optimization',
      'Review strategy & Reputation management'
    ]
  },
  {
    title: 'Workflow Automation',
    icon: Bot,
    benefits: [
      'WhatsApp funnels for bookings',
      'Automated CRM lead routing',
      'Reservation reminder sequences'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Urban Spice Launch",
    category: "Restaurant Launch",
    challenge: "New location with zero initial awareness in a crowded market.",
    solution: "Hyper-local SEO + Influencer tasting event blitz.",
    impact: "Fully booked opening weekend, 1200+ IG followers in week 1.",
    image: "https://picsum.photos/800/600?random=1"
  },
  {
    title: "Cloud Kitchen Scale-Up",
    category: "Growth Strategy",
    challenge: "Stagnant order volume on aggregator platforms.",
    solution: "Menu engineering + WhatsApp retargeting automation.",
    impact: "45% increase in repeat orders, 20% reduction in CAC.",
    image: "https://picsum.photos/800/600?random=2"
  },
  {
    title: "Staffing Pipeline",
    category: "Hiring Campaign",
    challenge: "High turnover and slow hiring process for front-of-house.",
    solution: "Automated hiring funnel with pre-screening bot.",
    impact: "Time-to-hire reduced by 60%, 500+ qualified applicants.",
    image: "https://picsum.photos/800/600?random=3"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description: "We audit your current digital presence and operational bottlenecks."
  },
  {
    number: "02",
    title: "Strategy",
    description: "Custom roadmap designed for your specific cuisine and location."
  },
  {
    number: "03",
    title: "Launch",
    description: "Execution of campaigns, automation setup, and content rollout."
  },
  {
    number: "04",
    title: "Optimize",
    description: "Continuous monitoring and tweaking for maximum ROI."
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Starter",
    price: "$1,500",
    description: "Perfect for single-location cafes and QSRs.",
    features: [
      "Social Media Management (12 posts)",
      "Google Business Profile Management",
      "Basic Monthly Reporting",
      "Community Management"
    ]
  },
  {
    name: "Growth",
    price: "$3,000",
    description: "Designed for expanding brands and cloud kitchens.",
    features: [
      "Everything in Starter",
      "Paid Ad Management (Meta/Google)",
      "WhatsApp Automation Setup",
      "Influencer Outreach (3/mo)",
      "Bi-weekly Strategy Calls"
    ],
    recommended: true
  },
  {
    name: "Scale",
    price: "$5,000+",
    description: "Full-service partnership for multi-city chains.",
    features: [
      "Everything in Growth",
      "Custom Hiring Funnels",
      "Advanced CRM Integration",
      "Dedicated Account Manager",
      "Video Production Support"
    ]
  }
];