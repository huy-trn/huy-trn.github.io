import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

export const metadata: Metadata = {
  title: "Tran Quoc Huy",
  description: "Huy's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
        <Navbar />
        <Chatbot />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
