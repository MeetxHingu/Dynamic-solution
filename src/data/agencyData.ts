import { ServiceItem, CaseStudy, PricingPlan, Testimonial, FaqItem } from '../types';

export const FOUNDER_INFO = {
  companyName: 'Dynamic Automations',
  founderName: 'Akshat Rajankumar Soni',
  location: 'Umreth, Gujarat, India',
  phone: '+91 9510351986',
  rawPhone: '9510351986',
  email: 'akshatsoni468@gmail.com',
  totalRevenueMilestone: '₹34,166+',
  totalInvoicesPaid: '7/7 Invoices Paid',
  totalClients: '4+ Local & Global Clients',
  satisfactionRate: '100% On-Time Delivery',
  internationalReach: 'India & Canada',
  whatsappUrl: 'https://wa.me/919510351986?text=Hi%20Akshat,%20I%20saw%20Dynamic%20Automations%20and%20would%20like%20to%20discuss%20a%20website%20/%20automation%20project.'
};

export const VERIFIED_INVOICES = [
  {
    invoiceNumber: 'INV-2026-01',
    date: '02/05/2026',
    client: 'Kapdadiya Priyanka',
    service: 'Setting up WhatsApp Bot for Inquiry',
    amount: '₹1,500.00',
    status: 'PAID (Online/Cash)',
    category: 'WhatsApp Automation'
  },
  {
    invoiceNumber: 'INV-2026-02',
    date: '09/05/2026',
    client: 'Bhargav Patel (Canada)',
    service: 'Website Bug Fixing and Troubleshooting',
    amount: '₹7,000.00',
    status: 'PAID',
    category: 'International Troubleshooting'
  },
  {
    invoiceNumber: 'INV-2026-03',
    date: '13/06/2026',
    client: 'Santram Hospital',
    service: 'Custom Website Development (Advance Payment)',
    amount: '₹3,000.00',
    status: 'PAID (Advance Milestone)',
    category: 'Custom Healthcare Web'
  },
  {
    invoiceNumber: 'INV-2026-04',
    date: '22/07/2026',
    client: 'Santram Hospital',
    service: 'Custom Website Development (Final Delivery Payment)',
    amount: '₹15,000.00',
    status: 'PAID (Final Delivery)',
    category: 'Custom Healthcare Web'
  },
  {
    invoiceNumber: 'INV-2026-05',
    date: '29/07/2026',
    client: 'Santram Hospital',
    service: 'Yearly Website Maintenance',
    amount: '₹3,500.00',
    status: 'PAID (Cash/Annual)',
    category: 'Annual Maintenance'
  },
  {
    invoiceNumber: 'INV-2026-06',
    date: '21/08/2026',
    client: 'Saifuddin Sahaji',
    service: 'Website Bug Fixing and Troubleshooting',
    amount: '₹2,878.00',
    status: 'PAID (Cash)',
    category: 'Bug Fixing'
  },
  {
    invoiceNumber: 'INV-2026-07',
    date: '26/08/2026',
    client: 'Saifuddin Sahaji',
    service: 'Additional Website Bug Fixing',
    amount: '₹1,288.00',
    status: 'PAID (Online)',
    category: 'Bug Fixing'
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'custom-website',
    category: 'web',
    title: 'Custom Website Development',
    tagline: 'Modern, mobile-ready websites for businesses, clinics & hospitals',
    description: 'We design and build clean, ultra-fast custom websites tailored for local and corporate businesses. From healthcare portals with patient inquiry forms to business lead generation sites with WhatsApp integration.',
    iconName: 'Globe',
    deliverables: [
      '100% Mobile & Tablet Responsive Layouts',
      'Appointment & Customer Inquiry Forms',
      'WhatsApp Quick Chat Button & Google Map Integration',
      'Staged Milestone Delivery (Advance + Final Delivery Model)',
      'High-Speed Performance & On-Page SEO'
    ],
    techStack: ['React', 'Next.js', 'HTML5/Tailwind', 'JavaScript', 'Node.js', 'Vercel/Cloud'],
    avgTimeline: '2–3 Weeks',
    badge: 'Flagship Service'
  },
  {
    id: 'whatsapp-bot',
    category: 'ai',
    title: 'WhatsApp Inquiry & Lead Bot',
    tagline: '24/7 automated customer responses on WhatsApp',
    description: 'Never miss a potential customer inquiry again. We configure automated WhatsApp chatbots that greet leads, share your service catalog or price list, capture phone numbers, and notify you instantly.',
    iconName: 'MessageSquare',
    deliverables: [
      'Automated Greeting & Smart Menu Triggers',
      'Business Hours & Instant FAQ Auto-Replies',
      'Lead Capture to Google Sheets or Direct Mobile Alerts',
      'Custom Inquiry Routing for Multiple Services',
      'Quick QR Code for Storefront & Social Media'
    ],
    techStack: ['WhatsApp Business API', 'Webhooks', 'Node.js', 'Google Sheets Integration'],
    avgTimeline: '24–72 Hours',
    badge: 'Popular for Local Biz'
  },
  {
    id: 'bug-fixing',
    category: 'backend',
    title: 'Website Bug Fixing & Troubleshooting',
    tagline: 'Fast emergency repair for broken layouts, forms & scripts',
    description: 'Is your website broken, slow, or displaying errors on mobile? We diagnose and fix layout glitches, contact form failures, database errors, and responsive styling issues with quick 24–48 hour turnaround.',
    iconName: 'Wrench',
    deliverables: [
      'Fix Broken Contact & Inquiry Forms',
      'Mobile Responsive Layout & CSS Alignments',
      'JavaScript Console Errors & Script Debugging',
      'Hosting, Domain, SSL & DNS Issue Resolution',
      'Cross-Border Remote Support (India & International)'
    ],
    techStack: ['JavaScript', 'CSS3', 'PHP/WordPress', 'React', 'Node.js', 'Browser DevTools'],
    avgTimeline: '24–48 Hours',
    badge: 'Quick Turnaround'
  },
  {
    id: 'yearly-maintenance',
    category: 'backend',
    title: 'Yearly Website Maintenance (AMC)',
    tagline: 'Complete peace of mind for your business website',
    description: 'Keep your website secure, updated, and running 24/7 without worrying about technical headaches. Includes regular backups, security monitoring, domain/hosting oversight, and minor content updates.',
    iconName: 'ShieldCheck',
    deliverables: [
      'Weekly Offsite Cloud Backups',
      '24/7 Uptime & Downtime Monitoring',
      'Security Patching & Malware Prevention',
      'Priority Bug Fixing & Emergency Restores',
      'Routine Text, Doctor/Staff & Phone Number Updates'
    ],
    techStack: ['Cloud Backups', 'Uptime Kuma', 'SSL Monitoring', 'Security Hardening'],
    avgTimeline: '365 Days Continuous',
    badge: 'Best Value'
  },
  {
    id: 'ecommerce-store',
    category: 'web',
    title: 'E-Commerce & Digital Catalogs',
    tagline: 'Sell products online with WhatsApp & UPI payment checkout',
    description: 'Launch an intuitive online catalog or full store with smooth Indian payment gateways (Razorpay, PhonePe, Paytm, Google Pay) and automatic order alerts directly sent to your phone.',
    iconName: 'ShoppingCart',
    deliverables: [
      'Product Catalog with Category Filters',
      'UPI, Cards & Net Banking Payment Integration',
      'Instant Order Confirmation via WhatsApp & SMS',
      'Admin Inventory & Order Management Dashboard'
    ],
    techStack: ['React', 'Next.js', 'Razorpay API', 'Tailwind CSS', 'Supabase'],
    avgTimeline: '2–3 Weeks'
  },
  {
    id: 'speed-optimization',
    category: 'design',
    title: 'Speed & Google Maps (SEO) Setup',
    tagline: 'Attract more local inquiries and rank higher on Google',
    description: 'Optimize your Google Business profile, improve Google search rankings for your town or city, and compress heavy assets so your website loads in under 1.5 seconds on mobile 4G/5G connections.',
    iconName: 'Zap',
    deliverables: [
      'Google My Business & Google Maps Optimization',
      'Image Compression & 1-Second Page Load Speeds',
      'Schema.org Local Business Structured Data',
      'Core Web Vitals & Mobile-First Score Boost'
    ],
    techStack: ['Lighthouse', 'Vercel Analytics', 'Schema.org', 'Cloudflare CDN'],
    avgTimeline: '3–5 Days'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'santram-hospital',
    clientName: 'Santram Hospital',
    industry: 'Healthcare & Hospital Services',
    tag: 'Custom Website + Yearly Maintenance',
    title: 'Complete digital hospital portal with patient inquiry & annual maintenance',
    headline: 'Delivered in milestone stages: ₹3,000 advance + ₹15,000 delivery + ₹3,500/yr AMC',
    description: 'Engineered a modern, compassionate, and trustworthy website for Santram Hospital in Gujarat. Features hospital departments, doctor profiles, patient appointment inquiry forms, and Google Maps integration, supported by ongoing annual technical care.',
    results: [
      { label: 'Total Project Value', value: '₹21,500' },
      { label: 'Delivery Model', value: '2 Milestones' },
      { label: 'Annual AMC', value: '₹3,500 / yr' },
      { label: 'Patient Inquiries', value: '5x Increase' }
    ],
    tags: ['Custom Web Dev', 'Healthcare UI', 'Inquiry Routing', 'Annual AMC', 'Responsive'],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    solutionOverview: 'Developed a high-trust healthcare portal showcasing facilities, OPD timings, doctor rosters, and emergency contact buttons. Executed under transparent billing (INV-2026-03 advance, INV-2026-04 final delivery, and INV-2026-05 yearly maintenance).',
    architectureDetails: [
      'Frontend: Fast, mobile-responsive layout designed for easy patient navigation',
      'Inquiry Engine: Form validation with instant email and SMS notifications to hospital desk',
      'Maintenance: 365-day security updates, regular database backups, and doctor profile changes',
      'Local SEO: High-ranking Google Maps presence for regional patients seeking care'
    ],
    clientQuote: {
      quote: "Dynamic Automations and Akshat delivered our hospital website with great care and attention to detail. Having patient inquiries flow directly to our front desk and reliable yearly maintenance gives us total peace of mind.",
      author: 'Santram Hospital Administration',
      role: 'Healthcare Management',
      avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&h=200&q=80'
    }
  },
  {
    id: 'bhargav-patel-canada',
    clientName: 'Bhargav Patel (Canada)',
    industry: 'International Business / Remote Web',
    tag: 'Website Troubleshooting & Bug Fixing',
    title: 'Cross-border website bug fixing, troubleshooting & speed optimization',
    headline: 'Remote diagnostic & repair completed for Canadian client: ₹7,000 delivered',
    description: 'Diagnosed and resolved critical frontend breaks, broken form submissions, and database query bottlenecks for an international client based in Canada. Delivered complete fixes within 48 hours without operational downtime.',
    results: [
      { label: 'Invoice Value', value: '₹7,000' },
      { label: 'Turnaround Time', value: '< 48 Hours' },
      { label: 'Bugs Resolved', value: '14 Critical' },
      { label: 'Client Location', value: 'Canada 🇨🇦' }
    ],
    tags: ['Bug Fixing', 'Troubleshooting', 'Cross-Border Client', 'CSS/JS Debugging'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    solutionOverview: 'Conducted deep-dive code debugging on staging, patched JavaScript runtime exceptions, adjusted broken flexbox/grid alignments, and optimized mobile loading speeds under INV-2026-02.',
    architectureDetails: [
      'Diagnostic: Root-cause identification of broken event listeners and form handlers',
      'Optimization: Eliminated render-blocking stylesheets and minified script bundles',
      'Cross-Browser: Rigorous verification across Safari, Chrome, iOS Safari, and Android Chrome',
      'Security: Sanitized input fields to prevent cross-site scripting vulnerabilities'
    ],
    clientQuote: {
      quote: "Akshat diagnosed the issues on my website that previous developers struggled with. He communicated clearly despite the timezone difference with Canada and delivered within 2 days. Highly recommended.",
      author: 'Bhargav Patel',
      role: 'Business Owner, Canada',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80'
    }
  },
  {
    id: 'kapdadiya-priyanka-bot',
    clientName: 'Kapdadiya Priyanka',
    industry: 'Retail & Service Inquiries',
    tag: 'WhatsApp Bot Automation',
    title: 'Automated 24/7 WhatsApp customer inquiry and service capture bot',
    headline: 'Fast setup completed in 24 hours: ₹1,500 delivered under INV-2026-01',
    description: 'Implemented an intelligent automated WhatsApp responder for incoming inquiries. The bot greets prospects, provides automated answers to frequent queries, presents catalog choices, and captures lead details automatically.',
    results: [
      { label: 'Invoice Value', value: '₹1,500' },
      { label: 'Response Time', value: 'Instant (<2s)' },
      { label: 'Setup Time', value: '24 Hours' },
      { label: 'Lead Capture', value: '100% Automated' }
    ],
    tags: ['WhatsApp Bot', 'Inquiry Automation', 'Lead Generation', 'Auto-Replies'],
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=1200&q=80',
    solutionOverview: 'Configured automated business webhooks, structured interactive keyword menus, and built auto-notification routing so every potential customer receives immediate assistance even outside business hours.',
    architectureDetails: [
      'Messaging: WhatsApp Business API webhook automation with instant trigger responses',
      'Interactive Logic: Numbered option menus guiding users to product catalogs and pricing',
      'Data Capture: Automatic customer name and phone logging for quick follow-ups',
      'Handover: Seamless transition to human agent for complex custom orders'
    ],
    clientQuote: {
      quote: "Setting up the WhatsApp bot made a huge difference. Now customers get an instant reply at any time of day, and I don't lose inquiries when I'm busy. Very fast and affordable service.",
      author: 'Kapdadiya Priyanka',
      role: 'Business Owner',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80'
    }
  },
  {
    id: 'saifuddin-sahaji-repairs',
    clientName: 'Saifuddin Sahaji',
    industry: 'Commercial Business Web',
    tag: 'Website Bug Fixing & Tuning',
    title: 'Multi-stage website bug fixing, responsive tuning & troubleshooting',
    headline: 'Continuous technical support delivered across 2 milestones: ₹4,166 total',
    description: 'Fixed persistent layout anomalies, mobile view clipping, and added custom functional enhancements across two consecutive billing cycles (INV-2026-06 for ₹2,878 and INV-2026-07 for ₹1,288).',
    results: [
      { label: 'Total Invoiced', value: '₹4,166' },
      { label: 'Invoices Paid', value: '2 Projects' },
      { label: 'Delivery Status', value: '100% Resolved' },
      { label: 'Client Trust', value: 'Repeat Client' }
    ],
    tags: ['Bug Fixing', 'Repeat Client', 'CSS Responsive', 'Rapid Patch'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    solutionOverview: 'Executed precision CSS refactoring and dynamic DOM patching. Resolved broken mobile navigation drawers and fine-tuned content alignment across multiple handheld screen sizes.',
    architectureDetails: [
      'Layout Tuning: Rebuilt CSS media queries to eliminate horizontal scroll overflow',
      'Form Optimization: Validated user input fields and prevented double-submission errors',
      'Repeat Engagement: Re-engaged for secondary enhancements with instant turnaround'
    ],
    clientQuote: {
      quote: "Whenever something went wrong on our site, Akshat was ready to troubleshoot and solve it promptly. Clear pricing, honest communication, and reliable fixes every time.",
      author: 'Saifuddin Sahaji',
      role: 'Entrepreneur',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80'
    }
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'quick-fix',
    name: 'Bug Fix & Troubleshooting',
    tier: 'Single Task / Emergency',
    price: '₹1,499 – ₹2,999',
    billingPeriod: 'per issue / project',
    description: 'Fast, guaranteed resolution for broken websites, contact forms, CSS layout errors, and script bugs. Billed based on scope, like our verified client fixes.',
    features: [
      'Diagnostic & root cause analysis',
      'Repair broken contact forms & buttons',
      'Mobile responsive layout & CSS alignment fixes',
      'JavaScript & PHP error resolution',
      '24 to 48 hour turnaround guarantee',
      '7-day post-fix verification check'
    ],
    idealFor: 'Businesses with an existing website that has bugs or broken features',
    turnaroundTime: '24–48 Hours',
    ctaText: 'Fix My Website Bug'
  },
  {
    id: 'whatsapp-automation',
    name: 'WhatsApp Bot & Lead Setup',
    tier: 'Automation & Inquiries',
    price: '₹1,499 – ₹3,499',
    billingPeriod: 'one-time setup',
    popular: true,
    description: 'Set up an automated 24/7 WhatsApp response system that captures leads, answers inquiries, and shares your services automatically (as built for Kapdadiya Priyanka).',
    features: [
      '24/7 Auto-greeting & smart reply menus',
      'Inquiry capture to WhatsApp or Google Sheets',
      'Service catalog & price-list sharing flow',
      'Direct call / location map routing',
      'Custom QR code for shop counters & flyers',
      'Free testing & 15-day configuration support'
    ],
    idealFor: 'Shops, clinics, consultants & local businesses getting inquiries',
    turnaroundTime: '24–72 Hours',
    ctaText: 'Setup WhatsApp Bot'
  },
  {
    id: 'custom-website',
    name: 'Complete Custom Website',
    tier: 'Full Delivery (Milestone Model)',
    price: '₹14,999 – ₹18,000',
    billingPeriod: 'advance + final delivery',
    description: 'Our flagship service (as delivered to Santram Hospital). A complete, modern, mobile-friendly website with staged milestone payments (advance + delivery).',
    features: [
      'Custom modern design (Home, About, Services, Contact)',
      '100% Mobile & tablet responsive layout',
      'Interactive customer inquiry & appointment forms',
      'WhatsApp chat button & Google Maps embedding',
      'Basic On-Page SEO & Google Search Console indexing',
      'Transparent milestones (₹3,000 advance + final balance)'
    ],
    idealFor: 'Hospitals, clinics, manufacturers, and professional service companies',
    turnaroundTime: '2–3 Weeks',
    ctaText: 'Start Website Project'
  },
  {
    id: 'annual-maintenance',
    name: 'Yearly Website Maintenance (AMC)',
    tier: 'Annual Technical Care',
    price: '₹3,500',
    billingPeriod: 'per year',
    description: 'Worry-free maintenance as trusted by Santram Hospital. We monitor your website 24/7, handle backups, fix unexpected glitches, and update your content.',
    features: [
      'Full 1-year coverage (365 days)',
      'Regular offsite cloud backups',
      'Security checks & uptime monitoring',
      'Domain & SSL renewal assistance',
      'Routine text, phone number & doctor/staff updates',
      'Priority emergency troubleshooting'
    ],
    idealFor: 'Any business owner wanting zero website headaches for an entire year',
    turnaroundTime: 'Ongoing 365 Days',
    ctaText: 'Get Annual Care'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    client: 'Santram Hospital Administration',
    role: 'Healthcare Management',
    company: 'Santram Hospital, Gujarat',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&h=200&q=80',
    quote: 'Akshat built our hospital website with great professionalism. Patient inquiries now come directly to us, and his yearly maintenance package keeps everything running smoothly without any downtime.',
    metric: '₹21,500',
    metricLabel: 'Web + AMC Delivered',
    serviceProvided: 'Custom Hospital Website & AMC'
  },
  {
    id: '2',
    client: 'Bhargav Patel',
    role: 'Business Owner',
    company: 'Canada Client',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80',
    quote: 'I had several broken scripts and layout bugs on my website that needed fast attention. Dynamic Automations delivered clean fixes within 48 hours across time zones. Great communication!',
    metric: '48h',
    metricLabel: 'Turnaround Time',
    serviceProvided: 'Website Bug Fixing (Canada)'
  },
  {
    id: '3',
    client: 'Kapdadiya Priyanka',
    role: 'Business Owner',
    company: 'Retail & Service Client',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80',
    quote: 'The WhatsApp inquiry bot was configured in just one day. Now my clients get instant replies even when I am busy, and every lead is recorded. Highly recommended for every small business!',
    metric: '24h',
    metricLabel: 'Bot Deployment',
    serviceProvided: 'WhatsApp Bot Setup'
  },
  {
    id: '4',
    client: 'Saifuddin Sahaji',
    role: 'Entrepreneur',
    company: 'Repeat Client',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80',
    quote: 'We hired Dynamic Automations for bug fixing twice. Fair pricing, quick response, and the issues were completely eliminated. Akshat is our go-to developer for technical website work.',
    metric: '2 Projects',
    metricLabel: 'Delivered & Paid',
    serviceProvided: 'Bug Fixing & Troubleshooting'
  }
];

export const FAQS: FaqItem[] = [
  {
    category: 'Billing & Payment',
    question: 'How does payment work, and do you take an advance?',
    answer: 'Yes, we work with transparent, milestone-based billing. For custom websites, we follow the same model as our Santram Hospital project: a small initial advance (e.g. ₹3,000) to start development, and the remaining balance upon final delivery and client approval. For quick bug fixes and WhatsApp bots, payment can be made online via UPI or bank transfer.'
  },
  {
    category: 'WhatsApp Bots',
    question: 'How does the WhatsApp inquiry bot help my business?',
    answer: 'When prospective customers message your WhatsApp number, the bot immediately greets them, presents your service menu or pricing, and collects their name and inquiry. You get notified right away, and your customer never waits for an answer, which dramatically boosts conversions.'
  },
  {
    category: 'Website Maintenance',
    question: 'What is included in the ₹3,500 Yearly Website Maintenance (AMC)?',
    answer: 'Our AMC covers 365 days of continuous care: weekly cloud backups, uptime monitoring, security patching against hackers, fixing sudden errors, and updating your phone numbers, text, or doctor/staff profiles whenever you need.'
  },
  {
    category: 'Bug Fixing',
    question: 'How fast can you fix broken features or layout errors on my website?',
    answer: 'Most website bugs, form submission errors, and mobile layout glitches are diagnosed and fixed within 24 to 48 hours. As proven with our clients in India and Canada, we work quickly to minimize any disruption to your business.'
  },
  {
    category: 'Ownership',
    question: 'Do I get full ownership of my website and files?',
    answer: 'Yes, 100%! All source code, design files, domain, and hosting access belong to you. We provide full login credentials and documentation so you are in complete control with zero vendor lock-in.'
  },
  {
    category: 'Location & Communication',
    question: 'Where are you located, and how do we communicate during the project?',
    answer: 'Dynamic Automations is based in Umreth, Gujarat, founded by Akshat Rajankumar Soni. We work with clients locally across Gujarat and India, as well as internationally (e.g., Canada). We communicate directly over WhatsApp (+91 9510351986), phone calls, and email (akshatsoni468@gmail.com) with frequent progress updates.'
  }
];

export const TECH_STACKS = [
  { name: 'React & Next.js', category: 'Frontend', icon: 'Atom', badge: 'Modern Web' },
  { name: 'HTML5 & Tailwind CSS', category: 'Styling', icon: 'Sparkles', badge: 'Mobile-Ready' },
  { name: 'WhatsApp Business API', category: 'Automation', icon: 'MessageSquare', badge: 'Auto Inquiries' },
  { name: 'JavaScript / TypeScript', category: 'Core', icon: 'FileCode2', badge: 'Bug-Free' },
  { name: 'Node.js & Express', category: 'Backend', icon: 'Server', badge: 'Fast APIs' },
  { name: 'PHP & WordPress', category: 'CMS', icon: 'Code', badge: 'Troubleshooting' },
  { name: 'Razorpay & UPI', category: 'Payments', icon: 'Flame', badge: 'Indian Payments' },
  { name: 'Google Search Console', category: 'SEO', icon: 'Globe', badge: 'Google Maps' },
  { name: 'Cloud Backups & SSL', category: 'Security', icon: 'ShieldCheck', badge: '24/7 Security' },
  { name: 'Vercel & Cloud Run', category: 'Hosting', icon: 'Cloud', badge: '99.9% Uptime' }
];
