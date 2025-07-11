import React from "react";

interface MarqueeTextProps {
  text?: string;
  speed?: number;
  className?: string;
}

const MarqueeText: React.FC<MarqueeTextProps> = ({
  text = "LIMITED TIME OFFER - 1 Unit For $189",
  speed = 20,
  className = "",
}) => {
  return (
    <div
      className={`text-brand-offwhite relative z-30 overflow-hidden bg-black/50 py-3 whitespace-nowrap ${className}`}
    >
      <div
        className="inline-block"
        style={{
          animation: `marquee ${speed}s linear infinite`,
        }}
      >
        <span className="px-8 text-lg font-bold tracking-wider">
          {text} • {text} • {text} • {text} • {text} • {text} • {text} • {text}{" "}
          • {text} • {text} • {text}
        </span>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default MarqueeText;
