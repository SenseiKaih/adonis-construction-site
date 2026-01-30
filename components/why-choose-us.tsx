"use client";

import { CheckCircle, Shield, Users, Zap } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: 'Qualified Engineering Leadership',
    description: 'BSc Civil Engineering + MSc in Transportation Engineering. Your projects benefit from both academic excellence and 15+ years of real-world field experience.',
  },
  {
    icon: Users,
    title: 'Personal On-Site Supervision',
    description: 'The founder personally oversees every project stage. No surprises. Real-time quality control. Direct accountability from start to finish.',
  },
  {
    icon: CheckCircle,
    title: 'Full Standards Compliance',
    description: 'Every project meets engineering codes, safety standards, and local regulations. We document everything. We cut no corners.',
  },
  {
    icon: Zap,
    title: 'Smart Value Engineering',
    description: 'Efficient solutions that maximize your budget without sacrificing quality. No hidden costs. Complete transparency. Proven cost savings.',
  },
];

const commitments = [
  'Safety-first approach on all job sites',
  'Professional team with safety certifications',
  'Quality materials and proven construction methods',
  'Realistic timelines and project planning',
  'Clear communication throughout execution',
  'Post-project support and maintenance advisory',
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by government agencies, developers, NGOs, and private investors for over a decade.
          </p>
        </div>

        {/* Main Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className="bg-background rounded-xl p-8 border border-border">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-secondary bg-opacity-20">
                      <Icon className="h-6 w-6 text-secondary-foreground" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Commitments Section */}
        <div className="bg-primary rounded-xl p-12 md:p-16 text-primary-foreground">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Our Commitments
              </h3>
              <p className="text-primary-foreground text-opacity-90 mb-8">
                We stand behind our work with unwavering commitment to excellence, safety, and client satisfaction.
              </p>

              <ul className="space-y-3">
                {commitments.map((commitment, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-primary-foreground text-opacity-90">
                      {commitment}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-secondary opacity-10 rounded-full" />
              <div className="relative bg-primary-foreground bg-opacity-10 rounded-xl p-8 backdrop-blur-sm border border-primary-foreground border-opacity-20">
                <div className="space-y-6">
                  <div>
                    <p className="text-4xl font-bold text-secondary mb-2">15+</p>
                    <p className="text-muted-foreground text-opacity-75">Years in the Industry</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-secondary mb-2">50+</p>
                    <p className="text-muted-foreground text-opacity-75">Successful Projects</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-secondary mb-2">100%</p>
                    <p className="text-muted-foreground text-opacity-75">Client Satisfaction Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to partner with professionals who deliver?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Let's Talk About Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
