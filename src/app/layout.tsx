// These styles apply to every route in the application
import '@css/globals.css';

import { AllienceFont } from "@fonts/fonts";

import classNames from "classnames";

export const metadata = {
  title: {
    default: 'Syntia',
    template: '%s | Syntia',
  },
  generator: 'Next.js',
  applicationName: 'website',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript'],
  authors: [{ name: 'Gabriel Fonseca', url: 'https://gabfon.me' }],
  colorScheme: 'dark',
  creator: 'Gabriel Fonseca',
  publisher: 'Gabriel Fonseca',
  alternates: {},
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Title',
    description: 'The React Framework for the Web',
    url: 'https://nextjs.org',
    siteName: 'Next.js',
    images: [
      {
        url: 'https://nextjs.org/og.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://nextjs.org/og-alt.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [{ url: 'favicon.png' }, new URL('favicon.png', 'https://example.com')],
    shortcut: ['shortcut-icon.png'],
    apple: [
      { url: 'apple-icon.png' },
      { url: 'apple-icon-x3.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon-precomposed.png',
      },
    ],
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'cyan' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  manifest: 'https://nextjs.org/manifest.json',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  assets: ['https://nextjs.org/assets'],
}

import Header from "@components/Header";
import Footer from "@components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body className={classNames(
          "bg-background",
          AllienceFont.variable
        )}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
