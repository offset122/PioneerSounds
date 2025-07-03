
export default function Logo({ className = "h-12 w-auto" }: { className?: string }) {
  return (
    <svg 
      className={className}
      viewBox="0 0 200 60" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Pioneer Sounds Authentic Logo */}
      <rect x="0" y="0" width="200" height="60" fill="transparent"/>
      
      {/* P with sound wave design */}
      <g transform="translate(10, 8)">
        {/* Main P letter */}
        <path 
          d="M0 0 L0 44 M0 0 L20 0 Q28 0 28 11 Q28 22 20 22 L0 22"
          stroke="currentColor" 
          strokeWidth="4" 
          fill="none"
          className="text-gray-800"
        />
        
        {/* Sound wave curves */}
        <path 
          d="M20 5 Q35 -2 45 12 Q50 22 35 30"
          stroke="currentColor" 
          strokeWidth="2.5" 
          fill="none"
          className="text-gray-500"
        />
        
        {/* Green S curve */}
        <path 
          d="M45 15 Q60 8 70 25 Q75 35 60 40"
          stroke="currentColor" 
          strokeWidth="3" 
          fill="none"
          className="text-green-500"
        />
        
        {/* Center speaker element */}
        <circle 
          cx="42" 
          cy="22" 
          r="3" 
          fill="currentColor"
          className="text-orange-500"
        />
        <circle 
          cx="42" 
          cy="22" 
          r="6" 
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          className="text-gray-600"
        />
      </g>
      
      {/* Text */}
      <text 
        x="85" 
        y="25" 
        className="fill-current text-blue-800 font-bold" 
        fontSize="14" 
        fontFamily="Arial, sans-serif"
      >
        Pioneer
      </text>
      <text 
        x="85" 
        y="42" 
        className="fill-current text-green-500 font-bold" 
        fontSize="14" 
        fontFamily="Arial, sans-serif"
      >
        Sounds
      </text>
      
      {/* Tagline */}
      <text 
        x="85" 
        y="55" 
        className="fill-current text-gray-500 font-normal" 
        fontSize="8" 
        fontFamily="Arial, sans-serif"
        fontStyle="italic"
      >
        "clarity non-stop"
      </text>
    </svg>
  );
}
