import type { Metadata } from "next";
import { IBM_Plex_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Separator from "@/components/ui/separator";

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
  title: "Rohit Mishra | Developer ",
  description:
    "Explore the portfolio of Rohit Mishra, a skilled developer and designer specializing in frontend and backend technologies. Discover innovative web solutions and UI/UX designs.",
  keywords: [
    "Rohit Mishra",
    "Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "UX/UI Designer",
    "Software Engineer",
    "Technology Solutions",
    "Portfolio",
  ].join(", "),
  openGraph: {
    title: "Rohit Mishra | Developer",
    description:
      "Explore the portfolio of Rohit Mishra, a skilled developer and designer specializing in frontend and backend technologies. Discover innovative web solutions and UI/UX designs.",
    url: "https://rht21.in/",
    siteName: "Rohit Mishra",
    type: "website",
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
      </body>
    </html>
  );
}
