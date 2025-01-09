"use client";

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import CustomDrawer from '@/components/CustomDrawer';
import { Poppins } from "next/font/google";
import theme from '@/libs/theme';
import { ThemeProvider } from '@mui/material';
import "./globals.css";

const poppinsFont = Poppins({
  weight: ["400", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppinsFont.variable} antialiased`}
      >
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CustomDrawer children={ children }></CustomDrawer>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
