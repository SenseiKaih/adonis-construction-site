'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

type FormState = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
};

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  projectType: '',
  message: '',
};

const googleToLocal: Record<string, keyof FormState> = {
  'entry.951111352': 'name',
  'entry.1690999276': 'email',
  'entry.102180585': 'phone',
  'entry.1206861024': 'projectType',
  'entry.4159806': 'message',
};

const formEndpoint =
  'https://docs.google.com/forms/d/e/1FAIpQLSejxP8uS8r7r_J_hciunykDjlg2WcAKVGIt0Ex7ARvS_gyeDg/formResponse';

export default function Contact() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    const key = googleToLocal[name] ?? name;
    if (key in formState) {
      setFormState(prev => ({ ...prev, [key]: value } as FormState));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    const formData = new FormData();
    formData.append('entry.951111352', formState.name);
    formData.append('entry.1690999276', formState.email);
    formData.append('entry.102180585', formState.phone);
    formData.append('entry.1206861024', formState.projectType);
    formData.append('entry.4159806', formState.message);

    try {
      await fetch(formEndpoint, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      });
      setIsSubmitted(true);
      setFormState(initialState);
    } catch {
      // ignore
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Primary',
      value: '+256769408406',
      href: 'tel:+256769408406',
    },
    {
      icon: Phone,
      label: 'Secondary',
      value: '+256700195911',
      href: 'tel:+256700195911',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'gulaaleadonia@gmail.com',
      href: 'mailto:gulaaleadonia@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Jinja, Uganda',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's Build Something Lasting
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tell us about your project. We'll respond within 24 hours with a
            professional assessment and next steps. No pressure. Just
            engineering expertise ready to work.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6">
                Direct Contact
              </h3>
              <p className="text-muted-foreground mb-8">
                Call, email, or complete the form. We review all inquiries
                personally and respond within 24 hours.
              </p>
            </div>

            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <a
                  key={i}
                  href={info.href}
                  className="flex gap-4 p-4 rounded-lg hover:bg-muted transition-colors"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-secondary bg-opacity-20">
                      <Icon className="h-5 w-5 text-secondary-foreground" />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-secondary uppercase tracking-wider">
                      {info.label}
                    </p>
                    <p className="text-foreground font-medium">{info.value}</p>
                  </div>
                </a>
              );
            })}

            <div className="pt-8 border-t border-border">
              <h4 className="font-semibold text-foreground mb-4">
                Business Hours
              </h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p>Saturday: 9:00 AM - 1:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-muted rounded-xl p-8 md:p-12">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle className="w-16 h-16 text-secondary mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Thank You!
                  </h3>
                  <p className="text-muted-foreground max-w-sm">
                    We've received your message and will be in touch within 24
                    hours. We look forward to discussing your project.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-foreground mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="entry.951111352"
                        type="text"
                        autoComplete="name"
                        aria-required="true"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-foreground mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="entry.1690999276"
                        type="email"
                        autoComplete="email"
                        aria-required="true"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-foreground mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="entry.102180585"
                        type="tel"
                        autoComplete="tel"
                        pattern="^\+?[0-9\s\-()]{7,}$"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                        placeholder="+256 (0) xxx xxx xxx"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="projectType"
                        className="block text-sm font-semibold text-foreground mb-2"
                      >
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="entry.1206861024"
                        value={formState.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                      >
                        <option value="">Select Project Type</option>
                        <option value="Road Works">Road Works</option>
                        <option value="Drainage & Culverts">
                          Drainage & Culverts
                        </option>
                        <option value="Commercial Building">
                          Commercial Building
                        </option>
                        <option value="Residential Building">
                          Residential Building
                        </option>
                        <option value="Exterior & Compound Works">
                          Exterior & Compound Works
                        </option>
                        <option value="Tourist Camps & Cabins">
                          Tourist Camps & Cabins
                        </option>
                        <option value="Property Consultancy">
                          Property Consultancy
                        </option>
                        <option value="Survey Works">Survey Works</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-foreground mb-2"
                    >
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="entry.4159806"
                      rows={5}
                      autoComplete="off"
                      aria-required="true"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                      placeholder="Tell us about your project, location, scope, and any specific requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>

                  <p className="text-xs text-muted-foreground text-center">
                    We'll respond to your inquiry within 24 business hours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
