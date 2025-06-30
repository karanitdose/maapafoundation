"use client";
import Image from "next/image";

const images = [
  { src: "/3.jpeg", label: "Tea Tasting" },
  { src: "/4.jpeg", label: "Pen Design" },
  { src: "/10.jpeg", label: "Notebook Crafting" },
  { src: "/8.jpeg", label: "Gallery Two" },
  { src: "/5.jpeg", label: "Gallery Three" },
  { src: "/7.jpeg", label: "Gallery Four" },
  { src: "/2.jpeg", label: "Gallery Five" },
  { src: "/1.jpeg", label: "Gallery Six" },
];

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-12">
      <h1 className="text-3xl font-semibold mb-8 text-center text-[#C30047]">— GALLERY</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="relative group overflow-hidden rounded-xl shadow-lg"
          >
            <Image
              src={img.src}
              alt={img.label}
              width={500}
              height={500}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#C30047]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <p className="text-white p-4 text-sm font-medium">{img.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
