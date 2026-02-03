"use client";

import { useRouter } from "next/navigation";

export default function OptionCard({ item }) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(item.link)}
      className="relative border overflow-hidden cursor-pointer w-full "
      style={{ backgroundColor: "#BBBEC3",
       }}
    >
      {/* TOP PART */}
      <div className="relative h-32 flex items-center justify-center overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id={`mesh-${item.id}`}
              width="3"
              height="3"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(-30)"
            >
              <path
                d="M 3 0 L 0 0 0 3"
                fill="none"
                stroke={item.color}
                strokeWidth="0.8"
              />
            </pattern>
          </defs>

          <rect
            width="100%"
            height="100%"
            fill={`url(#mesh-${item.id})`}
          />
        </svg>

        <img
          src={item.img}
          alt=""
          className="relative z-10 h-12 w-12"
        />
      </div>

      {/* BOTTOM PART */}
      <div className="flex items-center justify-center py-3 bg-white">
        <p className="font-medium">{item.name}</p>
      </div>
    </div>
  );
}
