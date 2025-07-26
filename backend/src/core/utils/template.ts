export function getTemplate(template: string): string {
  switch (template) {
    case "Course Selling":
      return `
The layout should include:
- A hero section with course title, instructor name, and CTA.
- A curriculum section with course modules or syllabus.
- A testimonials section from past students.
- Pricing and enrollment options.
- Responsive layout suitable for mobile and desktop.
`;

    case "Product Store":
      return `
The layout should include:
- A featured product hero section with CTA.
- A product grid/listing section.
- A shopping cart or "Add to Cart" button for each product.
- User reviews or ratings.
- Navigation bar and footer.
`;

    case "Portfolio":
      return `
The layout should include:
- A personal intro or hero section with name, title, and photo.
- A projects/gallery section to showcase work.
- An about section.
- A contact form or social links section.
`;

    case "Blog":
      return `
The layout should include:
- A blog homepage with list of recent posts.
- A featured post at the top.
- Sidebar with categories or tags.
- Footer with newsletter signup or social media links.
`;

    case "Event":
      return `
The layout should include:
- A hero section with event title, date, location, and CTA (Register).
- Schedule/agenda section.
- Speakers or guests section.
- FAQ section and contact form.
`;

    default:
        return undefined;
  }
}
