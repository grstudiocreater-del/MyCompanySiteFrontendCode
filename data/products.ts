import type { Product } from "@/types/product";

/**
 * Official applications published by GR Studio Creator on Google Play Store.
 */
export const products: Product[] = [
  {
    slug: "kidlearn",
    name: "KidLearn",
    category: "Educational Games",
    tagline: "Learn. Play. Grow.",
    shortDescription: "The fun and smart way for kids to learn and explore! Interactive core subjects (Maths, English, Science, Geography), multilingual adventures, and brain games.",
    description:
      "KidLearn is an interactive educational suite designed for young minds to learn, play, and grow. Combining curriculum-aligned learning with playful quiz challenges, it empowers children to build confidence across Core Subjects, Languages, and Creative Learning.\n\nFeaturing Maths Adventure (Addition, Subtraction, Multiplication, Division), Language Adventure (Hindi, French, Spanish, German, Japanese), brain-boosting puzzle games, drawing canvas, and XP reward progress tracking with a 100% child-safe experience.",
    status: "production",
    packageId: "com.grstudios.kidsgamequiz",
    icon: "/images/products/kidlearn-v2.png",
    banner: "/images/products/kidlearn-banner.png",
    images: ["/images/products/kidlearn-banner.png"],
    features: [
      "Core Subjects: Maths Adventure, English reading & writing, Science & Geography",
      "Language Adventure: Learn words in Hindi, French, Spanish, German & Japanese",
      "Fun & Brain Games: Puzzle games, quiz challenges, memory cards & drawing canvas",
      "Creative Learning: Interactive Story Builder and creative challenges",
      "Progress Tracking: XP points, streak flame, achievements, and subject mastery bars",
    ],
    highlights: ["Live on Google Play", "Learn. Play. Grow.", "Ages 4-10", "100% Kid-Safe"],
    links: [
      {
        label: "Google Play Store",
        href: "https://play.google.com/store/apps/details?id=com.grstudios.kidsgamequiz",
      },
    ],
    isPlaceholder: false,
  },
  {
    slug: "lumora",
    name: "Lumora",
    category: "Utility & Power",
    tagline: "Smart Charging & Battery Health Optimizer",
    shortDescription: "Real-time charging insights, battery health condition diagnostics, per-app power usage analytics, and intelligent battery optimization.",
    description:
      "Lumora delivers professional-grade telemetry and optimization for your smartphone battery. Monitor real-time charging speed, accurate voltage, battery health condition percentage, and thermal levels in a single unified dashboard.\n\nFeaturing intelligent per-app power usage tracking, smart charging alerts, one-tap battery saver actions, and customizable charging animation themes to enhance your charging experience and extend battery life.",
    status: "closed-testing",
    packageId: "com.grstudios.chargepulse",
    icon: "/images/products/lumora-v2.png",
    banner: "/images/products/lumora-banner.png",
    images: ["/images/products/lumora-banner.png"],
    features: [
      "Real-time charging telemetry: voltage, wattage, and charging type detection",
      "Comprehensive battery health diagnostics, condition score & cycle tracking",
      "Detailed per-app battery usage monitor with hourly screen-on analytics",
      "One-tap battery optimization: background app kill, dark mode & power saver",
      "Custom charging animation themes: Classic, Wave, Pulse, Glow, and Robot Android",
    ],
    highlights: ["Closed Testing", "Join Beta Track", "Battery Telemetry", "Charging Animations"],
    links: [
      {
        label: "Join Closed Testing Track",
        href: "mailto:grstudiocreater@gmail.com?subject=Join%20Lumora%20Closed%20Testing&body=Hello%20GR%20Studio%20Team,%0A%0APlease%20add%20my%20Google%20Play%20account%20to%20the%20Lumora%20Closed%20Testing%20track.%0A%0AMy%20Google%20Email:%20",
      },
    ],
    isPlaceholder: false,
  },
  {
    slug: "gr-m3u-player",
    name: "GR M3U Player Pro",
    category: "Media & Streaming",
    tagline: "Powerful & Modern Media Player for Live TV, Movies and Series",
    shortDescription: "Hardware-accelerated 4K Ultra HD streaming player for Smart IPTV, Xtream API, and M3U playlists. Features ExoPlayer engine, background audio, and Android TV support.",
    description:
      "GR M3U Player Pro is a broadcast-grade media streaming client built for power users. Effortlessly import and organize Smart IPTV, M3U, M3U8, and Xtream playlists with instant channel loading and zero-buffering playback.\n\nPacked with hardware-accelerated 4K Ultra HD & HDR video decoding powered by ExoPlayer, auto Picture-in-Picture (PiP), background audio playback, and multi-device support across mobile phones, tablets, and Android TV.",
    status: "closed-testing",
    packageId: "com.gr.professional.app",
    icon: "/images/products/grm3u-v2.png",
    banner: "/images/products/grm3u-banner.png",
    images: ["/images/products/grm3u-banner.png"],
    features: [
      "Seamless Smart IPTV, Xtream API & M3U / M3U8 playlist management",
      "Hardware-accelerated 4K Ultra HD & HDR video playback with ExoPlayer",
      "Live TV channels, Movies library, and popular TV series streaming",
      "Multi-device ready: Android TV, mobile phones, and tablets supported",
      "Auto Picture-in-Picture (PiP), background audio, and customizable buffers",
    ],
    highlights: ["Closed Testing", "Join Beta Track", "4K Ultra HD", "Android TV"],
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
    tagline: "Real-Time Multi-Language Translator & Speech Bridge",
    shortDescription: "Talk in any language and be understood anywhere. Seamless speech-to-speech AI translation, offline neural models, and photo text translation across 100+ languages.",
    description:
      "TalkBridge breaks language barriers in real time. Designed for travelers, international business teams, and polyglots, TalkBridge enables natural conversation across 100+ languages with neural speech synthesis.\n\nPowered by on-device Whisper neural speech recognition, TalkBridge works completely offline without an internet connection. Enjoy instant photo text translation, dual-speaker hands-free conversation mode, and 100% on-device private processing with zero cloud data uploads.",
    status: "closed-testing",
    packageId: "com.gr.studio.talkbridge",
    icon: "/images/products/talkbridge-v2.png",
    banner: "/images/products/talkbridge-banner.png",
    images: ["/images/products/talkbridge-banner.png"],
    features: [
      "Real-time speech-to-speech voice translation in 100+ languages",
      "On-device Whisper neural speech recognition & full offline mode",
      "Translate foreign text directly from photo camera snapshots",
      "100% private & secure on-device processing with zero cloud data uploads",
      "Hands-free voice conversation toggle & dual-speaker split-screen UI",
    ],
    highlights: ["Closed Testing", "Join Beta Track", "100+ Languages", "Works Offline"],
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
