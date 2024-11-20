export default function Logo({ className = "w-10 h-10" }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Bedouin Coffee Pot (Dallah) - Symbol of hospitality */}
      <path 
        d="M45 20 L55 20 L58 25 L42 25 Z" 
        className="stroke-white stroke-[1]"
        style={{ animation: "drawPath 2s ease-out forwards" }}
      />
      <path 
        d="M42 25 L40 60 L60 60 L58 25" 
        className="stroke-white stroke-[1]"
        style={{ animation: "drawPath 2s ease-out 0.3s forwards" }}
      />
      
      {/* Traditional Tent Pattern */}
      <path 
        d="M20 70 L50 30 L80 70" 
        className="stroke-white stroke-[1]"
        style={{ animation: "drawPath 2s ease-out 0.6s forwards" }}
      />
      
      {/* Desert Dunes */}
      <path 
        d="M15 80 Q35 70 50 80 Q65 90 85 80" 
        className="stroke-white stroke-[0.5]"
        style={{ animation: "drawPath 2s ease-out 0.9s forwards" }}
      />
      
      {/* Stars - representing navigation */}
      <path 
        d="M30 40 L32 42 L30 44 L28 42 Z" 
        className="stroke-white stroke-[0.5]"
        style={{ animation: "drawPath 1s ease-out 1.2s forwards" }}
      />
      <path 
        d="M70 40 L72 42 L70 44 L68 42 Z" 
        className="stroke-white stroke-[0.5]"
        style={{ animation: "drawPath 1s ease-out 1.4s forwards" }}
      />
    </svg>
  )
} 