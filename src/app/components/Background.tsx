function BackGround() {
  return (
    <svg
      className="fixed top-0 left-0 w-full h-full -z-50"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 700 700"
      preserveAspectRatio="none"
    >
      <rect className="w-full h-full fill-[#131f30]" />
      <g className="fill-none stroke-[#4b5563] stroke-[0.5]" style={{ strokeDasharray: 500, strokeDashoffset: 0, animation: "draw_background 15s linear infinite" }}>
        <path d="M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63" />
        <path d="M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764" />
        <path d="M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880" />
      </g>
      <g className="fill-[#3f7dd4]">
        {[769, 539, 603, 731, 520, 309, 295, 40, 102, 127, 370, 578, 237, 390].map((cx, index) => {
          const cyValues = [229, 269, 493, 737, 660, 538, 764, 599, 382, 80, 105, 42, 261, 382];
          return (
            <circle
              key={index}
              cx={cx}
              cy={cyValues[index]}
              r="2"
              style={{ animation: "pulse 5s ease-in-out infinite" }}
            />
          );
        })}
      </g>
      <style>
        {`
          @keyframes draw_background {
            0% { stroke-dashoffset: 0; }
            50% { stroke-dashoffset: 500; }
            100% { stroke-dashoffset: 1000; }
          }
          @keyframes pulse {
            0%, 100% { filter: brightness(1); }
            50% { filter: brightness(0.7); }
          }
        `}
      </style>
    </svg>
  );
}

export default BackGround;
