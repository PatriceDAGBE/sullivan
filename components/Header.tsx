import { Menu, Globe } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative w-full z-50 mix-blend-difference
      /* Espacement haut : 80px sur PC, 60px sur tablette, 40px sur mobile */
      mt-[40px] sm:mt-[60px] md:mt-[80px]
      /* Padding horizontal progressif */
      px-6 sm:px-16 md:px-[115px]">

      <div className="max-w-[1694px] mx-auto flex justify-between items-center h-[51px]">

        {/* Bouton Menu à gauche */}
        <button className="flex items-center gap-3 md:gap-4 group transition-opacity hover:opacity-70 h-full">
          <Menu className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
          <span className="text-[18px] sm:text-[20px] md:text-[24px] font-medium leading-none tracking-normal font-geist">
            Menu
          </span>
        </button>

        {/* Infos à droite */}
        <div className="flex items-center justify-between w-auto md:w-[113px] h-[32px] gap-4 md:gap-0">
          <div className="flex items-center cursor-pointer hover:opacity-70 transition-opacity">
            <Globe className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
          </div>

          <span className="text-[18px] sm:text-[20px] md:text-[24px] font-bold tracking-tighter cursor-default leading-none">
            S.A.
          </span>
        </div>

      </div>
    </header>
  );
}
