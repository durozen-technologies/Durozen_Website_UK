import { Helmet } from 'react-helmet-async';
import { 
  Code2, Building2, Globe, Smartphone, Cloud, Settings, 
  BrainCircuit, Database, PenTool, Rocket, Webhook, 
  Share2, Headset, ShieldCheck, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      title: "Custom Software Development",
      description: "Tailored web, mobile, and internal systems built around your operations, users, and growth model.",
      icon: <Code2 className="w-8 h-8" />
    },
    {
      title: "Enterprise Application Development",
      description: "Secure, scalable applications for complex workflows, permissions, reporting, and integrations.",
      icon: <Building2 className="w-8 h-8" />
    },
    {
      title: "Web Development",
      description: "High-performance websites, portals, dashboards, landing pages, and web applications.",
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: "Mobile Development",
      description: "Launch-ready Android, iOS, and cross-platform apps with clean UX and stable backends.",
      icon: <Smartphone className="w-8 h-8" />
    },
    {
      title: "Cloud Engineering",
      description: "Cloud-native architecture, migration, deployment, scaling, security, and monitoring.",
      icon: <Cloud className="w-8 h-8" />
    },
    {
      title: "DevOps",
      description: "CI/CD pipelines, release automation, infrastructure workflows, and reliability practices.",
      icon: <Settings className="w-8 h-8" />
    },
    {
      title: "AI and Machine Learning",
      description: "AI assistants, automation workflows, RAG systems, analytics, and model integrations.",
      icon: <BrainCircuit className="w-8 h-8" />
    },
    {
      title: "Data Engineering",
      description: "Data pipelines, business intelligence layers, dashboards, warehouses, and reporting systems.",
      icon: <Database className="w-8 h-8" />
    },
    {
      title: "UI/UX Design",
      description: "Product strategy, UX flows, design systems, prototypes, and conversion-focused interfaces.",
      icon: <PenTool className="w-8 h-8" />
    },
    {
      title: "Product Development",
      description: "MVP planning, SaaS platforms, admin panels, portals, and continuous feature delivery.",
      icon: <Rocket className="w-8 h-8" />
    },
    {
      title: "API Development",
      description: "Robust APIs, third-party integrations, authentication, documentation, and versioning.",
      icon: <Webhook className="w-8 h-8" />
    },
    {
      title: "Digital Transformation",
      description: "Modernize manual processes, legacy tools, customer touchpoints, and business workflows.",
      icon: <Share2 className="w-8 h-8" />
    },
    {
      title: "IT Consulting",
      description: "Technical roadmaps, audits, architecture decisions, platform planning, and delivery guidance.",
      icon: <Headset className="w-8 h-8" />
    },
    {
      title: "QA and Automation",
      description: "Manual testing, automated test coverage, release validation, and quality engineering.",
      icon: <ShieldCheck className="w-8 h-8" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services | Durozen</title>
        <meta name="description" content="Enterprise IT services engineered for scale. Premium delivery across software, cloud, AI, product design, data, DevOps, and digital transformation." />
      </Helmet>
      
      <div className="bg-background min-h-screen pb-24">
        <div className="max-w-7xl mx-auto px-6 pt-4 lg:pt-6 pb-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Services</h1>
            <p className="text-lg text-text-muted mb-4 font-semibold">
              Enterprise IT services engineered for scale.
            </p>
            <p className="text-lg text-text-muted">
              Premium delivery across software, cloud, AI, product design, data, DevOps, and digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const hoverColors = [
                'group-hover:text-secondary group-hover:border-secondary/50',
                'group-hover:text-brand-yellow group-hover:border-brand-yellow/50',
                'group-hover:text-brand-green group-hover:border-brand-green/50',
                'group-hover:text-primary group-hover:border-primary/50'
              ];
              const activeColorClass = hoverColors[index % 4];

              return (
                <div key={index} className={`bg-surface p-8 rounded-lg shadow-sm border border-outline transition-all duration-300 flex flex-col h-full group ${activeColorClass.split(' ')[1]}`}>
                  <div className="mb-6 p-4 bg-primary/5 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className={`text-slate-400 transition-colors ${activeColorClass.split(' ')[0]}`}>
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-text-muted flex-grow mb-6">{service.description}</p>
                  <Link to="/contact" className={`text-sm font-semibold flex items-center transition-colors text-slate-500 ${activeColorClass.split(' ')[0]}`}>
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
