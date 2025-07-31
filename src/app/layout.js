import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MobileBottomNavbar from "./components/MobileBottomNavbar";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mango Park - প্রাকৃতিক আম ও আচার | mangoparkbd.com | mangoparkbd | mangopark bd | mango park bd",
  description: "mangoparkbd.com - ১১৭ বিঘা আমের বাগান থেকে সরাসরি সংগ্রহ করা সেরা মানের আম ও ঐতিহ্যবাহী আচার। ১০০% প্রাকৃতিক উপাদান ও পারিবারিক রেসিপি।",
  keywords: "mangoparkbd, mangoparkbd.com, আম, আচার, প্রাকৃতিক, হিমসাগর, আম্রপালি, বাংলাদেশ, নওগাঁ",
  authors: [{ name: "Mango Park" }],
  creator: "Mango Park",
  publisher: "Mango Park",
  metadataBase: new URL("https://mangoparkbd.com"),
  alternates: {
    canonical: "https://mangoparkbd.com",
  },
  openGraph: {
    title: "Mango Park - প্রাকৃতিক আম ও আচার | mangoparkbd.com",
    description: "mangoparkbd.com - ১১৭ বিঘা আমের বাগান থেকে সরাসরি সংগ্রহ করা সেরা মানের আম ও ঐতিহ্যবাহী আচার",
    url: "https://mangoparkbd.com",
    type: "website",
    locale: "bn_BD",
    siteName: "Mango Park",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mango Park - প্রাকৃতিক আম ও আচার | mangoparkbd.com",
    description: "| mangoparkbd.com - ১১৭ বিঘা আমের বাগান থেকে সরাসরি সংগ্রহ করা সেরা মানের আম ও ঐতিহ্যবাহী আচার",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        <main>{children}</main>
        <MobileBottomNavbar/>
      </body>
    </html>
  );
}
