import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "POS Billing System and Tracking",
      category: "Retail Operations",
      challenge: "Retail teams needed a simpler way to manage billing activity and track operational movement.",
      solution: "Created a POS billing and tracking system for transactions, visibility, and daily business control.",
      tags: ["POS", "Billing", "Tracking", "Reports", "Billing and tracking system"],
      imageAlt: "POS billing and tracking system dashboard interface",
      image: "/images/boiler360_logo.png",
      imageClass: "w-full h-full object-contain drop-shadow-md"
    },
    {
      title: "KNCET Admission Portal",
      category: "Education",
      challenge: "Kongunadu College needed a focused digital admission experience for applicants and administrators.",
      solution: "Delivered an admission portal with structured enquiry capture, application workflows, and responsive access.",
      tags: ["Web App", "Forms", "Admin Flow", "Live admission portal"],
      imageAlt: "KNCET admission portal dashboard interface",
      image: "/images/kncet_portal.png",
      imageClass: "w-full h-full object-contain",
      imagePadding: false
    },
    {
      title: "RAMS Construct",
      category: "Construction and Marketing",
      challenge: "RAMS Construct needed a professional web presence with marketing support for stronger project visibility.",
      solution: "Built a polished company website and supported digital marketing foundations for lead generation.",
      tags: ["Website", "SEO", "Marketing", "Lead Flow", "Website plus marketing"],
      imageAlt: "RAMS Construct website homepage",
      image: "/images/rams_construct_new.png",
      imageClass: "w-full h-full object-contain",
      imagePadding: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies | Durozen</title>
        <meta name="description" content="Selected client work and product builds by Durozen." />
      </Helmet>
      
      <div className="bg-background min-h-screen">
        <div className="max-w-7xl mx-auto px-6 pt-4 lg:pt-6 pb-8">
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Case Studies</h1>
            <p className="text-lg text-text-muted">
              Selected client work and product builds.
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-surface rounded-2xl overflow-hidden border border-outline shadow-sm flex flex-col lg:flex-row">
                <div className={`lg:w-2/5 bg-primary/5 flex items-center justify-center ${study.imagePadding === false ? '' : 'p-12'}`}>
                  {study.image ? (
                    <div className={`w-full ${study.imagePadding === false ? 'h-full' : 'aspect-[4/3]'} flex items-center justify-center overflow-hidden`}>
                      <img src={study.image} alt={study.imageAlt} className={study.imageClass || 'w-full h-full object-cover'} />
                    </div>
                  ) : (
                    <div className="w-full aspect-[4/3] bg-outline/50 rounded-lg flex items-center justify-center text-text-muted text-center p-6 border-2 border-dashed border-outline">
                      [ Image: {study.imageAlt} ]
                    </div>
                  )}
                </div>
                <div className="lg:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                  <div className="text-sm font-semibold text-secondary tracking-widest uppercase mb-2">
                    {study.category}
                  </div>
                  <h2 className="text-3xl font-bold text-primary mb-6">{study.title}</h2>
                  
                  <div className="space-y-4 mb-8 text-text-muted">
                    <p><strong className="text-primary">Challenge:</strong> {study.challenge}</p>
                    <p><strong className="text-primary">Solution:</strong> {study.solution}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {study.tags.map((tag, i) => (
                      <span key={i} className="bg-background border border-outline text-text-main text-xs px-3 py-1 rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div>
                    <Link to="/contact" className="inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors group">
                      Discuss project <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
