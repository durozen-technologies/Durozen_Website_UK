import { Helmet } from 'react-helmet-async';
import { 
  Network, Users, Zap, BarChart3, Repeat, Box, Wrench, LayoutDashboard
} from 'lucide-react';

export default function Solutions() {
  const solutions = [
    {
      title: "Enterprise Resource Planning",
      description: "Centralize operations, approvals, inventory, finance, and reporting in one reliable platform.",
      icon: <Network className="w-8 h-8" />
    },
    {
      title: "Customer Management Systems",
      description: "Manage leads, service workflows, customer histories, and follow-up automation with clarity.",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "AI Automation",
      description: "Automate repetitive tasks, support workflows, document processing, and decision assistance.",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Business Intelligence",
      description: "Turn raw data into executive dashboards, operational insights, and performance visibility.",
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      title: "Workflow Automation",
      description: "Replace manual handoffs with custom workflows, notifications, approvals, and integrations.",
      icon: <Repeat className="w-8 h-8" />
    },
    {
      title: "SaaS Platforms",
      description: "Build subscription-ready products with role-based access, billing paths, and admin control.",
      icon: <Box className="w-8 h-8" />
    },
    {
      title: "Internal Business Tools",
      description: "Create fast, secure tools for operations, teams, field staff, and management decisions.",
      icon: <Wrench className="w-8 h-8" />
    },
    {
      title: "Analytics Dashboards",
      description: "Monitor KPIs, users, revenue, campaigns, operations, and system health in real time.",
      icon: <LayoutDashboard className="w-8 h-8" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Solutions | Durozen</title>
        <meta name="description" content="Business platforms that solve operational problems. ERP, CRM, AI Automation, BI, and more." />
      </Helmet>
      
      <div className="bg-background min-h-screen">
        <div className="max-w-7xl mx-auto px-6 pt-4 lg:pt-6 pb-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Solutions</h1>
            <p className="text-lg text-text-muted">
              Business platforms that solve operational problems. We design systems around business outcomes: faster decisions, cleaner operations, better customer experiences, and scalable digital revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const hoverColors = [
                'group-hover:text-secondary group-hover:border-secondary/50',
                'group-hover:text-brand-yellow group-hover:border-brand-yellow/50',
                'group-hover:text-brand-green group-hover:border-brand-green/50',
                'group-hover:text-primary group-hover:border-primary/50'
              ];
              const activeColorClass = hoverColors[index % 4];

              return (
                <div key={index} className={`bg-surface p-8 rounded-lg shadow-sm border border-outline transition-all duration-300 flex flex-col h-full group ${activeColorClass.split(' ')[1]}`}>
                  <div className={`mb-6 p-4 bg-primary/5 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform text-slate-400 ${activeColorClass.split(' ')[0]}`}>
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{solution.title}</h3>
                  <p className="text-text-muted">{solution.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
