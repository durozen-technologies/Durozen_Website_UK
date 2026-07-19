export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 400 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Red Circle - D */}
      <circle cx="70" cy="60" r="50" fill="#d32f2f" />
      <text x="70" y="78" fontFamily="Arial, sans-serif" fontSize="56" fontWeight="bold" fill="white" textAnchor="middle">D</text>
      
      {/* Yellow Circle - UR */}
      <circle cx="150" cy="50" r="50" fill="#fbc02d" />
      <text x="150" y="68" fontFamily="Arial, sans-serif" fontSize="48" fontWeight="bold" fill="white" textAnchor="middle">UR</text>
      
      {/* Green Circle - OZ */}
      <circle cx="230" cy="65" r="50" fill="#689f38" />
      <text x="230" y="83" fontFamily="Arial, sans-serif" fontSize="48" fontWeight="bold" fill="white" textAnchor="middle">OZ</text>
      
      {/* Blue Circle - EN */}
      <circle cx="320" cy="55" r="50" fill="#303f9f" />
      <text x="320" y="73" fontFamily="Arial, sans-serif" fontSize="48" fontWeight="bold" fill="white" textAnchor="middle">EN</text>
    </svg>
  );
}
