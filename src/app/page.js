// ✅ NO "use client" here
import HomeClient from './HomeClient';

export const metadata = {
  title: "Mango Park - প্রাকৃতিক আম ও আচার | mangoparkbd.com",
  description: "১১৭ বিঘা আমের বাগান থেকে সরাসরি সংগ্রহ করা সেরা মানের আম ও ঐতিহ্যবাহী আচার। ১০০% প্রাকৃতিক উপাদান ও পারিবারিক রেসিপি।",
  keywords: "mangoparkbd, mangoparkbd.com, আম, আচার, প্রাকৃতিক, হিমসাগর, আম্রপালি, বাংলাদেশ, নওগাঁ",
  openGraph: {
    title: "Mango Park - প্রাকৃতিক আম ও আচার",
    description: "সেরা মানের প্রাকৃতিক আম এবং ঘরোয়া রেসিপিতে বানানো আচার।",
    url: "https://mangoparkbd.com",
    type: "website",
    locale: "bn_BD",
    siteName: "Mango Park",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mango Park - প্রাকৃতিক আম ও আচার",
    description: "১১৭ বিঘা আমের বাগান থেকে সরাসরি প্রাকৃতিক আম ও ঘরোয়া রেসিপিতে আচার।",
  },
  alternates: {
    canonical: "https://mangoparkbd.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function HomePage() {
  return <HomeClient />;
}
