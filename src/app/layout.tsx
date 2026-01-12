// src/app/layout.tsx

import type { Metadata } from "next";
import { Tektur } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"



const tektur = Tektur({
  subsets: ["latin"],
  variable: "--font-tektur",
});

// VVVV YOUR COMPLETE AND FINAL METADATA OBJECT VVVV
export const metadata: Metadata = {
  // --- Core SEO ---
  title: "Muhammad Zeeshan - Sr. Android Developer",
  description: "Senior Android Developer with 7+ years of experience building scalable, secure mobile applications across banking/fintech, e-commerce, and POS domains. Specialized in Kotlin, Java, Clean Architecture (MVVM), and delivering end-to-end Android solutions.",
  keywords: [
    "Muhammad Zeeshan", "Sr. Android Developer", "Android Developer", "Software Engineer", 
    "Next.js", "React.js", "Node.js", "Express.js", "MongoDB", "TypeScript", 
    "Portfolio", "Web Developer", "API Integration", "Meta API", "Karachi", "Pakistan " ,"USA", "United Kingdom" ,"UK", "Website Developer","Australia", "Sydney","Upwork Developers", "Ireland Websites"
  ],
  
  // --- Google Verification Key ---
  verification: {
    google: "avLHApe5Syhp1SUp7hK-NHmtp0jNZXw1XYOI_PRm4bE",
  },

  // --- Icons (Using your specified files) ---
  icons: {
    icon: "/file.svg", // Your specified SVG icon
    apple: "/file.svg",   // Your specified PNG icon for Apple devices
  },
  
  // --- Open Graph (for LinkedIn, Facebook, WhatsApp etc.) ---
  openGraph: {
    title: "Muhammad Zeeshan - Sr. Android Developer Portfolio",
    description: "Explore my projects, skills, and experience in the MERN stack, Next.js, and API integration.",
    url: "https://muhammad-zeeshan-android-developer.vercel.app/",
    siteName: "Muhammad Zeeshan Portfolio",
    images: [
      {
        url: "https://muhammad-zeeshan-android-developer.vercel.app/m.png", // Using your m.png as the social image
        width: 192,  // Assuming this is the size of your avatar
        height: 192,
        alt: "Muhammad Zeeshan's Portfolio",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  
  // --- Twitter Card ---
  twitter: {
    card: "summary", // Using "summary" because your image is square, not a large rectangle
    title: "Muhammad Zeeshan - Sr. Android Developer Portfolio",
    description: "Explore my projects and skills in modern web development.",
    images: ["https://muhammad-zeeshan-android-developer.vercel.app/m.png"], // Same image
  },
  
  // --- For Search Engine Bots ---
  robots: {
    index: true,
    follow: true,
  },
};
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${tektur.variable} font-sans antialiased`}>
        <Analytics/>
        <SpeedInsights/>
        {children}
      </body>
    </html>
  );
}