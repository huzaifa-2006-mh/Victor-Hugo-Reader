import { bookData } from "@/data/book";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  return bookData.chapters.map((chapter) => ({
    id: chapter.id,
  }));
}

export default async function ChapterPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const chapterIndex = bookData.chapters.findIndex((c) => c.id === id);
  
  if (chapterIndex === -1) {
    notFound();
  }

  const chapter = bookData.chapters[chapterIndex];
  const prevChapter = chapterIndex > 0 ? bookData.chapters[chapterIndex - 1] : null;
  const nextChapter = chapterIndex < bookData.chapters.length - 1 ? bookData.chapters[chapterIndex + 1] : null;

  return (
    <div className="container animate-fade-in">
      <div className="reader-container">
        <h1 className="reader-title title-gradient" style={{ marginTop: "3rem" }}>
          {chapter.title}
        </h1>
        
        <div className="reader-content">
          {chapter.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        <div className="reader-nav">
          {prevChapter ? (
            <Link href={`/chapter/${prevChapter.id}`} className="btn btn-secondary">
              ← Previous: {prevChapter.title.slice(0, 15)}...
            </Link>
          ) : (
            <div />
          )}
          
          {nextChapter ? (
            <Link href={`/chapter/${nextChapter.id}`} className="btn btn-secondary">
              Next: {nextChapter.title.slice(0, 15)}... →
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}
