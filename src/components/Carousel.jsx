export default function CommunityCarousel() {
  const images = [
    { src: "/community-1.jpg", aspectRatio: "650/420" },
    { src: "/community-2.jpg", aspectRatio: "280/420" },
    { src: "/community-3.jpg", aspectRatio: "420/420" },
    { src: "/community-4.jpg", aspectRatio: "320/420" },
    { src: "/community-5.jpg", aspectRatio: "540/420" },
  ];

  return (
    <section className="bg-[#101010] px-4 py-12 md:px-10">
      {/* Heading */}
      <h2 className="mb-8 text-sm uppercase text-white">
        Join Our Community
      </h2>

      {/* Images */}
      <div
        className="
          overflow-x-auto
          [-ms-overflow-style:none]
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
        <div className="flex h-[260px] w-max gap-4 md:h-[420px]">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt=""
              className="block h-full w-auto object-cover"
              style={{ aspectRatio: image.aspectRatio }}
            />
          ))}
        </div>
      </div>

      {/* Text */}
      <div className="mt-8 max-w-[850px]">
        <p className="text-lg uppercase leading-[1.35] text-white">
          Become part of a community of women who move with confidence,
          live by their values, and refuse to compromise on either.
          Cyncactive is more than activewear. It is a shared standard built
          around comfort, coverage, and everyday movement for women who
          know exactly what they deserve.
        </p>
      </div>
    </section>
  );
}