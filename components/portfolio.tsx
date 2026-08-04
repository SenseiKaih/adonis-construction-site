'use client';

import { useState } from 'react';
import Image from 'next/image';
import { projectImages, ProjectImage } from '@/lib/images';
import { MapPin, Briefcase, X, ExternalLink } from 'lucide-react';

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
  const [selectedProject, setSelectedProject] = useState<ProjectImage | null>(null);

  const filteredProjects = activeCategory === 'All Projects'
    ? projectImages.filter(img => img.category !== 'founder')
    : projectImages.filter(img => img.category === categoryMap[activeCategory]);

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-background border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-3.5 py-1 bg-secondary/15 rounded-full text-secondary text-xs font-bold uppercase tracking-wider">
            Proven Civil Engineering Record
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
            Featured Projects & Track Record
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            50+ successfully executed civil engineering & construction projects across Uganda. Real field work, verified quality, and 100% on-site supervision.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 md:px-5 py-2.5 rounded-xl font-medium transition-all text-xs md:text-sm ${
                activeCategory === cat
                  ? 'bg-secondary text-secondary-foreground shadow-md scale-105 font-bold'
                  : 'bg-muted text-muted-foreground hover:bg-secondary/20 hover:text-foreground'
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
                className="group bg-card rounded-2xl overflow-hidden border border-border shadow-md hover:shadow-2xl hover:border-secondary/50 transition-all duration-300 flex flex-col"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-muted">
                  <Image
                    src={project.url || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-xs font-bold rounded-full shadow-md">
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-card-foreground group-hover:text-secondary transition-colors">
                      {project.title}
                    </h3>

                    <div className="space-y-1.5 text-xs text-muted-foreground">
                      {project.location && (
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                          <span>{project.location}</span>
                        </div>
                      )}
                      {project.role && (
                        <div className="flex items-center gap-1.5">
                          <Briefcase className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                          <span>{project.role}</span>
                        </div>
                      )}
                    </div>

                    <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full mt-2 px-4 py-2.5 border border-secondary/50 text-secondary hover:bg-secondary hover:text-secondary-foreground font-semibold rounded-xl transition-all text-sm flex items-center justify-center gap-2 group-hover:border-secondary"
                  >
                    View Project Details
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-16 bg-muted/40 rounded-2xl border border-dashed border-border">
              <p className="text-muted-foreground font-medium">
                No projects found in this category. Select another filter or check back soon!
              </p>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-primary/95 to-slate-900 rounded-2xl p-8 md:p-12 text-center text-primary-foreground border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Have a Road, Building, or Drainage Project in Mind?
            </h3>
            <p className="text-primary-foreground/80 text-sm md:text-base leading-relaxed">
              We specialize in custom civil engineering solutions tailored to budget, regulatory, and topographical requirements in Uganda.
            </p>
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-block px-8 py-3.5 bg-secondary text-secondary-foreground font-bold rounded-xl hover:opacity-95 hover:scale-105 transition-all shadow-lg"
              >
                Discuss Your Project Scope
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Interactive Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-card rounded-2xl max-w-2xl w-full border border-border shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="relative h-64 md:h-80 w-full bg-slate-900">
              <Image
                src={selectedProject.url || "/placeholder.svg"}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-slate-950/70 text-white p-2 rounded-full hover:bg-slate-900 transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-bold rounded-full">
                  {selectedProject.category.toUpperCase()}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto space-y-4">
              <h3 className="text-2xl font-bold text-foreground">{selectedProject.title}</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 bg-muted/60 rounded-xl text-xs">
                {selectedProject.location && (
                  <div>
                    <span className="font-bold text-secondary uppercase tracking-wider block">Location</span>
                    <span className="text-foreground font-medium">{selectedProject.location}</span>
                  </div>
                )}
                {selectedProject.role && (
                  <div>
                    <span className="font-bold text-secondary uppercase tracking-wider block">Engineering Role</span>
                    <span className="text-foreground font-medium">{selectedProject.role}</span>
                  </div>
                )}
              </div>

              <div>
                <h4 className="text-sm font-bold text-foreground mb-1">Project Summary</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{selectedProject.description}</p>
              </div>

              <div className="pt-4 border-t border-border flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2 bg-secondary text-secondary-foreground font-bold rounded-xl text-sm hover:opacity-90 transition-opacity"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
