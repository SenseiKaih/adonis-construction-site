import { type LucideIcon } from 'lucide-react';

/**
 * REPLICABLE SERVICE TEMPLATE
 * Use this structure to add new services quickly
 */

export interface ServiceTemplate {
  id: string;
  icon: LucideIcon;
  title: string;
  headline: string; // Conversion-focused headline
  description: string; // Emotional benefit + practical value
  benefits: string; // 3-4 key benefits comma-separated
  keyPoints: string[]; // Specific offerings
  cta: string; // Call to action
  deliverables: string[]; // What client receives
  idealFor: string[]; // Target clients
  roi: string; // Return on investment message
}

/**
 * TEMPLATE STRUCTURE NOTES:
 * 
 * 1. HEADLINE: Speaks to outcome/benefit, not the service
 *    Bad: "Road Construction"
 *    Good: "Connect Communities. Drive Economic Growth."
 * 
 * 2. DESCRIPTION: Opens with problem/opportunity, then solution
 *    Pattern: "[Problem/Opportunity]. [Our solution]. [Long-term benefit]."
 * 
 * 3. BENEFITS: Brief, outcomes-focused, scannable
 *    Format: "Benefit one, benefit two, benefit three"
 * 
 * 4. KEY POINTS: Specific, detailed offerings
 *    Include scope and scope breadth
 * 
 * 5. DELIVERABLES: What client physically receives
 *    Be specific and comprehensive
 * 
 * 6. ROI: Quantify the value
 *    Examples: "Save 30% on labor costs", "60% faster completion"
 */

export const serviceTemplateExample: ServiceTemplate = {
  id: 'roads-connectivity',
  icon: require('lucide-react').Hammer,
  title: 'Road Works & Maintenance',
  headline: 'Connect Communities. Drive Economic Growth.',
  description: 'Rural communities need access to markets. We build durable, cost-effective road networks that open economic opportunity and improve quality of life.',
  benefits: 'Enhanced connectivity, cost-effective construction, proven durability',
  keyPoints: [
    'Low-volume roads with engineered base and protective sealing',
    'Farm-to-market access roads for agricultural regions',
    'Highway maintenance and rehabilitation services',
    'Complete surveying and planning included',
    'On-site engineering oversight from start to finish'
  ],
  deliverables: [
    'Completed road surface with engineered specifications',
    'Drainage systems preventing water damage',
    'Engineering certification and compliance documentation',
    'Site restoration and cleanup',
    'Post-project maintenance advisory'
  ],
  idealFor: [
    'Government infrastructure programs',
    'Agricultural development initiatives',
    'Real estate developers',
    'NGOs focused on rural development',
    'Regional governments and councils'
  ],
  cta: 'Plan Your Road Project',
  roi: 'Typically save 25-35% vs. untrained contractors while ensuring 10+ year durability'
};

/**
 * QUICK ADD TEMPLATE
 * Copy this structure to add a new service
 */
export const newServiceTemplate = (): ServiceTemplate => ({
  id: '',
  icon: null as any, // Replace with actual icon
  title: '',
  headline: '', // Outcome-focused, emotional
  description: '', // Problem → Solution → Benefit
  benefits: '', // Comma-separated outcomes
  keyPoints: [
    // Specific, detailed offerings
  ],
  deliverables: [
    // Physical/tangible outcomes
  ],
  idealFor: [
    // Target customer segments
  ],
  cta: '', // Action-oriented button text
  roi: '', // Quantified value message
});
