/**
 * REPLICABLE PROJECT TEMPLATE
 * Use this structure to showcase projects and build social proof
 */

export interface ProjectTemplate {
  id: string;
  title: string;
  category: 'commercial' | 'residential' | 'roads' | 'drainage' | 'tourism' | 'supervision' | 'exterior';
  location: string;
  role: 'Contractor' | 'Project Manager' | 'Site Engineer' | 'Consultant' | 'Developer';
  shortDescription: string; // 1-2 lines, benefit-focused
  challenge: string; // The problem we solved
  solution: string; // Our approach and methodology
  results: string[]; // Quantified outcomes
  specifications: {
    duration?: string;
    budget?: string;
    team?: string;
    scale?: string;
  };
  testimonial?: {
    quote: string;
    author: string;
    title: string;
  };
  url: string; // Image URL from Blob
  galleryImages?: string[];
}

/**
 * TEMPLATE STRUCTURE NOTES
 * 
 * 1. SHORT DESCRIPTION: Lead with outcome/benefit
 *    Bad: "Foundation construction project"
 *    Good: "Built premium residential complex with scenic views and integrated tourism"
 * 
 * 2. CHALLENGE: Real, specific problem we solved
 *    Include: Timeline constraints, technical difficulty, or market conditions
 * 
 * 3. SOLUTION: Our unique approach
 *    Include: Innovation, efficiency, or expertise applied
 * 
 * 4. RESULTS: Quantified, benefit-focused
 *    Examples: "Completed 30 days early", "20% under budget", "100% safety record"
 * 
 * 5. SPECIFICATIONS: Add credibility through details
 *    Timeline, budget, team size, scale of work
 * 
 * 6. TESTIMONIAL: Social proof from client (optional but powerful)
 */

export const projectTemplateExample: ProjectTemplate = {
  id: 'residential-jinja-complex',
  title: 'Premium Residential Complex with Tourist Integration',
  category: 'residential',
  location: 'Jinja District, Uganda',
  role: 'Project Manager',
  shortDescription: 'Built a premium multi-unit residential development with integrated tourist accommodation, combining permanent housing with hospitality revenue stream.',
  challenge: 'Client needed a property that served dual purposes: family residences AND tourist income. Required careful architectural planning, structural design for different occupancy patterns, and regulatory compliance across residential and hospitality codes. Steep hillside location added complexity.',
  solution: 'Designed integrated layout with separate guest and residential sections, unified utilities and water management. Used elevated construction techniques for hillside stability. Implemented professional drainage system handling both domestic and tourism wastewater. Coordinated with local authorities on dual-use permitting.',
  results: [
    'Delivered 6 months ahead of schedule through efficient project sequencing',
    'Completed 18% under budgeted cost via smart material sourcing',
    'Achieved zero safety incidents across 14-month construction period',
    'Tourist occupancy generating 45% additional revenue vs. residential-only model'
  ],
  specifications: {
    duration: '14 months',
    budget: 'Custom quote (complex dual-use project)',
    team: '12-person crew + specialized subcontractors',
    scale: '3,500 m² constructed area'
  },
  testimonial: {
    quote: 'Gulaale delivered exactly what we envisioned. The professional oversight meant no surprises. Now our property generates income from both residential tenants and tourism. Outstanding investment.',
    author: 'Property Developer',
    title: 'Real Estate Investor'
  },
  url: '/images/img-20260130-wa0024.jpg',
};

/**
 * QUICK ADD TEMPLATE
 * Copy this to add a new project showcase
 */
export const newProjectTemplate = (): ProjectTemplate => ({
  id: '',
  title: '', // Outcome-focused title
  category: 'residential', // Choose appropriate category
  location: '', // City/District, Uganda
  role: 'Project Manager', // Your role
  shortDescription: '', // 1-2 sentence benefit statement
  challenge: '', // The specific problem we solved
  solution: '', // Our methodology and approach
  results: [
    // Quantified outcomes
    // Focus on: timeline, cost, quality, or market impact
  ],
  specifications: {
    duration: '', // e.g., "12 months"
    budget: '', // e.g., "$2.5M" or "Custom quote"
    team: '', // e.g., "8-person crew"
    scale: '', // e.g., "5,000 m²"
  },
  testimonial: {
    quote: '', // Real or representative quote
    author: '', // Client name or role
    title: '', // Client position
  },
  url: '', // Blob storage image URL
});

/**
 * CONVERSION FRAMEWORK FOR PROJECT DESCRIPTIONS
 * 
 * STRUCTURE FOR MAXIMUM IMPACT:
 * 
 * Title: [Action/Outcome] + [Project Type]
 * Example: "Built. Connected. Delivered. Premium Residential + Tourism Facility"
 * 
 * Challenge: Include
 * - Specific constraints (timeline, terrain, regulations)
 * - Market/client need
 * - Why this was difficult
 * 
 * Solution: Include
 * - Unique approach/methodology
 * - Expertise applied
 * - Innovation/efficiency element
 * 
 * Results: Always quantify
 * - Timeline achievement (early/on-time)
 * - Budget performance (under/efficient)
 * - Quality metrics (safety, durability, certifications)
 * - Business impact (revenue, ROI, satisfaction)
 * 
 * SAMPLE RESULTS PHRASES:
 * - "Delivered 4 months ahead of schedule"
 * - "Completed 15% under budget"
 * - "Zero safety incidents across [duration]"
 * - "Client reports [satisfaction metric]"
 * - "Now generating [revenue/ROI metric]"
 * - "[Certification/standard] compliance achieved"
 * - "Inspection passed first submission"
 */
