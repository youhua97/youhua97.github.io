import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://youhua97.github.io"),
  title: {
    default: "Youhua Li | Academic Homepage",
    template: "%s",
  },
  description: "Research in operations optimization, FinTech, LLMs, and recommender systems.",
  openGraph: {
    type: "website",
    title: "Youhua Li | Academic Homepage",
    description: "Operations optimization, FinTech, LLMs, and recommender systems.",
    url: "https://youhua97.github.io",
    images: [{ url: "/og.png", width: 1792, height: 907, alt: "Youhua Li academic homepage" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Youhua Li | Academic Homepage",
    description: "Operations optimization, FinTech, LLMs, and recommender systems.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
