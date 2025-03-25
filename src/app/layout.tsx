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
          <div className="flex flex-grow flex-col min-h-full">
            <Navbar />
            <main className="flex flex-col grow md:pb-0 pb-15 overflow-auto md:bg-gray-900 rounded-lg shadow-lg">
              {children}
              <Footer />
            </main>
          </div>
        </div>
        {/* Mobile Navbar (Fixed at Bottom) */}
        <MobileNavbar />
        <Chatbot/>
        <Analytics />
        <Background />
      </body>
    </html>
  );
}
