export default function ArrowLabelFinding({ label, direction = "right" }: { label: string, direction?: "left" | "right" }) {
  return (
    <div className="relative w-[160px] h-[160px]">

      {direction === "right" ? (
        <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg"
          className="absolute -top-24 right-8 w-[80px] h-[100px]">
          <path d="M90 120 C100 60, 40 20, 30 10" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M40 10 L30 8 L28 20" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg"
          className="absolute top-24 left-8 w-[80px] h-[100px]">
          <path d="M30 120 C20 60, 80 20, 90 10" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M80 10 L90 8 L92 20" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}

      <div className={`absolute w-[130px] ${
          direction === "right" ? "left-8 bottom-32" : "right-8 -bottom-24"
        }`}>
          <p className="text-white font-medium italic text-[14px] leading-[1.3] text-center w-full">
            {label}
          </p>
      </div>

    </div>
  );
}