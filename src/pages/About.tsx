import { Helmet } from 'react-helmet-async';
import { Target, Users, MapPin, Laptop, Briefcase, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const stats = [
    { value: "35+", label: "Projects Delivered", icon: <Briefcase className="w-6 h-6 text-blue-500 mb-2" /> },
    { value: "10+", label: "Clients Served", icon: <Users className="w-6 h-6 text-blue-500 mb-2" /> },
    { value: "3", label: "Countries Reached", icon: <MapPin className="w-6 h-6 text-blue-500 mb-2" /> },
    { value: "12+", label: "Engineers", icon: <Laptop className="w-6 h-6 text-blue-500 mb-2" /> },
    { value: "2+", label: "Years of Experience", icon: <Zap className="w-6 h-6 text-blue-500 mb-2" /> }
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Durozen</title>
        <meta name="description" content="A technology partner for ambitious teams building serious digital products." />
      </Helmet>
      
      <div className="bg-background min-h-screen">
        {/* Hero */}
        <section className="py-8 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">About Durozen</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              A technology partner for ambitious teams building serious digital products.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-serif font-bold text-primary mb-6">Company Overview</h2>
                <p className="text-lg text-text-muted mb-6 leading-relaxed">
                  Durozen combines product strategy, cloud engineering, application development, AI integration, and long-term support to help organizations ship dependable software with enterprise-grade execution.
                </p>
                <div className="bg-surface p-6 rounded-lg border-l-4 border-secondary shadow-sm">
                  <div className="flex items-start">
                    <Target className="w-8 h-8 text-blue-500 mr-4 shrink-0" />
                    <p className="font-semibold text-primary">
                      Our mission is to reduce risk and increase velocity for businesses building complex digital systems.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, idx) => (
                  <div key={idx} className="bg-surface p-6 rounded-lg border border-outline text-center shadow-sm">
                    <div className="flex justify-center">{stat.icon}</div>
                    <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm font-medium text-text-muted">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-surface border-t border-outline">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Ready to build something serious?</h2>
            <p className="text-lg text-text-muted mb-8">
              Let's talk about your roadmap, your architecture, and your team's goals.
            </p>
            <Link to="/contact" className="bg-secondary text-white px-8 py-3 rounded font-medium hover:bg-red-700 transition-colors inline-block">
              Book a Consultation
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
