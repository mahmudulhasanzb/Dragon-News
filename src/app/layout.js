import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const popins = Poppins({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
})

export const monserat = Montserrat({
  variable: "--font-montserat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
})

export const metadata = {
  title: "Gragon News",
  description: "Dragor News - Best News Portal In Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme='light'
      className={`${popins.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
