import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  
  title: "Portfolio ",
  description: "Based in India, I'm a web developer passionate about building a modern web application that users love.",
  openGraph:{
    title:"My profolio",
    url:"",
    siteName:"Ramesh",
    type:"profile"
  },
authors:{
  name:"Ramesh"
}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>

    </html>
  );
}
