import { Menu, Globe } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-[57px] left-0 w-full z-50 mix-blend-difference px-[115px]">
      <div className="max-w-[1694px] mx-auto flex justify-between items-center h-[51px]">

        {/* Bouton Menu à gauche */}
        <button className="flex items-center gap-4 group transition-opacity hover:opacity-70 h-full">
          <Menu size={24} strokeWidth={1.5} />
          <span className="text-[24px] font-medium leading-none tracking-normal font-geist">
            Menu
          </span>
        </button>

        {/* Infos à droite */}
        <div className="flex items-center justify-between w-[113px] h-[32px]">
          <div className="flex items-center cursor-pointer hover:opacity-70 transition-opacity">
            <Globe size={24} strokeWidth={1.5} />
          </div>
          <span className="text-[24px] font-bold tracking-tighter cursor-default leading-none">
            S.A.
          </span>
        </div>

      </div>
    </header>
  );
}
