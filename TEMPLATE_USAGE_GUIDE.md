# Template Usage Guide
## How to Add Services & Projects (5-Minute Setup)

---

## PART 1: ADDING A NEW SERVICE

### Step 1: Get Your Icon
Go to [lucide-react icons](https://lucide.dev) and choose an icon that represents your service.

**Example icons:**
- Hammer, Wrench, Drill (construction)
- Droplets, Waves, Pipe (drainage)
- Building2, Home, Building (residential)
- Zap, Power, Gauge (electrical/efficiency)
- Leaf, Trees, Sprout (environmental)
- Briefcase, TrendingUp, BarChart3 (consulting)

### Step 2: Edit Services Component
1. Open `/components/services.tsx`
2. Import your icon at the top with existing imports:
   ```tsx
   import { Hammer, YourNewIcon } from 'lucide-react';
   ```

3. Add new service to the `services` array, using this template:

```tsx
{
  icon: YourNewIcon,
  title: 'Your Service Title',
  headline: 'Benefit-Focused Headline',
  description: 'Problem → Solution → Benefit statement',
  benefits: 'Benefit one, benefit two, benefit three',
  keyPoints: [
    'Specific offering 1',
    'Specific offering 2',
    'Specific offering 3'
  ],
}
```

### Step 3: Follow the Copy Framework

**Headlines (Problem/Opportunity Focus):**
- ✅ "Connect Communities" (Road Works)
- ✅ "Protect Your Assets" (Drainage)
- ✅ "Build Lasting Value" (Construction)
- ❌ "Provide Road Services"

**Descriptions (3-Part Structure):**
1. **Problem/Opportunity:** "Rural communities need market access"
2. **Your Solution:** "We build cost-effective, durable road networks"
3. **Long-term Benefit:** "Creating economic opportunity and quality of life improvement"

**Benefits (Scannable):**
- Format: "Benefit A, Benefit B, Benefit C"
- Focus on outcomes, not features
- Keep each 2-4 words

**Key Points (Specific Offerings):**
- List 3-5 specific things you deliver
- Include scope, methodology, or approach
- Be detailed and comprehensive

### Step 4: Example - Adding "Structural Analysis" Service

```tsx
import { BarChart3 } from 'lucide-react'; // Add to imports

// In services array:
{
  icon: BarChart3,
  title: 'Structural Analysis & Testing',
  headline: 'Know Your Building. Ensure Safety. Build With Confidence.',
  description: 'Existing structures need assessment before repair or expansion. Our engineering analysis identifies structural integrity, load capacity, and safety risks — giving you the data for confident decisions.',
  benefits: 'Safety certification, informed decisions, cost-effective planning',
  keyPoints: [
    'Full structural condition assessment',
    'Load-bearing capacity analysis',
    'Safety compliance inspection',
    'Detailed engineering report with recommendations',
    'Cost estimate for repairs or improvements',
    'Certification for regulatory approval'
  ]
}
```

---

## PART 2: ADDING A NEW PROJECT

### Step 1: Prepare Your Project Data
Gather:
- High-quality project photo (upload to Vercel Blob)
- Project title (benefit-focused)
- Location (city/district, Uganda)
- Your role
- Specific challenges faced
- Your solution/methodology
- Quantified results (timeline, budget, quality metrics)
- Optional: Client testimonial

### Step 2: Update Images Data
1. Open `/lib/images.ts`
2. Add new project image entry:

```ts
{
  id: 'unique-project-id',
  url: 'https://blob-storage-url.jpg',
  title: 'Project Title',
  description: 'Short description',
  category: 'residential', // or: commercial, roads, drainage, tourism, supervision, exterior
  location: 'Jinja District',
  role: 'Project Manager'
}
```

### Step 3: Follow the Project Template Structure

**Title Format:** `[Action] + [Type]`
- ✅ "Built. Connected. Delivered. Premium Residential + Tourism"
- ✅ "Integrated Drainage + Commercial Development"
- ❌ "Commercial Building Project"

**Challenge Section:** Be Specific
```
Real challenge: Client needed dual-use property (residential + tourism income)
Include: constraints, timeline pressure, regulatory complexity, terrain difficulty
```

**Solution Section:** Show Your Expertise
```
Our approach: Integrated layout with separate guest/residential sections
Include: innovation, efficiency tactics, engineering approach, coordination
```

**Results Section:** Always Quantify
```
- Timeline: "Delivered 6 months early via efficient sequencing"
- Budget: "Completed 18% under budget through smart sourcing"
- Quality: "Zero safety incidents across 14-month construction"
- Impact: "Client now generating 45% additional revenue from tourism"
```

### Step 4: Example - Adding a Road Project

```ts
// In /lib/images.ts, add:
{
  id: 'farm-road-kamuli',
  url: 'https://your-blob-url/farm-road.jpg',
  title: 'Connected 3 Villages via Farm Access Road',
  description: 'Built 12km farm-to-market road enabling agricultural access',
  category: 'roads',
  location: 'Kamuli District',
  role: 'Project Manager & Site Engineer'
}

// Then create full project template:
{
  id: 'farm-road-kamuli',
  title: 'Connected 3 Villages via Farm Access Road',
  category: 'roads',
  location: 'Kamuli District, Uganda',
  role: 'Project Manager & Site Engineer',
  shortDescription: 'Built 12km farm-to-market road enabling agricultural communities to access regional markets.',
  
  challenge: 'Three farming villages had no vehicle access to regional markets. Manual transport meant 8-hour journeys to sell crops. Road required engineering solution for rainy season washouts and uneven terrain.',
  
  solution: 'Engineered 12km route with proper base preparation, drainage culverts at 5 locations, and protective gravel sealing. Coordinated with communities for labor contribution. Sequenced work around rainy season.',
  
  results: [
    'Completed in 8 months (2 months ahead of schedule)',
    'Cost 22% below initial estimate through efficient procurement',
    'Now passable year-round for vehicles',
    'Farmers report 60% faster market access, 40% better crop prices'
  ],
  
  specifications: {
    duration: '8 months',
    budget: '$85,000 USD',
    team: '6-person crew + community labor',
    scale: '12 km road, 5 culverts, comprehensive drainage'
  },
  
  testimonial: {
    quote: 'Before this road, we spent 8 hours walking crops to market. Now we drive 45 minutes. This road changed everything for our farming community.',
    author: 'Village Committee Chair',
    title: 'Kamuli District'
  },
  
  url: 'https://blob-url/farm-road.jpg'
}
```

---

## PART 3: COPY WRITING FORMULAS

### Service Headlines
Use emotional + practical benefit:
- "Connect [Audience]. [Benefit]." 
  - ✅ "Connect Communities. Drive Economic Growth."
  - ✅ "Protect Your Assets. Ensure Long-term Security."

- "[Action-Outcome]. [Benefit]."
  - ✅ "Build With Confidence. Know Your Structure Is Safe."
  - ✅ "Invest Smart. Consult With Real Engineering Expertise."

### Service Descriptions
**Formula:** Problem (1 sentence) → Solution (1 sentence) → Benefit (1 sentence)

Example:
```
"Your commercial property needs quality construction to protect your investment. 
We deliver professional commercial centers built to stand the test of time. 
Your completed project generates revenue and builds long-term business value."
```

### Project Challenges
**What to Include:**
1. Specific problem faced
2. Why it was difficult
3. Market/client need
4. Constraints (timeline, terrain, regulations, budget)

**Example:**
```
"Client needed dual-purpose property generating residential income and tourism revenue. 
Required careful architectural planning for different occupancy patterns. 
Hillside location added structural and drainage complexity. 
Dual-use permitting required coordination with multiple authorities."
```

### Project Results
**Formula:** Metric + Context + Impact

```
- "Delivered 6 months early via efficient project sequencing"
  (Timeline metric + methodology + positive impact)
  
- "Completed 18% under budget through smart material sourcing"
  (Cost metric + efficiency tactic + value)
  
- "Achieved zero safety incidents across 14-month construction"
  (Safety metric + duration + commitment)
  
- "Property now generating 45% additional revenue from tourism"
  (Business impact metric + duration since completion)
```

**Always include:**
- Timeline achievements (early/on-time percentage)
- Budget performance (under budget percentage)
- Quality metrics (safety record, certifications, inspections)
- Business/practical impact (revenue, ROI, productivity, access)

---

## PART 4: QUICK REFERENCE

### Service Fields Checklist
- [ ] Icon selected and imported
- [ ] Title (2-3 words, specific service)
- [ ] Headline (benefit-focused, emotional)
- [ ] Description (problem → solution → benefit)
- [ ] Benefits (3-4 outcomes, comma-separated)
- [ ] Key points (5-6 specific deliverables)

### Project Fields Checklist
- [ ] High-quality image uploaded to Blob
- [ ] Project title (outcome + type)
- [ ] Category selected (residential, roads, etc.)
- [ ] Location (city/district, Uganda)
- [ ] Role defined (PM, Site Engineer, Contractor)
- [ ] Challenge documented (specific problems)
- [ ] Solution explained (your methodology)
- [ ] Results quantified (timeline, budget, quality, impact)
- [ ] Testimonial collected (optional but valuable)

### Copy Framework Checklist
- [ ] Headlines lead with outcomes/benefits
- [ ] Descriptions follow 3-part structure
- [ ] Results are always quantified
- [ ] Language is benefit-focused (not feature-focused)
- [ ] Tone is confident, professional, direct
- [ ] No jargon or vague language
- [ ] Each section scannable (short sentences, bullet lists)

---

## PART 5: CONTENT LIBRARY

### Recommended Icon Choices by Service Type

**Construction & Building:**
- Building2, Home, Hammer, Wrench, Drill, Zap, Users

**Drainage & Water:**
- Droplets, Waves, Pipe, AlertTriangle, Shield, Activity

**Roads & Infrastructure:**
- Navigation, Compass, TrendingUp, Gauge, Zap, Map

**Property & Consulting:**
- Briefcase, BarChart3, TrendingUp, Users, Shield, Target

**Supervision & Quality:**
- CheckCircle, Eye, Shield, Lock, Target, Zap

---

## PART 6: BEST PRACTICES

### DO ✅
- Write benefit-focused headlines
- Use specific, measurable results
- Include concrete examples
- Create emotional connection
- Show expertise through detail
- Quantify all achievements
- Use active voice
- Keep copy scannable

### DON'T ❌
- Use vague language ("excellent work")
- List features instead of benefits
- Oversell or make false claims
- Use jargon without explanation
- Make claims without proof
- Use passive voice
- Write in dense paragraphs
- Forget to include social proof

---

## FINAL TIPS

1. **Real over Perfect** - Use actual project stories, even if messy
2. **Quantify Everything** - "Better" is vague; "30% faster" is powerful
3. **Show Your Process** - People buy confidence; explain your methodology
4. **Build Trust** - Include challenges solved, not just wins
5. **Be Specific** - "Commercial building" is forgettable; "15-story commercial center with integrated parking" is memorable
6. **Visual Hierarchy** - Use headlines, benefits callouts, bullet lists for scannability
7. **One Theme Per Section** - Hero = confidence, Services = solutions, Portfolio = proof, Contact = action

---

**Questions?** Refer to completed examples in the components and template files.
