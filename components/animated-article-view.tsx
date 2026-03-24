"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import RelatedNewsSidebar from "@/components/related-news-sidebar"

interface ArticleData {
    title: string
    date: string
    readTime: string
    category: string
    image: string
    content: string
}

interface AnimatedArticleViewProps {
    article: ArticleData
    allArticles: any[]
    id: string
}

export function AnimatedArticleView({ article, allArticles, id }: AnimatedArticleViewProps) {
    return (
        <article className="container mx-auto px-4 flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex-1 min-w-0"
            >
                <div className="mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="mb-6"
                    >
                        <span className="inline-block rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm font-semibold text-primary shadow-sm backdrop-blur-sm">
                            {article.category}
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mb-6 text-balance text-4xl font-extrabold md:text-5xl lg:text-6xl leading-tight tracking-tight"
                    >
                        {article.title}
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="mb-8 flex flex-wrap items-center gap-6 text-muted-foreground font-medium"
                    >
                        <div className="flex items-center gap-2">
                            <Calendar className="h-5 w-5 text-primary/70" />
                            <span>{new Date(article.date).toLocaleDateString("vi-VN")}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="h-5 w-5 text-primary/70" />
                            <span>{article.readTime}</span>
                        </div>
                        <Button variant="outline" size="sm" className="ml-auto gap-2 bg-transparent hover:bg-muted/50 border-border/50 transition-colors rounded-full">
                            <Share2 className="h-4 w-4" />
                            Chia sẻ
                        </Button>
                    </motion.div>

                    {/* Featured Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="relative mb-12 aspect-video overflow-hidden rounded-3xl shadow-xl border border-border/50"
                    >
                        <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" priority />
                    </motion.div>

                    {/* Article Content */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="prose prose-lg md:prose-xl max-w-none prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground/90 prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-2xl"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                        style={{
                            lineHeight: "1.8",
                        }}
                    />

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="mt-16 rounded-3xl bg-gradient-to-br from-primary via-primary to-primary/80 p-10 text-center text-primary-foreground shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

                        <h3 className="mb-4 text-3xl font-extrabold relative z-10">Quan tâm đến khóa học của chúng tôi?</h3>
                        <p className="mb-8 text-lg text-primary-foreground/90 relative z-10 max-w-2xl mx-auto">
                            Đăng ký ngay để nhận ưu đãi đặc biệt và lộ trình học tập được cá nhân hóa hoàn toàn miễn phí
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 relative z-10">
                            <Button asChild size="lg" variant="secondary" className="rounded-full px-8 py-6 text-base font-bold shadow-lg hover:shadow-xl transition-all">
                                <Link href="/#dang-ky-tu-van">Đăng ký tư vấn ngay</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white/20 rounded-full px-8 py-6 text-base font-bold backdrop-blur-sm transition-all text-white hover:text-white">
                                <Link href="/khoa-hoc">Tìm hiểu các khóa học</Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Sidebar with related news articles */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="w-full lg:w-80 xl:w-96 flex-shrink-0"
            >
                <RelatedNewsSidebar articles={allArticles} currentArticleId={Number.parseInt(id)} />
            </motion.div>
        </article>
    )
}
