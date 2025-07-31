import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Muhammad Noman - Flutter Developer Portfolio",
  description:
    "Versatile Developer specializing in mobile app development with Flutter and Dart. Experienced in full-stack web development and passionate about creating innovative, user-friendly applications.",
  keywords: "Flutter Developer, Mobile App Development, Dart, React, Next.js, Full Stack Developer, Pakistan",
  authors: [{ name: "Muhammad Noman" }],
  creator: "Muhammad Noman",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muhammad-noman-portfolio.vercel.app",
    title: "Muhammad Noman - Flutter Developer Portfolio",
    description: "Versatile Developer specializing in mobile app development with Flutter and Dart.",
    siteName: "Muhammad Noman Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Noman - Flutter Developer Portfolio",
    description: "Versatile Developer specializing in mobile app development with Flutter and Dart.",
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
        {children}
        <Toaster />
      </body>
    </html>
  )
}
