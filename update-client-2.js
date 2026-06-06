const fs = require('fs');
const file = 'app/tin-tuc/TinTucClient.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Remove the entire `const newsCategories = [ ... ];` block.
// We can find the start of `const newsCategories = [` and the end `];\r\n\r\n/* ──────────────────── MINI CALENDAR ──────────────────── */`
const startIndex = content.indexOf('/* ──────────────────── DATA ──────────────────── */');
const endIndex = content.indexOf('/* ──────────────────── MINI CALENDAR ──────────────────── */');

if (startIndex !== -1 && endIndex !== -1) {
  content = content.slice(0, startIndex) + content.slice(endIndex);
}

// 2. Replace the `useMemo` block
const useMemoStart = content.indexOf('  const allArticles = useMemo(');
const useMemoEnd = content.indexOf('  const featured = allArticles[0];');

if (useMemoStart !== -1 && useMemoEnd !== -1) {
  const newUseMemo = `  const allArticles = useMemo(
    () =>
      posts.map((p) => ({
        id: p.id,
        title: p.title,
        description: p.excerpt || "",
        date: p.created_at,
        readTime: "3 phút đọc",
        category: p.category?.name || "Tin tức",
        categoryId: p.category?.slug || "tin-tuc",
        image: p.thumbnail || "/default-news.jpg",
        slug: p.slug,
      })),
    [posts]
  );

  if (!allArticles.length) {
    return (
      <div className="min-h-screen bg-[#faf9f7] text-slate-900">
        <Header />
        <main className="py-32 text-center text-gray-500">Chưa có bài viết nào.</main>
        <Footer />
      </div>
    );
  }

`;
  content = content.slice(0, useMemoStart) + newUseMemo + content.slice(useMemoEnd);
}

fs.writeFileSync(file, content, 'utf8');
console.log('Successfully updated TinTucClient.tsx logic without Regex');
