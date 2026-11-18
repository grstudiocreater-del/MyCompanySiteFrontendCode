export type ClientProject = {
  slug: string;
  title: string;
  subtitle: string;
  companyContext: string;
  role: string;
  platforms: string[];
  stack: string[];
  summary: string;
  keyContributions: string[];
  portfolioUrl: string;
  statusText: string;
  ownership: "employee-client-work";
};

/**
 * Projects engineered by Founder & Lead Engineer (Govind Rajput)
 * as an employee / contractor for external companies and clients.
 *
 * NOTE: These projects are intellectual property of their respective
 * client companies (e.g. Paras Technologies) and are showcased here
 * solely as engineering portfolio credentials.
 */
export const clientProjects: ClientProject[] = [
  {
    slug: "stuc",
    title: "STUC",
    subtitle: "On-Demand Roadside Assistance Marketplace",
    companyContext: "Built as Mobile Application Engineer at Paras Technologies",
    role: "Lead Mobile Application Engineer",
    platforms: ["iOS", "Android"],
    stack: ["React Native", "TypeScript", "Socket.IO", "Redux Toolkit", "Google Maps"],
    summary:
      "A high-stakes two-sided emergency roadside assistance marketplace. Enables motorists to request immediate dispatch for battery jumps, vehicle towing, lockout assistance, and flat tyre repairs, with live real-time GPS tracking of approaching service providers.",
    keyContributions: [
      "Real-time bidirectional WebSocket event pipeline for instant job dispatch",
      "Live GPS telemetry tracking with animated vehicle marker routing on Google Maps",
      "Dual interface flows tailored for customers and on-field service technicians",
      "Offline state restoration and resilient background location updates",
    ],
    portfolioUrl: "https://rajput-govind-porfolio-dark.vercel.app/",
    statusText: "In Development / Client Production",
    ownership: "employee-client-work",
  },
  {
    slug: "japan-like-a-local",
    title: "Japan Like A Local",
    subtitle: "Native Android Travel Guide & Itinerary Engine",
    companyContext: "Built as Android Developer at Paras Technologies",
    role: "Android Developer",
    platforms: ["Native Android"],
    stack: ["Kotlin", "Jetpack Compose", "Hilt", "Google Maps", "Google Play Billing"],
    summary:
      "A rich native Android travel companion and itinerary curation app for Japan. Features curated day-by-day itineraries, interactive geospatial mapping of hundreds of hidden local spots, offline survival guides, and subscription tiers unlocked via Google Play Billing.",
    keyContributions: [
      "Modern declarative UI built 100% in Jetpack Compose and Material 3",
      "Seamless in-app monetization using Google Play Billing Library v6",
      "Offline-first geospatial caching for hundreds of curated cultural locations",
      "Dependency injection architecture with Hilt and Kotlin Coroutines",
    ],
    portfolioUrl: "https://rajput-govind-porfolio-dark.vercel.app/",
    statusText: "Client Production",
    ownership: "employee-client-work",
  },
  {
    slug: "buyngo",
    title: "Buy N Go",
    subtitle: "Real-Time Courier & Bulky Goods Delivery Platform",
    companyContext: "Built as Mobile Application Engineer at Paras Technologies",
    role: "Mobile Application Engineer",
    platforms: ["iOS", "Android"],
    stack: ["React Native", "Socket.IO", "Google Maps", "REST APIs", "Node.js"],
    summary:
      "An on-demand dispatch and logistics platform engineered for moving bulky, oversized items and retail merchandise. Features specialized dual interfaces for customers and courier drivers with live route tracking and scheduled time slots.",
    keyContributions: [
      "Real-time driver assignment and live route tracking using Socket.IO",
      "Dynamic cost calculation engine based on freight dimensions and distance",
      "Automated push notifications for order status and arrival estimates",
      "Optimized cross-platform mobile architecture with high-FPS UI performance",
    ],
    portfolioUrl: "https://rajput-govind-porfolio-dark.vercel.app/",
    statusText: "Client Production",
    ownership: "employee-client-work",
  },
  {
    slug: "byafrik",
    title: "ByAfrik",
    subtitle: "Hyper-Local African Business & Directory Platform",
    companyContext: "Built as Mobile Application Engineer at Paras Technologies",
    role: "Mobile Application Engineer",
    platforms: ["Android"],
    stack: ["Android", "Kotlin", "Google Maps", "RESTful Architecture"],
    summary:
      "A hyper-local commerce and business discovery engine for African cities. Empowers residents and travelers to discover vetted local artisans, dining spots, retail stores, and wellness venues with community reviews and interactive map navigation.",
    keyContributions: [
      "Interactive map discovery with clustered pins and instant distance sorting",
      "Merchant showcase profiles with photo galleries, menus, and operating hours",
      "Robust community ratings, user reviews, and search indexing",
      "Low-bandwidth data caching optimized for variable mobile network conditions",
    ],
    portfolioUrl: "https://rajput-govind-porfolio-dark.vercel.app/",
    statusText: "In Development / Client Production",
    ownership: "employee-client-work",
  },
];

/** Additional notable apps engineered during professional employment */
export const additionalEngineeringProjects = [
  {
    name: "Dialoom",
    type: "WebRTC Video Mentorship",
    summary: "Integrated WebRTC peer-to-peer live video calling with session scheduling and instructor booking.",
    company: "Paras Technologies",
  },
  {
    name: "Gazam",
    type: "Real-Time Encrypted Messaging",
    summary: "Architected high-concurrency real-time chat on Firebase Realtime Database with optimized socket latency.",
    company: "Paras Technologies",
  },
  {
    name: "Trayrush",
    type: "Mindfulness Audio Streaming",
    summary: "Built audio streaming modules with Android ExoPlayer, background audio services, and 60fps UI.",
    company: "Paras Technologies",
  },
];
