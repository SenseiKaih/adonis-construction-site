"use client";

import { useState } from 'react';
import { CheckCircle, Shield, Users, Zap, ChevronDown, HelpCircle } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: 'Qualified Engineering Leadership',
    description: 'BSc Civil Engineering + MSc in Transportation Engineering. Your projects benefit from both academic rigor and real-world field expertise.',
  },
  {
    icon: Users,
    title: 'Personal On-Site Supervision',
    description: 'Eng. Gulaale Humphrey Adonia personally oversees every project stage. Real-time quality control and direct accountability from start to finish.',
  },
  {
    icon: CheckCircle,
    title: 'Full Standards & Regulatory Compliance',
    description: 'Every project strictly complies with UNRA/Ministry of Works engineering codes, safety protocols, and environmental guidelines in Uganda.',
  },
  {
    icon: Zap,
    title: 'Value Engineering & Budget Discipline',
    description: 'Optimized material selection and structural designs to maximize budget efficiency without sacrificing quality or longevity.',
  },
];

const commitments = [
  'Safety-first approach on all job sites across Uganda',
  'Professional certified engineers and skilled technical crews',
  'Tested quality materials and proven construction methodologies',
  'Realistic timelines and transparent progress reporting',
  'Clear, direct communication with project stakeholders',
  'Post-completion technical support and maintenance advisory',
];

const faqs = [
  {
    question: "What regions of Uganda does Adonis Constructions Ug serve?",
    answer: "We are based in Jinja and provide civil engineering, road construction, drainage works, commercial building, and property consultancy services across all regions of Uganda including Kampala, Mukono, Entebbe, and Eastern/Central Districts."
  },
  {
    question: "Do you handle government contracts and NGO projects?",
    answer: "Yes. We have extensive experience working with government agencies, local district councils, non-governmental organizations (NGOs), and commercial developers."
  },
  {
    question: "What guarantees 100% on-site supervision?",
    answer: "Unlike firms that assign distant site inspectors, founder Eng. Gulaale Humphrey Adonia is physically present on site to oversee critical construction milestones."
  },
  {
    question: "How do I request a cost estimate or project site visit?",
    answer: "You can reach us directly via the contact form on this website or via phone/WhatsApp. We schedule preliminary site surveys and provide structured engineering proposals."
  }
];

export default function WhyChooseUs() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <section className="py-20 md:py-32 bg-muted/50 border-b border-border/50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-3.5 py-1 bg-secondary/15 rounded-full text-secondary text-xs font-bold uppercase tracking-wider">
            Why Work With Us
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
            The Adonis Engineering Advantage
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Combining technical excellence, personal accountability, and proven field experience to protect your investments.
          </p>
        </div>

        {/* Main Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-lg transition-all hover:border-secondary/40">
                <div className="flex gap-5">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-secondary/20 text-secondary">
                      <Icon className="h-7 w-7" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Commitments Section */}
        <div className="bg-primary rounded-2xl p-8 md:p-14 text-primary-foreground shadow-2xl relative overflow-hidden mb-20 border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight">
                Our Quality & Safety Commitments
              </h3>
              <p className="text-primary-foreground/90 text-base leading-relaxed">
                We take immense pride in setting the standard for civil engineering integrity in Uganda.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {commitments.map((commitment, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-primary-foreground/90 text-sm">
                      {commitment}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-md border border-white/20 space-y-6">
                <div>
                  <p className="text-4xl font-extrabold text-secondary mb-1">4+</p>
                  <p className="text-sm text-primary-foreground/80 font-medium">Years Active Industry Leadership</p>
                </div>
                <div className="pt-4 border-t border-white/15">
                  <p className="text-4xl font-extrabold text-secondary mb-1">50+</p>
                  <p className="text-sm text-primary-foreground/80 font-medium">Successfully Completed Projects</p>
                </div>
                <div className="pt-4 border-t border-white/15">
                  <p className="text-4xl font-extrabold text-secondary mb-1">100%</p>
                  <p className="text-sm text-primary-foreground/80 font-medium">On-Site Founder Supervision</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Interactive FAQ Section for SEO & User Experience */}
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/15 rounded-full text-secondary text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-4 h-4 text-secondary" />
              Frequently Asked Questions
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">Got Questions? We Have Answers</h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-border overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left flex justify-between items-center font-bold text-foreground hover:text-secondary transition-colors"
                >
                  <span className="text-base md:text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-secondary transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed border-t border-border/50 pt-3 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to partner with civil engineers who deliver precision and reliability?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-secondary text-secondary-foreground font-bold rounded-xl hover:opacity-90 hover:scale-105 transition-all shadow-lg"
          >
            Schedule a Technical Consultation
          </a>
        </div>

      </div>
    </section>
  );
}
