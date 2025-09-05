/** @format */

'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export default function ServicesPage() {
  return (
    <div className='flex min-h-screen flex-col font-montserrat'>
      <Navigation />
      <main className='flex-1'>
        {/* Hero Section */}
        <section className='relative h-[50vh] md:h-[60vh] w-full bg-gradient-to-r from-navy to-navy-light'>
          <div className='absolute inset-0 bg-black/40' />
          <div className='container relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4'>
            <h1 className='max-w-4xl text-3xl md:text-4xl lg:text-5xl font-playfair font-light tracking-wider'>
              Legal{' '}
              <span className='italic font-normal text-gold'>Services</span>
            </h1>
            <div className='mt-4 md:mt-6 h-px w-16 md:w-24 bg-gold'></div>
            <p className='mt-6 md:mt-8 max-w-2xl text-base md:text-lg font-light tracking-wide'>
              Comprehensive Legal Solutions for Every Need
            </p>
          </div>
        </section>

        {/* Services Overview */}
        <section className='py-16 md:py-24'>
          <div className='container px-4'>
            <div className='mx-auto max-w-2xl text-center mb-12 md:mb-16'>
              <span className='text-gold uppercase tracking-widest text-sm'>
                Our Expertise
              </span>
              <h2 className='mt-3 text-2xl md:text-3xl lg:text-4xl font-playfair font-light tracking-wide gold-accent'>
                Professional Legal Services
              </h2>
              <p className='mt-8 text-muted-foreground leading-relaxed text-sm md:text-base'>
                Ralph Nwosu & Co provides expert legal representation across
                multiple practice areas, ensuring comprehensive solutions for
                individuals and businesses throughout Nigeria.
              </p>
            </div>

            {/* Services Tabs */}
            <div className='mt-12 md:mt-16'>
              <Tabs defaultValue='corporate' className='w-full'>
                <TabsList className='mx-auto grid w-full max-w-lg md:max-w-xl lg:max-w-2xl grid-cols-2 md:grid-cols-3 bg-transparent border border-gold/30 h-auto gap-2 md:gap-3 p-2'>
                  <TabsTrigger
                    value='corporate'
                    className='data-[state=active]:bg-gold data-[state=active]:text-navy text-foreground text-xs md:text-sm lg:text-base py-3 px-2 md:px-4 rounded-sm transition-all duration-300'
                  >
                    Corporate Law
                  </TabsTrigger>
                  <TabsTrigger
                    value='personal'
                    className='data-[state=active]:bg-gold data-[state=active]:text-navy text-foreground text-xs md:text-sm lg:text-base py-3 px-2 md:px-4 rounded-sm transition-all duration-300'
                  >
                    Personal Injury
                  </TabsTrigger>
                  <TabsTrigger
                    value='family'
                    className='data-[state=active]:bg-gold data-[state=active]:text-navy text-foreground text-xs md:text-sm lg:text-base py-3 px-2 md:px-4 rounded-sm transition-all duration-300'
                  >
                    Family Law
                  </TabsTrigger>
                </TabsList>

                <TabsContent value='corporate' className='mt-8 md:mt-12'>
                  <div className='grid gap-8 md:gap-12 md:grid-cols-2'>
                    <div className='relative h-[250px] md:h-[300px] lg:h-auto overflow-hidden rounded-sm'>
                      <Image
                        src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunset-XXXUGZQvEbSh72EWxveQR8aInPcqYz.png'
                        alt='Corporate law team at Ralph Nwosu & Co providing business legal services'
                        fill
                        loading='lazy'
                        sizes='(max-width: 768px) 100vw, 50vw'
                        className='object-cover'
                      />
                    </div>
                    <div className='space-y-4 md:space-y-6'>
                      <h3 className='text-xl md:text-2xl font-playfair font-light tracking-wide'>
                        Corporate Law & Business Services
                      </h3>
                      <p className='text-muted-foreground leading-relaxed text-sm md:text-base'>
                        Our corporate law team provides comprehensive legal
                        services for businesses of all sizes. From startup
                        formation to complex mergers and acquisitions, we guide
                        companies through every stage of their legal journey
                        with strategic expertise and attention to detail.
                      </p>
                      <ul className='space-y-2 md:space-y-3'>
                        <li className='flex items-center gap-3'>
                          <ChevronRight className='h-4 w-4 md:h-5 md:w-5 text-gold flex-shrink-0' />
                          <span className='font-light text-sm md:text-base'>
                            Business Formation & Structure
                          </span>
                        </li>
                        <li className='flex items-center gap-3'>
                          <ChevronRight className='h-4 w-4 md:h-5 md:w-5 text-gold flex-shrink-0' />
                          <span className='font-light text-sm md:text-base'>
                            Contract Negotiation & Review
                          </span>
                        </li>
                        <li className='flex items-center gap-3'>
                          <ChevronRight className='h-4 w-4 md:h-5 md:w-5 text-gold flex-shrink-0' />
                          <span className='font-light text-sm md:text-base'>
                            Mergers & Acquisitions
                          </span>
                        </li>
                        <li className='flex items-center gap-3'>
                          <ChevronRight className='h-4 w-4 md:h-5 md:w-5 text-gold flex-shrink-0' />
                          <span className='font-light text-sm md:text-base'>
                            Regulatory Compliance
                          </span>
                        </li>
                      </ul>
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
                      <p className='text-muted-foreground leading-relaxed text-sm md:text-base'>
                        When you've been injured due to someone else's
                        negligence, our personal injury attorneys fight
                        tirelessly for your rights. We handle all aspects of
                        your case while you focus on recovery, ensuring you
                        receive the compensation you deserve.
                      </p>
                      <ul className='space-y-2 md:space-y-3'>
                        <li className='flex items-center gap-3'>
                          <ChevronRight className='h-4 w-4 md:h-5 md:w-5 text-gold flex-shrink-0' />
                          <span className='font-light text-sm md:text-base'>
                            Motor Vehicle Accidents
                          </span>
                        </li>
                        <li className='flex items-center gap-3'>
                          <ChevronRight className='h-4 w-4 md:h-5 md:w-5 text-gold flex-shrink-0' />
                          <span className='font-light text-sm md:text-base'>
                            Workplace Injuries
                          </span>
                        </li>
                        <li className='flex items-center gap-3'>
                          <ChevronRight className='h-4 w-4 md:h-5 md:w-5 text-gold flex-shrink-0' />
                          <span className='font-light text-sm md:text-base'>
                            Medical Malpractice
                          </span>
                        </li>
                        <li className='flex items-center gap-3'>
                          <ChevronRight className='h-4 w-4 md:h-5 md:w-5 text-gold flex-shrink-0' />
                          <span className='font-light text-sm md:text-base'>
                            Slip & Fall Cases
                          </span>
                        </li>
                      </ul>
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
                      <p className='text-muted-foreground leading-relaxed text-sm md:text-base'>
                        Our family law attorneys understand that family matters
                        require both legal expertise and emotional sensitivity.
                        We provide compassionate guidance through life's most
                        challenging transitions while protecting your family's
                        interests and future.
                      </p>
                      <ul className='space-y-2 md:space-y-3'>
                        <li className='flex items-center gap-3'>
                          <ChevronRight className='h-4 w-4 md:h-5 md:w-5 text-gold flex-shrink-0' />
                          <span className='font-light text-sm md:text-base'>
                            Divorce & Separation
                          </span>
                        </li>
                        <li className='flex items-center gap-3'>
                          <ChevronRight className='h-4 w-4 md:h-5 md:w-5 text-gold flex-shrink-0' />
                          <span className='font-light text-sm md:text-base'>
                            Child Custody & Support
                          </span>
                        </li>
                        <li className='flex items-center gap-3'>
                          <ChevronRight className='h-4 w-4 md:h-5 md:w-5 text-gold flex-shrink-0' />
                          <span className='font-light text-sm md:text-base'>
                            Estate Planning & Wills
                          </span>
                        </li>
                        <li className='flex items-center gap-3'>
                          <ChevronRight className='h-4 w-4 md:h-5 md:w-5 text-gold flex-shrink-0' />
                          <span className='font-light text-sm md:text-base'>
                            Adoption Services
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Additional Practice Areas */}
        <section className='luxury-gradient py-16 md:py-24 text-white'>
          <div className='container px-4'>
            <div className='mx-auto max-w-2xl text-center mb-12 md:mb-16'>
              <span className='text-gold uppercase tracking-widest text-sm'>
                Additional Services
              </span>
              <h2 className='mt-3 text-2xl md:text-3xl lg:text-4xl font-playfair font-light tracking-wide gold-accent'>
                Comprehensive Legal Practice Areas
              </h2>
            </div>

            <div className='grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3'>
              <Card className='border-gold/30 bg-navy/95 backdrop-blur-sm'>
                <CardContent className='p-6'>
                  <h3 className='text-xl font-playfair text-white mb-4'>
                    Real Estate Law
                  </h3>
                  <p className='text-white/80 text-sm mb-4'>
                    Expert guidance for residential and commercial property
                    transactions, including purchases, sales, leases, and
                    property disputes.
                  </p>
                  <ul className='space-y-2'>
                    <li className='flex items-center gap-2 text-sm text-white/70'>
                      <ChevronRight className='h-3 w-3 text-gold' />
                      Property Transactions
                    </li>
                    <li className='flex items-center gap-2 text-sm text-white/70'>
                      <ChevronRight className='h-3 w-3 text-gold' />
                      Title Disputes
                    </li>
                    <li className='flex items-center gap-2 text-sm text-white/70'>
                      <ChevronRight className='h-3 w-3 text-gold' />
                      Lease Agreements
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className='border-gold/30 bg-navy/95 backdrop-blur-sm'>
                <CardContent className='p-6'>
                  <h3 className='text-xl font-playfair text-white mb-4'>
                    Criminal Defense
                  </h3>
                  <p className='text-white/80 text-sm mb-4'>
                    Aggressive defense representation for criminal charges,
                    protecting your rights and freedom with experienced
                    courtroom advocacy.
                  </p>
                  <ul className='space-y-2'>
                    <li className='flex items-center gap-2 text-sm text-white/70'>
                      <ChevronRight className='h-3 w-3 text-gold' />
                      Felony Defense
                    </li>
                    <li className='flex items-center gap-2 text-sm text-white/70'>
                      <ChevronRight className='h-3 w-3 text-gold' />
                      Misdemeanor Cases
                    </li>
                    <li className='flex items-center gap-2 text-sm text-white/70'>
                      <ChevronRight className='h-3 w-3 text-gold' />
                      Appeals
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className='border-gold/30 bg-navy/95 backdrop-blur-sm'>
                <CardContent className='p-6'>
                  <h3 className='text-xl font-playfair text-white mb-4'>
                    Immigration Law
                  </h3>
                  <p className='text-white/80 text-sm mb-4'>
                    Comprehensive immigration services including visa
                    applications, citizenship processes, and deportation
                    defense.
                  </p>
                  <ul className='space-y-2'>
                    <li className='flex items-center gap-2 text-sm text-white/70'>
                      <ChevronRight className='h-3 w-3 text-gold' />
                      Visa Applications
                    </li>
                    <li className='flex items-center gap-2 text-sm text-white/70'>
                      <ChevronRight className='h-3 w-3 text-gold' />
                      Citizenship Process
                    </li>
                    <li className='flex items-center gap-2 text-sm text-white/70'>
                      <ChevronRight className='h-3 w-3 text-gold' />
                      Deportation Defense
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className='border-gold/30 bg-navy/95 backdrop-blur-sm'>
                <CardContent className='p-6'>
                  <h3 className='text-xl font-playfair text-white mb-4'>
                    Employment Law
                  </h3>
                  <p className='text-white/80 text-sm mb-4'>
                    Protecting employee rights and helping employers navigate
                    complex workplace legal issues with expert guidance.
                  </p>
                  <ul className='space-y-2'>
                    <li className='flex items-center gap-2 text-sm text-white/70'>
                      <ChevronRight className='h-3 w-3 text-gold' />
                      Wrongful Termination
                    </li>
                    <li className='flex items-center gap-2 text-sm text-white/70'>
                      <ChevronRight className='h-3 w-3 text-gold' />
                      Discrimination Claims
                    </li>
                    <li className='flex items-center gap-2 text-sm text-white/70'>
                      <ChevronRight className='h-3 w-3 text-gold' />
                      Workplace Harassment
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className='border-gold/30 bg-navy/95 backdrop-blur-sm'>
                <CardContent className='p-6'>
                  <h3 className='text-xl font-playfair text-white mb-4'>
                    Intellectual Property
                  </h3>
                  <p className='text-white/80 text-sm mb-4'>
                    Protecting your creative works, inventions, and business
                    assets through comprehensive IP legal services.
                  </p>
                  <ul className='space-y-2'>
                    <li className='flex items-center gap-2 text-sm text-white/70'>
                      <ChevronRight className='h-3 w-3 text-gold' />
                      Patent Applications
                    </li>
                    <li className='flex items-center gap-2 text-sm text-white/70'>
                      <ChevronRight className='h-3 w-3 text-gold' />
                      Trademark Registration
                    </li>
                    <li className='flex items-center gap-2 text-sm text-white/70'>
                      <ChevronRight className='h-3 w-3 text-gold' />
                      Copyright Protection
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className='border-gold/30 bg-navy/95 backdrop-blur-sm'>
                <CardContent className='p-6'>
                  <h3 className='text-xl font-playfair text-white mb-4'>
                    Tax Law
                  </h3>
                  <p className='text-white/80 text-sm mb-4'>
                    Expert tax legal services including dispute resolution,
                    compliance guidance, and strategic tax planning.
                  </p>
                  <ul className='space-y-2'>
                    <li className='flex items-center gap-2 text-sm text-white/70'>
                      <ChevronRight className='h-3 w-3 text-gold' />
                      Tax Disputes
                    </li>
                    <li className='flex items-center gap-2 text-sm text-white/70'>
                      <ChevronRight className='h-3 w-3 text-gold' />
                      Compliance Issues
                    </li>
                    <li className='flex items-center gap-2 text-sm text-white/70'>
                      <ChevronRight className='h-3 w-3 text-gold' />
                      Tax Planning
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-16 md:py-24 bg-cream'>
          <div className='container px-4 text-center'>
            <h2 className='text-2xl md:text-3xl text-navy lg:text-4xl font-playfair font-light tracking-wide mb-6'>
              Need Legal Assistance?
            </h2>
            <p className='text-muted-foreground mb-8 max-w-2xl mx-auto'>
              Contact Ralph Nwosu & Co today to discuss your legal needs and
              discover how our experienced attorneys can provide the expert
              representation you deserve.
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
                <a href='tel:+2348123456789'>Call Now</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
