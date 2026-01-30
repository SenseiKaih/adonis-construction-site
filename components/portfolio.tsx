'use client';

import { useState } from 'react';
import { projectImages } from '@/lib/images';

const categories = [
  'All Projects',
  'Commercial Buildings',
  'Residential Buildings',
  'Supervision',
  'Roads',
  'Drainage',
  'Tourist Camps',
  'Exterior Works',
];

const categoryMap: Record<string, string> = {
  'Commercial Buildings': 'commercial',
  'Residential Buildings': 'residential',
  'Supervision': 'supervision',
  'Roads': 'roads',
  'Drainage': 'drainage',
  'Tourist Camps': 'tourist',
  'Exterior Works': 'exterior',
};

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All Projects');

  const filteredProjects = activeCategory === 'All Projects'
    ? projectImages.filter(img => img.category !== 'founder')
    : projectImages.filter(img => img.category === categoryMap[activeCategory]);

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Track Record
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            50+ completed projects across Uganda. Real work, real results, real clients. Every project personally supervised from foundation to completion.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 md:px-6 py-2 rounded-full font-medium transition-all text-sm md:text-base ${
                activeCategory === cat
                  ? 'bg-secondary text-secondary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-secondary hover:text-secondary-foreground'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-muted">
                  <img
                    src={project.url || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full">
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-card-foreground mb-2">
                    {project.title}
                  </h3>

                  <div className="space-y-3 mb-4">
                    {project.location && (
                      <div>
                        <p className="text-xs font-semibold text-secondary uppercase tracking-wider">
                          Location
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {project.location}
                        </p>
                      </div>
                    )}

                    {project.role && (
                      <div>
                        <p className="text-xs font-semibold text-secondary uppercase tracking-wider">
                          Role
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {project.role}
                        </p>
                      </div>
                    )}
                  </div>

                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>

                  <button className="w-full px-4 py-2 border border-secondary text-secondary font-medium rounded-lg hover:bg-secondary hover:text-secondary-foreground transition-colors text-sm">
                    View Details
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">
                Projects in this category coming soon.
              </p>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-secondary bg-opacity-10 rounded-xl p-12 text-center border border-secondary border-opacity-20">
          <h3 className="text-2xl font-bold text-foreground mb-3">
            More Projects Available
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            These are just a few highlights. Let's discuss your specific project needs and explore how we can help bring your vision to life.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
