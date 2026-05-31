import Link from "next/link";
import { bookData } from "@/data/book";

export default function Home() {
  return (
    <div className="container animate-fade-in">
      <section className="hero">
        <div className="glass-card hero-card">
          <h1 className="title-gradient hero-title">{bookData.title}</h1>
          <p className="hero-subtitle">{bookData.subtitle}</p>
          <p className="hero-author">By <strong>{bookData.author}</strong></p>
          
          <p className="hero-description">
            Immerse yourself in Victor Hugo's gripping firsthand account of the December 1851 coup d'état. 
            Experience the tension, the betrayal, and the profound historical moments that forever altered 
            the destiny of France, written with the masterful and dramatic prose of one of history's greatest novelists.
          </p>

          <div className="hero-actions">
            <Link href="/chapter/1" className="btn btn-primary btn-large">
              Start Reading
            </Link>
            <Link href="/chapters" className="btn btn-secondary btn-large">
              Browse Chapters
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
