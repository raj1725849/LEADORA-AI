import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://leadora.com"),
  title: "Leadora CRM — Turn Every Lead Into Opportunity | CRM for Real Estate & Sales Teams",
  description: "Leadora helps real estate developers, agencies, and sales teams respond faster, track every lead, and convert more from the leads they already pay for.",
  keywords: ["CRM for real estate", "lead management software", "sales follow-up CRM", "lead tracking system", "real estate CRM India", "sales team management CRM"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Leadora CRM — Turn Every Lead Into Opportunity",
    description: "The ultimate lead management software to help real estate and high-volume sales teams extract more value from the leads they already generate.",
    url: "https://leadora.com",
    siteName: "Leadora",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leadora CRM — Turn Every Lead Into Opportunity",
    description: "The ultimate lead management software to help real estate and high-volume sales teams extract more value from the leads they already generate.",
  },
};

export const viewport: Viewport = {
  themeColor: "#1A0D2E",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://leadora.com/#organization",
      "name": "Leadora",
      "url": "https://leadora.com",
      "logo": "https://leadora.com/icon.png",
      "description": "Leadora is a purpose-built CRM and lead management software for real estate and high-volume sales teams.",
    },
    {
      "@type": "WebSite",
      "@id": "https://leadora.com/#website",
      "url": "https://leadora.com",
      "name": "Leadora CRM",
      "publisher": {
        "@id": "https://leadora.com/#organization"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full selection:bg-gold selection:text-plum-deep">
        {children}
      </body>
    </html>
  );
}
