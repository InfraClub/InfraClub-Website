import type { Metadata } from "next";
import { Geist, Geist_Mono, Orbitron, Inter, Merriweather } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

/**
 * Replace SITE_URL and contact/social placeholders with your actual values.
 * You can set SITE_URL in environment variables and reference process.env.SITE_URL
 */
const SITE_URL = process.env.SITE_URL ?? "https://your-domain.com";
const COMPANY_NAME = "Infraclub Private Limited"; // replace
const COMPANY_LOGO = `${SITE_URL}/infraClubLogo.png`; // ensure this exists and is reachable
const DEFAULT_OG_IMAGE = `${SITE_URL}/infraClubLogo.png`; // replace with a proper OG image (1200x630)
const CONTACT_PHONE = "+919449122557"; // replace
const CONTACT_EMAIL = "infracluboffcial@gmail.com"; // replace
// const SOCIAL_LINKS = {
//   linkedin: "https://www.linkedin.com/company/your-company",
//   facebook: "https://www.facebook.com/your-company",
//   twitter: "https://twitter.com/your-company",
// };

export const metadata: Metadata = {
  title: {
    default: `${COMPANY_NAME} — One Stop Infrastructure Solutions`,
    template: `%s | ${COMPANY_NAME}`,
  },
  description:
    "Infraclub provides comprehensive infrastructure solutions for residential & commercial projects — engineering, procurement, construction, and maintenance with a focus on quality, safety and timely delivery.",
  keywords: [
    "Infraclub",
    "infrastructure solutions",
    "residential infrastructure",
    "construction services",
    "infrastructure engineering",
    "civil works",
    "project management",
    "infrastructure maintenance",
  ],
  authors: [{ name: COMPANY_NAME, url: SITE_URL }],
  openGraph: {
    title: `${COMPANY_NAME} — One Stop Infrastructure Solutions`,
    description:
      "Comprehensive infrastructure solutions for residential & commercial projects — engineering, procurement, construction, and maintenance.",
    url: SITE_URL,
    siteName: COMPANY_NAME,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${COMPANY_NAME} preview image`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_NAME} — One Stop Infrastructure Solutions`,
    description:
      "Comprehensive infrastructure solutions for residential & commercial projects — engineering, procurement, construction, and maintenance.",
    images: [DEFAULT_OG_IMAGE],
    // creator: "@your_twitter_handle", // replace if available
  },
  icons: {
    icon: "/infraClubLogo.png",
    shortcut: "/infraClubLogo.png",
    apple: "/infraClubLogo.png",
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_NAME,
    url: SITE_URL,
    logo: COMPANY_LOGO,
    // sameAs: [SOCIAL_LINKS.linkedin, SOCIAL_LINKS.facebook, SOCIAL_LINKS.twitter].filter(Boolean),
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: CONTACT_PHONE,
        contactType: "customer service",
        email: CONTACT_EMAIL,
        availableLanguage: "en",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Replace with actual street",
      addressLocality: "City",
      addressRegion: "State",
      postalCode: "PostalCode",
      addressCountry: "Country",
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: SITE_URL,
    name: COMPANY_NAME,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/infraClubLogo.png" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} ${inter.variable} ${merriweather.variable} font-serif antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
