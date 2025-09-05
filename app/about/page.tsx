/** @format */

'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ResponsiveVideo } from '@/components/ui/responsive-video';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export default function AboutPage() {
  return (
    <div className='flex min-h-screen flex-col font-montserrat'>
      <Navigation />
      <main className='flex-1'>
        {/* Hero Section */}
        <section className='relative h-[50vh] md:h-[60vh] w-full bg-gradient-to-r from-navy to-navy-light'>
          <div className='absolute inset-0 bg-black/40' />
          <div className='container relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4'>
            <h1 className='max-w-4xl text-3xl md:text-4xl lg:text-5xl font-playfair font-light tracking-wider'>
              About{' '}
              <span className='italic font-normal text-gold'>
                Ralph Nwosu & Co
              </span>
            </h1>
            <div className='mt-4 md:mt-6 h-px w-16 md:w-24 bg-gold'></div>
            <p className='mt-6 md:mt-8 max-w-2xl text-base md:text-lg font-light tracking-wide'>
              Excellence Redefined in Legal Representation
            </p>
          </div>
        </section>

        {/* About Content */}
        <section className='py-16 md:py-24'>
          <div className='container px-4'>
            <div className='flex flex-col gap-12 lg:gap-16 lg:flex-row'>
              <div className='flex-1 space-y-6 md:space-y-8'>
                <div>
                  <span className='text-gold uppercase tracking-widest text-sm'>
                    Our Story
                  </span>
                  <h2 className='mt-3 text-2xl md:text-3xl lg:text-4xl font-playfair font-light tracking-wide gold-accent gold-accent-left'>
                    Excellence Redefined in Legal Representation
                  </h2>
                </div>
                <p className='text-muted-foreground leading-relaxed text-sm md:text-base'>
                  Ralph Nwosu & Co is a premier law firm dedicated to providing
                  exceptional legal representation with meticulous attention to
                  detail and an unwavering commitment to our clients' success.
                  We offer a perfect blend of experience, innovation, and
                  personalized service for all your legal needs.
                </p>
                <p className='text-muted-foreground leading-relaxed text-sm md:text-base'>
                  Founded on the principles of integrity, excellence, and
                  client-focused service, our firm has grown to become one of
                  the most trusted legal practices in Owerri, Imo State. We
                  combine traditional legal expertise with modern approaches to
                  deliver comprehensive solutions that meet our clients'
                  evolving needs.
                </p>

                <div className='grid gap-4 md:gap-5 sm:grid-cols-2'>
                  <div className='flex items-center gap-3'>
                    <ChevronRight className='h-4 w-4 md:h-5 md:w-5 text-gold flex-shrink-0' />
                    <span className='font-light text-sm md:text-base'>
                      25+ Years Combined Experience
                    </span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <ChevronRight className='h-4 w-4 md:h-5 md:w-5 text-gold flex-shrink-0' />
                    <span className='font-light text-sm md:text-base'>
                      Multiple Practice Areas
                    </span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <ChevronRight className='h-4 w-4 md:h-5 md:w-5 text-gold flex-shrink-0' />
                    <span className='font-light text-sm md:text-base'>
                      24/7 Emergency Consultation
                    </span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <ChevronRight className='h-4 w-4 md:h-5 md:w-5 text-gold flex-shrink-0' />
                    <span className='font-light text-sm md:text-base'>
                      Personalized Legal Strategies
                    </span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <ChevronRight className='h-4 w-4 md:h-5 md:w-5 text-gold flex-shrink-0' />
                    <span className='font-light text-sm md:text-base'>
                      Expert Legal Team
                    </span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <ChevronRight className='h-4 w-4 md:h-5 md:w-5 text-gold flex-shrink-0' />
                    <span className='font-light text-sm md:text-base'>
                      Proven Track Record
                    </span>
                  </div>
                </div>
              </div>
              <div className='flex-1'>
                <ResponsiveVideo
                  src='https://www.dropbox.com/scl/fi/vxtngoljgqdpap6uwzy33/WhatsApp-Video-2025-04-05-at-12.12.02.mp4?rlkey=toqb0wazdvomlzfx7x7xlmnm8&st=x1upeqpw&dl=1'
                  poster='/images/hero/image4.jpg'
                  className='border border-gold/20 shadow-lg'
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className='luxury-gradient py-16 md:py-24 text-white'>
          <div className='container px-4'>
            <div className='grid gap-8 md:gap-12 lg:grid-cols-2'>
              <div className='space-y-6'>
                <h3 className='text-2xl md:text-3xl font-playfair font-light text-gold'>
                  Our Mission
                </h3>
                <p className='text-white/80 leading-relaxed text-sm md:text-base'>
                  To provide exceptional legal services that exceed our clients'
                  expectations while maintaining the highest standards of
                  professional integrity, ethical conduct, and legal excellence.
                  We are committed to protecting our clients' interests and
                  achieving favorable outcomes through strategic legal
                  representation.
                </p>
              </div>
              <div className='space-y-6'>
                <h3 className='text-2xl md:text-3xl font-playfair font-light text-gold'>
                  Our Vision
                </h3>
                <p className='text-white/80 leading-relaxed text-sm md:text-base'>
                  To be the premier law firm in Nigeria, recognized for our
                  unwavering commitment to client success, innovative legal
                  solutions, and positive impact on the communities we serve. We
                  strive to set the standard for legal excellence and
                  professional service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className='py-16 md:py-24'>
          <div className='container px-4'>
            <div className='mx-auto max-w-2xl text-center mb-12 md:mb-16'>
              <span className='text-gold uppercase tracking-widest text-sm'>
                Our Team
              </span>
              <h2 className='mt-3 text-2xl md:text-3xl lg:text-4xl font-playfair font-light tracking-wide gold-accent'>
                Experienced Legal Professionals
              </h2>
              <p className='mt-8 text-muted-foreground leading-relaxed text-sm md:text-base'>
                Our team of dedicated attorneys brings decades of combined
                experience across multiple practice areas.
              </p>
            </div>

            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
              <div className='text-center space-y-4'>
                <div className='relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-gold/20'>
                  <Image
                    src='/professional-lawyer-portrait.png'
                    alt='Ralph Nwosu - Senior Partner'
                    fill
                    className='object-cover'
                  />
                </div>
                <div>
                  <h3 className='text-xl font-playfair'>Ralph Nwosu</h3>
                  <p className='text-gold text-sm'>Senior Partner</p>
                  <p className='text-muted-foreground text-sm mt-2'>
                    Specializing in Corporate Law and Business Litigation with
                    over 15 years of experience.
                  </p>
                </div>
              </div>

              <div className='text-center space-y-4'>
                <div className='relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-gold/20'>
                  <Image
                    src='/professional-female-lawyer.png'
                    alt='Associate Attorney'
                    fill
                    className='object-cover'
                  />
                </div>
                <div>
                  <h3 className='text-xl font-playfair'>Dr. Sarah Okafor</h3>
                  <p className='text-gold text-sm'>Associate Partner</p>
                  <p className='text-muted-foreground text-sm mt-2'>
                    Expert in Family Law and Estate Planning with a focus on
                    client advocacy and support.
                  </p>
                </div>
              </div>

              <div className='text-center space-y-4'>
                <div className='relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-gold/20'>
                  <Image
                    src='/professional-male-lawyer.png'
                    alt='Associate Attorney'
                    fill
                    className='object-cover'
                  />
                </div>
                <div>
                  <h3 className='text-xl font-playfair'>
                    Barrister Michael Eze
                  </h3>
                  <p className='text-gold text-sm'>Senior Associate</p>
                  <p className='text-muted-foreground text-sm mt-2'>
                    Specializing in Personal Injury and Criminal Defense with
                    exceptional courtroom experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-16 md:py-24 bg-cream'>
          <div className='container px-4 text-center'>
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-playfair font-light text-navy tracking-wide mb-6'>
              Ready to Work with Us?
            </h2>
            <p className='text-muted-foreground mb-8 max-w-2xl mx-auto'>
              Contact us today to schedule a consultation and discover how our
              experienced legal team can help you achieve your goals.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button
                className='bg-gold hover:bg-gold-light text-navy px-8'
                size='lg'
                asChild
              >
                <Link href='/contact'>Schedule Consultation</Link>
              </Button>
              <Button
                className='luxury-button text-gold border-gold hover:text-gold-light px-8 bg-transparent'
                variant='outline'
                size='lg'
                asChild
              >
                <Link href='/services'>View Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
