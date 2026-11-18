import type { Product } from "@/types/product";

/**
 * Official applications published by GR Studio Creator on Google Play Store.
 */
export const products: Product[] = [
  {
    slug: "kidlearn",
    name: "KidLearn",
    category: "Educational Games",
    tagline: "Interactive Learning & Quiz Games for Curious Minds",
    shortDescription: "A safe, engaging educational platform for children to master early math, vocabulary, phonics, and general science through gamified challenges.",
    description:
      "KidLearn is an interactive educational gaming suite designed specifically for young learners aged 4 to 10. Combining cognitive learning principles with playful quiz challenges, it empowers children to build confidence in math, language, vocabulary, and basic science.\n\nBuilt in compliance with child safety standards (COPPA), KidLearn features zero disruptive ads, kid-friendly navigation, spoken audio voiceovers, and offline access for distraction-free learning anywhere.",
    status: "production",
    packageId: "com.grstudios.kidsgamequiz",
    icon: "/images/products/kidlearn.svg",
    images: ["/images/products/kidlearn.png"],
    features: [
      "Age-adaptive interactive quiz levels across math, phonics, and science",
      "100% kid-safe and COPPA compliant with zero third-party ads",
      "Engaging audio voiceovers, animated celebrations, and reward badges",
      "Offline playable mode for family road trips and home learning",
    ],
    highlights: ["Live on Google Play", "Production Release", "Ages 4-10"],
    links: [
      {
        label: "Google Play Store",
        href: "https://play.google.com/store/apps/details?id=com.grstudios.kidsgamequiz",
      },
    ],
    isPlaceholder: false,
  },
  {
    slug: "chargepulse",
    name: "ChargePulse",
    category: "Utility & Power",
    tagline: "Smart Battery Health & Fast Charging Optimizer",
    shortDescription: "Real-time battery diagnostics, charging current analytics, temperature alerts, and intelligent cycle tracking to preserve battery lifespan.",
    description:
      "ChargePulse delivers professional-grade telemetry for your smartphone battery. Monitor real-time charging current (in mA), accurate wattage, charger quality, and thermal levels in a single unified dashboard.\n\nWith smart charging alerts (customizable thresholds at 80% and 100%), ChargePulse helps you avoid high-stress charge cycles and significantly extend overall battery longevity.",
    status: "closed-testing",
    packageId: "com.grstudios.chargepulse",
    icon: "/images/products/chargepulse.svg",
    images: ["/images/products/chargepulse.png"],
    features: [
      "Real-time milliampere (mA) charge current & wattage tracking",
      "Intelligent battery temperature monitoring with overheating alerts",
      "Battery health wear statistics & historical charging cycle logs",
      "Customizable charge alarm triggers at 80% and 100% full capacity",
    ],
    highlights: ["Closed Testing", "Join Beta Track", "Battery Telemetry"],
    links: [
      {
        label: "Join Closed Testing Track",
        href: "mailto:grstudiocreater@gmail.com?subject=Join%20ChargePulse%20Closed%20Testing&body=Hello%20GR%20Studio%20Team,%0A%0APlease%20add%20my%20Google%20Play%20account%20to%20the%20ChargePulse%20Closed%20Testing%20track.%0A%0AMy%20Google%20Email:%20",
      },
    ],
    isPlaceholder: false,
  },
  {
    slug: "gr-m3u-player",
    name: "GR M3U Player",
    category: "Media & Streaming",
    tagline: "High-Performance M3U Playlist & Stream Player",
    shortDescription: "Professional M3U and M3U8 streaming player featuring hardware-accelerated playback, interactive EPG channel guide, and zero-buffering HLS engine.",
    description:
      "GR M3U Player is a broadcast-grade media streaming client built for power users. Effortlessly import and organize M3U, M3U8, and Xtream playlists with instant channel loading and low-latency playback.\n\nPacked with hardware-accelerated 4K 60fps video decoding, interactive Electronic Program Guide (EPG), picture-in-picture mode, and audio equalizer controls for the ultimate entertainment experience.",
    status: "closed-testing",
    packageId: "com.gr.professional.app",
    icon: "/images/products/grm3u.svg",
    images: ["/images/products/grm3u.png"],
    features: [
      "Ultra-low latency HLS, DASH, and M3U8 streaming playback",
      "Hardware-accelerated decoding with 4K 60fps video support",
      "Interactive EPG (Electronic Program Guide) channel navigation",
      "Picture-in-Picture (PiP) background audio and equalizer controls",
    ],
    highlights: ["Closed Testing", "Join Beta Track", "4K 60fps Streaming"],
    links: [
      {
        label: "Join Closed Testing Track",
        href: "mailto:grstudiocreater@gmail.com?subject=Join%20GR%20M3U%20Player%20Closed%20Testing&body=Hello%20GR%20Studio%20Team,%0A%0APlease%20add%20my%20Google%20Play%20account%20to%20the%20GR%20M3U%20Player%20Closed%20Testing%20track.%0A%0AMy%20Google%20Email:%20",
      },
    ],
    isPlaceholder: false,
  },
  {
    slug: "talkbridge",
    name: "TalkBridge",
    category: "Communication",
    tagline: "Real-Time AI Voice Translation & Conversation Bridge",
    shortDescription: "Seamless speech-to-speech AI translation, multi-lingual audio bridge channels, and encrypted messaging across 80+ international languages.",
    description:
      "TalkBridge breaks language barriers in real time. Designed for travelers, international business teams, and polyglots, TalkBridge enables natural conversation across 80+ languages with neural speech synthesis.\n\nFeatures an innovative split-screen dual-mic mode for face-to-face cross-language discussions, low-bandwidth voice compression for clear connectivity anywhere, and end-to-end encrypted transcripts.",
    status: "closed-testing",
    packageId: "com.gr.studio.talkbridge",
    icon: "/images/products/talkbridge.svg",
    images: ["/images/products/talkbridge.png"],
    features: [
      "Real-time speech-to-speech voice translation in 80+ languages",
      "Dual-speaker split-screen mode for face-to-face foreign dialog",
      "Low-bandwidth audio optimization for crystal-clear calls",
      "End-to-end encrypted chats with instant transcript export",
    ],
    highlights: ["Closed Testing", "Join Beta Track", "80+ Languages"],
    links: [
      {
        label: "Join Closed Testing Track",
        href: "mailto:grstudiocreater@gmail.com?subject=Join%20TalkBridge%20Closed%20Testing&body=Hello%20GR%20Studio%20Team,%0A%0APlease%20add%20my%20Google%20Play%20account%20to%20the%20TalkBridge%20Closed%20Testing%20track.%0A%0AMy%20Google%20Email:%20",
      },
    ],
    isPlaceholder: false,
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
