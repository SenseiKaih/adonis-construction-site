import { ArrowRight, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { getImageById } from '@/lib/images';

export default function Hero() {
  const founderImage = getImageById('founder-portrait');
  
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary via-primary/95 to-slate-900 overflow-hidden py-16 md:py-24">
      {/* Dynamic Background Glow Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/15 border border-secondary/30 text-secondary text-xs md:text-sm font-semibold tracking-wider uppercase backdrop-blur-md">
                <ShieldCheck className="w-4 h-4 text-secondary" />
                Civil Engineering & Construction • Uganda
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight tracking-tight">
                Engineering Excellence <span className="text-secondary">Backed by On-Site Expertise</span>
              </h1>
              
              <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl leading-relaxed font-light">
                Trusted by government agencies, private developers, and NGOs across Uganda. From low-volume roads and complex drainage to commercial centers — every project is personally supervised by founder <strong className="font-semibold text-white">Eng. Gulaale Humphrey Adonia</strong>.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                <span>Roads & Drainage Specialists</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                <span>100% Personal Site Supervision</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                <span>Government & NGO Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                <span>On-Time & Within Budget</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-secondary-foreground font-bold text-base rounded-xl hover:opacity-95 transition-all transform hover:-translate-y-0.5 shadow-xl hover:shadow-secondary/25 group"
              >
                Start Your Project Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 backdrop-blur-md bg-white/5 text-primary-foreground font-semibold text-base rounded-xl hover:bg-white/10 hover:border-white/40 transition-all"
              >
                Explore Track Record
              </a>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="backdrop-blur-md bg-white/5 border border-white/10 p-4 rounded-xl text-center sm:text-left">
                <p className="text-3xl font-extrabold text-secondary">50+</p>
                <p className="text-xs text-primary-foreground/75 font-medium mt-1">Projects Delivered</p>
              </div>
              <div className="backdrop-blur-md bg-white/5 border border-white/10 p-4 rounded-xl text-center sm:text-left">
                <p className="text-3xl font-extrabold text-secondary">4+</p>
                <p className="text-xs text-primary-foreground/75 font-medium mt-1">Years Experience</p>
              </div>
              <div className="backdrop-blur-md bg-white/5 border border-white/10 p-4 rounded-xl text-center sm:text-left">
                <p className="text-3xl font-extrabold text-secondary">100%</p>
                <p className="text-xs text-primary-foreground/75 font-medium mt-1">Supervision Rate</p>
              </div>
            </div>
          </div>

          {/* Right Image Container */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none h-[440px] sm:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src={founderImage?.url || '/placeholder.svg'}
                alt="Gulaale Humphrey Adonia - Founder & Lead Civil Engineer at Adonis Constructions Ug"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />

              {/* Floating Top Badge */}
              <div className="absolute top-4 right-4 backdrop-blur-md bg-slate-900/80 border border-white/20 p-3 rounded-xl flex items-center gap-2 shadow-xl">
                <Award className="w-5 h-5 text-secondary" />
                <span className="text-xs font-semibold text-white">BSc & MSc Civil Eng.</span>
              </div>

              {/* Floating Founder Info Card */}
              <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-slate-900/90 border border-white/15 p-4 rounded-xl shadow-2xl">
                <p className="text-sm font-bold text-white mb-0.5">Eng. Gulaale Humphrey Adonia</p>
                <p className="text-xs text-secondary font-medium">Founder & Managing Director</p>
                <p className="text-[11px] text-muted-foreground mt-1">Civil Engineer • Transportation & Infrastructure Specialist</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
