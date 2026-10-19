import React from "react";

const CommunitySection = () => {
  const data = [
    {
      id: 1,
      title: "FAIRWAYS TO AFRICA",
      description:
        "Bespoke golf travel. Like our clients, we are golfers. We are young-at-heart and seek unique experiences whilst playing the sport we love around the world.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600",
    },
    {
      id: 2,
      title: "STARTWELL FOUNDATION",
      description:
        "A passionate team making a measurable difference in the fight against malnutrition. We design and deliver nutrient-rich meals to vulnerable communities.",
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600",
    },
    {
      id: 3,
      title: "URBAN THREAD COLLECTIVE",
      description:
        "Exploring contemporary streetwear rooted in local culture.",
      image:
        "https://images.unsplash.com/photo-1521334884684-d80222895322?q=80&w=1600",
    },
    {
      id: 4,
      title: "ARTISAN FABRIC LAB",
      description:
        "Reviving traditional Indian textiles with modern silhouettes.",
      image:
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600",
    },
  ];

  return (
    <div className="w-full">

      {/* HEADER */}
      <div className="border-b border-gray-300 px-6 py-3 text-right">
        OUR GREATER COMMUNITY
      </div>

      {/* ROWS */}
      {data.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-2 min-h-[300px] border-b border-gray-300"
        >

          {/* LEFT → TRUE 50/50 */}
          <div className="bg-gray-100 p-8 grid grid-cols-2">

            {/* LEFT HALF */}
            <div className="flex items-start">
              <div>[ VISIT WEBSITE ]</div>
            </div>

            {/* RIGHT HALF */}
            <div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full h-full">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      ))}

    </div>
  );
};

export default CommunitySection;