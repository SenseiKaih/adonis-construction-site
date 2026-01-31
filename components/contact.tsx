
'use client';

import React from "react"

import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formState);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: '', email: '', phone: '', projectType: '', message: '' });
    }, 3000);
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
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's Build Something Lasting
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tell us about your project. We'll respond within 24 hours with a professional assessment and next steps. No pressure. Just engineering expertise ready to work.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6">
                Direct Contact
              </h3>
              <p className="text-muted-foreground mb-8">
                Call, email, or complete the form. We review all inquiries personally and respond within 24 hours.
              </p>
            </div>

            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
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
                    <p className="text-foreground font-medium">
                      {info.value}
                    </p>
                  </div>
                </a>
              );
            })}

            {/* Hours */}
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

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-muted rounded-xl p-8 md:p-12">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle className="w-16 h-16 text-secondary mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Thank You!
                  </h3>
                  <p className="text-muted-foreground max-w-sm">
                    We've received your message and will be in touch within 24 hours. We look forward to discussing your project.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                        placeholder="Your name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                        placeholder="+256 (0) xxx xxx xxx"
                      />
                    </div>

                    {/* Project Type */}
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-semibold text-foreground mb-2">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formState.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                      >
                        <option value="">Select a project type</option>
                        <option value="road">Road Works</option>
                        <option value="drainage">Drainage & Culverts</option>
                        <option value="building">Commercial Building</option>
                        <option value="residential">Residential Building</option>
                        <option value="exterior">Exterior & Compound Works</option>
                        <option value="tourist">Tourist Camps & Cabins</option>
                        <option value="consultancy">Property Consultancy</option>
                        <option value="survey">Survey Works</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                      placeholder="Tell us about your project, location, scope, and any specific requirements..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Send Message
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
