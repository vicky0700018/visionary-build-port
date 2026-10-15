# Visionary Build Port

# Lovable AI Prompt — INFRAVISION BUILDCON LLP

Build a complete, modern, professional, dynamic portfolio website for a construction company named **INFRAVISION BUILDCON LLP**, specializing in building construction.

The website should look like a genuine construction company's professional website, with a premium architectural aesthetic, realistic construction photography, strong typography, clean layouts, and a trustworthy corporate identity. Avoid generic AI-generated website layouts. Make the website visually polished, practical, and suitable for presenting to a real client.

## 1. Strict Technology Requirements

Use ONLY the following technologies:

- React
- Vite
- Tailwind CSS

**Do not use any other technology or library.**

Strictly avoid:
- Next.js
- TypeScript
- Bootstrap
- Material UI
- Shadcn UI
- Any external component library
- Any icon library
- Any animation library
- Any backend or server
- Any database
- Supabase, Firebase, or external APIs

Use React functional components, React hooks, standard JavaScript, Tailwind CSS utility classes, and native browser functionality only.

All website content must use mock data stored in JavaScript files. The entire website must run as a frontend-only demo.

## 2. Business Information

Use the following business information throughout the website.

- **Business Name:** INFRAVISION BUILDCON LLP
- **Business Type:** Building Construction and Infrastructure
- **Address:** Not provided. Do not invent a business address.
- **Phone:** 5135453235
- **Email:** infravision@gmail.com
- **Website Type:** Dynamic Construction Portfolio Website
- **Developer Credit:** Designed and development by SOSynch Ai Tech

Make the company name prominent in the navigation, hero section, footer, and contact page.

Use the provided contact details in the contact section, footer, and inquiry forms.

## 3. Brand Identity and Color Palette

Create a premium construction-industry visual identity using these colors:

- Primary charcoal: `#202A35`
- Construction orange: `#F28C28`
- Concrete gray: `#737B84`
- Light concrete background: `#F4F5F6`
- White: `#FFFFFF`
- Dark text: `#18212B`

Color usage:
- Use charcoal for navigation, footer, headings, and strong backgrounds.
- Use construction orange for buttons, active navigation indicators, links, project labels, and highlights.
- Use concrete gray for secondary text and subtle borders.
- Use white and light gray for content sections and cards.

Maintain consistent colors across all pages, buttons, forms, cards, and admin screens. The final result should feel architectural, premium, reliable, and professional.

## 4. Website Structure and Navigation

Create a responsive navigation bar with the company name or a simple text-based logo.

Navigation links:
1. Home
2. About Us
3. Services
4. Projects
5. Gallery
6. Contact Us

Add a prominent orange **Request a Quote** button.

Requirements:
- All navigation links must work correctly.
- Each link must open its corresponding section or page, not the same content for every link.
- Use React state and native browser history functionality where appropriate.
- Create separate, functional page views for the main sections without installing a routing library.
- Ensure browser back and forward navigation works correctly if using URL-based navigation.
- Add a mobile-friendly navigation menu using React state.
- Highlight the active navigation item.
- Keep the navigation consistent across the public pages.

## 5. Home Page — Hero Section

Create an impressive, full-width hero section with a large, high-quality construction or modern architectural building banner image.

Use a real, relevant image showing a modern building, commercial construction site, architectural structure, or construction project.

The image should:
- Cover the hero background without distortion.
- Use a dark overlay for readable text.
- Have a professional architectural composition.
- Load reliably and display correctly on desktop and mobile.
- Use an appropriate fallback background if the image fails to load.

Hero content:

**Headline:**
"Building Tomorrow. Constructing Excellence."

**Supporting text:**
"INFRAVISION BUILDCON LLP delivers quality-driven building construction solutions with a commitment to structural integrity, professional execution, and lasting value."

Buttons:
- Explore Our Projects
- Request a Quote

Add three compact trust highlights below the text:
- Quality-Focused Construction
- Professional Project Execution
- Built for Long-Term Value

Do not invent awards, certifications, client testimonials, project counts, years of experience, or completed contracts.

## 6. Company Introduction Section

Create a two-column About section featuring a relevant construction-site or architectural image on one side and company information on the other.

Heading: "Building with Vision. Delivering with Quality."

Description:
"INFRAVISION BUILDCON LLP is focused on building construction, combining thoughtful planning, practical execution, and attention to detail to create dependable spaces. Our approach emphasizes construction quality, safety awareness, clear communication, and professional project coordination."

Add three value cards:
- Quality & Craftsmanship
- Safety & Responsibility
- Planning & Execution

Use simple CSS shapes or text-based symbols instead of an icon library.

## 7. Services Section

Create a professional service grid with six service cards:

1. **Residential Building Construction**
   - Construction solutions for houses, villas, and residential buildings.

2. **Commercial Building Construction**
   - Construction planning and execution for offices, shops, and commercial spaces.

3. **Building Structural Work**
   - Building structure-related construction work, with emphasis on quality and execution.

4. **Renovation & Remodeling**
   - Improvements and upgrades for existing buildings.

5. **Construction Project Coordination**
   - Organized coordination of construction activities and project milestones.

6. **Civil Construction Work**
   - General civil construction and building-related work.

Each card should include a relevant image or visual, title, short description, and a Learn More link.

Clicking Learn More should open the relevant service details or display a meaningful service-specific view.

Keep service claims descriptive and realistic. Do not claim that every service is confirmed as an existing company offering; present them as editable demo content that the administrator can update.

## 8. Dynamic Projects Portfolio

Create an attractive portfolio section showcasing building construction projects.

Use mock project data for demonstration, with sample projects such as:
- Modern Residential Building
- Commercial Office Development
- Contemporary Urban Residence
- Multi-Storey Building Concept
- Residential Renovation Project
- Commercial Property Concept

For every project, include:
- Project title
- Project category
- Project image
- Short description
- Project status, such as Concept, Ongoing, or Completed
- Location only when entered by the administrator

Use a JavaScript array as the source of project data.

Implement:
- Responsive project cards.
- Category filters such as All, Residential, Commercial, and Renovation.
- Search by project title.
- Project detail view when a card is clicked.
- Large project images with proper cropping.
- An empty state when no projects match the filters.

Clearly label all sample projects as **Demo Projects** or **Concept Projects** so visitors do not mistake fictional work for actual company projects.

The project section must be data-driven and easy to update from the admin dashboard.

## 9. Construction Gallery

Create a visually rich image gallery featuring multiple distinct construction-related images.

Include images showing:
- Building exteriors
- Construction in progress
- Modern residential architecture
- Commercial buildings
- Concrete and structural work
- Architectural details
- Interior finishing
- Building materials and workmanship

Gallery requirements:
- Use multiple different relevant images, not the same image repeated everywhere.
- Use a responsive grid with varied image proportions where practical.
- Add category filters such as All, Residential, Commercial, Construction, and Interiors.
- Allow visitors to click an image to see a larger version in a native modal.
- Add a close button and keyboard Escape support.
- Include meaningful alt text for accessibility.

Use remote image URLs only as image sources, with no image API or API key. Prefer stable, publicly accessible image URLs. If an image fails to load, display a suitable fallback.

## 10. Why Choose Us Section

Create a professional section titled "Why Choose INFRAVISION BUILDCON LLP?"

Include:
- Commitment to Construction Quality
- Attention to Project Details
- Practical Planning and Coordination
- Focus on Safety and Responsibility
- Transparent Communication
- Long-Term Building Value

Use clean layouts and subtle hover effects created with Tailwind CSS.

Do not invent verified credentials, guarantees, or performance statistics.

## 11. Construction Process Section

Display a four-step process:

1. Initial Discussion
2. Requirement Assessment
3. Planning and Proposal
4. Project Execution and Coordination

Present the steps using a clean horizontal timeline on desktop and a vertical timeline on mobile.

Each step should have a short description and a CSS-based number indicator.

## 12. Testimonials Section

Create a testimonial section using clearly identified placeholder content.

Important:
- Do not fabricate real customer names, genuine reviews, or verified testimonials.
- Label all content as "Sample Testimonial — Demo Content."
- Allow the administrator to replace the sample testimonials.
- Include an option to hide the testimonials section if the company has no approved reviews.

## 13. Request a Quote and Contact Section

Create a professional inquiry section with the following fields:
- Full Name
- Phone Number
- Email Address
- Project Type
- Estimated Budget
- Project Location
- Message

Requirements:
- Validate required fields.
- Validate email format and phone input.
- Show a clear success message after successful demo submission.
- Store submissions in React state and localStorage only for demonstration.
- Show recent demo inquiries inside the admin dashboard.
- Provide a Reset Form button.
- Make the form responsive and accessible.

Clearly explain in the demo that inquiry submissions are stored only in the current browser and are not sent to the company.

Add contact details:

**INFRAVISION BUILDCON LLP**

Phone: 5135453235

Email: infravision@gmail.com

Add a Call Now link using the provided phone number and an email link using the provided email address.

Do not invent the company address, map location, or geographic coordinates.

## 14. Footer

Create a comprehensive footer with four columns:

**Company**
- Company name
- Short introduction
- About Us link

**Quick Links**
- Home
- Services
- Projects
- Gallery
- Contact Us

**Our Services**
- Residential Construction
- Commercial Construction
- Structural Work
- Renovation

**Contact Information**
- Phone: 5135453235
- Email: infravision@gmail.com

Add social media links only when real URLs are supplied. Otherwise, omit them or make them editable through the admin panel.

Display the required developer credit exactly as follows:

**Designed and development by SOSynch Ai Tech**

Make the developer credit visible in the footer.

Add a separate, discreet **Admin Login** link in the footer that opens `/admin/login` or the equivalent admin login view.

## 15. Admin Login and Dashboard

Create a complete frontend-only admin interface that allows the administrator to manage most website modules.

Create a separate admin login page with:
- Email or username field
- Password field
- Show/hide password control
- Login button
- Validation messages
- Back to Website link

Demo login credentials:

- Username: `admin`
- Password: `Admin@123`

Display a visible notice that these are demonstration credentials and that the admin system is not secure for production use.

Implement demo authentication with React state and localStorage. Do not connect any external authentication service.

Protect admin page views from unauthenticated access within the frontend application.

Provide a Logout button that clears the demo session.

### Admin Dashboard Overview

Display summary cards for:
- Total Demo Projects
- Total Services
- Gallery Images
- Demo Inquiries

Use actual counts derived from the current frontend data, not hardcoded numbers.

Create a responsive sidebar with these modules:

1. Dashboard
2. Website Settings
3. Company Profile
4. Hero Section Management
5. About Section Management
6. Services Management
7. Projects Management
8. Gallery Management
9. Testimonials Management
10. Inquiry Management
11. Navigation Management
12. Footer Management
13. Admin Account
14. Preview Website
15. Logout

## 16. Admin CRUD Functionality

Implement working Create, Read, Update, and Delete operations for the following modules using React state and localStorage:

**A. Company Profile**
- Edit company name.
- Edit company description.
- Edit phone number.
- Edit email address.
- Edit address when supplied.
- Save changes and reflect them immediately on the public website.

**B. Hero Management**
- Edit hero heading.
- Edit supporting text.
- Edit button labels.
- Update hero image URL.
- Preview image changes before saving.

**C. Services Management**
- Add services.
- Edit existing services.
- Delete services.
- Update titles, descriptions, and images.
- Toggle service visibility.

**D. Projects Management**
- Add projects.
- Edit projects.
- Delete projects.
- Change categories and statuses.
- Update project descriptions and image URLs.
- Toggle project visibility.

**E. Gallery Management**
- Add image URLs and captions.
- Edit gallery items.
- Delete gallery items.
- Change gallery categories.
- Toggle image visibility.

**F. Testimonials Management**
- Add, edit, and delete testimonials.
- Mark items as approved or demo placeholders.
- Toggle the testimonials section on or off.

**G. Inquiry Management**
- View submitted demo inquiries.
- Open inquiry details.
- Update inquiry status to New, Contacted, or Closed.
- Delete demo inquiries.
- Search and filter inquiries.

**H. Website Settings**
- Update brand colors.
- Update basic website title and description.
- Toggle major public website sections.
- Restore the default demo configuration.

**I. Footer Management**
- Edit footer description and contact details.
- Manage quick links.
- Manage the visible developer credit.
- Keep the Admin Login link visible in the footer.

**J. Navigation Management**
- Edit navigation labels.
- Toggle navigation items on or off.
- Reorder navigation items.
- Ensure navigation links continue to work after editing.

All saved content must update the public website immediately without requiring a full page reload.

## 17. Data Management and Demo Persistence

Use mock data defined in JavaScript files.

Requirements:
- Use React state for rendering.
- Use localStorage for persistence across page refreshes.
- Initialize demo data on first visit.
- Do not overwrite existing user edits every time the application loads.
- Include a Restore Demo Data button with a confirmation step.
- Handle missing or invalid localStorage data gracefully.
- Use stable IDs for projects, services, gallery items, and inquiries.
- Keep admin and public website data synchronized.
- Ensure new records, updates, and deletions appear immediately in the public interface.
- Show useful empty states when there is no data.

Do not use any database, backend, cloud storage, API, or external service.

Important limitation: localStorage is specific to the browser and device. It does not synchronize content between multiple users or devices.

## 18. Design Quality and User Experience

The website must look like a professional construction business website rather than a generic template.

Design guidelines:
- Strong architectural typography.
- Large, high-quality building photography.
- Balanced whitespace.
- Clear visual hierarchy.
- Consistent orange call-to-action buttons.
- Charcoal navigation and footer.
- Well-designed project cards.
- Subtle hover transitions using Tailwind CSS.
- Clean form layouts.
- Responsive dashboard tables and cards.
- Consistent border radii and spacing.
- Accessible contrast and visible focus states.
- Loading and image-failure handling.
- Friendly success, error, and confirmation messages.

Use CSS and Tailwind utilities for transitions and interactions. Do not install animation packages or icon libraries.

Avoid:
- Excessive gradients.
- Too many rounded cards.
- Random decorative icons.
- Repeated identical images.
- Fake statistics.
- Unverified company claims.
- Broken navigation.
- Nonfunctional buttons.
- Placeholder links that do nothing.

## 19. Responsive Design

Ensure that the complete website works properly on:
- Mobile phones
- Tablets
- Laptops
- Desktop screens

Check:
- Navigation collapse and expansion.
- Hero text and image cropping.
- Responsive project and service grids.
- Gallery layout.
- Inquiry form stacking.
- Admin sidebar behavior.
- Dashboard table overflow.
- Modal sizing.
- Footer layout.

Use Tailwind CSS responsive breakpoints.

## 20. Image Handling Requirements

Use multiple distinct, relevant images throughout the website.

Required image locations:
- Hero banner.
- About section.
- Service cards.
- Project portfolio.
- Construction gallery.
- Other relevant visual sections.

Image guidelines:
- Use stable, publicly accessible construction and architecture images.
- Avoid repeating the same image across multiple unrelated projects.
- Maintain consistent image aspect ratios where appropriate.
- Use object-cover to prevent distortion.
- Provide descriptive alt text.
- Include graceful fallback behavior for failed image URLs.
- Allow administrators to edit image URLs.
- Show image previews inside the admin panel.
- Do not require an image API key or image upload backend.

If remote image URLs are unavailable, use attractive CSS-based placeholders rather than leaving broken image elements on screen.

## 21. Functional Testing Requirements

Before completing the project, verify the following:

- Website loads successfully.
- All public navigation links open the correct sections or page views.
- Mobile menu opens and closes correctly.
- Hero buttons work.
- Project filters and search work.
- Project detail views work.
- Gallery filters and image modal work.
- Contact form validation works.
- Demo inquiry submissions appear in the admin dashboard.
- Admin login accepts the provided demo credentials.
- Invalid login attempts display an error.
- Unauthenticated users cannot access admin views through normal application navigation.
- Logout works correctly.
- Admin CRUD operations work for every listed module.
- Admin edits update the public website.
- Data persists after page refreshes.
- Restore Demo Data works correctly.
- Missing images do not break the layout.
- The browser console has no avoidable errors.
- All pages work on mobile and desktop.

## 22. Deployment and Publishing Readiness

Prepare the website so it can be built and published as a static React + Vite + Tailwind CSS project.

Requirements:
- Keep the project structure clean and organized.
- Include a valid `package.json`.
- Configure Vite correctly.
- Ensure Tailwind CSS is configured correctly for the installed version.
- Use JavaScript files only.
- Ensure the production build completes successfully.
- Fix build errors before declaring the project complete.
- Configure SPA fallback/rewrite rules for the hosting platform if required by the chosen URL-based navigation.
- Avoid environment variables, API keys, or backend configuration because the project is frontend-only.
- Provide clear instructions for running the project locally and publishing it.

Use these scripts in `package.json`:

- `npm run dev`
- `npm run build`
- `npm run preview`

Publishing checklist:
1. Install dependencies with `npm install`.
2. Run the development server with `npm run dev`.
3. Verify all public pages and admin modules.
4. Run `npm run build`.
5. Resolve any build errors.
6. Preview the production build using `npm run preview`.
7. Publish the project to a static hosting provider such as Vercel or Netlify.
8. Set the build command to `npm run build`.
9. Set the output directory to `dist`.
10. Configure SPA rewrites if required.
11. Open the published URL and test navigation, image loading, contact links, admin login, CRUD operations, persistence, and mobile responsiveness.

Important production warning: this is a demonstration website only. The admin credentials and localStorage-based access control are not secure. Do not use real customer data or deploy it as a production CMS without adding proper backend authentication, authorization, and persistent server-side storage.

## 23. Final Deliverable

Deliver a complete, visually polished, functional construction portfolio website for **INFRAVISION BUILDCON LLP**.

The final website must include:
- Premium construction-focused design.
- Multiple distinct construction images.
- Responsive public website.
- Functional portfolio and gallery.
- Mock-data-driven content.
- Working frontend admin login.
- Admin dashboard with CRUD modules.
- localStorage persistence.
- Functional inquiry form demo.
- Footer Admin Login link.
- Developer credit: **Designed and development by SOSynch Ai Tech**.
- Successful production build.
- Clear publishing instructions.

**Final instruction:** Prioritize design quality, working functionality, clean JavaScript, responsive behavior, realistic construction imagery, and reliable deployment. Use only React, Vite, Tailwind CSS, standard JavaScript, browser APIs, mock data, and localStorage. Do not add any other technology or library.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/0ec189ab-1ee8-4fbe-9c19-cd5510bb2115).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
