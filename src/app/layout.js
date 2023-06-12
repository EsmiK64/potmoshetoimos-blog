import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Potmos Hetoimos Blog",
  description: "A small blog for the band Potmos Hetoimos, featuring the discography and lyrics.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="twitter:image" content="https://f4.bcbits.com/img/a1075646893_10.jpg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Potmos Hetoimos Blog" />
        <meta property="twitter:description" content="A small blog for the band Potmos Hetoimos, featuring the discography and lyrics." />
        <meta property="og:image" content="https://f4.bcbits.com/img/a1075646893_10.jpg" />
        <meta property="og:title" content="Potmos Hetoimos Blog" />
        <meta property="og:description" content="A small blog for the band Potmos Hetoimos, featuring the discography and lyrics." />
        <meta property="og:url" content="https://potmoshetoimos-blog.vercel.app" />
      </head>
      <body className="w-11/12 mx-auto sm:w-screen">{children}</body>
    </html>
  );
}
