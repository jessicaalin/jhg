import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sky Hop Global Assignment',
  description: 'A document upload modal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
