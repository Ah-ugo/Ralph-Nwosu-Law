/** @format */

'use client';

import type React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TestimonialsColumn } from '@/components/ui/testimonials-columns';
import { HeroSlideshow } from '@/components/ui/hero-slideshow';
import { ResponsiveVideo } from '@/components/ui/responsive-video';

const testimonials = [
  {
    text: 'Ralph Nwosu & Co handled our corporate merger with exceptional expertise and attention to detail. Their strategic guidance was invaluable throughout the entire process. Highly recommend for complex business matters.',
    image: '/placeholder.svg?height=40&width=40',
    name: 'Sarah & James Mitchell',
    location: 'Corporate Clients',
  },
  {
    text: 'After my accident, Ralph Nwosu & Co fought tirelessly for my rights. They secured a settlement that exceeded my expectations and provided compassionate support throughout my recovery.',
    image: '/placeholder.svg?height=40&width=40',
    name: 'David Thompson',
    location: 'Personal Injury Client',
  },
  {
    text: "The family law team at Ralph Nwosu & Co guided us through a difficult divorce with professionalism and empathy. They protected our children's interests while achieving a fair resolution.",
    image: '/placeholder.svg?height=40&width=40',
    name: 'Michael Roberts',
    location: 'Family Law Client',
  },
  {
    text: "Their estate planning services gave us peace of mind. The attorneys took time to understand our unique situation and created a comprehensive plan that protects our family's future.",
    image: '/placeholder.svg?height=40&width=40',
    name: 'Emma & Tom Wilson',
    location: 'Estate Planning Clients',
  },
  {
    text: "Ralph Nwosu & Co represented our startup through multiple funding rounds. Their business law expertise and strategic advice were crucial to our company's successful growth.",
    image: '/placeholder.svg?height=40&width=40',
    name: 'Jennifer Clarke',
    location: 'Business Law Client',
  },
  {
    text: 'When we faced a complex litigation matter, Ralph Nwosu & Co provided exceptional representation. Their courtroom skills and thorough preparation led to a favorable outcome.',
    image: '/placeholder.svg?height=40&width=40',
    name: 'Richard Palmer',
    location: 'Litigation Client',
  },
  {
    text: 'The real estate transaction team at Ralph Nwosu & Co made our commercial property acquisition seamless. Their due diligence and negotiation skills saved us significant time and money.',
    image: '/placeholder.svg?height=40&width=40',
    name: 'Helen & Mark Davis',
    location: 'Real Estate Clients',
  },
  {
    text: 'Ralph Nwosu & Co provided outstanding legal counsel for our intellectual property matters. Their expertise in patent law helped protect our innovations and competitive advantage.',
    image: '/placeholder.svg?height=40&width=40',
    name: 'Caroline Foster',
    location: 'IP Law Client',
  },
  {
    text: 'From contract negotiations to regulatory compliance, Ralph Nwosu & Co has been our trusted legal partner. Their comprehensive approach and industry knowledge are unmatched.',
    image: '/placeholder.svg?height=40&width=40',
    name: 'Andrew & Lucy Stevens',
    location: 'Corporate Counsel Clients',
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function ClientPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function scrollToSection(
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 0;
      const sectionPosition = section.getBoundingClientRect().top;
      const offsetPosition =
        sectionPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsMenuOpen(false);
  }

  function submitToWhatsApp() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const selectedService = document.getElementById('service').value;
    const requests = document.getElementById('requests').value;

    const message = `*New Legal Consultation Request*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Phone:* ${phone}%0A*Preferred Date:* ${date}%0A*Legal Service:* ${selectedService}%0A*Case Details:* ${requests}`;
    const whatsappURL = `https://api.whatsapp.com/send?phone=2348123456789&text=${message}`;

    window.open(whatsappURL, '_blank');
  }

  return (
    <div className='flex min-h-screen flex-col font-montserrat'>
      <header
        className={`sticky top-0 z-50 w-full border-b border-gold/30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300 ${
          isScrolled ? 'h-14 md:h-16' : 'h-16 md:h-20'
        }`}
      >
        <div className='container flex h-full items-center justify-between px-4 md:px-6 lg:px-8'>
          <Link
            href='/'
            className='flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity duration-300'
            aria-label='Ralph Nwosu & Co - Premier Legal Services'
          >
            <div className='relative h-6 w-12 md:h-8 md:w-16 lg:h-10 lg:w-20'>
              <Image
                src='/images/ralph-nwosu-logo.png'
                alt='Ralph Nwosu & Co Logo'
                fill
                priority
                sizes='(max-width: 768px) 48px, (max-width: 1024px) 64px, 80px'
                className='object-contain'
              />
            </div>
            <span className='text-base md:text-lg lg:text-xl font-playfair font-medium tracking-wider'>
              Ralph Nwosu & Co
            </span>
          </Link>
          <nav
            className='hidden md:flex gap-4 lg:gap-6 xl:gap-8'
            aria-label='Main Navigation'
          >
            <Link
              href='/about'
              className='text-xs lg:text-sm uppercase tracking-widest hover:text-gold transition-colors duration-300'
            >
              About
            </Link>
            <Link
              href='/services'
              className='text-xs lg:text-sm uppercase tracking-widest hover:text-gold transition-colors duration-300'
            >
              Services
            </Link>
            <Link
              href='/testimonials'
              className='text-xs lg:text-sm uppercase tracking-widest hover:text-gold transition-colors duration-300'
            >
              Testimonials
            </Link>
            <Link
              href='/contact'
              className='text-xs lg:text-sm uppercase tracking-widest hover:text-gold transition-colors duration-300'
            >
              Contact
            </Link>
            <Link
              href='/careers'
              className='text-xs lg:text-sm uppercase tracking-widest hover:text-gold transition-colors duration-300'
            >
              Careers
            </Link>
          </nav>
          <div className='flex items-center gap-2'>
            <Button
              className='luxury-button text-gold border-gold hover:text-gold-light text-xs md:text-sm lg:text-base hidden md:flex bg-transparent px-3 lg:px-4'
              variant='outline'
              size='sm'
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
                <X className='h-5 w-5' />
              ) : (
                <Menu className='h-5 w-5' />
              )}
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className='md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md supports-[backdrop-filter]:bg-background/95 border-b border-gold/30 py-4 z-50 shadow-lg'>
            <nav
              className='container flex flex-col gap-3 px-4'
              aria-label='Mobile Navigation'
            >
              <Link
                href='/about'
                className='text-sm uppercase tracking-widest hover:text-gold transition-colors duration-300 py-2'
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href='/services'
                className='text-sm uppercase tracking-widest hover:text-gold transition-colors duration-300 py-2'
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href='/testimonials'
                className='text-sm uppercase tracking-widest hover:text-gold transition-colors duration-300 py-2'
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href='/contact'
                className='text-sm uppercase tracking-widest hover:text-gold transition-colors duration-300 py-2'
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href='/careers'
                className='text-sm uppercase tracking-widest hover:text-gold transition-colors duration-300 py-2'
                onClick={() => setIsMenuOpen(false)}
              >
                Careers
              </Link>
              <Button
                className='luxury-button text-gold border-gold hover:text-gold-light text-sm w-full mt-2 bg-transparent'
                variant='outline'
                asChild
              >
                <a href='tel:+2348123456789'>Call Now</a>
              </Button>
            </nav>
          </div>
        )}
      </header>
      <main className='flex-1'>
        <section
          className='relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] xl:h-[95vh] w-full'
          aria-labelledby='hero-heading'
        >
          <div className='absolute inset-0'>
            <img
              src='/professional-law-office-hero.png'
              alt='Professional law office interior'
              className='w-full h-full object-cover'
            />
          </div>
          <HeroSlideshow />
          <div className='absolute inset-0 hero-overlay' />
          <div className='container relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4 md:px-6 lg:px-8'>
            <h1
              id='hero-heading'
              className='max-w-5xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-playfair font-light tracking-wider leading-tight text-balance'
            >
              Experience Exceptional Legal Representation with{' '}
              <span className='italic font-normal text-gold'>
                Ralph Nwosu & Co
              </span>
            </h1>
            <div className='mt-4 md:mt-6 lg:mt-8 h-px w-12 sm:w-16 md:w-20 lg:w-24 bg-gold'></div>
            <p className='mt-6 md:mt-8 lg:mt-10 max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-light tracking-wide px-2 sm:px-4 leading-relaxed text-pretty'>
              Trusted legal experts providing personalized attention and proven
              results across multiple practice areas.
            </p>
            <div className='mt-8 md:mt-10 lg:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-md sm:max-w-none items-center justify-center'>
              <Button
                className='luxury-button text-gold border-gold hover:text-gold-light px-6 md:px-8 lg:px-10 bg-transparent text-sm md:text-base'
                variant='outline'
                size='lg'
                asChild
              >
                <Link href='/services'>View Services</Link>
              </Button>
              <Button
                className='bg-gold hover:bg-gold-light text-navy px-6 md:px-8 lg:px-10 text-sm md:text-base'
                size='lg'
                asChild
              >
                <a href='tel:+2348123456789'>Call Now</a>
              </Button>
            </div>
          </div>
        </section>

        <section
          id='about'
          className='py-12 md:py-16 lg:py-20 xl:py-24'
          aria-labelledby='about-heading'
        >
          <div className='container px-4 md:px-6 lg:px-8'>
            <div className='flex flex-col gap-8 md:gap-12 lg:gap-16 xl:gap-20 lg:flex-row'>
              <div className='flex-1 space-y-4 md:space-y-6 lg:space-y-8'>
                <div>
                  <span className='text-gold uppercase tracking-widest text-xs md:text-sm'>
                    About Ralph Nwosu & Co
                  </span>
                  <h2
                    id='about-heading'
                    className='mt-2 md:mt-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-playfair font-light tracking-wide gold-accent gold-accent-left leading-tight text-balance'
                  >
                    Excellence Redefined in Legal Representation
                  </h2>
                </div>
                <p className='text-muted-foreground leading-relaxed text-sm md:text-base lg:text-lg text-pretty'>
                  Ralph Nwosu & Co is a premier law firm dedicated to providing
                  exceptional legal representation with meticulous attention to
                  detail and an unwavering commitment to our clients' success.
                  We offer a perfect blend of experience, innovation, and
                  personalized service for all your legal needs.
                </p>
                <div className='grid gap-3 md:gap-4 lg:gap-5 grid-cols-1 sm:grid-cols-2'>
                  <div className='flex items-center gap-3'>
                    <ChevronRight
                      className='h-4 w-4 md:h-5 md:w-5 text-gold flex-shrink-0'
                      aria-hidden='true'
                    />
                    <span className='font-light text-sm md:text-base'>
                      25+ Years Combined Experience
                    </span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <ChevronRight
                      className='h-4 w-4 md:h-5 md:w-5 text-gold flex-shrink-0'
                      aria-hidden='true'
                    />
                    <span className='font-light text-sm md:text-base'>
                      Multiple Practice Areas
                    </span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <ChevronRight
                      className='h-4 w-4 md:h-5 md:w-5 text-gold flex-shrink-0'
                      aria-hidden='true'
                    />
                    <span className='font-light text-sm md:text-base'>
                      24/7 Emergency Consultation
                    </span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <ChevronRight
                      className='h-4 w-4 md:h-5 md:w-5 text-gold flex-shrink-0'
                      aria-hidden='true'
                    />
                    <span className='font-light text-sm md:text-base'>
                      Personalized Legal Strategies
                    </span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <ChevronRight
                      className='h-4 w-4 md:h-5 md:w-5 text-gold flex-shrink-0'
                      aria-hidden='true'
                    />
                    <span className='font-light text-sm md:text-base'>
                      Expert Legal Team
                    </span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <ChevronRight
                      className='h-4 w-4 md:h-5 md:w-5 text-gold flex-shrink-0'
                      aria-hidden='true'
                    />
                    <span className='font-light text-sm md:text-base'>
                      Proven Track Record
                    </span>
                  </div>
                </div>
                <div className='pt-2 md:pt-4'>
                  <h3 className='text-base md:text-lg lg:text-xl font-playfair'>
                    Comprehensive Legal Solutions
                  </h3>
                  <p className='text-muted-foreground mt-2 text-sm md:text-base lg:text-lg text-pretty'>
                    From complex corporate matters to personal legal challenges,
                    our experienced attorneys provide comprehensive legal
                    solutions tailored to your unique needs. We combine legal
                    expertise with strategic thinking to achieve the best
                    possible outcomes for our clients.
                  </p>
                </div>
                <div className='pt-2 md:pt-4'>
                  <Button
                    className='luxury-button text-gold border-gold hover:text-gold-light bg-transparent w-full sm:w-auto'
                    variant='outline'
                    size='lg'
                    asChild
                  >
                    <Link href='/about'>Learn More About Us</Link>
                  </Button>
                </div>
              </div>
              <div className='flex-1 mt-6 lg:mt-0'>
                <ResponsiveVideo
                  src='https://www.dropbox.com/scl/fi/vxtngoljgqdpap6uwzy33/WhatsApp-Video-2025-04-05-at-12.12.02.mp4?rlkey=toqb0wazdvomlzfx7x7xlmnm8&st=x1upeqpw&dl=1'
                  poster='/images/hero/image4.jpg'
                  className='border border-gold/20 shadow-lg w-full h-auto'
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id='services'
          className='luxury-gradient py-12 md:py-16 lg:py-20 xl:py-24 text-white'
          aria-labelledby='services-heading'
        >
          <div className='container px-4 md:px-6 lg:px-8'>
            <div className='mx-auto max-w-3xl text-center'>
              <span className='text-gold uppercase tracking-widest text-xs md:text-sm'>
                Legal Services
              </span>
              <h2
                id='services-heading'
                className='mt-2 md:mt-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-playfair font-light tracking-wide gold-accent leading-tight text-balance'
              >
                Comprehensive Legal Solutions for Every Need
              </h2>
              <p className='mt-6 md:mt-8 lg:mt-12 text-white/80 leading-relaxed text-sm md:text-base lg:text-lg text-pretty'>
                Choose from our comprehensive range of legal services or contact
                us for specialized legal counsel tailored to your specific
                requirements. Our experienced attorneys are available for
                consultation and representation.
              </p>
            </div>
            <div className='mt-8 md:mt-12 lg:mt-16'>
              <Tabs defaultValue='corporate' className='w-full'>
                <TabsList className='mx-auto grid w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl grid-cols-1 sm:grid-cols-3 bg-transparent border border-gold/30 h-auto gap-1 sm:gap-2 md:gap-3 p-1 sm:p-2'>
                  <TabsTrigger
                    value='corporate'
                    className='data-[state=active]:bg-gold data-[state=active]:text-navy text-white text-xs sm:text-sm md:text-base py-2 sm:py-3 px-2 md:px-4 rounded-sm transition-all duration-300'
                  >
                    Corporate Law
                  </TabsTrigger>
                  <TabsTrigger
                    value='personal'
                    className='data-[state=active]:bg-gold data-[state=active]:text-navy text-white text-xs sm:text-sm md:text-base py-2 sm:py-3 px-2 md:px-4 rounded-sm transition-all duration-300'
                  >
                    Personal Injury
                  </TabsTrigger>
                  <TabsTrigger
                    value='family'
                    className='data-[state=active]:bg-gold data-[state=active]:text-navy text-white text-xs sm:text-sm md:text-base py-2 sm:py-3 px-2 md:px-4 rounded-sm transition-all duration-300'
                  >
                    Family Law
                  </TabsTrigger>
                </TabsList>
                <TabsContent
                  value='corporate'
                  className='mt-6 md:mt-8 lg:mt-12'
                >
                  <div className='grid gap-6 md:gap-8 lg:gap-12 lg:grid-cols-2'>
                    <div className='relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-auto overflow-hidden rounded-sm order-2 lg:order-1'>
                      <Image
                        src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunset-XXXUGZQvEbSh72EWxveQR8aInPcqYz.png'
                        alt='Corporate law team at Ralph Nwosu & Co providing business legal services'
                        fill
                        loading='lazy'
                        sizes='(max-width: 1024px) 100vw, 50vw'
                        className='object-cover'
                      />
                    </div>
                    <div className='space-y-3 md:space-y-4 lg:space-y-6 order-1 lg:order-2'>
                      <h3 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-playfair font-light tracking-wide text-balance'>
                        Corporate Law & Business Services
                      </h3>
                      <p className='text-white/80 leading-relaxed text-sm md:text-base lg:text-lg text-pretty'>
                        Our corporate law team provides comprehensive legal
                        services for businesses of all sizes. From startup
                        formation to complex mergers and acquisitions, we guide
                        companies through every stage of their legal journey
                        with strategic expertise and attention to detail.
                      </p>
                      <ul className='space-y-2 md:space-y-3'>
                        <li className='flex items-center gap-3'>
                          <ChevronRight
                            className='h-4 w-4 md:h-5 md:w-5 text-gold flex-shrink-0'
                            aria-hidden='true'
                          />
                          <span className='font-light text-sm md:text-base'>
                            Business Formation & Structure
                          </span>
                        </li>
                        <li className='flex items-center gap-3'>
                          <ChevronRight
                            className='h-4 w-4 md:h-5 md:w-5 text-gold flex-shrink-0'
                            aria-hidden='true'
                          />
                          <span className='font-light text-sm md:text-base'>
                            Contract Negotiation & Review
                          </span>
                        </li>
                        <li className='flex items-center gap-3'>
                          <ChevronRight
                            className='h-4 w-4 md:h-5 md:w-5 text-gold flex-shrink-0'
                            aria-hidden='true'
                          />
                          <span className='font-light text-sm md:text-base'>
                            Mergers & Acquisitions
                          </span>
                        </li>
                        <li className='flex items-center gap-3'>
                          <ChevronRight
                            className='h-4 w-4 md:h-5 md:w-5 text-gold flex-shrink-0'
                            aria-hidden='true'
                          />
                          <span className='font-light text-sm md:text-base'>
                            Regulatory Compliance
                          </span>
                        </li>
                      </ul>
                      <div className='pt-2 md:pt-4'>
                        <p className='text-base md:text-lg lg:text-xl font-playfair font-light text-gold'>
                          Consultation Available
                        </p>
                        <p className='text-xs md:text-sm text-white/70'>
                          Contact us for a personalized assessment
                        </p>
                      </div>
                      <Button
                        className='luxury-button text-gold border-gold hover:text-gold-light mt-3 md:mt-4 w-full sm:w-auto bg-transparent'
                        variant='outline'
                        size='lg'
                        asChild
                      >
                        <Link href='/contact'>Schedule Consultation</Link>
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value='personal' className='mt-8 md:mt-12'>
                  <div className='grid gap-8 md:gap-12 md:grid-cols-2'>
                    <div className='relative h-[250px] md:h-[300px] lg:h-auto overflow-hidden rounded-sm'>
                      <Image
                        src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/weekend-WYpv2wLySUP70WysIMCAPdf3ds9ZVH.png'
                        alt='Personal injury attorneys at Ralph Nwosu & Co fighting for client rights'
                        fill
                        loading='lazy'
                        sizes='(max-width: 768px) 100vw, 50vw'
                        className='object-cover'
                      />
                    </div>
                    <div className='space-y-4 md:space-y-6'>
                      <h3 className='text-xl md:text-2xl font-playfair font-light tracking-wide'>
                        Personal Injury Representation
                      </h3>
                      <p className='text-white/80 leading-relaxed text-sm md:text-base'>
                        When you've been injured due to someone else's
                        negligence, our personal injury attorneys fight
                        tirelessly for your rights. We handle all aspects of
                        your case while you focus on recovery, ensuring you
                        receive the compensation you deserve.
                      </p>
                      <ul className='space-y-2 md:space-y-3'>
                        <li className='flex items-center gap-3'>
                          <ChevronRight
                            className='h-4 w-4 md:h-5 md:w-5 text-gold flex-shrink-0'
                            aria-hidden='true'
                          />
                          <span className='font-light text-sm md:text-base'>
                            Motor Vehicle Accidents
                          </span>
                        </li>
                        <li className='flex items-center gap-3'>
                          <ChevronRight
                            className='h-4 w-4 md:h-5 md:w-5 text-gold flex-shrink-0'
                            aria-hidden='true'
                          />
                          <span className='font-light text-sm md:text-base'>
                            Workplace Injuries
                          </span>
                        </li>
                        <li className='flex items-center gap-3'>
                          <ChevronRight
                            className='h-4 w-4 md:h-5 md:w-5 text-gold flex-shrink-0'
                            aria-hidden='true'
                          />
                          <span className='font-light text-sm md:text-base'>
                            Medical Malpractice
                          </span>
                        </li>
                        <li className='flex items-center gap-3'>
                          <ChevronRight
                            className='h-4 w-4 md:h-5 md:w-5 text-gold flex-shrink-0'
                            aria-hidden='true'
                          />
                          <span className='font-light text-sm md:text-base'>
                            Slip & Fall Cases
                          </span>
                        </li>
                      </ul>
                      <div className='pt-4'>
                        <p className='text-lg md:text-xl font-playfair font-light text-gold'>
                          No Fee Unless We Win
                        </p>
                        <p className='text-xs md:text-sm text-white/70'>
                          Free initial consultation available
                        </p>
                      </div>
                      <Button
                        className='luxury-button text-gold border-gold hover:text-gold-light mt-4 w-full md:w-auto bg-transparent'
                        variant='outline'
                        size='lg'
                        asChild
                      >
                        <Link href='/contact'>Free Consultation</Link>
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value='family' className='mt-8 md:mt-12'>
                  <div className='grid gap-8 md:gap-12 md:grid-cols-2'>
                    <div className='relative h-[250px] md:h-[300px] lg:h-auto overflow-hidden rounded-sm'>
                      <Image
                        src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/corporate-WYVxJBTWoactLVRqbTdraOrKtuTuRn.png'
                        alt='Family law attorneys at Ralph Nwosu & Co providing compassionate legal guidance'
                        fill
                        loading='lazy'
                        sizes='(max-width: 768px) 100vw, 50vw'
                        className='object-cover'
                      />
                    </div>
                    <div className='space-y-4 md:space-y-6'>
                      <h3 className='text-xl md:text-2xl font-playfair font-light tracking-wide'>
                        Family Law & Estate Planning
                      </h3>
                      <p className='text-white/80 leading-relaxed text-sm md:text-base'>
                        Our family law attorneys understand that family matters
                        require both legal expertise and emotional sensitivity.
                        We provide compassionate guidance through life's most
                        challenging transitions while protecting your family's
                        interests and future.
                      </p>
                      <ul className='space-y-2 md:space-y-3'>
                        <li className='flex items-center gap-3'>
                          <ChevronRight
                            className='h-4 w-4 md:h-5 md:w-5 text-gold flex-shrink-0'
                            aria-hidden='true'
                          />
                          <span className='font-light text-sm md:text-base'>
                            Divorce & Separation
                          </span>
                        </li>
                        <li className='flex items-center gap-3'>
                          <ChevronRight
                            className='h-4 w-4 md:h-5 md:w-5 text-gold flex-shrink-0'
                            aria-hidden='true'
                          />
                          <span className='font-light text-sm md:text-base'>
                            Child Custody & Support
                          </span>
                        </li>
                        <li className='flex items-center gap-3'>
                          <ChevronRight
                            className='h-4 w-4 md:h-5 md:w-5 text-gold flex-shrink-0'
                            aria-hidden='true'
                          />
                          <span className='font-light text-sm md:text-base'>
                            Estate Planning & Wills
                          </span>
                        </li>
                        <li className='flex items-center gap-3'>
                          <ChevronRight
                            className='h-4 w-4 md:h-5 md:w-5 text-gold flex-shrink-0'
                            aria-hidden='true'
                          />
                          <span className='font-light text-sm md:text-base'>
                            Adoption Services
                          </span>
                        </li>
                      </ul>
                      <div className='pt-4'>
                        <p className='text-lg md:text-xl font-playfair font-light text-gold'>
                          Compassionate Guidance
                        </p>
                        <p className='text-xs md:text-sm text-white/70'>
                          Protecting families through difficult times
                        </p>
                      </div>
                      <Button
                        className='luxury-button text-gold border-gold hover:text-gold-light mt-4 w-full md:w-auto bg-transparent'
                        variant='outline'
                        size='lg'
                        asChild
                      >
                        <Link href='/contact'>Schedule Consultation</Link>
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            <div className='text-center mt-8 md:mt-12 lg:mt-16'>
              <Button
                className='luxury-button text-gold border-gold hover:text-gold-light px-6 md:px-8 bg-transparent w-full sm:w-auto'
                variant='outline'
                size='lg'
                asChild
              >
                <Link href='/services'>View All Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Practice Areas Section */}
        <section
          className='py-16 md:py-24 pt-20 md:pt-28'
          aria-labelledby='practice-areas-heading'
        >
          <div className='container px-4'>
            <div className='mx-auto max-w-2xl text-center'>
              <span className='text-gold uppercase tracking-widest text-sm'>
                Our Expertise
              </span>
              <h2
                id='practice-areas-heading'
                className='mt-3 text-2xl md:text-3xl lg:text-4xl font-playfair font-light tracking-wide gold-accent'
              >
                Comprehensive Legal Practice Areas
              </h2>
              <p className='mt-8 md:mt-12 text-muted-foreground leading-relaxed text-sm md:text-base'>
                Our experienced legal team provides expert representation across
                multiple practice areas, ensuring comprehensive legal solutions
                for individuals and businesses.
              </p>
            </div>
            <div className='mt-12 md:mt-16 grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3'>
              <div className='group relative overflow-hidden rounded-sm border border-gold/20 shadow-lg hover:shadow-xl transition-all duration-300'>
                <div className='relative h-[250px] overflow-hidden'>
                  <Image
                    src='/corporate-law.png'
                    alt='Corporate law services at Ralph Nwosu & Co with business legal expertise'
                    fill
                    loading='lazy'
                    sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
                    className='object-cover transition-transform duration-500 group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent'></div>
                </div>
                <div className='absolute bottom-0 left-0 right-0 p-6 md:p-8'>
                  <h3 className='text-xl md:text-2xl font-playfair text-white'>
                    Corporate Law
                  </h3>
                  <p className='mt-2 text-white/80 text-sm md:text-base'>
                    Comprehensive business legal services from formation to
                    complex transactions.
                  </p>
                </div>
              </div>
              <div className='group relative overflow-hidden rounded-sm border border-gold/20 shadow-lg hover:shadow-xl transition-all duration-300'>
                <div className='relative h-[250px] overflow-hidden'>
                  <Image
                    src='/real-estate-law.png'
                    alt='Litigation services at Ralph Nwosu & Co with experienced trial attorneys'
                    fill
                    loading='lazy'
                    sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
                    className='object-cover transition-transform duration-500 group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent'></div>
                </div>
                <div className='absolute bottom-0 left-0 right-0 p-6 md:p-8'>
                  <h3 className='text-xl md:text-2xl font-playfair text-white'>
                    Real Estate Law
                  </h3>
                  <p className='mt-2 text-white/80 text-sm md:text-base'>
                    Expert guidance for residential and commercial property
                    transactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id='testimonials'
          className='py-16 md:py-24 pt-20 md:pt-28 relative'
          aria-labelledby='testimonials-heading'
        >
          <div className='container px-4 z-10 mx-auto'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true }}
              className='flex flex-col items-center justify-center max-w-2xl mx-auto text-center'
            >
              <div className='flex justify-center'>
                <div className='border border-gold/30 py-1 px-4 rounded-lg'>
                  <span className='text-gold uppercase tracking-widest text-sm'>
                    Testimonials
                  </span>
                </div>
              </div>

              <h2
                id='testimonials-heading'
                className='text-2xl md:text-3xl lg:text-4xl font-playfair font-light tracking-wide mt-5'
              >
                Client Success Stories
              </h2>
              <p className='text-center mt-5 text-muted-foreground leading-relaxed text-sm md:text-base'>
                Discover how Ralph Nwosu & Co has helped clients achieve
                successful outcomes across various legal matters with expert
                representation and personalized attention.
              </p>
            </motion.div>

            <div className='flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden'>
              <TestimonialsColumn testimonials={firstColumn} duration={15} />
              <TestimonialsColumn
                testimonials={secondColumn}
                className='hidden md:block'
                duration={19}
              />
              <TestimonialsColumn
                testimonials={thirdColumn}
                className='hidden lg:block'
                duration={17}
              />
            </div>
            <div className='text-center mt-12'>
              <Button
                className='luxury-button text-gold border-gold hover:text-gold-light px-8 bg-transparent'
                variant='outline'
                size='lg'
                asChild
              >
                <Link href='/testimonials'>View All Testimonials</Link>
              </Button>
            </div>
          </div>
        </section>

        <section
          id='contact'
          className='luxury-gradient py-12 md:py-16 lg:py-20 xl:py-24 text-white'
          aria-labelledby='contact-heading'
        >
          <div className='container px-4 md:px-6 lg:px-8'>
            <div className='mx-auto max-w-3xl text-center'>
              <span className='text-gold uppercase tracking-widest text-xs md:text-sm'>
                Contact Us
              </span>
              <h2
                id='contact-heading'
                className='mt-2 md:mt-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-playfair font-light tracking-wide gold-accent leading-tight text-balance'
              >
                Schedule Your Legal Consultation
              </h2>
              <p className='mt-6 md:mt-8 lg:mt-12 text-white/80 leading-relaxed text-sm md:text-base lg:text-lg text-pretty'>
                Contact us today to discuss your legal needs and let our
                experienced attorneys provide the expert guidance and
                representation you deserve.
              </p>
            </div>

            <div className='mt-8 md:mt-12 lg:mt-16 grid gap-6 md:gap-8 lg:gap-12 xl:gap-16 xl:grid-cols-2'>
              {/* Contact Information */}
              <div className='space-y-4 md:space-y-6 lg:space-y-8 order-2 xl:order-1'>
                <div>
                  <h3 className='text-lg md:text-xl lg:text-2xl font-playfair mb-4 md:mb-6'>
                    Get in Touch
                  </h3>
                  <div className='space-y-3 md:space-y-4 lg:space-y-6'>
                    <div className='flex items-start gap-3 md:gap-4'>
                      <div className='flex-shrink-0 w-5 h-5 md:w-6 md:h-6 mt-1'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={1.5}
                          stroke='currentColor'
                          className='w-full h-full text-gold'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className='font-medium text-white text-sm md:text-base'>
                          Phone
                        </h4>
                        <a
                          href='tel:+2348123456789'
                          className='text-white/80 hover:text-gold transition-colors duration-300 text-sm md:text-base'
                        >
                          +234 812 345 6789
                        </a>
                      </div>
                    </div>
                    <div className='flex items-start gap-4'>
                      <div className='flex-shrink-0 w-6 h-6 mt-1'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={1.5}
                          stroke='currentColor'
                          className='w-6 h-6 text-gold'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3'
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className='font-medium text-white'>
                          Emergency Line
                        </h4>
                        <a
                          href='tel:+2348098765432'
                          className='text-white/80 hover:text-gold transition-colors duration-300'
                        >
                          +234 809 876 5432
                        </a>
                      </div>
                    </div>
                    <div className='flex items-start gap-4'>
                      <div className='flex-shrink-0 w-6 h-6 mt-1'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={1.5}
                          stroke='currentColor'
                          className='w-6 h-6 text-gold'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className='font-medium text-white'>Email</h4>
                        <a
                          href='mailto:info@ralphnwosulaw.com'
                          className='text-white/80 hover:text-gold transition-colors duration-300'
                        >
                          info@ralphnwosulaw.com
                        </a>
                      </div>
                    </div>
                    <div className='flex items-start gap-4'>
                      <div className='flex-shrink-0 w-6 h-6 mt-1'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={1.5}
                          stroke='currentColor'
                          className='w-6 h-6 text-gold'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
                          />
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className='font-medium text-white'>Location</h4>
                        <p className='text-white/80'>
                          World bank, Okohia Estate by 7 Comfort medicare Drive
                          Behind Larcade Shopping Centre, New Owerri.
                          <br />
                          Imo State, Nigeria
                        </p>
                      </div>
                    </div>
                    <div className='flex items-start gap-4'>
                      <div className='flex-shrink-0 w-6 h-6 mt-1'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={1.5}
                          stroke='currentColor'
                          className='w-6 h-6 text-gold'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z'
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className='font-medium text-white'>Office Hours</h4>
                        <p className='text-white/80'>
                          Monday - Friday: 8:00 AM - 6:00 PM
                          <br />
                          Emergency: 24/7 Available
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className='mt-8'>
                  <h3 className='text-xl md:text-2xl font-playfair mb-4'>
                    Find Us
                  </h3>
                  <div className='relative h-[300px] rounded-sm overflow-hidden border border-gold/30'>
                    <iframe
                      src='https://www.openstreetmap.org/export/embed.html?bbox=-73.9900%2C40.7500%2C-73.9800%2C40.7600&layer=mapnik&marker=40.7550%2C-73.9850'
                      width='100%'
                      height='100%'
                      style={{
                        border: 0,
                        filter:
                          'sepia(20%) hue-rotate(180deg) saturate(80%) contrast(90%)',
                      }}
                      allowFullScreen
                      loading='lazy'
                      referrerPolicy='no-referrer-when-downgrade'
                      title='Ralph Nwosu & Co Law Firm Location'
                    ></iframe>
                    <div className='absolute inset-0 bg-navy/20 pointer-events-none'></div>
                    <div className='absolute bottom-4 left-4 bg-navy/90 backdrop-blur-sm px-3 py-2 rounded text-white text-sm'>
                      📍 World bank, Okohia Estate by 7 Comfort medicare Drive
                      Behind Larcade Shopping Centre, New Owerri.
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card className='border-gold/30 bg-navy/95 backdrop-blur-sm'>
                  <CardContent className='p-6 md:p-8'>
                    <h3 className='text-xl font-playfair text-white mb-6'>
                      Schedule Your Consultation
                    </h3>
                    <form
                      className='space-y-4'
                      onSubmit={(e) => {
                        e.preventDefault();
                        submitToWhatsApp();
                      }}
                    >
                      <div>
                        <label
                          htmlFor='name'
                          className='block text-sm font-medium text-white mb-2'
                        >
                          Full Name
                        </label>
                        <input
                          type='text'
                          id='name'
                          className='luxury-input w-full bg-transparent text-white text-sm md:text-base'
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor='email'
                          className='block text-sm font-medium text-white mb-2'
                        >
                          Email Address
                        </label>
                        <input
                          type='email'
                          id='email'
                          className='luxury-input w-full bg-transparent text-white text-sm md:text-base'
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor='phone'
                          className='block text-sm font-medium text-white mb-2'
                        >
                          Phone Number
                        </label>
                        <input
                          type='tel'
                          id='phone'
                          className='luxury-input w-full bg-transparent text-white text-sm md:text-base'
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor='date'
                          className='block text-sm font-medium text-white mb-2'
                        >
                          Preferred Date
                        </label>
                        <input
                          type='date'
                          id='date'
                          className='luxury-input w-full bg-transparent text-white text-sm md:text-base'
                          placeholder='DD/MM/YYYY'
                        />
                      </div>
                      <div>
                        <label
                          htmlFor='service'
                          className='block text-sm font-medium text-white mb-2'
                        >
                          Legal Service Needed
                        </label>
                        <select
                          id='service'
                          className='luxury-select w-full bg-transparent text-white text-sm md:text-base'
                        >
                          <option>Corporate Law</option>
                          <option>Personal Injury</option>
                          <option>Family Law</option>
                          <option>Estate Planning</option>
                          <option>Litigation</option>
                          <option>Real Estate Law</option>
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor='requests'
                          className='block text-sm font-medium text-white mb-2'
                        >
                          Case Details
                        </label>
                        <textarea
                          id='requests'
                          className='luxury-textarea min-h-[100px] md:min-h-[120px] w-full bg-transparent text-white text-sm md:text-base'
                        ></textarea>
                      </div>
                      <Button
                        className='w-full bg-gold hover:bg-gold-light text-navy'
                        size='lg'
                      >
                        Schedule Consultation
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className='text-center mt-12 md:mt-16'>
              <Button
                className='luxury-button text-gold border-gold hover:text-gold-light px-8 bg-transparent'
                variant='outline'
                size='lg'
                asChild
              >
                <Link href='/contact'>Visit Our Contact Page</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className='py-12 md:py-16 border-t border-gold/30 bg-cream'>
        <div className='container px-4'>
          <div className='flex flex-col items-center gap-6 text-center'>
            <div className='flex flex-col items-center'>
              <div className='relative h-12 w-24 md:h-16 md:w-32 mb-3'>
                <Image
                  src='/images/sterling-logo.png'
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
    </div>
  );
}
