interface ProjectProps {
  title: string;
  category: string;
  image: string;
}

export default function ProjectCard({ title, category, image }: ProjectProps) {
  return (
    <div className="group cursor-pointer">
      <div className="overflow-hidden rounded-xl bg-[#1e1e1e] transition-transform duration-300 group-hover:scale-[1.02]">
        <img src={image} alt={title} className="w-full h-auto object-cover" />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-400 text-sm">{category}</p>
      </div>
    </div>
  );
}
