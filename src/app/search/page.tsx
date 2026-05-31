"use client";

import { useSearchParams } from "next/navigation";
import { bookData } from "@/data/book";
import Link from "next/link";
import { Suspense } from "react";

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  
  if (!query) return <p>Please enter a search term.</p>;

  const lowerQuery = query.toLowerCase();
  
  const results = [];
  
  for (const chapter of bookData.chapters) {
    for (let i = 0; i < chapter.content.length; i++) {
      const paragraph = chapter.content[i];
      if (paragraph.toLowerCase().includes(lowerQuery)) {
        results.push({
          chapterId: chapter.id,
          chapterTitle: chapter.title,
          paragraph: paragraph,
          index: i
        });
      }
    }
  }

  if (results.length === 0) {
    return <p>No results found for "{query}".</p>;
  }

  return (
    <div className="chapter-grid" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {results.map((res, idx) => {
        const parts = res.paragraph.split(new RegExp(`(${query})`, 'gi'));
        return (
          <Link href={`/chapter/${res.chapterId}`} key={idx}>
            <div className="glass-card">
              <div className="chapter-number">{res.chapterTitle}</div>
              <p style={{ color: 'var(--text-muted)' }}>
                {parts.map((part, i) => 
                  part.toLowerCase() === lowerQuery ? (
                    <span key={i} style={{ color: 'var(--primary)', fontWeight: 'bold', background: 'rgba(99, 102, 241, 0.2)' }}>{part}</span>
                  ) : (
                    <span key={i}>{part}</span>
                  )
                )}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default function SearchPage() {
  return (
    <div className="container animate-fade-in">
      <h1 className="title-gradient" style={{ marginTop: "2rem", marginBottom: "2rem" }}>Search Results</h1>
      <Suspense fallback={<p>Loading search...</p>}>
        <SearchResults />
      </Suspense>
    </div>
  );
}
