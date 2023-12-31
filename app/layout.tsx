import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/ui/theme-provider'
import './globals.css'
import localFont from 'next/font/local'
import { Questrial } from 'next/font/google'
import ParticlesComp from '@/components/ui/ParticlesComp'

const freightDisPro = localFont({ 
  src: [
    {
      path: './fonts/FreightDispProBold-Italic.woff2'
    },
    {
      path: './fonts/FreightDispProBold-Regular.woff2'
    },
    {
      path: './fonts/FreightDispProLight-Italic.woff2'
    },
    {
      path: './fonts/FreightDispProLight-Regular.woff2'
    },
    {
      path: './fonts/FreightDispProMedium-Italic.woff2'
    },
    {
      path: './fonts/FreightDispProMedium-Regular.woff2'
    },
  ],
})

const questrial = Questrial({ weight: '400', subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Mobile & Web App Development',
  description: 'Andi Winata - Mobile & Web App Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={questrial.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <ParticlesComp />
        </ThemeProvider>
        </body>
    </html>
  )
}