import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { id: '/', label: 'Home' },
    { id: '/about', label: 'About' },
    { id: '/services', label: 'Services' },
    { id: '/solutions', label: 'Solutions' },
    { id: '/case-studies', label: 'Case Studies' },
    { id: '/careers', label: 'Careers' },
    { id: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="bg-surface border-b border-outline sticky top-0 z-50">
      <div className="relative max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center z-10 min-w-0 pr-4">
          <Logo className="h-8 sm:h-10 w-auto shrink-0" />
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <Link
              key={link.id}
              to={link.id}
              className={`text-sm font-medium transition-colors ${isActive(link.id) ? 'text-primary border-b-2 border-secondary pb-1' : 'text-text-muted hover:text-primary'}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-3 md:space-x-4">
          <Link
            to="/contact"
            className="bg-secondary text-white px-3 py-2 md:px-6 md:py-2.5 rounded font-medium text-xs md:text-sm hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Book a Consultation
          </Link>

          <button className="md:hidden text-primary p-1" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface border-b border-outline shadow-lg p-6 flex flex-col space-y-4">
          {navLinks.map(link => (
            <Link
              key={link.id}
              to={link.id}
              onClick={() => setIsOpen(false)}
              className={`text-left text-sm font-medium ${isActive(link.id) ? 'text-primary font-bold' : 'text-text-muted'}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-secondary text-white px-6 py-3 rounded font-medium text-sm mt-4 text-center"
          >
            Book a Consultation
          </Link>
        </div>
      )}
    </nav>
  );
}
