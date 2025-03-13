import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import Navbar from "./components/Navbar";
import MobileNavbar from "./components/MobileNavbar";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import Background from "./components/Background";
import Contact from "./components/Contact";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tran Quoc Huy",
  description: "Huy's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="text-gray-100">
        <div className="md:p-7 md:pb-17 h-screen md:flex md:flex-row">
          <Contact />
          {/* Main Content */}
          <div className="flex flex-col flex-grow h-full">
            <Navbar />
            <main className="flex-grow overflow-auto bg-gray-900 shadow-md">
              {children}
            </main>
          </div>
        </div>
        {/* Mobile Navbar (Fixed at Bottom) */}
        <MobileNavbar />
        <Footer />
        <Chatbot />
        <Analytics />
      </body>
      <Background />
    </html>
  );
}
