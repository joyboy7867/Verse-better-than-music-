
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'recitation',
  description: 'Power By Al Quran',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    
    <ClerkProvider>
      <html lang="en">
      <body className={inter.className}>
          <span>
          {children}
          </span>
        
      </body>
    </html>
    </ClerkProvider>
   
    
  )
}
