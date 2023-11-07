import * as React from 'react';
import { Inter } from "next/font/google";
import "@styles/globals.css";

import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { Nav } from '@components/Nav';
import Provider from '@components/Provider';
 



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PromptIt",
  description: "Discover and share AI prompts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Toaster />
        < Provider>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav />
      
          {children}</main></ThemeProvider>
          </Provider>
      </body>
    </html>
  );
}
