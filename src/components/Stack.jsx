import { useEffect, useRef } from "react";

const cards = [
  {
    title: "Where Ideas Take Shape",
    description:
      "Every project begins with a single conviction. We start by asking the uncomfortable questions.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80",
  },
  {
    title: "Craft in Every Detail",
    description:
      "Precision is not perfectionism. It's the discipline to refine until nothing is extraneous.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80",
  },
  {
    title: "Texture Tells The Story",
    description:
      "The objects we make carry memory. Touch is the oldest form of communication we know.",
    image:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1600&q=80",
  },
  {
    title: "Clarity After Complexity",
    description:
      "The finished work looks inevitable. That illusion of ease is the hardest thing to achieve.",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1600&q=80",
  },
];

export default function StackedCards() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const updateCards = () => {
      const cardsDOM = document.querySelectorAll(".stack-card");

      cardsDOM.forEach((card) => {
        const image = card.querySelector(".stack-image");

        const rect = card.getBoundingClientRect();

        const progress = Math.max(
          0,
          Math.min(
            1,
            (window.innerHeight - rect.top) / window.innerHeight
          )
        );

        const imageScale = 1.3 - progress * 0.3;
        const imageTranslate = progress * 10;

        image.style.transform = `
          scale(${imageScale})
          translateY(-${imageTranslate}%)
        `;
      });
    };

    updateCards();

    window.addEventListener("scroll", updateCards);

    return () => {
      window.removeEventListener("scroll", updateCards);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        background: "#faf8f5",
      }}
    >
      {cards.map((card, i) => (
        <div
          key={i}
          style={{
            height: "100vh",
            position: "sticky",
            top: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="stack-card"
            style={{
              position: "relative",

              width: "min(1200px, 92vw)",
              height: "78vh",

              borderRadius: "32px",
              overflow: "hidden",

              top: `${i * 30}px`,

              boxShadow:
                "0 30px 80px rgba(0,0,0,.15)",

              transformOrigin: "top center",
            }}
          >
            {/* IMAGE */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                overflow: "hidden",
              }}
            >
              <img
                className="stack-image"
                src={card.image}
                alt={card.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transform: "scale(1.3)",
                  willChange: "transform",
                }}
              />
            </div>

            {/* OVERLAY */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,.75), rgba(0,0,0,.2), transparent)",
              }}
            />

            {/* CONTENT */}
            <div
              style={{
                position: "absolute",
                bottom: "3rem",
                left: "3rem",
                right: "3rem",
                zIndex: 2,
                color: "white",
              }}
            >
              <div
                style={{
                  fontSize: "12px",
                  letterSpacing: ".2em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                  opacity: 0.8,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              <h2
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 5rem)",
                  lineHeight: 0.95,
                  margin: 0,
                  maxWidth: "10ch",
                }}
              >
                {card.title}
              </h2>

              <p
                style={{
                  marginTop: "1rem",
                  maxWidth: "45ch",
                  lineHeight: 1.7,
                  opacity: 0.9,
                }}
              >
                {card.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}