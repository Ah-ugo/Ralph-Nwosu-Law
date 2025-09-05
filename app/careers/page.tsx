/** @format */

'use client';

import type React from 'react';

import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  MapPin,
  Clock,
  DollarSign,
  Users,
  ChevronRight,
  Briefcase,
  X,
  Upload,
} from 'lucide-react';

const jobListings = [
  {
    id: 1,
    title: 'Senior Corporate Attorney',
    department: 'Corporate Law',
    location: 'Owerri, Imo State',
    type: 'Full-time',
    experience: '5+ years',
    salary: '₦2,500,000 - ₦4,000,000',
    description:
      'We are seeking an experienced corporate attorney to join our growing team. The ideal candidate will have extensive experience in business law, mergers and acquisitions, and corporate governance.',
    requirements: [
      'LLB degree from a recognized university',
      '5+ years of corporate law experience',
      'Nigerian Bar Association membership',
      'Strong negotiation and communication skills',
      'Experience with M&A transactions',
    ],
    benefits: [
      'Competitive salary and bonuses',
      'Health insurance coverage',
      'Professional development opportunities',
      'Flexible working arrangements',
    ],
  },
  {
    id: 2,
    title: 'Family Law Associate',
    department: 'Family Law',
    location: 'Owerri, Imo State',
    type: 'Full-time',
    experience: '2-4 years',
    salary: '₦1,800,000 - ₦2,800,000',
    description:
      'Join our compassionate family law team to help clients navigate challenging family matters with expertise and empathy.',
    requirements: [
      'LLB degree with good grades',
      '2-4 years family law experience',
      'Nigerian Bar Association membership',
      'Excellent interpersonal skills',
      'Experience in divorce and custody cases',
    ],
    benefits: [
      'Comprehensive health benefits',
      'Annual leave and sick days',
      'Continuing legal education support',
      'Mentorship programs',
    ],
  },
  {
    id: 3,
    title: 'Legal Research Assistant',
    department: 'Research & Support',
    location: 'Owerri, Imo State',
    type: 'Full-time',
    experience: '0-2 years',
    salary: '₦800,000 - ₦1,200,000',
    description:
      'Perfect opportunity for recent law graduates to gain valuable experience in legal research and case preparation.',
    requirements: [
      'LLB degree (recent graduates welcome)',
      'Strong research and writing skills',
      'Proficiency in legal databases',
      'Attention to detail',
      'Ability to work under pressure',
    ],
    benefits: [
      'Entry-level position with growth potential',
      'Training and mentorship',
      'Health insurance',
      'Professional development opportunities',
    ],
  },
  {
    id: 4,
    title: 'Litigation Attorney',
    department: 'Litigation',
    location: 'Owerri, Imo State',
    type: 'Full-time',
    experience: '3+ years',
    salary: '₦2,000,000 - ₦3,500,000',
    description:
      'Experienced litigator needed to handle complex civil and commercial disputes in federal and state courts.',
    requirements: [
      'LLB degree with litigation focus',
      '3+ years courtroom experience',
      'Nigerian Bar Association membership',
      'Strong oral advocacy skills',
      'Trial experience preferred',
    ],
    benefits: [
      'Performance-based bonuses',
      'Health and dental coverage',
      'Professional liability insurance',
      'Conference and training allowances',
    ],
  },
  {
    id: 5,
    title: 'Paralegal',
    department: 'Support Services',
    location: 'Owerri, Imo State',
    type: 'Full-time',
    experience: '1-3 years',
    salary: '₦600,000 - ₦900,000',
    description:
      'Support our legal team with case preparation, document management, and client communication.',
    requirements: [
      'Paralegal certificate or relevant degree',
      '1-3 years paralegal experience',
      'Strong organizational skills',
      'Proficiency in MS Office',
      'Excellent communication skills',
    ],
    benefits: [
      'Stable work environment',
      'Health insurance',
      'Paid time off',
      'Skills development opportunities',
    ],
  },
  {
    id: 6,
    title: 'Real Estate Attorney',
    department: 'Real Estate Law',
    location: 'Owerri, Imo State',
    type: 'Full-time',
    experience: '3+ years',
    salary: '₦2,200,000 - ₦3,200,000',
    description:
      'Handle residential and commercial real estate transactions, property disputes, and land law matters.',
    requirements: [
      'LLB degree with property law focus',
      '3+ years real estate experience',
      'Knowledge of Nigerian land laws',
      'Transaction experience',
      'Client relationship skills',
    ],
    benefits: [
      'Competitive compensation',
      'Commission opportunities',
      'Health benefits',
      'Professional growth path',
    ],
  },
];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    coverLetter: '',
    resume: null as File | null,
  });

  const handleApplyClick = (jobId: number) => {
    const job = jobListings.find((j) => j.id === jobId);
    setSelectedJob(jobId);
    setFormData((prev) => ({ ...prev, position: job?.title || '' }));
    setShowApplicationForm(true);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, resume: file }));
    }
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();

    // Create WhatsApp message
    const selectedJobData = jobListings.find((job) => job.id === selectedJob);
    const message = `*New Job Application*%0A%0A*Position:* ${
      formData.position
    }%0A*Name:* ${formData.firstName} ${formData.lastName}%0A*Email:* ${
      formData.email
    }%0A*Phone:* ${formData.phone}%0A*Experience:* ${
      formData.experience
    }%0A%0A*Cover Letter:*%0A${formData.coverLetter}%0A%0A*Resume:* ${
      formData.resume ? formData.resume.name : 'Not attached'
    }`;

    const whatsappURL = `https://api.whatsapp.com/send?phone=2348123456789&text=${message}`;
    window.open(whatsappURL, '_blank');

    // Reset form and close modal
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      coverLetter: '',
      resume: null,
    });
    setShowApplicationForm(false);
    setSelectedJob(null);
  };

  return (
    <div className='flex min-h-screen flex-col font-montserrat'>
      <Navigation />

      <main className='flex-1'>
        {/* Hero Section */}
        <section className='relative py-16 md:py-24 luxury-gradient text-white'>
          <div className='container px-4'>
            <div className='mx-auto max-w-3xl text-center'>
              <div className='flex justify-center mb-6'>
                <div className='border border-gold/30 py-2 px-4 rounded-lg'>
                  <span className='text-gold uppercase tracking-widest text-sm'>
                    Join Our Team
                  </span>
                </div>
              </div>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-playfair font-light tracking-wide mb-6'>
                Build Your Legal Career with Ralph Nwosu & Co
              </h1>
              <p className='text-lg md:text-xl text-white/80 leading-relaxed mb-8'>
                Join Nigeria's premier law firm and work alongside experienced
                attorneys on challenging cases that make a real difference in
                our clients' lives.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Button
                  className='luxury-button text-gold border-gold hover:text-gold-light bg-transparent'
                  variant='outline'
                  size='lg'
                  onClick={() =>
                    document
                      .getElementById('open-positions')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  View Open Positions
                </Button>
                <Button
                  className='bg-gold hover:bg-gold-light text-navy'
                  size='lg'
                  asChild
                >
                  <a href='mailto:careers@ralphnwosulaw.com'>Send Resume</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className='py-16 md:py-24'>
          <div className='container px-4'>
            <div className='mx-auto max-w-2xl text-center mb-12'>
              <span className='text-gold uppercase tracking-widest text-sm'>
                Why Choose Us
              </span>
              <h2 className='mt-3 text-2xl md:text-3xl lg:text-4xl font-playfair font-light tracking-wide'>
                Why Work at Ralph Nwosu & Co
              </h2>
              <p className='mt-6 text-muted-foreground leading-relaxed'>
                We offer more than just a job - we provide a platform for
                professional growth, meaningful work, and the opportunity to
                make a real impact in the legal field.
              </p>
            </div>

            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
              <Card className='border-gold/20 hover:border-gold/40 transition-colors duration-300'>
                <CardHeader>
                  <div className='w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4'>
                    <Users className='w-6 h-6 text-gold' />
                  </div>
                  <CardTitle className='text-xl font-playfair'>
                    Collaborative Environment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-muted-foreground'>
                    Work alongside experienced attorneys in a supportive team
                    environment that encourages knowledge sharing and
                    professional growth.
                  </p>
                </CardContent>
              </Card>

              <Card className='border-gold/20 hover:border-gold/40 transition-colors duration-300'>
                <CardHeader>
                  <div className='w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4'>
                    <Briefcase className='w-6 h-6 text-gold' />
                  </div>
                  <CardTitle className='text-xl font-playfair'>
                    Diverse Practice Areas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-muted-foreground'>
                    Gain experience across multiple legal disciplines including
                    corporate law, litigation, family law, and real estate.
                  </p>
                </CardContent>
              </Card>

              <Card className='border-gold/20 hover:border-gold/40 transition-colors duration-300'>
                <CardHeader>
                  <div className='w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4'>
                    <DollarSign className='w-6 h-6 text-gold' />
                  </div>
                  <CardTitle className='text-xl font-playfair'>
                    Competitive Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-muted-foreground'>
                    Enjoy competitive salaries, comprehensive health benefits,
                    professional development opportunities, and performance
                    bonuses.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section id='open-positions' className='py-16 md:py-24 bg-cream'>
          <div className='container px-4'>
            <div className='mx-auto max-w-2xl text-center mb-12'>
              <span className='text-gold uppercase tracking-widest text-sm'>
                Current Openings
              </span>
              <h2 className='mt-3 text-2xl md:text-3xl lg:text-4xl font-playfair font-light tracking-wide text-navy'>
                Open Positions
              </h2>
              <p className='mt-6 text-muted-foreground leading-relaxed'>
                Explore our current job openings and find the perfect
                opportunity to advance your legal career.
              </p>
            </div>

            <div className='grid gap-6 lg:gap-8'>
              {jobListings.map((job) => (
                <Card
                  key={job.id}
                  className='border-gold/20 hover:border-gold/40 transition-all duration-300 hover:shadow-lg'
                >
                  <CardHeader>
                    <div className='flex flex-col md:flex-row md:items-start md:justify-between gap-4'>
                      <div className='flex-1'>
                        <CardTitle className='text-xl md:text-2xl font-playfair mb-2'>
                          {job.title}
                        </CardTitle>
                        <div className='flex flex-wrap gap-2 mb-4'>
                          <Badge
                            variant='secondary'
                            className='bg-gold/10 text-gold border-gold/20'
                          >
                            {job.department}
                          </Badge>
                          <Badge variant='outline' className='border-gold/30'>
                            {job.type}
                          </Badge>
                        </div>
                        <div className='flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground'>
                          <div className='flex items-center gap-2'>
                            <MapPin className='w-4 h-4' />
                            {job.location}
                          </div>
                          <div className='flex items-center gap-2'>
                            <Clock className='w-4 h-4' />
                            {job.experience}
                          </div>
                          <div className='flex items-center gap-2'>
                            <DollarSign className='w-4 h-4' />
                            {job.salary}
                          </div>
                        </div>
                      </div>
                      <Button
                        className='bg-gold hover:bg-gold-light text-navy shrink-0'
                        onClick={() => handleApplyClick(job.id)}
                      >
                        Apply Now
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className='text-muted-foreground mb-4'>
                      {job.description}
                    </p>

                    <div className='grid md:grid-cols-2 gap-6'>
                      <div>
                        <h4 className='font-medium mb-3'>Requirements:</h4>
                        <ul className='space-y-2'>
                          {job.requirements.map((req, index) => (
                            <li
                              key={index}
                              className='flex items-start gap-2 text-sm text-muted-foreground'
                            >
                              <ChevronRight className='w-4 h-4 text-gold mt-0.5 flex-shrink-0' />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className='font-medium mb-3'>Benefits:</h4>
                        <ul className='space-y-2'>
                          {job.benefits.map((benefit, index) => (
                            <li
                              key={index}
                              className='flex items-start gap-2 text-sm text-muted-foreground'
                            >
                              <ChevronRight className='w-4 h-4 text-gold mt-0.5 flex-shrink-0' />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process Section */}
        <section className='py-16 md:py-24'>
          <div className='container px-4'>
            <div className='mx-auto max-w-2xl text-center mb-12'>
              <span className='text-gold uppercase tracking-widest text-sm'>
                Application Process
              </span>
              <h2 className='mt-3 text-2xl md:text-3xl lg:text-4xl font-playfair font-light tracking-wide'>
                How to Apply
              </h2>
              <p className='mt-6 text-muted-foreground leading-relaxed'>
                Our streamlined application process is designed to identify the
                best candidates while respecting your time.
              </p>
            </div>

            <div className='grid gap-8 md:grid-cols-3'>
              <div className='text-center'>
                <div className='w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <span className='text-2xl font-playfair font-medium text-gold'>
                    1
                  </span>
                </div>
                <h3 className='text-xl font-playfair mb-3'>
                  Submit Application
                </h3>
                <p className='text-muted-foreground'>
                  Submit your resume, cover letter, and any relevant documents
                  through our online application form.
                </p>
              </div>

              <div className='text-center'>
                <div className='w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <span className='text-2xl font-playfair font-medium text-gold'>
                    2
                  </span>
                </div>
                <h3 className='text-xl font-playfair mb-3'>Initial Review</h3>
                <p className='text-muted-foreground'>
                  Our HR team will review your application and contact qualified
                  candidates within 5-7 business days.
                </p>
              </div>

              <div className='text-center'>
                <div className='w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <span className='text-2xl font-playfair font-medium text-gold'>
                    3
                  </span>
                </div>
                <h3 className='text-xl font-playfair mb-3'>
                  Interview Process
                </h3>
                <p className='text-muted-foreground'>
                  Participate in interviews with our team members and
                  demonstrate your legal expertise and cultural fit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className='py-16 md:py-24 luxury-gradient text-white'>
          <div className='container px-4'>
            <div className='mx-auto max-w-2xl text-center'>
              <h2 className='text-2xl md:text-3xl lg:text-4xl font-playfair font-light tracking-wide mb-6'>
                Ready to Join Our Team?
              </h2>
              <p className='text-white/80 leading-relaxed mb-8'>
                Don't see a position that matches your skills? We're always
                looking for talented legal professionals. Send us your resume
                and we'll keep you in mind for future opportunities.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Button
                  className='luxury-button text-gold border-gold hover:text-gold-light bg-transparent'
                  variant='outline'
                  size='lg'
                  asChild
                >
                  <a href='mailto:careers@ralphnwosulaw.com'>
                    Email Your Resume
                  </a>
                </Button>
                <Button
                  className='bg-gold hover:bg-gold-light text-navy'
                  size='lg'
                  asChild
                >
                  <a href='tel:+2348123456789'>Call HR Department</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4'>
          <div className='bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto'>
            <div className='sticky top-0 bg-white border-b border-gold/20 p-6 flex items-center justify-between'>
              <div>
                <h3 className='text-2xl font-playfair font-medium'>
                  Apply for Position
                </h3>
                <p className='text-muted-foreground mt-1'>
                  {jobListings.find((job) => job.id === selectedJob)?.title}
                </p>
              </div>
              <Button
                variant='ghost'
                size='sm'
                onClick={() => {
                  setShowApplicationForm(false);
                  setSelectedJob(null);
                }}
                className='text-muted-foreground hover:text-foreground'
              >
                <X className='w-5 h-5' />
              </Button>
            </div>

            <form onSubmit={handleSubmitApplication} className='p-6 space-y-6'>
              <div className='grid md:grid-cols-2 gap-4'>
                <div className='space-y-2'>
                  <Label htmlFor='firstName'>First Name *</Label>
                  <Input
                    id='firstName'
                    value={formData.firstName}
                    onChange={(e) =>
                      handleInputChange('firstName', e.target.value)
                    }
                    required
                    className='border-gold/20 focus:border-gold'
                  />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='lastName'>Last Name *</Label>
                  <Input
                    id='lastName'
                    value={formData.lastName}
                    onChange={(e) =>
                      handleInputChange('lastName', e.target.value)
                    }
                    required
                    className='border-gold/20 focus:border-gold'
                  />
                </div>
              </div>

              <div className='grid md:grid-cols-2 gap-4'>
                <div className='space-y-2'>
                  <Label htmlFor='email'>Email Address *</Label>
                  <Input
                    id='email'
                    type='email'
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    className='border-gold/20 focus:border-gold'
                  />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='phone'>Phone Number *</Label>
                  <Input
                    id='phone'
                    type='tel'
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    required
                    className='border-gold/20 focus:border-gold'
                  />
                </div>
              </div>

              <div className='space-y-2'>
                <Label htmlFor='position'>Position Applied For</Label>
                <Input
                  id='position'
                  value={formData.position}
                  onChange={(e) =>
                    handleInputChange('position', e.target.value)
                  }
                  readOnly
                  className='border-gold/20 bg-muted'
                />
              </div>

              <div className='space-y-2'>
                <Label htmlFor='experience'>Years of Experience *</Label>
                <Select
                  onValueChange={(value) =>
                    handleInputChange('experience', value)
                  }
                  required
                >
                  <SelectTrigger className='border-gold/20 focus:border-gold'>
                    <SelectValue placeholder='Select your experience level' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='0-1'>0-1 years</SelectItem>
                    <SelectItem value='2-3'>2-3 years</SelectItem>
                    <SelectItem value='4-5'>4-5 years</SelectItem>
                    <SelectItem value='6-10'>6-10 years</SelectItem>
                    <SelectItem value='10+'>10+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className='space-y-2'>
                <Label htmlFor='resume'>Resume/CV *</Label>
                <div className='border-2 border-dashed border-gold/20 rounded-lg p-6 text-center hover:border-gold/40 transition-colors'>
                  <input
                    type='file'
                    id='resume'
                    accept='.pdf,.doc,.docx'
                    onChange={handleFileChange}
                    className='hidden'
                    required
                  />
                  <label htmlFor='resume' className='cursor-pointer'>
                    <Upload className='w-8 h-8 text-gold mx-auto mb-2' />
                    <p className='text-sm text-muted-foreground'>
                      {formData.resume
                        ? formData.resume.name
                        : 'Click to upload your resume'}
                    </p>
                    <p className='text-xs text-muted-foreground mt-1'>
                      PDF, DOC, or DOCX (Max 5MB)
                    </p>
                  </label>
                </div>
              </div>

              <div className='space-y-2'>
                <Label htmlFor='coverLetter'>Cover Letter *</Label>
                <Textarea
                  id='coverLetter'
                  value={formData.coverLetter}
                  onChange={(e) =>
                    handleInputChange('coverLetter', e.target.value)
                  }
                  placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                  className='min-h-[120px] border-gold/20 focus:border-gold'
                  required
                />
              </div>

              <div className='flex flex-col sm:flex-row gap-3 pt-4'>
                <Button
                  type='button'
                  variant='outline'
                  onClick={() => {
                    setShowApplicationForm(false);
                    setSelectedJob(null);
                  }}
                  className='flex-1 border-gold/30 text-muted-foreground hover:text-foreground'
                >
                  Cancel
                </Button>
                <Button
                  type='submit'
                  className='flex-1 bg-gold hover:bg-gold-light text-navy'
                >
                  Submit Application
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
