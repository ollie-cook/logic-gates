import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AND Gate Simulator",
  description: "Simulate AND gate with multiple inputs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative flex flex-col items-center min-h-screen`}>
        <h1 className="text-5xl font-bold mt-4 text-center">AND Gate Simulator</h1>
        {children}
        <p className="absolute bottom-2 right-2 text-sm" >Built by <a href="https://www.olliecookie.com" className="underline" target="_blank">Ollie Cook</a>&#x1f36a;</p>
      </body>
    </html>
  );
}
