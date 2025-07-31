import React, { useState } from "react";

export default function Hero() {
  const [selected, setSelected] = useState("Search"); // default selected is "Search"

  const toggleIcons = [
    { src: "/search-icon.png", alt: "Search" },
    { src: "/tag-icon.png", alt: "Tag" },
    { src: "/location-icon.png", alt: "Location" },
  ];

  const rightIcons = [
    { src: "/mic-icon.png", alt: "Mic" },
    { src: "/cube-icon.png", alt: "Cube" },
  ];

  return (
    <section className="bg-[#faf4fa] h-screen w-full flex flex-col justify-center px-4 md:px-10">
      <div className="text-center text-black max-w-full">
        <h1 className="text-[#5f2f91] text-6xl md:text-[80px] font-bold">
          Seek Intelligence
        </h1>
        <h1 className="text-[#5f2f91] text-6xl md:text-[80px] font-bold -mt-3">
          Not Information
        </h1>
      </div>

      <div className="mt-4 flex flex-col items-center w-full max-w-xl mx-auto">
        {/* Tags */}
        <div className="flex justify-center flex-wrap gap-4 py-4 w-full">
          {["Data", "Research", "Expert"].map((text) => (
            <span
              key={text}
              className="bg-[#dedede] text-[#514848] rounded-lg px-5 py-1 font-semibold text-sm"
            >
              {text}
            </span>
          ))}
        </div>

        <div className="border-2 border-[#5f2f91] rounded-xl w-full p-4 flex flex-col gap-2 max-w-md">
          <input
            type="text"
            aria-label="Ask anything"
            placeholder="| Ask anything (industry/company/sector)"
            className="w-full bg-transparent outline-none text-sm placeholder:text-gray-500"
          />

          <div className="flex mt-2 justify-between ml-1 w-full">
            {/* Left toggle icons */}
            <div className="flex gap-3">
              {toggleIcons.map(({ src, alt }) => (
                <img
                  key={alt}
                  src={src}
                  alt={alt}
                  onClick={() => setSelected(alt)}
                  className={`w-5 h-5 cursor-pointer p-1 rounded-md transition ${
                    selected === alt
                      ? "bg-purple-200 ring-2 ring-purple-600"
                      : "hover:bg-gray-100"
                  }`}
                />
              ))}
            </div>

            {/* Right fixed icons */}
            <div className="flex gap-3">
              {rightIcons.map(({ src, alt }) => (
                <img
                  key={alt}
                  src={src}
                  alt={alt}
                  className={`h-5 ${alt === "Cube" ? "w-[24px]" : "w-5"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
