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
  title: "Mango Park - প্রাকৃতিক আম ও আচার",
  description: "১১৭ বিঘা আমের বাগান থেকে সরাসরি সংগ্রহ করা সেরা মানের আম ও ঐতিহ্যবাহী আচার। ১০০% প্রাকৃতিক উপাদান ও পারিবারিক রেসিপি।",
  keywords: "আম, আচার, প্রাকৃতিক, হিমসাগর, আম্রপালি, বাংলাদেশ, নওগাঁ",
  authors: [{ name: "Mango Park" }],
  creator: "Mango Park",
  publisher: "Mango Park",
  openGraph: {
    title: "Mango Park - প্রাকৃতিক আম ও আচার",
    description: "১১৭ বিঘা আমের বাগান থেকে সরাসরি সংগ্রহ করা সেরা মানের আম ও ঐতিহ্যবাহী আচার",
    type: "website",
    locale: "bn_BD",
    siteName: "Mango Park",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mango Park - প্রাকৃতিক আম ও আচার",
    description: "১১৭ বিঘা আমের বাগান থেকে সরাসরি সংগ্রহ করা সেরা মানের আম ও ঐতিহ্যবাহী আচার",
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