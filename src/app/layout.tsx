import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import SearchBar from "./components/SearchBar";

export const metadata: Metadata = {
  title: "The History of a Crime - Reader",
  description: "Read Victor Hugo's The History of a Crime",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar glass">
          <div className="container">
            <Link href="/" className="nav-brand title-gradient">
              Victor Hugo Reader
            </Link>
            <div className="nav-links">
              <Link href="/chapters" className="nav-link">Chapters</Link>
              <SearchBar />
            </div>
          </div>
        </nav>
        <main className="page-wrapper">
          {children}
        </main>
      </body>
    </html>
  );
}
