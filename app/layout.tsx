import type { Metadata } from "next";
import { IBM_Plex_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Separator from "@/components/ui/separator";
import { Analytics } from "@vercel/analytics/next";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rohit Mishra | AI/ML Engineer & UI Developer",
  description:
    "Portfolio of Rohit Mishra — AI/ML Engineer by profession and UI Developer by passion. Explore my work in intelligent systems, full-stack development, and freelance projects blending performance with design.",
  keywords: [
    "Rohit Mishra",
    "AI Engineer",
    "ML Engineer",
    "UI Developer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "Portfolio",
    "Freelancer",
    "Software Engineer",
  ].join(", "),
  openGraph: {
    title: "Rohit Mishra | AI/ML Engineer & UI Developer",
    description:
      "Portfolio of Rohit Mishra — AI/ML Engineer by profession and UI Developer by passion. Discover projects in computer vision, proctoring systems, and UI design.",
    url: "https://rht21.xyz/",
    siteName: "Rohit Mishra",
    type: "website",
    images: [
      {
        url: "https://rht21.xyz/rht21-og.png",
        width: 1200,
        height: 630,
        alt: "Rohit Mishra Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohit Mishra | AI/ML Engineer & UI Developer",
    description:
      "AI/ML Engineer by profession, UI Developer by passion. Explore my portfolio, projects, and freelance work.",
    images: ["https://rht21.xyz/rht21-og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${ibmPlexSans.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Separator />
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
