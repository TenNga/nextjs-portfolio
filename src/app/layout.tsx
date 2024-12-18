import LeftSidebar from "@/containers/left-sidebar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Roboto } from 'next/font/google'
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Kevin Portfolio",
  description: "Frontend developer (Kevin Karma) portfolio show casing project using NextJS and dashboard layout along with Server side rendering components.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex ${roboto.className}`}>
          <LeftSidebar />
          <main className="flex grow-[5] mobile:flex-wrap-reverse w-dvw">
            {children}
          </main>
        
        </body>
    </html>
  );
}
