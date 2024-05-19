import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import Userprovider from "@/helper/userprovider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Food Pass",
  description: "Best recipe manager and meal planner site",
  icons: {
    icon: '/favicon.ico', // /public path
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-black text-white">
      <Userprovider>
      <body className={inter.className}>
      <Navbar/>
        {children}
        </body>
        </Userprovider>
    </html>
  );
}
