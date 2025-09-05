/** @format */

'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { TestimonialsColumn } from '@/components/ui/testimonials-columns';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

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
  {
    text: 'The criminal defense team at Ralph Nwosu & Co provided exceptional representation during a challenging time. Their dedication and expertise resulted in the best possible outcome for my case.',
    image: '/placeholder.svg?height=40&width=40',
    name: 'Marcus Johnson',
    location: 'Criminal Defense Client',
  },
  {
    text: "Ralph Nwosu & Co's immigration lawyers helped our family navigate the complex visa process with patience and expertise. We're grateful for their professional guidance and support.",
    image: '/placeholder.svg?height=40&width=40',
    name: 'Amara & Kelechi Okafor',
    location: 'Immigration Law Clients',
  },
  {
    text: 'Their employment law services were crucial when I faced workplace discrimination. Ralph Nwosu & Co fought for my rights and achieved a settlement that exceeded my expectations.',
    image: '/placeholder.svg?height=40&width=40',
    name: 'Grace Adebayo',
    location: 'Employment Law Client',
  },
];

const firstColumn = testimonials.slice(0, 4);
const secondColumn = testimonials.slice(4, 8);
const thirdColumn = testimonials.slice(8, 12);

export default function TestimonialsPage() {
  return (
    <div className='flex min-h-screen flex-col font-montserrat'>
      <Navigation />
      <main className='flex-1'>
        {/* Hero Section */}
        <section className='relative h-[50vh] md:h-[60vh] w-full bg-gradient-to-r from-navy to-navy-light'>
          <div className='absolute inset-0 bg-black/40' />
          <div className='container relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4'>
            <h1 className='max-w-4xl text-3xl md:text-4xl lg:text-5xl font-playfair font-light tracking-wider'>
              Client{' '}
              <span className='italic font-normal text-gold'>Testimonials</span>
            </h1>
            <div className='mt-4 md:mt-6 h-px w-16 md:w-24 bg-gold'></div>
            <p className='mt-6 md:mt-8 max-w-2xl text-base md:text-lg font-light tracking-wide'>
              Success Stories from Our Valued Clients
            </p>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className='py-16 md:py-24'>
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
              className='flex flex-col items-center justify-center max-w-2xl mx-auto text-center mb-12 md:mb-16'
            >
              <div className='flex justify-center'>
                <div className='border border-gold/30 py-1 px-4 rounded-lg'>
                  <span className='text-gold uppercase tracking-widest text-sm'>
                    Client Success Stories
                  </span>
                </div>
              </div>

              <h2 className='text-2xl md:text-3xl lg:text-4xl font-playfair font-light tracking-wide mt-5'>
                What Our Clients Say
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
          </div>
        </section>

        {/* Featured Testimonials */}
        <section className='luxury-gradient py-16 md:py-24 text-white'>
          <div className='container px-4'>
            <div className='mx-auto max-w-2xl text-center mb-12 md:mb-16'>
              <span className='text-gold uppercase tracking-widest text-sm'>
                Featured Stories
              </span>
              <h2 className='mt-3 text-2xl md:text-3xl lg:text-4xl font-playfair font-light tracking-wide gold-accent'>
                Exceptional Legal Outcomes
              </h2>
            </div>

            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
              <Card className='border-gold/30 bg-navy/95 backdrop-blur-sm'>
                <CardContent className='p-6 md:p-8'>
                  <div className='flex items-center gap-4 mb-6'>
                    <div className='relative w-16 h-16 rounded-full overflow-hidden border-2 border-gold/30'>
                      <Image
                        src='/placeholder.svg?height=64&width=64'
                        alt='Client testimonial'
                        fill
                        className='object-cover'
                      />
                    </div>
                    <div>
                      <h3 className='text-lg font-playfair text-white'>
                        Corporate Success
                      </h3>
                      <p className='text-gold text-sm'>Business Law</p>
                    </div>
                  </div>
                  <blockquote className='text-white/80 text-sm leading-relaxed mb-4'>
                    "Ralph Nwosu & Co guided our company through a complex
                    acquisition that seemed impossible. Their expertise in
                    corporate law and strategic thinking made all the
                    difference. We couldn't have asked for better
                    representation."
                  </blockquote>
                  <footer className='text-white/60 text-xs'>
                    — Tech Startup CEO, Lagos
                  </footer>
                </CardContent>
              </Card>

              <Card className='border-gold/30 bg-navy/95 backdrop-blur-sm'>
                <CardContent className='p-6 md:p-8'>
                  <div className='flex items-center gap-4 mb-6'>
                    <div className='relative w-16 h-16 rounded-full overflow-hidden border-2 border-gold/30'>
                      <Image
                        src='/placeholder.svg?height=64&width=64'
                        alt='Client testimonial'
                        fill
                        className='object-cover'
                      />
                    </div>
                    <div>
                      <h3 className='text-lg font-playfair text-white'>
                        Personal Victory
                      </h3>
                      <p className='text-gold text-sm'>Personal Injury</p>
                    </div>
                  </div>
                  <blockquote className='text-white/80 text-sm leading-relaxed mb-4'>
                    "After my accident, I felt overwhelmed and didn't know where
                    to turn. Ralph Nwosu & Co not only fought for my rights but
                    also provided emotional support throughout the entire
                    process. They truly care about their clients."
                  </blockquote>
                  <footer className='text-white/60 text-xs'>
                    — Accident Victim, Owerri
                  </footer>
                </CardContent>
              </Card>

              <Card className='border-gold/30 bg-navy/95 backdrop-blur-sm'>
                <CardContent className='p-6 md:p-8'>
                  <div className='flex items-center gap-4 mb-6'>
                    <div className='relative w-16 h-16 rounded-full overflow-hidden border-2 border-gold/30'>
                      <Image
                        src='/placeholder.svg?height=64&width=64'
                        alt='Client testimonial'
                        fill
                        className='object-cover'
                      />
                    </div>
                    <div>
                      <h3 className='text-lg font-playfair text-white'>
                        Family Protection
                      </h3>
                      <p className='text-gold text-sm'>Family Law</p>
                    </div>
                  </div>
                  <blockquote className='text-white/80 text-sm leading-relaxed mb-4'>
                    "During our divorce proceedings, Ralph Nwosu & Co handled
                    everything with such professionalism and sensitivity. They
                    protected our children's interests while ensuring a fair
                    outcome for everyone involved."
                  </blockquote>
                  <footer className='text-white/60 text-xs'>
                    — Family Law Client, Abuja
                  </footer>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className='py-16 md:py-24 bg-cream'>
          <div className='container px-4'>
            <div className='mx-auto max-w-2xl text-center mb-12 md:mb-16'>
              <span className='text-gold uppercase tracking-widest text-sm'>
                Our Track Record
              </span>
              <h2 className='mt-3 text-2xl md:text-3xl lg:text-4xl font-playfair font-light tracking-wide text-navy'>
                Proven Results
              </h2>
            </div>

            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
              <div className='text-center'>
                <div className='text-4xl md:text-5xl font-playfair font-light text-gold mb-2'>
                  500+
                </div>
                <p className='text-muted-foreground text-sm'>Cases Won</p>
              </div>
              <div className='text-center'>
                <div className='text-4xl md:text-5xl font-playfair font-light text-gold mb-2'>
                  25+
                </div>
                <p className='text-muted-foreground text-sm'>
                  Years Experience
                </p>
              </div>
              <div className='text-center'>
                <div className='text-4xl md:text-5xl font-playfair font-light text-gold mb-2'>
                  98%
                </div>
                <p className='text-muted-foreground text-sm'>
                  Client Satisfaction
                </p>
              </div>
              <div className='text-center'>
                <div className='text-4xl md:text-5xl font-playfair font-light text-gold mb-2'>
                  24/7
                </div>
                <p className='text-muted-foreground text-sm'>
                  Emergency Support
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-16 md:py-24'>
          <div className='container px-4 text-center'>
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-playfair font-light tracking-wide mb-6'>
              Ready to Join Our Success Stories?
            </h2>
            <p className='text-muted-foreground mb-8 max-w-2xl mx-auto'>
              Contact Ralph Nwosu & Co today and discover how our experienced
              legal team can help you achieve the successful outcome you
              deserve.
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
