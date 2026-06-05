import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lucky Parekh — Developer',
  description: 'Full-stack developer based in Toronto. Security-minded, backend-first, frontend-literate. Open to opportunities across Canada.',
  openGraph: {
    title: 'Lucky Parekh — Developer',
    description: 'Full-stack developer based in Toronto. Security-minded, backend-first, frontend-literate.',
    url: 'https://luckyparekh.com',
    siteName: 'Lucky Parekh',
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lucky Parekh — Developer',
    description: 'Full-stack developer based in Toronto.',
  },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.ico' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,400;0,700;0,900;1,700;1,900&family=JetBrains+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
