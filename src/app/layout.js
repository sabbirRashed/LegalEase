import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});



export const metadata = {
  title: "LegalEase || Find the Right Lawyer for Your Legal Needs",
  description: "LegalEase helps you find, explore, and hire lawyers based on their expertise, services, specialization, and consultation fees.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50">
        {children}

        <Toaster />
      </body>
    </html>
  );
}
