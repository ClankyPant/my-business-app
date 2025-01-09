import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import CustomDrawer from '@/components/customDrawer';
import { Poppins } from "next/font/google";
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
          <CustomDrawer children={ children }></CustomDrawer>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
