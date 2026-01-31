import { ArrowRight } from 'lucide-react';
import { getImageById } from '@/lib/images';

export default function Hero() {
  const founderImage = getImageById('founder-portrait');
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary to-secondary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-secondary text-sm font-semibold tracking-widest uppercase">
                  Civil Engineering & Construction
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                Engineering Excellence Backed by On-Site Expertise
              </h1>
              <p className="text-lg text-primary-foreground text-opacity-90 max-w-xl">
                Government contracts. Developer partnerships. NGO collaborations. Since day one, we've delivered precision-engineered projects that clients trust. Roads, drainage, commercial buildings, properties — all supervised personally by our founder.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:opacity-90 transition-all transform hover:scale-105 shadow-lg"
              >
                Start Your Project Today
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-foreground text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground hover:text-primary transition-all"
              >
                See Completed Projects
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <p className="text-3xl font-bold text-secondary">15+</p>
                <p className="text-sm text-primary-foreground text-opacity-75">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-secondary">4+</p>
                <p className="text-sm text-primary-foreground text-opacity-75">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-secondary">100%</p>
                <p className="text-sm text-primary-foreground text-opacity-75">On-Site Supervision</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 md:h-full">
            <div className="absolute inset-0 rounded-xl overflow-hidden shadow-2xl">
              <img
                src={founderImage?.url || '/placeholder.svg?height=500&width=400'}
                alt={founderImage?.description || 'Gulaale Humphrey Adonia - Civil Engineer'}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-20" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-2xl max-w-xs">
              <p className="text-sm font-semibold text-primary mb-2">Gulaale Humphrey Adonia</p>
              <p className="text-xs text-muted-foreground">
                Civil Engineer • BSc, MSc in Transportation Engineering
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
