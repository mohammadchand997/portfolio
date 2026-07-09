// Central content store. Edit this file to update site copy without touching components.

export const profile = {
  name: 'Mohammad Chand',
  role: 'Backend Developer',
  experience: '6+ Years',
  location: 'Chamkaur Sahib, Punjab, India',
  email: 'mohammadchand.cks@gmail.com',
  phone: '+91 97790 24981',
  github: 'https://github.com/mohammadchand997',
  linkedin: 'https://linkedin.com/in/mohammadchand',
  summary:
    'Backend Developer with 6+ years of experience building scalable web applications and RESTful APIs. Proficient in PHP, Laravel, CodeIgniter (CI1 & CI4), and Magento 2, with strong expertise in custom module development, legacy system migration, and headless e-commerce via Magento 2 GraphQL. Experienced in Node.js/Express for backend API services, with hands-on skills in MySQL, PostgreSQL, Redis, AWS S3, Docker, and Nginx.',
}

// Mock "API response" copy cycled through in the hero terminal.
// This is the site's signature element: framing an introduction
// as a set of real backend endpoints, since that's this developer's world.
export const heroEndpoints = [
  {
    method: 'GET',
    path: '/developer',
    status: 200,
    body: `{
  "name": "Mohammad Chand",
  "role": "Backend Developer",
  "experience_years": 6,
  "stack": ["PHP", "Laravel", "Node.js"],
  "status": "available"
}`,
  },
  {
    method: 'GET',
    path: '/uptime',
    status: 200,
    body: `{
  "service": "backend-systems",
  "uptime": "99.98%",
  "avg_response_ms": 118,
  "region": "punjab-in"
}`,
  },
  {
    method: 'POST',
    path: '/migrate',
    status: 200,
    body: `{
  "from": "CodeIgniter 1",
  "to": "CodeIgniter 4",
  "queries_optimized": true,
  "downtime": "0s"
}`,
  },
]

export const skillGroups = [
  {
    label: 'Backend',
    endpoint: 'GET /skills/backend',
    items: ['PHP 8.x', 'Laravel', 'CodeIgniter CI1', 'CodeIgniter CI4', 'Node.js', 'Express.js'],
  },
  {
    label: 'Database',
    endpoint: 'GET /skills/database',
    items: ['MySQL', 'PostgreSQL', 'Redis'],
  },
  {
    label: 'Cloud & DevOps',
    endpoint: 'GET /skills/devops',
    items: ['Docker', 'AWS S3', 'Nginx', 'PM2', 'Linux (Ubuntu)'],
  },
  {
    label: 'E-Commerce',
    endpoint: 'GET /skills/ecommerce',
    items: ['Magento 2', 'GraphQL', 'WordPress', 'Shopify'],
  },
  {
    label: 'Security',
    endpoint: 'GET /skills/security',
    items: ['JWT', 'REST API Design', 'AES-256-GCM Encryption'],
  },
  {
    label: 'Tools',
    endpoint: 'GET /skills/tools',
    items: ['Git', 'GitHub', 'Bitbucket', 'Jira', 'Composer', 'npm'],
  },
]

export const experience = [
  {
    role: 'Backend Developer',
    company: 'VAYUZ Technologies',
    period: 'Feb 2025 — Jun 2026',
    location: 'Noida, India (Remote)',
    endpoint: 'GET /experience/vayuz-technologies',
    highlights: [
      'Migrated legacy CodeIgniter 1 applications to CodeIgniter 4, modernizing routing, namespacing, and the database query layer.',
      'Designed RESTful APIs in CodeIgniter 4 powering multiple product modules and third-party integrations.',
      'Built and maintained Node.js/Express APIs deployed via PM2 on Nginx for high-concurrency services.',
      'Implemented an AES-256-GCM encryption layer, replacing a broken RSA hybrid system across all client-server traffic.',
      'Led code reviews and mentored junior developers, reducing bug count across the codebase.',
    ],
    tags: ['CI1 → CI4 Migration', 'REST APIs', 'Docker', 'Node.js', 'Encryption', 'AWS'],
  },
  {
    role: 'PHP Backend Developer',
    company: 'Freelance',
    period: 'Feb 2021 — Jan 2025',
    location: 'Remote',
    endpoint: 'GET /experience/freelance',
    highlights: [
      'Built custom Magento 2 modules and themes extending core e-commerce functionality for retail and B2B clients.',
      'Extended Magento 2 GraphQL APIs to support headless, decoupled storefront architectures.',
      'Developed a queue-based batch processing system for bulk Magento 2 price updates, eliminating admin panel freezes.',
      'Architected multilingual, multi-country CodeIgniter 4 sites supporting 5+ languages.',
      'Delivered Laravel REST API backends for auth, role-based access control, and reporting.',
    ],
    tags: ['Magento 2', 'Laravel', 'CodeIgniter', 'GraphQL'],
  },
  {
    role: 'Web Developer',
    company: 'CMSolutionz',
    period: 'Mar 2019 — Jan 2021',
    location: 'Mohali, Punjab',
    endpoint: 'GET /experience/cmsolutionz',
    highlights: [
      'Developed and deployed 10+ responsive, cross-browser websites using WordPress and Shopify.',
      'Translated Adobe XD designs into pixel-perfect, mobile-first implementations.',
      'Integrated Elementor, WooCommerce, and Mailchimp to extend e-commerce and marketing workflows.',
      'Audited and reduced plugin overhead, improving load speed and SEO rankings.',
    ],
    tags: ['WordPress', 'Shopify'],
  },
]

export const projects = [
  {
    title: 'CodeIgniter 1 → 4 Migration',
    endpoint: 'POST /projects/ci-migration',
    description:
      'Migrated legacy CodeIgniter 1 applications to CodeIgniter 4 with modern routing, namespaced architecture, and an optimized query layer — with zero downtime during cutover.',
    tags: ['CodeIgniter 4', 'PHP 8', 'Migration'],
  },
  {
    title: 'Magento 2 Custom Pricing Engine',
    endpoint: 'POST /projects/magento-pricing',
    description:
      'Built a queue-based batch system with a custom DB table, cron worker, and admin controls to safely update thousands of SKUs without freezing the admin panel.',
    tags: ['Magento 2', 'GraphQL', 'Queue Processing', 'Cron Jobs'],
  },
  {
    title: 'Node.js REST API Platform',
    endpoint: 'POST /projects/node-api-platform',
    description:
      'Designed and shipped high-concurrency Express APIs, process-managed with PM2 behind Nginx, backed by S3 for file storage.',
    tags: ['Node.js', 'Docker', 'AWS', 'PM2'],
  },
  {
    title: 'White-Label Deployment Automation',
    endpoint: 'POST /projects/whitelabel-automation',
    description:
      'Automated multi-client white-label deployments with Docker images, GitHub Actions pipelines, and shell scripts, cutting manual release steps.',
    tags: ['Docker', 'GitHub Actions', 'Shell Scripts', 'AWS'],
  },
  {
    title: 'AES-256-GCM Secure API Layer',
    endpoint: 'POST /projects/secure-api-layer',
    description:
      'Replaced a broken RSA hybrid scheme with symmetric AES-256-GCM encryption across server middleware and frontend utilities, securing all client-server traffic.',
    tags: ['AES-256-GCM', 'Security', 'Node.js'],
  },
]

export const education = [
  {
    degree: 'BCA — Computer Programming & Applications',
    school: 'Punjabi University, Patiala',
    period: '2015 — 2018',
  },
  {
    degree: 'Web Development Training',
    school: 'Web Technology Institute',
    period: 'Sep 2018 — Mar 2019 · PHP, MySQL, JavaScript, HTML5, CSS3, Bootstrap',
  },
]
