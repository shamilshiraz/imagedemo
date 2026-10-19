import React, { useState, useEffect } from "react";

function OddRitual() {
  const [positions, setPositions] = useState({
    left: null,
    mid: null,
    right: null,
  });

  const [scrollY, setScrollY] = useState(0);

  // MOBILE SCROLL EFFECT
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = (e, key) => {
    const rect = e.currentTarget.getBoundingClientRect();
    let y = e.clientY - rect.top;

    const padding = 40; // ~mt-4 mb-4 safe zone

    // clamp inside bounds
    if (y < padding || y > rect.height - padding) {
      setPositions((prev) => ({ ...prev, [key]: null }));
      return;
    }

    setPositions((prev) => ({ ...prev, [key]: y }));
  };

  const handleLeave = (key) => {
    setPositions((prev) => ({ ...prev, [key]: null }));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 px-2 sm:px-8 py-20 gap-4">

      {/* LEFT IMAGE */}
      <div className="sm:px-2">
        <div
          className="relative w-full group overflow-hidden h-fit"
          onMouseMove={(e) => handleMouseMove(e, "left")}
          onMouseLeave={() => handleLeave("left")}
        >
                        <p className="font-bold text-md">OUR PRODUCTS</p>

          <img
            src="/Our_Products.webp"
            alt=""
            className="w-full block sm:h-auto h-[100vw] object-cover"
          />

          {/* DESKTOP TEXT */}
          {positions.left && (
            <div
              className="hidden sm:flex absolute left-4 right-4 justify-between text-white font-semibold pointer-events-none
                         opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150"
              style={{
                top: positions.left,
                transform: "translateY(-50%)",
              }}
            >
              <span className="drop-shadow-md">OUR PRODUCTS</span>
              <span className="drop-shadow-md">[ SHOP NOW ]</span>
            </div>
          )}

          {/* MOBILE TEXT */}
          <div
            className="sm:hidden absolute left-4 right-4 flex justify-between text-white font-semibold"
            style={{
              bottom: 12 + scrollY * 0.05, // subtle scroll drift
            }}
          >
            <span>OUR PRODUCTS</span>
            <span>[ SHOP NOW ]</span>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-col sm:flex-row gap-4">

        {/* IMAGE 2 */}
        <div
          className="relative w-full group overflow-hidden h-fit"
          onMouseMove={(e) => handleMouseMove(e, "mid")}
          onMouseLeave={() => handleLeave("mid")}
        >
                        <p className="font-bold text-md">OUR STORY</p>

          <img
            src="./02_about-us.webp"
            alt=""
            className="w-full block sm:h-auto h-[100vw] object-cover"
          />

          {positions.mid && (
            <div
              className="hidden sm:flex absolute left-4 right-4 justify-between text-white font-semibold pointer-events-none
                         opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150"
              style={{
                top: positions.mid,
                transform: "translateY(-50%)",
              }}
            >
              <span>OUR STORY</span>
              <span>[ READ MORE ]</span>
            </div>
          )}

          <div
            className="sm:hidden absolute left-4 right-4 flex justify-between text-white font-semibold"
            style={{
              bottom: 12 + scrollY * 0.05,
            }}
          >
            <span>OUR STORY</span>
            <span>[ READ MORE ]</span>
          </div>
        </div>

        {/* IMAGE 3 */}
        <div
          className="relative w-full group overflow-hidden h-fit"
          onMouseMove={(e) => handleMouseMove(e, "right")}
          onMouseLeave={() => handleLeave("right")}
        >
            <p className="font-bold text-md">OUR COMMUNITY</p>
          <img
            src="./03_our-community.webp"
            alt=""
            className="w-full block sm:h-auto h-[100vw] object-cover"
          />

          {positions.right && (
            <div
              className="hidden sm:flex absolute left-4 right-4 justify-between text-white font-semibold pointer-events-none
                         opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150"
              style={{
                top: positions.right,
                transform: "translateY(-50%)",
              }}
            >
              <span>OUR COMMUNITY</span>
              <span>[ EXPLORE ]</span>
            </div>
          )}

          <div
            className="sm:hidden absolute left-4 right-4 flex justify-between text-white font-semibold"
            style={{
              bottom: 12 + scrollY * 0.05,
            }}
          >
            <span>OUR COMMUNITY</span>
            <span>[ EXPLORE ]</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default OddRitual;