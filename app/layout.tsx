/**
 * StudyBuddy Jacob Jung
 * Defualt page empty for now
 * Maybe put dashboard
 */

//Font of top left title
import { Inter } from 'next/font/google'
//For authentication
import { ClerkProvider } from '@clerk/nextjs'
//For dark and light theme
import { ThemeProvider } from '@/components/display/theme-provider'
import type { Metadata } from 'next'
import './globals.css'

//Font for title
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'StudyBuddy',
  description: 'A studying app by Jacob Jung',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    //Wrapped in clerk for authentication
    //Wrapped in ThemeProvider for light and dark theme
    //System is whatever system style user is using
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
