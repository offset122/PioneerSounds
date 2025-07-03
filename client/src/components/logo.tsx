export default function Logo({ className = "h-12 w-auto" }: { className?: string }) {
  return (
    <svg 
      className={className}
      viewBox="0 0 200 60" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Pioneer Sounds Logo - Based on professional audio equipment branding */}
      <rect x="0" y="0" width="200" height="60" fill="transparent"/>
      
      {/* Sound wave elements */}
      <path 
        d="M10 30 L15 20 L20 35 L25 15 L30 40 L35 25 L40 30" 
        stroke="currentColor" 
        strokeWidth="3" 
        fill="none"
        className="text-orange-500"
      />
      
      {/* Text */}
      <text 
        x="50" 
        y="25" 
        className="fill-current text-white font-bold" 
        fontSize="16" 
        fontFamily="Arial, sans-serif"
      >
        PIONEER
      </text>
      <text 
        x="50" 
        y="42" 
        className="fill-current text-orange-500 font-bold" 
        fontSize="16" 
        fontFamily="Arial, sans-serif"
      >
        SOUNDS
      </text>
      
      {/* Tagline */}
      <text 
        x="50" 
        y="55" 
        className="fill-current text-gray-400 font-normal" 
        fontSize="8" 
        fontFamily="Arial, sans-serif"
      >
        "clarity non-stop"
      </text>
    </svg>
  );
}