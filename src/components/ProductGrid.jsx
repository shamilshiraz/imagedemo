import React from "react";

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "CAPADA_BEIGE_001",
      price: "$14",
      image: "/images/product1.jpg",
    },
    {
      id: 2,
      name: "CAPADA_BLACK_002",
      price: "$14",
      image: "/images/product2.jpg",
    },
    {
      id: 3,
      name: "CAPADA_WHITE_003",
      price: "$14",
      image: "/images/product3.jpg",
    },
    {
      id: 4,
      name: "CAPADA_OLIVE_004",
      price: "$14",
      image: "/images/product4.jpg",
    },
    {
      id: 5,
      name: "CAPADA_NAVY_005",
      price: "$14",
      image: "/images/product5.jpg",
    },
    {
      id: 6,
      name: "CAPADA_GREY_006",
      price: "$14",
      image: "/images/product6.jpg",
    },
  ];

  return (
    <div className="bg-neutral-300 min-h-screen p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-black bg-[#e8e3dc] h-[520px] flex flex-col justify-end"
          >
            {/* Image fills whole card */}
            <div className="absolute inset-0">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Inset Box */}
            <div className="relative m-4 border border-black bg-[#efefef] px-5 py-4 flex items-center justify-between">
              <div>
                <p className="text-[18px] font-semibold leading-none">
                  {product.name}
                </p>
                <p className="text-[16px] mt-1">{product.price}</p>
              </div>

              <span className="text-xl font-bold">→</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;