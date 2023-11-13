import type { Metadata } from 'next'
import '@mantine/core/styles.css';
import { Inter } from 'next/font/google'
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '@/config/theme';
import {SWRProvider} from "@/app/swr-provider";
import { Notifications } from '@mantine/notifications';



import './globals.css'
import '@mantine/notifications/styles.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  <html lang="en">
  <head>
    <ColorSchemeScript />
    <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
    />
  </head>
  <body>
  <MantineProvider theme={theme} defaultColorScheme="light">
    <Notifications position='top-center' zIndex={1000}/>
    <SWRProvider>
    {children}
    </SWRProvider>
    </MantineProvider>
  </body>
  </html>
  )
}
