/** @format */

'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActiveLink = (href: string) => {
    if (href === '/' && pathname === '/') return true;
    if (href !== '/' && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-gold/30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300 ${
        isScrolled ? 'h-16 md:h-16' : 'h-16 md:h-20'
      }`}
    >
      <div className='container flex h-full items-center justify-between px-4'>
        <Link
          href='/'
          className='flex items-center gap-3 hover:opacity-80 transition-opacity duration-300'
          aria-label='Ralph Nwosu & Co - Premier Legal Services'
        >
          <div className='relative h-16 w-12 md:h-18 md:w-16 lg:h-20 lg:w-20'>
            <Image
              src='/images/ralph-nwosu-logo.png'
              alt='Ralph Nwosu & Co Logo'
              fill
              priority
              sizes='(max-width: 768px) 48px, (max-width: 1024px) 64px, 80px'
              className='object-cover'
            />
          </div>
          <span className='text-lg md:text-xl font-playfair font-medium tracking-wider'>
            Ralph Nwosu & Co
          </span>
        </Link>
        <nav
          className='hidden md:flex gap-6 lg:gap-8'
          aria-label='Main Navigation'
        >
          <Link
            href='/'
            className={`text-sm uppercase tracking-widest transition-colors duration-300 relative ${
              isActiveLink('/')
                ? 'text-gold after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-0.5 after:bg-gold'
                : 'hover:text-gold'
            }`}
          >
            Home
          </Link>
          <Link
            href='/about'
            className={`text-sm uppercase tracking-widest transition-colors duration-300 relative ${
              isActiveLink('/about')
                ? 'text-gold after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-0.5 after:bg-gold'
                : 'hover:text-gold'
            }`}
          >
            About
          </Link>
          <Link
            href='/services'
            className={`text-sm uppercase tracking-widest transition-colors duration-300 relative ${
              isActiveLink('/services')
                ? 'text-gold after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-0.5 after:bg-gold'
                : 'hover:text-gold'
            }`}
          >
            Services
          </Link>
          <Link
            href='/testimonials'
            className={`text-sm uppercase tracking-widest transition-colors duration-300 relative ${
              isActiveLink('/testimonials')
                ? 'text-gold after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-0.5 after:bg-gold'
                : 'hover:text-gold'
            }`}
          >
            Testimonials
          </Link>
          <Link
            href='/contact'
            className={`text-sm uppercase tracking-widest transition-colors duration-300 relative ${
              isActiveLink('/contact')
                ? 'text-gold after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-0.5 after:bg-gold'
                : 'hover:text-gold'
            }`}
          >
            Contact
          </Link>
          <Link
            href='/careers'
            className={`text-sm uppercase tracking-widest transition-colors duration-300 relative ${
              isActiveLink('/careers')
                ? 'text-gold after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-0.5 after:bg-gold'
                : 'hover:text-gold'
            }`}
          >
            Careers
          </Link>
        </nav>
        <div className='flex items-center gap-2'>
          <Button
            className='luxury-button text-gold border-gold hover:text-gold-light text-sm md:text-base hidden md:flex bg-transparent'
            variant='outline'
            asChild
          >
            <a href='tel:+2348123456789'>Call Now</a>
          </Button>
          <button
            className='md:hidden text-gold p-2'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label='Toggle menu'
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className='h-6 w-6' />
            ) : (
              <Menu className='h-6 w-6' />
            )}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className='md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md supports-[backdrop-filter]:bg-background/95 border-b border-gold/30 py-6 z-50 shadow-lg'>
          <nav
            className='container flex flex-col gap-4 px-4'
            aria-label='Mobile Navigation'
          >
            <Link
              href='/'
              className={`text-sm uppercase tracking-widest transition-colors duration-300 py-2 ${
                isActiveLink('/') ? 'text-gold' : 'hover:text-gold'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href='/about'
              className={`text-sm uppercase tracking-widest transition-colors duration-300 py-2 ${
                isActiveLink('/about') ? 'text-gold' : 'hover:text-gold'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href='/services'
              className={`text-sm uppercase tracking-widest transition-colors duration-300 py-2 ${
                isActiveLink('/services') ? 'text-gold' : 'hover:text-gold'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href='/testimonials'
              className={`text-sm uppercase tracking-widest transition-colors duration-300 py-2 ${
                isActiveLink('/testimonials') ? 'text-gold' : 'hover:text-gold'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href='/contact'
              className={`text-sm uppercase tracking-widest transition-colors duration-300 py-2 ${
                isActiveLink('/contact') ? 'text-gold' : 'hover:text-gold'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href='/careers'
              className={`text-sm uppercase tracking-widest transition-colors duration-300 py-2 ${
                isActiveLink('/careers') ? 'text-gold' : 'hover:text-gold'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Careers
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
