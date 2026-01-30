import { Award, Briefcase, MapPin } from 'lucide-react';
import { getImageById } from '@/lib/images';

export default function About() {
  const founderImage = getImageById('founder-portrait');
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 md:h-[500px] rounded-xl overflow-hidden shadow-xl order-2 md:order-1">
            <img
              src={founderImage?.url || '/placeholder.svg?height=500&width=400'}
              alt={founderImage?.description || 'Gulaale Humphrey Adonia - Civil Engineer'}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-8 order-1 md:order-2">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Gulaale Humphrey Adonia
              </h2>
              <p className="text-lg text-secondary font-semibold mb-2">Civil Engineer • Project Leader</p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Government contracts. Developer partnerships. NGO collaborations. For 15+ years, I've delivered engineered excellence on 50+ projects across Uganda — personally supervising every one.
              </p>
            </div>

            {/* Credentials */}
            <div className="space-y-4">
              <div className="flex gap-4 p-4 bg-secondary/10 rounded-lg">
                <div className="flex-shrink-0">
                  <Award className="w-6 h-6 text-secondary mt-1" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Academic Excellence</h3>
                  <p className="text-muted-foreground text-sm">
                    BSc Civil Engineering • MSc in Transportation Engineering (pursuing) — Continuous learning ensures cutting-edge project delivery
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-secondary/10 rounded-lg">
                <div className="flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-secondary mt-1" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Proven Track Record</h3>
                  <p className="text-muted-foreground text-sm">
                    50+ completed projects • Zero safety incidents • 100% on-site supervision • Consistent early delivery, under budget
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-secondary/10 rounded-lg">
                <div className="flex-shrink-0">
                  <MapPin className="w-6 h-6 text-secondary mt-1" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Service Area</h3>
                  <p className="text-muted-foreground text-sm">
                    Based in Jinja, serving all of Uganda — roads, drainage, commercial buildings, residential, tourism facilities, property consultancy
                  </p>
                </div>
              </div>
            </div>

            {/* About Text */}
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <span className="font-semibold text-foreground">Here's what matters:</span> When you hire us, you get me. Every project gets personal oversight. Not a site supervisor checking boxes — the founder ensuring quality, safety, and timeline adherence.
              </p>
              <p>
                My reputation is built on roads that connect communities, buildings that stand strong, and drainage systems that protect assets. Every client — government agencies, developers, NGOs, farmers — trusts me because I deliver results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
