import Link from "next/link";
import { bookData } from "@/data/book";

export default function Home() {
  return (
    <div className="container animate-fade-in">
      <section className="hero">
        <div className="glass-card" style={{ padding: '4rem', maxWidth: '800px', width: '100%' }}>
          <h1 className="title-gradient" style={{ fontSize: '5.5rem', marginBottom: '0.5rem', lineHeight: '1.1' }}>{bookData.title}</h1>
          <p style={{ fontSize: '1.75rem', fontWeight: 300, marginBottom: '1rem', color: 'var(--text-main)' }}>{bookData.subtitle}</p>
          <p style={{ marginBottom: '3rem', fontSize: '1.25rem' }}>By <strong style={{ color: 'var(--primary)' }}>{bookData.author}</strong></p>
          
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '3rem', textAlign: 'justify' }}>
            Immerse yourself in Victor Hugo's gripping firsthand account of the December 1851 coup d'état. 
            Experience the tension, the betrayal, and the profound historical moments that forever altered 
            the destiny of France, written with the masterful and dramatic prose of one of history's greatest novelists.
          </p>

          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center' }}>
            <Link href="/chapter/1" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '1.1rem' }}>
              Start Reading
            </Link>
            <Link href="/chapters" className="btn btn-secondary" style={{ padding: '16px 32px', fontSize: '1.1rem' }}>
              Browse Chapters
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
