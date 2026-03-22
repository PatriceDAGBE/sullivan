export default function Footer() {
  return (
    <footer className="mt-40 px-6 sm:px-12 md:px-[80px] lg:px-[115px] border-t border-[#2F2F2F] pt-10 pb-24">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-10 sm:gap-0">

        {/* Logo */}
        <span className="text-[60px] sm:text-[80px] lg:text-[120px] font-medium leading-none">S.A.</span>

        {/* Nav columns */}
        <div className="flex gap-10 sm:gap-16 pt-0 sm:pt-2">

          {/* Menu */}
          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium text-white mb-1">Menu</span>
            <a href="#" className="text-sm text-white/40 hover:text-white transition-colors duration-200">Home</a>
            <a href="#" className="text-sm text-white/40 hover:text-white transition-colors duration-200">Work</a>
            <a href="#" className="text-sm text-white/40 hover:text-white transition-colors duration-200">About</a>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium text-white mb-1">Contact</span>
            <a href="#" className="text-sm text-white/40 hover:text-white transition-colors duration-200">Linkedin</a>
            <a href="#" className="text-sm text-white/40 hover:text-white transition-colors duration-200">Mail</a>
            <a href="#" className="text-sm text-white/40 hover:text-white transition-colors duration-200">Phone</a>
          </div>

        </div>
      </div>
    </footer>
  );
}