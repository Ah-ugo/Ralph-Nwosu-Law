/** @format */

'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export default function ContactPage() {
  function submitToWhatsApp() {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const date = (document.getElementById('date') as HTMLInputElement).value;
    const selectedService = (
      document.getElementById('service') as HTMLSelectElement
    ).value;
    const requests = (
      document.getElementById('requests') as HTMLTextAreaElement
    ).value;

    const message = `*New Legal Consultation Request*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Phone:* ${phone}%0A*Preferred Date:* ${date}%0A*Legal Service:* ${selectedService}%0A*Case Details:* ${requests}`;
    const whatsappURL = `https://api.whatsapp.com/send?phone=2348123456789&text=${message}`;

    window.open(whatsappURL, '_blank');
  }

  return (
    <div className='flex min-h-screen flex-col font-montserrat'>
      {/* Navigation Component */}
      <Navigation />
      <main className='flex-1'>
        {/* Hero Section */}
        <section className='relative h-[50vh] md:h-[60vh] w-full bg-gradient-to-r from-navy to-navy-light'>
          <div className='absolute inset-0 bg-black/40' />
          <div className='container relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4'>
            <h1 className='max-w-4xl text-3xl md:text-4xl lg:text-5xl font-playfair font-light tracking-wider'>
              Contact{' '}
              <span className='italic font-normal text-gold'>
                Ralph Nwosu & Co
              </span>
            </h1>
            <div className='mt-4 md:mt-6 h-px w-16 md:w-24 bg-gold'></div>
            <p className='mt-6 md:mt-8 max-w-2xl text-base md:text-lg font-light tracking-wide'>
              Schedule Your Legal Consultation Today
            </p>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className='py-16 md:py-24'>
          <div className='container px-4'>
            <div className='mx-auto max-w-2xl text-center mb-12 md:mb-16'>
              <span className='text-gold uppercase tracking-widest text-sm'>
                Get In Touch
              </span>
              <h2 className='mt-3 text-2xl md:text-3xl lg:text-4xl font-playfair font-light tracking-wide gold-accent'>
                We're Here to Help
              </h2>
              <p className='mt-8 text-muted-foreground leading-relaxed text-sm md:text-base'>
                Contact us today to discuss your legal needs and let our
                experienced attorneys provide the expert guidance and
                representation you deserve.
              </p>
            </div>

            <div className='grid gap-8 lg:gap-12 lg:grid-cols-2'>
              {/* Contact Information */}
              <div className='space-y-6 md:space-y-8'>
                <div>
                  <h3 className='text-xl md:text-2xl font-playfair mb-6'>
                    Contact Information
                  </h3>
                  <div className='space-y-4 md:space-y-6'>
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
                            d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className='font-medium'>Phone</h4>
                        <a
                          href='tel:+2348123456789'
                          className='text-muted-foreground hover:text-gold transition-colors duration-300'
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
                        <h4 className='font-medium'>Emergency Line</h4>
                        <a
                          href='tel:+2348098765432'
                          className='text-muted-foreground hover:text-gold transition-colors duration-300'
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
                        <h4 className='font-medium'>Email</h4>
                        <a
                          href='mailto:info@ralphnwosulaw.com'
                          className='text-muted-foreground hover:text-gold transition-colors duration-300'
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
                        <h4 className='font-medium'>Location</h4>
                        <p className='text-muted-foreground'>
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
                        <h4 className='font-medium'>Office Hours</h4>
                        <p className='text-muted-foreground'>
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
                      src='https://www.openstreetmap.org/export/embed.html?bbox=7.0200%2C5.4800%2C7.0400%2C5.5000&layer=mapnik&marker=5.4900%2C7.0300'
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
                <Card className='border-gold/30 bg-background shadow-lg'>
                  <CardContent className='p-6 md:p-8'>
                    <h3 className='text-xl font-playfair mb-6'>
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
                          className='block text-sm font-medium mb-2'
                        >
                          Full Name
                        </label>
                        <input
                          type='text'
                          id='name'
                          className='luxury-input w-full text-sm md:text-base'
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor='email'
                          className='block text-sm font-medium mb-2'
                        >
                          Email Address
                        </label>
                        <input
                          type='email'
                          id='email'
                          className='luxury-input w-full text-sm md:text-base'
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor='phone'
                          className='block text-sm font-medium mb-2'
                        >
                          Phone Number
                        </label>
                        <input
                          type='tel'
                          id='phone'
                          className='luxury-input w-full text-sm md:text-base'
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor='date'
                          className='block text-sm font-medium mb-2'
                        >
                          Preferred Date
                        </label>
                        <input
                          type='date'
                          id='date'
                          className='luxury-input w-full text-sm md:text-base'
                          placeholder='DD/MM/YYYY'
                        />
                      </div>
                      <div>
                        <label
                          htmlFor='service'
                          className='block text-sm font-medium mb-2'
                        >
                          Legal Service Needed
                        </label>
                        <select
                          id='service'
                          className='luxury-select w-full text-sm md:text-base'
                        >
                          <option>Corporate Law</option>
                          <option>Personal Injury</option>
                          <option>Family Law</option>
                          <option>Estate Planning</option>
                          <option>Litigation</option>
                          <option>Real Estate Law</option>
                          <option>Criminal Defense</option>
                          <option>Immigration Law</option>
                          <option>Employment Law</option>
                          <option>Intellectual Property</option>
                          <option>Tax Law</option>
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor='requests'
                          className='block text-sm font-medium mb-2'
                        >
                          Case Details
                        </label>
                        <textarea
                          id='requests'
                          className='luxury-textarea min-h-[100px] md:min-h-[120px] w-full text-sm md:text-base'
                          placeholder='Please provide details about your legal matter...'
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
          </div>
        </section>

        {/* Why Choose Us */}
        <section className='luxury-gradient py-16 md:py-24 text-white'>
          <div className='container px-4'>
            <div className='mx-auto max-w-2xl text-center mb-12 md:mb-16'>
              <span className='text-gold uppercase tracking-widest text-sm'>
                Why Choose Us
              </span>
              <h2 className='mt-3 text-2xl md:text-3xl lg:text-4xl font-playfair font-light tracking-wide gold-accent'>
                Your Trusted Legal Partners
              </h2>
            </div>

            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
              <div className='text-center space-y-4'>
                <div className='w-16 h-16 mx-auto bg-gold/20 rounded-full flex items-center justify-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-8 h-8 text-gold'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z'
                    />
                  </svg>
                </div>
                <h3 className='text-xl font-playfair'>Proven Track Record</h3>
                <p className='text-white/80 text-sm'>
                  Over 500 successful cases with a 98% client satisfaction rate
                  across multiple practice areas.
                </p>
              </div>

              <div className='text-center space-y-4'>
                <div className='w-16 h-16 mx-auto bg-gold/20 rounded-full flex items-center justify-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-8 h-8 text-gold'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                </div>
                <h3 className='text-xl font-playfair'>24/7 Availability</h3>
                <p className='text-white/80 text-sm'>
                  Emergency legal consultation available around the clock for
                  urgent matters and critical situations.
                </p>
              </div>

              <div className='text-center space-y-4'>
                <div className='w-16 h-16 mx-auto bg-gold/20 rounded-full flex items-center justify-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-8 h-8 text-gold'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z'
                    />
                  </svg>
                </div>
                <h3 className='text-xl font-playfair'>Expert Team</h3>
                <p className='text-white/80 text-sm'>
                  Experienced attorneys with 25+ years combined experience and
                  specialized expertise in multiple areas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-16 md:py-24 bg-cream'>
          <div className='container px-4 text-center'>
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-playfair font-light tracking-wide mb-6 text-navy'>
              Don't Wait - Get Legal Help Today
            </h2>
            <p className='text-muted-foreground mb-8 max-w-2xl mx-auto'>
              Time is often critical in legal matters. Contact Ralph Nwosu & Co
              immediately to protect your rights and interests with expert legal
              representation.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button
                className='bg-gold hover:bg-gold-light text-navy px-8'
                size='lg'
                asChild
              >
                <a href='tel:+2348123456789'>Call Now</a>
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
      {/* Footer Component */}
      <Footer />
    </div>
  );
}
