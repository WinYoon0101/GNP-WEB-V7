"use client";

import Image from "next/image";

const col1 = ["/g-3.jpg","/workshop-jungle-2.jpg","/giao_vien.png","/cosovatchat.jpg"];
const col2 = ["/g-2.jpg","/g-1.jpg","/hero-2.jpg","/hero-3.jpg"];
const col3 = ["/leader.jpg","/workshop-jungle-2.jpg","/g-3.jpg","/hero-2.jpg"];

export default function GalleryScroll() {
  const columns = [col1, col2, col3];

  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row items-center overflow-hidden bg-white isolate">

      {/* LEFT TEXT */}
      <div className="w-full lg:w-1/2 px-6 sm:px-10 lg:px-24 py-10 lg:py-0 z-20 text-center lg:text-left">
        <p className="text-[#F2701A] uppercase tracking-[0.2em] mb-3 text-xs sm:text-sm font-bold">
          Môi trường hiện đại – chuẩn quốc tế
        </p>

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug text-gray-900">
          Khơi nguồn cảm hứng <br className="hidden sm:block" />
          học tập mỗi ngày
        </h1>

        <div className="mt-5 mx-auto lg:mx-0 w-16 sm:w-20 h-[2px] bg-[#F2701A] rounded-full" />
      </div>

      {/* RIGHT GALLERY */}
      <div className="w-full lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6 h-[60vh] sm:h-[70vh] lg:h-[80vh] relative overflow-hidden px-4 sm:px-0">

        {columns.map((col, i) => (
          <div
            key={i}
            className={`flex flex-col gap-3 sm:gap-6 animate-scroll ${
              i === 1 ? "reverse" : ""
            }`}
            style={{
              animationDuration: `${28 + i * 6}s`,
            }}
          >
            {[...col, ...col].map((src, index) => (
              <div
                key={index}
                className="relative h-28 sm:h-36 md:h-44 w-full overflow-hidden rounded-xl sm:rounded-2xl group shadow-sm hover:shadow-xl transition duration-500"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover transition duration-700 ease-out group-hover:scale-110"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-[#F2701A]/0 group-hover:bg-[#F2701A]/10 transition duration-500" />
              </div>
            ))}
          </div>
        ))}

        {/* TOP FADE */}
        <div className="pointer-events-none absolute top-0 left-0 w-full h-24 sm:h-40 bg-gradient-to-b from-white via-white/80 to-transparent z-10" />

        {/* BOTTOM FADE */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-24 sm:h-40 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />

        {/* LEFT FADE */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-12 sm:w-24 bg-gradient-to-r from-white via-white/90 to-transparent z-10" />
      </div>
    </section>
  );
}