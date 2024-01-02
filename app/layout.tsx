import type { Metadata } from 'next'
import './globals.css'

import { ThemeProvider } from "@/components/providers/theme-provider"

export const metadata: Metadata = {
  title: 'Ham Practice',
  description: 'Ham Practice Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme='dark'
          enableSystem={false}
          storageKey='ham-practice'
        >
        {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
