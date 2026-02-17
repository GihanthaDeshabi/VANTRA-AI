// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vanta - Think deeper. Dream impossible.',
  description: 'Vanta helps you create, optimize, and organize powerful prompts for tools like ChatGPT and Midjourney.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-diagonal-stripes text-vanta-gray-100">
        {children}
      </body>
    </html>
  )
}