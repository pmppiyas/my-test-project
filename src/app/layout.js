import { Kumbh_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";

const kumbhSans = Kumbh_Sans({
  variable: "--font-kumbh-sans",
  subsets: ["latin"],
  weights: [300, 400, 700],
  display: "swap",
});

export const metadata = {
  title: "Happy Coaching",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${kumbhSans.variable}   antialiased max-w-7xl mx-auto`}>
        <Navbar></Navbar>
        <main>{children}</main>
      </body>
    </html>
  );
}
