import Link from "next/link";
import { bookData } from "@/data/book";

export default function Chapters() {
  return (
    <div className="container animate-fade-in">
      <div style={{ marginTop: "2rem" }}>
        <h1 className="title-gradient">Chapters</h1>
        <p style={{ color: "var(--text-muted)" }}>Select a chapter to begin reading.</p>

        <div className="chapter-grid">
          {bookData.chapters.map((chapter, index) => (
            <Link href={`/chapter/${chapter.id}`} key={chapter.id}>
              <div className="glass-card" style={{ height: "100%" }}>
                <div className="chapter-number">Chapter {index + 1}</div>
                <h2 className="chapter-title">{chapter.title}</h2>
                <div className="chapter-excerpt">
                  {chapter.content[0]}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
