import { Building2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center space-x-2 mb-6">
            <Building2 className="h-8 w-8 text-[#b54fe0]" />
            <span className="text-2xl font-bold gradient-text">ABUHIDAR LLC</span>
          </div>
          <div className="flex space-x-8 mb-8">
            <a href="#portfolio" className="text-gray-400 hover:text-[#b54fe0] transition-colors">Portfolio</a>
            <a href="#about" className="text-gray-400 hover:text-[#b54fe0] transition-colors">About</a>
            <a href="#contact" className="text-gray-400 hover:text-[#b54fe0] transition-colors">Contact</a>
          </div>
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Abuhidar Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}