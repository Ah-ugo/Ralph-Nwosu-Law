/** @format */

import Image from 'next/image';

export function Footer() {
  return (
    <footer className='py-12 md:py-16 border-t border-gold/30 bg-cream'>
      <div className='container px-4'>
        <div className='flex flex-col items-center gap-6 text-center'>
          <div className='flex flex-col items-center'>
            <div className='relative h-12 w-24 md:h-16 md:w-32 mb-3'>
              <Image
                src='/images/ralph-nwosu-logo.png'
                alt='Ralph Nwosu & Co Logo'
                fill
                loading='lazy'
                sizes='(max-width: 768px) 96px, 128px'
                className='object-contain'
              />
            </div>
            <span className='text-xl font-playfair font-medium tracking-wider text-navy'>
              Ralph Nwosu & Co
            </span>
          </div>
          <div className='space-y-3'>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8'>
              <a
                href='tel:+2348123456789'
                className='text-muted-foreground hover:text-gold transition-colors duration-300 text-sm'
              >
                Office: +234 812 345 6789
              </a>
              <a
                href='tel:+2348098765432'
                className='text-muted-foreground hover:text-gold transition-colors duration-300 text-sm'
              >
                Emergency: +234 809 876 5432
              </a>
            </div>
            <p className='text-muted-foreground text-sm'>
              &copy; {new Date().getFullYear()} Ralph Nwosu & Co. All rights
              reserved.
            </p>
            <p className='text-muted-foreground text-sm'>
              Premier Legal Services & Expert Representation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
