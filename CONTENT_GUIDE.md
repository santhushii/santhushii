# Content Management Guide

This guide explains how to easily update the portfolio content without touching code.

## Content Files Location

All content files are located in `client/src/content/`:

- `profile.ts` - Personal information and bio
- `skills.ts` - Skills and expertise
- `experience.ts` - Work experience and timeline
- `projects.ts` - Portfolio projects
- `services.ts` - Services offered
- `testimonials.ts` - Client testimonials
- `caseStudies.ts` - Detailed case studies

## How to Update Content

### 1. Edit Profile Information

**File**: `client/src/content/profile.ts`

```typescript
export const profile = {
  name: 'Your Name',
  roles: ['Role 1', 'Role 2'],
  location: 'Your Location',
  tagline: 'Your tagline',
  bio: 'Your bio text',
  email: 'your@email.com',
  linkedin: 'https://linkedin.com/in/yourprofile',
  github: 'https://github.com/yourusername',
  // ... more fields
};
```

**What to update:**
- Personal information (name, location, email)
- Social media links
- Tagline and bio
- Stats (years of experience, project count)
- Tech side and marketing side highlights
- Your story

### 2. Update Skills

**File**: `client/src/content/skills.ts`

```typescript
export const skills: Skill[] = [
  { 
    name: 'React', 
    category: 'programming', 
    level: 85, 
    color: '#61DAFB' 
  },
  // Add more skills...
];
```

**Categories**: `'programming' | 'tools' | 'marketing' | 'design' | 'other'`

**What to update:**
- Add/remove skills
- Update skill levels (0-100)
- Change categories
- Add custom colors (hex codes)

### 3. Update Experience

**File**: `client/src/content/experience.ts`

```typescript
export const experiences: Experience[] = [
  {
    company: 'Company Name',
    title: 'Your Title',
    location: 'City, Country',
    startDate: '2023-01', // YYYY-MM format
    endDate: '2024-12', // Optional
    isCurrent: true, // If currently working here
    type: 'full-time', // 'full-time' | 'part-time' | 'internship' | 'freelance' | 'contract'
    achievements: [
      'Achievement 1',
      'Achievement 2',
      // More achievements...
    ],
    tags: ['tech', 'leadership', 'marketing'], // Available: 'tech', 'leadership', 'marketing', 'analytics', 'product'
    description: 'Brief description of your role',
    companyLogo: '/logos/company.png' // Optional
  },
  // Add more experiences...
];
```

**What to update:**
- Add new roles/positions
- Update achievements
- Change dates
- Add company logos (place in `client/public/logos/`)

### 4. Update Projects

**File**: `client/src/content/projects.ts`

```typescript
export const projects: Project[] = [
  {
    title: 'Project Name',
    slug: 'project-slug', // URL-friendly: project-name
    summary: 'Short summary',
    description: 'Detailed description',
    thumbnail: '/images/project-thumb.jpg', // Place in client/public/images/
    category: ['tech', 'marketing', 'hybrid'], // Can be multiple
    tags: ['React', 'Node.js'],
    techStack: ['React', 'TypeScript', 'Node.js'],
    tools: ['Figma', 'VS Code'],
    problem: 'Problem statement',
    solution: 'Solution description',
    myRole: 'Your role in the project',
    results: [
      { metric: 'Revenue', value: '+150%' },
      // More results...
    ],
    liveUrl: 'https://project-demo.com',
    githubUrl: 'https://github.com/user/project',
    featured: true, // Show on homepage
    caseStudy: false // Has detailed case study?
  },
  // Add more projects...
];
```

**What to update:**
- Add new projects
- Update project details
- Add screenshots/thumbnails (place in `client/public/images/`)
- Update metrics and results
- Mark as featured

### 5. Update Services

**File**: `client/src/content/services.ts`

```typescript
export const services: Service[] = [
  {
    title: 'Service Name',
    description: 'Service description',
    bullets: [
      'Point 1',
      'Point 2',
      'Point 3'
    ],
    icon: '💻', // Emoji or icon
    color: '#6366F1' // Hex color
  },
  // Add more services...
];
```

**What to update:**
- Add/remove services
- Update descriptions
- Change bullet points
- Update icons and colors

### 6. Update Testimonials

**File**: `client/src/content/testimonials.ts`

```typescript
export const testimonials: Testimonial[] = [
  {
    name: 'Client Name',
    role: 'Their Role',
    company: 'Company Name', // Optional
    content: 'Testimonial text',
    avatar: '/avatars/client.jpg', // Optional, place in client/public/avatars/
    rating: 5, // 1-5 stars
    featured: true // Show on homepage
  },
  // Add more testimonials...
];
```

**What to update:**
- Add new testimonials
- Update ratings
- Add client avatars
- Mark as featured

### 7. Update Case Studies

**File**: `client/src/content/caseStudies.ts`

Case studies extend projects with additional fields:

```typescript
export const caseStudies: CaseStudy[] = [
  {
    // All project fields plus:
    context: 'Project context',
    challenge: 'Challenges faced',
    strategy: 'Strategy used',
    execution: 'How it was executed',
    learnings: [
      'Learning 1',
      'Learning 2'
    ]
    // ... rest of project fields
  }
];
```

**What to update:**
- Add detailed case studies
- Document challenges and solutions
- Share learnings

## Adding Images and Assets

### Image Locations

- **Project thumbnails**: `client/public/images/`
- **Company logos**: `client/public/logos/`
- **Avatars**: `client/public/avatars/`
- **Case study images**: `client/public/images/case-studies/`

### Image Best Practices

1. **Optimize images** before uploading (use tools like TinyPNG)
2. **Naming convention**: Use kebab-case (e.g., `project-name-thumb.jpg`)
3. **Recommended sizes**:
   - Thumbnails: 800x600px
   - Hero images: 1920x1080px
   - Avatars: 400x400px
4. **Formats**: Use JPG for photos, PNG for logos with transparency

## After Making Changes

1. **Save the file** - Changes are automatically detected
2. **Run development server**: `npm run dev` (if not already running)
3. **Check browser** - Changes should appear immediately
4. **Commit changes**: 
   ```bash
   git add client/src/content/
   git commit -m "Update portfolio content"
   git push
   ```

## Content Updates via API (Optional)

Content can also be updated via the backend API:

1. **Update via API**: Use POST/PUT requests to `/api/profile`, `/api/projects`, etc.
2. **MongoDB Atlas**: Directly edit data in MongoDB Atlas dashboard
3. **Admin Panel**: Build a simple admin panel using the API

## Tips

- **Keep it authentic**: Update with real information
- **Regular updates**: Keep content fresh and relevant
- **Check formatting**: Ensure proper TypeScript syntax
- **Test changes**: Always preview changes locally before deploying
- **Version control**: Commit changes frequently for easy rollback

## Need Help?

- Check file comments for field descriptions
- Review existing entries as examples
- Refer to TypeScript types in each file
- Check the main README for project structure

---

**Last Updated**: 2024
