"use client";

import Image from "next/image";

const col1 = ["/g-3.jpg","/workshop-jungle-2.jpg","/giao_vien.png","/cosovatchat.jpg"];
const col2 = ["/g-2.jpg","/g-1.jpg","/hero-2.jpg","/hero-3.jpg"];
const col3 = ["/leader.jpg","/workshop-jungle-2.jpg","/g-3.jpg","/hero-2.jpg"];

export default function GalleryScroll() {
  const columns = [col1, col2, col3];

  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-white isolate">
      
      {/* LEFT TEXT */}
      <div className="w-1/2 px-24 z-20">
        <p className="text-[#F2701A] uppercase tracking-[0.2em] mb-4 font-bold">
          Môi trường hiện đại – chuẩn quốc tế
        </p>

        <h1 className="text-5xl font-bold leading-tight text-gray-900">
          Khơi nguồn cảm hứng <br /> học tập mỗi ngày
        </h1>

        <div className="mt-6 w-20 h-0.75 bg-[#F2701A] rounded-full" />
      </div>

      {/* RIGHT GALLERY */}
      <div className="w-1/2 grid grid-cols-3 gap-6 h-[80vh] relative overflow-hidden">
        
        {columns.map((col, i) => (
          <div
            key={i}
            className={`flex flex-col gap-6 animate-scroll ${
              i === 1 ? "reverse" : ""
            }`}
            style={{
              animationDuration: `${28 + i * 6}s`, // chậm hơn → mượt hơn
            }}
          >
            {[...col, ...col].map((src, index) => (
              <div
                key={index}
                className="relative h-44 w-full overflow-hidden rounded-2xl group shadow-sm hover:shadow-xl transition duration-500"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover transition duration-700 ease-out group-hover:scale-110"
                />

                {/* overlay hover cam nhẹ */}
                <div className="absolute inset-0 bg-[#F2701A]/0 group-hover:bg-[#F2701A]/10 transition duration-500" />
              </div>
            ))}
          </div>
        ))}

        {/* TOP FADE */}
        <div className="pointer-events-none absolute top-0 left-0 w-full h-40 bg-linear-to-b from-white via-white/80 to-transparent z-10" />

        {/* BOTTOM FADE */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-40 bg-linear-to-t from-white via-white/80 to-transparent z-10" />

        {/* LEFT BLUR FADE */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-30 bg-linear-to-r from-white via-white/90 to-transparent z-10" />

      </div>
    </section>
  );
}