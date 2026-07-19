import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Clock, Linkedin, Instagram, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

// Read from environment variables (configured in Vercel)
const SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

export default function Contact() {
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
        throw new Error("API URL is not configured in the environment variables.");
      }

      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: formData,
        // mode: 'no-cors' is often needed for Apps Script if CORS headers aren't explicitly returned,
        // but no-cors makes response unreadable. For standard Apps Script web apps handling JSON,
        // you usually don't need no-cors if you return ContentService correctly.
      });

      // Sometimes Apps Script fetch requests redirect, but assuming it works:
      const result = await response.json().catch(() => ({ success: true })); 
      
      if (result.success !== false) {
        setSubmitStatus('success');
        form.reset();
      } else {
        throw new Error(result.message || 'Failed to submit form');
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
        <title>Contact Us | Durozen</title>
        <meta name="description" content="Start your enterprise technology conversation with Durozen." />
      </Helmet>

      <div className="bg-background min-h-screen pb-24">
        <div className="max-w-7xl mx-auto px-6 pt-4 lg:pt-6 pb-8">
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Contact</h1>
            <h2 className="text-2xl font-semibold text-primary mb-4">Start your enterprise technology conversation.</h2>
            <p className="text-lg text-text-muted">
              Tell us what you want to build, modernize, or automate. Our team will respond with the next practical step.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-surface p-8 rounded-xl border border-outline shadow-sm">
                
                {submitStatus === 'success' ? (
                  <div className="text-center py-12">
                    <CheckCircle2 className="w-16 h-16 text-secondary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-primary mb-2">Request Received!</h3>
                    <p className="text-text-muted mb-6">Thank you for submitting your inquiry. We'll be in touch within 24 hours.</p>
                    <button onClick={() => setSubmitStatus('idle')} className="text-secondary font-semibold hover:underline">Submit another inquiry</button>
                  </div>
                ) : (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <input type="hidden" name="formType" value="contact" />
                    
                    {submitStatus === 'error' && (
                      <div className="bg-red-50 text-red-600 p-4 rounded-lg flex items-start text-sm border border-red-100">
                        <AlertCircle className="w-5 h-5 mr-3 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold mb-1">Submission Failed</p>
                          <p>{errorMessage}</p>
                        </div>
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">Name <span className="text-red-500">*</span></label>
                        <input type="text" id="name" name="name" required minLength={2} disabled={isSubmitting} className="w-full px-4 py-3 bg-background border border-outline rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors disabled:opacity-50" placeholder="Name" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">Email <span className="text-red-500">*</span></label>
                        <input type="email" id="email" name="email" required disabled={isSubmitting} className="w-full px-4 py-3 bg-background border border-outline rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors disabled:opacity-50" placeholder="mail@company.com" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="industry" className="block text-sm font-medium text-primary mb-2">Industry <span className="text-red-500">*</span></label>
                        <input type="text" id="industry" name="industry" required minLength={2} disabled={isSubmitting} className="w-full px-4 py-3 bg-background border border-outline rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors disabled:opacity-50" placeholder="e.g. Healthcare, Finance" />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">Phone <span className="text-red-500">*</span></label>
                        <input type="tel" id="phone" name="phone" required pattern="[\+0-9\-\s\(\)]+" minLength={10} disabled={isSubmitting} className="w-full px-4 py-3 bg-background border border-outline rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors disabled:opacity-50" placeholder="+91 98765 43210" title="Please enter a valid phone number" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="serviceInterest" className="block text-sm font-medium text-primary mb-2">Service Interest</label>
                      <select id="serviceInterest" name="serviceInterest" disabled={isSubmitting} className="w-full px-4 py-3 bg-background border border-outline rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors disabled:opacity-50">
                      <option>Custom Software Development</option>
                      <option>Enterprise Application Development</option>
                      <option>Cloud Engineering</option>
                      <option>AI and Machine Learning</option>
                      <option>Data Engineering</option>
                      <option>DevOps</option>
                      <option>Digital Transformation</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="goals" className="block text-sm font-medium text-primary mb-2">Project Goals</label>
                    <textarea id="goals" name="goals" rows={5} disabled={isSubmitting} className="w-full px-4 py-3 bg-background border border-outline rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors disabled:opacity-50" placeholder="Tell us about your project..."></textarea>
                  </div>

                  <button type="submit" disabled={isSubmitting} className="w-full bg-secondary text-white py-4 rounded-lg font-bold hover:bg-red-700 transition-colors flex items-center justify-center disabled:opacity-70">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Book a Consultation"
                    )}
                  </button>
                </form>
                )}
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-primary text-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-6">Enterprise Contact Desk</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-blue-400 mr-4 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Office</h4>
                      <p className="text-blue-100 text-sm">
                        <a href="https://maps.app.goo.gl/Tu8joQKuoLoGaEyn7" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                          Namakkal, Tamil Nadu
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-blue-400 mr-4 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <a href="mailto:info@durozen.in" className="text-blue-100 text-sm hover:text-white transition-colors">info@durozen.in</a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-blue-400 mr-4 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <a href="tel:+918122339694" className="text-blue-100 text-sm hover:text-white transition-colors">+(91) 81223 39694</a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-blue-400 mr-4 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Business Hours</h4>
                      <p className="text-blue-100 text-sm">Monday to Saturday<br />9:30 AM - 6:30 PM IST</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links Card */}
              <div className="bg-surface border border-outline p-8 rounded-xl shadow-sm mt-8 text-center">
                <h3 className="text-xl font-bold mb-6 text-primary">Professional Networks</h3>
                <div className="flex justify-center space-x-4">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-pink-50 text-pink-600 rounded-full hover:bg-pink-600 hover:text-white transition-colors flex items-center justify-center">
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>

            </div>
            {/* Close the grid container */}
          </div>

          <div className="mt-12 lg:mt-16">
            <div className="bg-surface border border-outline rounded-xl overflow-hidden shadow-sm h-96 lg:h-[500px] relative w-full">
              <iframe
                title="Durozen Office Location"
                src="https://maps.google.com/maps?q=Durozen%20Technologies%20Private%20Limited,%20Namakkal,%20Tamil%20Nadu&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
