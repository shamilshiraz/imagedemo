import { useEffect } from "react";

const cards = [
  {
    label: "01 — Foundation",
    title: "Where Ideas Take Shape",
    desc: "Every project begins with a single conviction. We start by asking the uncomfortable questions.",
    bg: "#f5f0e8",
    text: "#1a1208",
    muted: "#8a7a60",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
  },
  {
    label: "02 — Process",
    title: "Craft in Every Detail",
    desc: "Precision is not perfectionism. It's the discipline to refine until nothing is extraneous.",
    bg: "#0f1a14",
    text: "#e8f2ec",
    muted: "#6a9a78",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80",
  },
  {
    label: "03 — Material",
    title: "Texture Tells the Story",
    desc: "The objects we make carry memory. Touch is the oldest form of communication we know.",
    bg: "#1c1018",
    text: "#f2eaf0",
    muted: "#8a6a82",
    img: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=900&q=80",
  },
  {
    label: "04 — Light",
    title: "Clarity After Complexity",
    desc: "The finished work looks inevitable. That illusion of ease is the hardest thing to achieve.",
    bg: "#e8eef5",
    text: "#0c1420",
    muted: "#4a6080",
    img: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=900&q=80",
  },
];

const CARD_HEIGHT = "78vh";
const OFFSET_TOP = 72;
const OFFSET_STEP = 22;

export default function StackedCards() {
  return (
    <section
      style={{
        // tall enough to scroll through all cards
        height: `${100 + cards.length * 80}vh`,
        position: "relative",
      }}
    >
      {/* sticky wrapper pins to top and stacks all cards inside */}
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {cards.map((card, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: `${OFFSET_TOP + i * OFFSET_STEP}px`,
              left: "50%",
              transform: "translateX(-50%)",
              width: "min(900px, 92vw)",
              height: CARD_HEIGHT,
              overflow: "hidden",
              borderRadius: "24px",
              background: card.bg,
              color: card.text,
              zIndex: i,
            }}
          >
            <div style={{ height: "62%", overflow: "hidden" }}>
              <img
                src={card.img}
                alt={card.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>

            <div
              style={{
                padding: "1.75rem 2rem",
                height: "38%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  marginBottom: "0.6rem",
                  color: card.muted,
                  fontFamily: "'DM Mono', monospace",
                }}
              >
                {card.label}
              </div>
              <h2
                style={{
                  fontSize: "clamp(1.4rem, 3vw, 2rem)",
                  fontWeight: 600,
                  lineHeight: 1.15,
                  marginBottom: "0.5rem",
                  fontFamily: "'DM Serif Display', serif",
                }}
              >
                {card.title}
              </h2>
              <p
                style={{
                  fontSize: "0.9rem",
                  lineHeight: 1.6,
                  maxWidth: "52ch",
                  color: card.muted,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}