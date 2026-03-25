
export default function ArrowLabel({ label }: { label: string }) {
  return (
    <div className="relative w-[160px] h-[160px]">
      {/* Flèche courbée vers le haut, courbure à gauche */}
      <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 right-4 w-[80px] h-[100px]">
        <path
          d="M90 120 C100 60, 40 20, 30 10"
          stroke="white" strokeWidth="1.5" fill="none"
          strokeLinecap="round"
        />
        {/* Pointe de flèche en haut */}
        <path
          d="M40 10 L30 8 L28 20"
          stroke="white" strokeWidth="1.5" fill="none"
          strokeLinecap="round" strokeLinejoin="round"
        />
      </svg>

      {/* Texte en bas à gauche */}
      <p className="absolute bottom-8 left-16 text-white font-medium italic text-[14px] leading-[1.3] w-[130px]">
        {label}
      </p>
    </div>
  );
}