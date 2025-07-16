// pages/index.tsx
import Head from 'next/head'
import { Geist, Geist_Mono } from 'next/font/google'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Waxbill</title>
        <meta
          name="description"
          content="Waxbill – QuickBooks Overlay, simplified."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`${geistSans.variable} ${geistMono.variable}`}>
        <main className="min-h-screen flex items-center justify-center bg-background text-text font-sans">
          <div className="max-w-lg space-y-6 p-8 text-center">
            <h1 className="text-5xl font-bold">Welcome to Waxbill</h1>
            <p className="text-lg">
              Edit{' '}
              <code className="bg-gray-100 px-1 rounded font-mono">
                pages/index.tsx
              </code>{' '}
              and save to see your changes instantly.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded bg-primary text-white hover:bg-primary-hover transition"
              >
                Next.js Docs
              </a>
              <a
                href="https://vercel.com/new"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded bg-accent-blue text-white hover:opacity-90 transition"
              >
                Deploy Now
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

