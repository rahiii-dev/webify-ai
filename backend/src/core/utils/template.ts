export const TEMPLATE_KEYWORDS: Record<string, string> = {
  "course": "Course Selling",
  "store": "Product Store",
  "ecom": "Product Store",
  "portfolio": "Portfolio",
  "blog": "Blog",
  "event": "Event"
};

export function getTemplate(template: string): string {
  switch (template) {
    case "Course Selling":
      return `
Advanced Course Selling Layout:
- Sticky navigation with dropdown modules and progress indicator.
- Full-screen hero with video background or animated SVG overlay, course title, instructor bio, and primary CTA.
- Dynamic curriculum section with expandable module accordions, estimated completion times, and progress bars.
- Testimonials carousel with star ratings, video snippets, and social proof badges.
- Pricing table with tier comparison, featured tier highlighting, and discount countdown timer.
- Instructor spotlight with bio, photo gallery, and social media links.
- FAQ section with searchable questions and animated expand/collapse.
- Responsive design optimized for touch interactions and keyboard navigation.
- SEO-optimized meta tags and structured data (Course schema) in <head>.
`;

    case "Product Store":
      return `
Advanced Product Store Layout:
- Mega-menu navigation with category thumbnails and search-as-you-type.
- Full-width carousel hero with high-res product images, promotional banners, and dynamic pricing.
- Interactive product grid with image hover zoom, quick-view modal, and lazy-loading.
- Filter sidebar with multi-select facets (price, ratings, brand) and real-time update counts.
- Infinite-scroll or pagination toggle; grid/list view switcher.
- Product detail section with 360° viewer, specifications table, stock level indicator, and add-to-cart animation.
- User reviews section with sorting (most helpful, newest), image uploads, and star-ratings breakdown.
- Cross-sell and upsell carousel powered by related-products API.
- Floating cart summary with slide-in motion and secure checkout button.
- Structured data (Product, BreadcrumbList) in <head> for SEO.
`;

    case "Portfolio":
      return `
Advanced Portfolio Layout:
- Full-screen intro with parallax background, animated name reveal, and smooth-scrolling CTA.
- Filterable gallery grid with animated masonry layout and lightbox preview.
- Project detail overlay with carousel gallery, tech stack badges, case study summary, and external links.
- Skills section with animated progress bars or interactive tag cloud.
- Timeline section with vertical scroll, work history events, and micro-interactions on hover.
- Testimonials slider with client logos and voice-video clips.
- Blog excerpt feed with featured images, hover overlays, and read-more transitions.
- Contact section with interactive form validation, integrated map, and social icons with hover effects.
- SEO-enhanced meta tags and Open Graph protocol in <head>.
`;

    case "Blog":
      return `
Advanced Blog Layout:
- Masthead with dynamic featured post background, title, and author overlay.
- Sticky category navigation bar with scrollspy highlighting.
- Article list with animated card reveals, reading time, and excerpt previews.
- Infinite scroll or “Load More” with progress indicator.
- Sidebar with trending posts, tag cloud, social share buttons, and newsletter signup modal trigger.
- Single post template with table of contents, in-article code blocks (syntax highlighting), and scroll-to-top button.
- Author bio section with social profiles and recent posts.
- Related posts carousel based on shared tags.
- Comments section with nested replies, avatar animations, and real-time post previews.
- Social share floating sidebar and structured data (Article, BreadcrumbList) in <head>.
`;

    case "Event":
      return `
Advanced Event Layout:
- Hero with countdown timer, animated SVG date and location icons, and register button that anchors to form.
- Sticky ticket-level navigation with anchor links to each section (Agenda, Speakers, Venue).
- Agenda grid with session cards, speaker avatars, and hover highlight animations.
- Speakers section with filter by track, modal bio pop-ups, and social links.
- Interactive venue map embed with custom styling and marker tooltips.
- Sponsors carousel with grayscale-to-color hover effect and sponsor tiers.
- FAQ accordions with search filter and smooth scroll-to-answer.
- Ticket pricing table with multi-currency support, early-bird timer, and secure checkout integration.
- Post-event section placeholders: photo gallery, video recordings, and feedback form with rating stars.
- Structured data (Event, FAQPage) in <head> for SEO and rich results.
`;

    default:
      return `
Custom Advanced Layout:
- Adaptive header with customizable menu, logo, and search, including a dark/light theme switcher.
- Hero section with animated gradient background, key headline, subheadline, and primary CTA with hover and focus transitions.
- Modular section container supporting dynamic content blocks: text, images, videos, charts, and forms.
- Responsive grid system using CSS grid and flex utilities, with breakpoint-specific layouts.
- Interactive component library: accordions, tabs, tooltips, and modal dialogs, all ARIA-compliant and keyboard-navigable.
- Comprehensive footer with multi-column links, newsletter signup form, social media icons, and live chat widget placeholder.
- Performance optimizations: lazy-loading images, prefetch of critical assets, and minimized CSS through Tailwind JIT.
- Accessibility features: skip navigation link, semantic landmarks, supplementary ARIA roles, and high-contrast mode support.
- SEO essentials: meta tags, Open Graph, Twitter Card, canonical links, and JSON-LD structured data in <head>.
- Progressive enhancement: JavaScript modules loaded conditionally, with noscript fallbacks for core functionality.
`;
  }
}

