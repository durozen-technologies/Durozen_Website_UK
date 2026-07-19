import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ShieldCheck, Cloud, Code, Terminal, Server,
  Workflow, Zap, MessageSquare, Headset, Layers
} from 'lucide-react';

export default function Home() {
  const [bgIndex, setBgIndex] = useState(0);
  const heroImages = [
    { src: '/images/company_building.jpg', align: 'bg-[30%_top] md:bg-top' },
    { src: '/images/company_building_2.jpg', align: 'bg-[30%_70%] md:bg-[center_70%]' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { value: "35+", label: "Projects Delivered" },
    { value: "10+", label: "Clients Served" },
    { value: "3", label: "Countries Reached" },
    { value: "12+", label: "Engineers" },
    { value: "2+", label: "Years of Experience" }
  ];

  const processSteps = [
    { id: "01", title: "Discovery", desc: "Understand goals, users, systems, risks, and business priorities." },
    { id: "02", title: "Strategy", desc: "Define product direction, delivery model, architecture, and success metrics." },
    { id: "03", title: "Planning", desc: "Break the roadmap into milestones, sprints, dependencies, and launch scope." },
    { id: "04", title: "Design", desc: "Create UX flows, interface systems, prototypes, and validation paths." },
    { id: "05", title: "Development", desc: "Engineer frontend, backend, APIs, cloud infrastructure, and integrations." },
    { id: "06", title: "Testing", desc: "Validate functionality, performance, security, accessibility, and release readiness." },
    { id: "07", title: "Deployment", desc: "Launch through stable release pipelines, monitoring, and rollback planning." },
    { id: "08", title: "Monitoring", desc: "Track system health, user behavior, incidents, and operational metrics." },
    { id: "09", title: "Continuous Improvement", desc: "Iterate features, optimize workflows, and scale the platform over time." }
  ];

  const reasons = [
    { title: "Experienced Engineers", desc: "Senior delivery thinking across product, frontend, backend, cloud, data, and integrations.", icon: <Code className="text-blue-500" /> },
    { title: "Agile Delivery", desc: "Sprint-based execution with visible progress, fast feedback loops, and launch discipline.", icon: <Workflow className="text-blue-500" /> },
    { title: "Secure Development", desc: "Security-minded architecture, access control, validation, and deployment practices.", icon: <ShieldCheck className="text-blue-500" /> },
    { title: "Cloud Native Architecture", desc: "Systems planned for reliability, observability, scale, and maintainable operations.", icon: <Cloud className="text-blue-500" /> },
    { title: "AI Integration", desc: "Practical AI capabilities that automate workflows, support teams, and enrich products.", icon: <Zap className="text-blue-500" /> },
    { title: "Transparent Communication", desc: "Clear milestones, demos, status updates, documentation, and decision visibility.", icon: <MessageSquare className="text-blue-500" /> },
    { title: "Dedicated Support", desc: "Hands-on support before, during, and after launch so systems keep improving.", icon: <Headset className="text-blue-500" /> },
    { title: "Scalable Systems", desc: "Product foundations designed for users, data, integrations, and future feature growth.", icon: <Layers className="text-blue-500" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Durozen | Enterprise Software & IT Services</title>
        <meta name="description" content="Engineering Digital Excellence for the Modern Enterprise. We build scalable software, cloud-native platforms, AI-powered solutions, and enterprise applications." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-black min-h-[50vh] md:min-h-[60vh] lg:min-h-[85vh] flex items-center overflow-hidden">
        {heroImages.map((img, idx) => (
          <div 
            key={img.src}
            className={`absolute inset-0 bg-cover ${img.align} bg-no-repeat transition-opacity duration-1000 ease-in-out ${idx === bgIndex ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url('${img.src}')` }}
          />
        ))}
        {/* Dark gradient overlay removed as requested */}
        
        <div className="absolute bottom-0 left-0 w-full px-6 pt-48 pb-16 md:pb-24 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none z-10">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] tracking-tight">
              Your Trusted Digital Transformation Partner.
            </h1>
          </div>
        </div>      </section>

      {/* Company Overview & Stats */}
      <section className="pt-12 pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-semibold tracking-widest text-secondary uppercase mb-3">Company Overview</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6 leading-tight">
                A technology partner for ambitious teams building serious digital products.
              </h3>
              <p className="text-lg text-text-muted mb-8 leading-relaxed">
                Durozen combines product strategy, cloud engineering, application development, AI integration, and long-term support to help organizations ship dependable software with enterprise-grade execution. Strategy, design, engineering, deployment, and growth in one execution flow.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-surface p-6 rounded-lg border border-outline shadow-sm">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm font-medium text-text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-12 bg-surface border-y border-outline">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-semibold tracking-widest text-secondary uppercase mb-3">Development Process</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">A disciplined delivery timeline from idea to continuous improvement.</h3>
            <p className="text-lg text-text-muted">
              Our process keeps stakeholders aligned, risks visible, and engineering execution focused from discovery through long-term product evolution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div key={step.id} className="relative p-6 border border-outline rounded-xl hover:shadow-md transition-shadow bg-background">
                <div className="text-5xl font-bold text-outline/50 absolute top-4 right-4 z-0">{step.id}</div>
                <div className="relative z-10">
                  <h4 className="text-xl font-bold text-primary mb-3 mt-4">{step.title}</h4>
                  <p className="text-text-muted text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-semibold tracking-widest text-secondary uppercase mb-3">Why Choose Us</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Built for teams that need dependable execution, not just attractive screens.</h3>
            <p className="text-lg text-text-muted">
              We combine product judgment, engineering discipline, communication, and long-term support to reduce risk and move faster.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, idx) => (
              <div key={idx} className="bg-surface p-6 rounded-xl border border-outline">
                <div className="mb-4 bg-primary/5 w-12 h-12 rounded-lg flex items-center justify-center">
                  {reason.icon}
                </div>
                <h4 className="font-bold text-primary mb-2">{reason.title}</h4>
                <p className="text-sm text-text-muted">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


    </>
  );
}
