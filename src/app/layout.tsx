import React from 'react';
import '@rainbow-me/rainbowkit/styles.css';
import './globals.css';
import Navbar from '../components/Navbar/index';
import Footer from '../components/Footer/index';
import { Providers } from './provider';

export const metadata = {
  title: 'web3Template',
  description: 'Generated by create next app',
  icons: {
    icon: '/logo.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}