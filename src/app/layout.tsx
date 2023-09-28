
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '../components/ui/navbar'
import { ReduxProvider } from '@/redux/provider'
import 'material-icons/iconfont/material-icons.css';
//import { NextAuthProvider } from './login/nextauthprovider'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pump Plates',
  description: 'Generate your personilezed training program',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <body className="{inter.className}">
     
      <Navbar />
      <ReduxProvider>
        {children}
        </ReduxProvider>
      
        </body>
    </html>
  );
}
