import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { ConvexClientProvider } from '@/components/providers/convex-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Noted',
  description: 'The futuristic workspace for your notes.',
  icons : {
    icon: [
      {
      media : '(prefers-color-scheme: dark)',
      url: "/logo-dark.svg",
      href: "/logo-dark.svg",
      },
      {
      media : '(prefers-color-scheme: light)',
      url: "/logo.svg",
      href: "/logo.svg",
      }
    ]
  }
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="noted-theme-2"
          >
        {children}
        </ThemeProvider>
        </ConvexClientProvider>
        </body>
    </html>
  )
}
