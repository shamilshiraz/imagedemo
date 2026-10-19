import { useState } from "react";

export default function HeroHover() {
  const items = [
    { title: "WOMEN", image: "/1.jpg" },
    { title: "MEN", image: "/2.jpg" },
    { title: "TEEN", image: "/3.jpg" },
    { title: "KIDS", image: "/4.jpg" },
  ];

  const [activeImage, setActiveImage] = useState("/1.jpg");

  return (
    <div className="relative w-full h-screen overflow-hidden">
      
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${activeImage})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 md:px-20">
        
        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-light leading-tight">
          Designed in <span className="italic">Barcelona</span>
          <br />
          since 1984
        </h1>

        {/* Links */}
        <div className="flex gap-6 mt-6 text-xs tracking-widest uppercase">
          {items.map((item, index) => (
            <a
              key={index}
              href="#"
              onMouseEnter={() => setActiveImage(item.image)}
              className="hover:opacity-60"
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}