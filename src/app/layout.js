// import Navbar from "@/components/home/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
// import Footer from "@/components/home/Footer";
import { Providers } from "./GlobalRedux/provider";
import { store } from "./GlobalRedux/store";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  console.log("hello", store );

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar /> */}
        <Providers>{children}</Providers>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
