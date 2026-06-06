const fs = require('fs');
const file = 'app/tin-tuc/TinTucClient.tsx';
let content = fs.readFileSync(file, 'utf8');

// Strip out newsCategories
content = content.replace(/\/\* ──────────────────── DATA ──────────────────── \*\/[\s\S]*?\];\n\n/g, '');

// Update the useMemo for allArticles
const oldAllArticlesRegex = /const allArticles = useMemo\([\s\S]*?\[\]\n\s*\);/;
const newAllArticles = `const allArticles = useMemo(
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
  }`;

content = content.replace(oldAllArticlesRegex, newAllArticles);

fs.writeFileSync(file, content, 'utf8');
console.log('Successfully updated allArticles logic');
