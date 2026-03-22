interface ProjectProps {
  title: string;
  category: string;
  image: string;
}

export default function ProjectCard({ title, category, image }: ProjectProps) {
  return (
    <div
      className="group cursor-pointer flex flex-col gap-4 relative"
      style={{
        border: "1.17px solid #2F2F2F",
        borderRadius: "24px",
        padding: "16px 24px",
      }}
    >
      {/* Image container with hover overlay */}
      <div
        className="relative overflow-hidden"
        style={{ borderRadius: "16px" }}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Dark overlay */}
        <div
          className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"
          style={{ borderRadius: "16px" }}
        />

        {/* Arrow button — fades + slides up on hover */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="
              flex items-center justify-center
              w-14 h-14 rounded-full
              opacity-0 translate-y-4
              group-hover:opacity-100 group-hover:translate-y-0
              transition-all duration-300 ease-out delay-75
            "
            style={{ backgroundColor: "#D3AF4A" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1a1a1a"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </div>
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-semibold transition-colors duration-200">
          {title}
        </h3>
        <p className="text-gray-400 text-sm">{category}</p>
      </div>
    </div>
  );
}