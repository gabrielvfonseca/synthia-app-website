import React, { Children, ReactNode } from 'react';

// Css
import '@css/globals.css';

// ClassNames
import cn from "classnames";

// Next
import { Metadata } from 'next';

// Themes
import Provider from '@components/layouts/Providers';

// Fonts
import { GTWalsheimPro } from '@root/src/fonts/fonts';

// Metadata
export const metadata: Metadata = {
    title: {
      default: 'Chat | Synthia',
      template: '%s | Synthia',
    },
    description: 'A platform to try our synthax ai model powered by RoBERTa',
    icons: {
      icon: '/static/favicons/favicon.svg',
      shortcut: '/static/favicons/favicon.svg',
      apple: '/static/favicons/favicon.svg',
      other: {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon-precomposed.png',
      },
    },
    themeColor: 'white',
    generator: 'Next.js',
    applicationName: 'Synthia',
    referrer: 'origin-when-cross-origin',
    keywords: ['GTP-4', 'BERT', 'RoBERTa', 'NLP', 'LLM'],
    authors: [{ name: 'Gabriel', url: 'https://gabfon.me' }],
    colorScheme: 'light',
    creator: 'Gabriel Fonseca',
    publisher: 'Gabriel Fonseca',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
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
};

export default function RootLayout({
    children,
}: {
  children: ReactNode;
}) {
    return (
      <html lang="en" className={GTWalsheimPro.variable}>
        <body className='overflow-y-scroll overscroll-x-none'>
          <Provider attribute='class'>
              {children}
          </Provider>
        </body>
    </html>
    )
};