import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Container from "@/components/Container";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Container>
          <main className="min-h-screen">{children}</main>
        </Container>
        <div className="flex justify-center items-center p-3">
          Made with 🔥 by Navneet
        </div>
      </body>
    </html>
  );
}
