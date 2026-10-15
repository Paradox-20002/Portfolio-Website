import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Muhammad Noman - Full-Stack Software Engineer Portfolio",
  description:
    "Full-Stack Software Engineer specializing in React.js, Next.js, TypeScript, and Node.js. Building scalable web applications, PostgreSQL/Prisma backends, and AI-driven solutions.",
  keywords: "Full-Stack Software Engineer, Next.js, React.js, TypeScript, Node.js, PostgreSQL, Prisma, Tailwind CSS, WebMCP, Web Developer, Lahore, Pakistan",
  authors: [{ name: "Muhammad Noman" }],
  creator: "Muhammad Noman",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muhammad-noman-portfolio.vercel.app",
    title: "Muhammad Noman - Full-Stack Software Engineer Portfolio",
    description: "Full-Stack Software Engineer specializing in React.js, Next.js, TypeScript, and Node.js.",
    siteName: "Muhammad Noman Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Noman - Full-Stack Software Engineer Portfolio",
    description: "Full-Stack Software Engineer specializing in React.js, Next.js, TypeScript, and Node.js.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
