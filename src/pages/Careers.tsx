import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, Briefcase, Zap, Terminal, ArrowRight, Mail, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || '';

export default function Careers() {
  const benefits = [
    {
      title: "Challenging Work",
      description: "Build serious enterprise products that solve complex operational problems at scale.",
      icon: <Terminal className="w-6 h-6 text-blue-500 mb-4" />
    },
    {
      title: "Strong Culture",
      description: "Work with a team of ambitious, driven engineers who value execution over politics.",
      icon: <Users className="w-6 h-6 text-blue-500 mb-4" />
    },
    {
      title: "Fast Growth",
      description: "Take on massive responsibilities early. We reward velocity and high-quality output.",
      icon: <Zap className="w-6 h-6 text-blue-500 mb-4" />
    }
  ];

  const positions: any[] = [];
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      if (!SCRIPT_URL) {
        throw new Error("Career Application API URL is not configured yet.");
      }

      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: formData,
      });

      const result = await response.json().catch(() => ({ success: true })); 
      
      if (result.success !== false) {
        setSubmitStatus('success');
        form.reset();
      } else {
        throw new Error(result.message || 'Failed to submit application');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Careers | Durozen</title>
        <meta name="description" content="Join Durozen and help us build serious digital products for ambitious teams." />
      </Helmet>
      
      <div className="bg-background min-h-screen">
        {/* Hero */}
        <section className="py-8 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Careers at Durozen</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              We're always looking for sharp, dedicated people to join our engineering and product teams.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 py-24">
          
          {/* Why Join Us */}
          <div className="mb-24 text-center">
            <h2 className="text-3xl font-serif font-bold text-primary mb-12">Why join us?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="bg-surface p-8 rounded-xl border border-outline shadow-sm text-left">
                  {benefit.icon}
                  <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
                  <p className="text-text-muted leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Open Positions */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-primary mb-8">Open Positions</h2>
            
            <div className="bg-surface p-8 rounded-lg border border-outline text-center mb-16 shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-2">No Active Openings</h3>
              <p className="text-text-muted">
                We currently don't have any specific roles open. However, we are always looking for exceptional talent.
              </p>
            </div>

            {/* General Application */}
            <div className="bg-surface p-8 rounded-xl border border-outline shadow-sm">
              <div className="text-center mb-8">
                <Mail className="w-8 h-8 text-secondary mx-auto mb-4" />
                <h3 className="text-2xl font-serif font-bold text-primary mb-2">Spontaneous Application</h3>
                <p className="text-text-muted">
                  We are always open to meeting talented engineers, designers, and operators. Send us your details.
                </p>
              </div>

              {submitStatus === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center animate-fade-in">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-green-800 mb-2">Application Received!</h3>
                  <p className="text-green-700">
                    Thank you for your interest in Durozen. Our team will review your application and get back to you soon.
                  </p>
                  <button 
                    onClick={() => setSubmitStatus('idle')}
                    className="mt-6 text-secondary hover:underline font-medium"
                  >
                    Submit another application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="hidden" name="formType" value="career" />
                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start">
                      <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="text-red-800 font-medium">Submission Failed</h4>
                        <p className="text-red-600 text-sm mt-1">{errorMessage}</p>
                      </div>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">Full Name <span className="text-red-500">*</span></label>
                      <input type="text" id="name" name="name" required minLength={2} disabled={isSubmitting} className="w-full px-4 py-3 bg-background border border-outline rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors disabled:opacity-50" placeholder="Name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">Email Address <span className="text-red-500">*</span></label>
                      <input type="email" id="email" name="email" required disabled={isSubmitting} className="w-full px-4 py-3 bg-background border border-outline rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors disabled:opacity-50" placeholder="mail@company.com" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">Phone Number</label>
                      <input type="tel" id="phone" name="phone" disabled={isSubmitting} className="w-full px-4 py-3 bg-background border border-outline rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors disabled:opacity-50" placeholder="+91 12345 67890" />
                    </div>
                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-primary mb-2">Role of Interest <span className="text-red-500">*</span></label>
                      <input type="text" id="role" name="role" required disabled={isSubmitting} className="w-full px-4 py-3 bg-background border border-outline rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors disabled:opacity-50" placeholder="e.g. Frontend Engineer, Product Manager" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="portfolio" className="block text-sm font-medium text-primary mb-2">Portfolio / LinkedIn / GitHub URL <span className="text-red-500">*</span></label>
                    <input type="url" id="portfolio" name="portfolio" required disabled={isSubmitting} className="w-full px-4 py-3 bg-background border border-outline rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors disabled:opacity-50" placeholder="https://" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">Cover Letter / Message</label>
                    <textarea id="message" name="message" rows={4} disabled={isSubmitting} className="w-full px-4 py-3 bg-background border border-outline rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors disabled:opacity-50 resize-y" placeholder="Tell us about yourself and why you'd be a great fit..."></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-secondary text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all shadow-md disabled:opacity-70 flex justify-center items-center"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                        Submitting Application...
                      </>
                    ) : (
                      'Submit Application'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
