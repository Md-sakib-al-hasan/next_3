import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";
import { Container } from "postcss";
import Header from "@/components/Shared/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>
        <Navbar></Navbar>
        <div className="container min-h-screen">
        {children}
        </div>
       
      
        
        <Footer></Footer>
        </body>
    </html>
  );
}
