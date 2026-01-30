import { Hammer, Droplets, Building2, Spade, TreePine, Home, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: Hammer,
    title: 'Road Works & Maintenance',
    description: 'Connect communities and markets. We deliver durable low-volume roads, farm access routes, and rehabilitation projects that improve accessibility and economic opportunity.',
    benefits: 'Enhanced connectivity, cost-effective construction, proven durability',
    items: ['Low-volume roads (base & sealing)', 'Farm access roads', 'Highway maintenance & rehabilitation']
  },
  {
    icon: Droplets,
    title: 'Drainage & Culvert Works',
    description: 'Protect your assets. Strategic drainage and culvert systems prevent flooding, manage water flow, and safeguard infrastructure investments.',
    benefits: 'Flood prevention, water management, long-term protection',
    items: ['Roadside drainage systems', 'Culvert installation', 'Water flow management']
  },
  {
    icon: Building2,
    title: 'Commercial & Residential Construction',
    description: 'Build lasting value. From thriving commercial centers to quality residential spaces, we deliver structures that serve your market and stand the test of time.',
    benefits: 'Quality build, on-time delivery, full supervision',
    items: ['Commercial centers', 'Apartment complexes', 'Residential houses']
  },
  {
    icon: Spade,
    title: 'Exterior & Compound Works',
    description: 'Prepare for success. Professional grading, paving, and site preparation ensure your projects start with the strongest foundation.',
    benefits: 'Precision grading, professional paving, proper drainage prep',
    items: ['Grading & leveling', 'Paving & surfacing', 'Site preparation']
  },
  {
    icon: TreePine,
    title: 'Tourist Camps & Cabins',
    description: 'Create memorable experiences. We construct eco-friendly tourism facilities that blend seamlessly with natural settings while maximizing guest comfort.',
    benefits: 'Sustainable design, scenic integration, hospitality expertise',
    items: ['Eco-style tourist structures', 'Lodges & cabins', 'Nature setting designs']
  },
  {
    icon: Home,
    title: 'Real Estate Management & Consultancy',
    description: 'Make informed decisions. Our expert consultancy guides you through property development with confidence, ensuring profitable investments.',
    benefits: 'Expert advisory, market insights, risk management',
    items: ['Property management', 'Construction advisory', 'Development consulting']
  },
  {
    icon: BarChart3,
    title: 'Survey Works',
    description: 'Build on precision. Accurate surveying ensures your project starts right, preventing costly mistakes and ensuring regulatory compliance.',
    benefits: 'Accuracy guaranteed, regulatory compliance, cost prevention',
    items: ['Site surveys', 'Construction surveying', 'Project mapping']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive civil engineering and construction solutions tailored to your project needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-background rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-border hover:border-secondary/50 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-secondary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-background transition-all duration-300">
                  <Icon className="w-8 h-8 text-secondary group-hover:text-background" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-semibold text-secondary/70 uppercase tracking-wider mb-3">
                  {service.benefits}
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>

                {/* Items List */}
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="text-secondary font-bold mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Have a specific project in mind?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
