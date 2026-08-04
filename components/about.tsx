import { Award, Briefcase, MapPin, CheckCircle, Shield } from 'lucide-react';
import Image from 'next/image';
import { getImageById } from '@/lib/images';

export default function About() {
  const founderImage = getImageById('founder-portrait');
  
  return (
    <section id="about" className="py-20 md:py-32 bg-background border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Image */}
          <div className="relative h-96 md:h-[540px] rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1 border border-border group">
            <Image
              src={founderImage?.url || '/placeholder.svg'}
              alt={founderImage?.description || 'Eng. Gulaale Humphrey Adonia - Lead Civil Engineer Adonis Constructions Ug'}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white p-4 bg-background/20 backdrop-blur-md rounded-xl border border-white/20">
              <p className="text-xs uppercase tracking-wider text-secondary font-bold">On-Site Guarantee</p>
              <p className="text-sm font-semibold text-white mt-0.5">100% Founder Oversight on Every Job Site in Uganda</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 order-1 md:order-2">
            <div>
              <div className="inline-block px-3 py-1 bg-secondary/10 rounded-full text-secondary text-xs font-bold uppercase tracking-wider mb-3">
                About The Founder
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-3 tracking-tight">
                Eng. Gulaale Humphrey Adonia
              </h2>
              <p className="text-lg text-secondary font-bold mb-4">Managing Director & Lead Civil Engineer</p>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                Government contracts. Commercial developers. NGO initiatives. For over 4 years, I've spearheaded precision civil engineering across Uganda — ensuring structural integrity, regulatory compliance, and budget discipline on every single project.
              </p>
            </div>

            {/* Credentials */}
            <div className="space-y-4">
              <div className="flex gap-4 p-4 bg-card rounded-xl border border-border shadow-sm hover:border-secondary/50 transition-colors">
                <div className="flex-shrink-0">
                  <div className="p-2.5 bg-secondary/15 rounded-lg">
                    <Award className="w-6 h-6 text-secondary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1 text-base">Academic & Professional Qualifications</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    BSc Civil Engineering • MSc in Transportation Engineering — Applying international engineering standards to local Ugandan infrastructure.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-card rounded-xl border border-border shadow-sm hover:border-secondary/50 transition-colors">
                <div className="flex-shrink-0">
                  <div className="p-2.5 bg-secondary/15 rounded-lg">
                    <Briefcase className="w-6 h-6 text-secondary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1 text-base">Proven Track Record</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    50+ completed civil engineering & construction projects • Zero safety incidents • 100% direct site supervision.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-card rounded-xl border border-border shadow-sm hover:border-secondary/50 transition-colors">
                <div className="flex-shrink-0">
                  <div className="p-2.5 bg-secondary/15 rounded-lg">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1 text-base">Serving All Regions of Uganda</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Headquartered in Jinja, actively executing road, drainage, commercial building, and property development projects across Uganda.
                  </p>
                </div>
              </div>
            </div>

            {/* About Text */}
            <div className="p-5 bg-muted/60 rounded-xl border border-border text-muted-foreground leading-relaxed space-y-2 text-sm md:text-base">
              <p>
                <strong className="text-foreground font-semibold">Our Uncompromising Promise:</strong> When you hire Adonis Constructions Ug, you get direct engineering accountability. No distant site supervisors checking boxes — the founder personally ensures every foundation, drainage slope, and structural element meets design specs.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
