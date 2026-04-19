import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import GlobalEffects from "../components/GlobalEffects";
import ParticlesBackground from "../components/ParticlesBackground";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Adarsh Pradeep - AI & App Developer",
  description: "Building scalable AI, speech, and mobile systems with a strong performance-first engineering approach.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body className={`${inter.variable} min-h-screen antialiased bg-[var(--background)] text-[var(--foreground)]`} suppressHydrationWarning>
        <ThemeProvider>
          <ParticlesBackground />
          <GlobalEffects />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
