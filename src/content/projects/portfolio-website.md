---
title: 'Portfolio Website'
summary: 'Personal portfolio site to showcase projects and experience.'
pubDate: 2026-09-11
githubPath: 'https://github.com/DustinLJones/DustinLJones.github.io'
demoPath: '/'
associatedJournal: 'building-my-developer-portfolio'
image: '../../images/projects/portfolio-website.png'
tags: ['Astro', 'TypeScript', 'Cloudflare']
slug: 'portfolio-website'
---

## Portfolio Website
A personal portfolio site designed to showcase my software projects, engineering experience, technical writing, and professional background while also serving as a practical web development project.

### Overview
I built this portfolio to provide more context around my work than a traditional resume or GitHub profile can provide.

The site is structured around several types of content, including featured projects, detailed project pages, engineering journal entries, a digital resume, and contact information.

Rather than treating the portfolio as a single static page, I built it as a maintainable content-oriented website that can grow alongside my projects and experience.

### Key Features
- Responsive portfolio website built with reusable Astro layouts and components.
- Project pages for presenting completed software projects and their technical details.
- Engineering journal for documenting architecture decisions, implementation details, challenges, and lessons learned.
- Digital resume containing professional experience, education, and technical skills.
- Light and dark theme support.
- Reusable project and journal content structures.
- Custom responsive styling without a CSS framework.
- Font Awesome integration for interface and social icons.
- Custom domain configuration through Cloudflare.
- Static deployment suitable for a primarily content-driven website.

### Architecture
The portfolio uses Astro as the primary framework and is structured around reusable layouts, components, routes, and content collections.

Shared elements such as the navigation, footer, page layout, theme controls, and styling are maintained independently from individual page content.

Project and journal entries are stored as structured Markdown content. Astro can use the frontmatter associated with those files to generate index pages, individual content pages, tags, links, and other metadata-driven features.

The resulting architecture keeps most of the site statically generated while still providing the organizational benefits of a modern web framework.

### Technology Stack
#### Languages
- TypeScript
- HTML
- CSS
- Markdown

#### Frameworks
- Astro

#### Infrastructure / Tools
- Cloudflare
- Git/GitHub
- WSL/NeoVim
- Font Awesome

### Highlights
One of the main goals of the project was keeping the architecture appropriate for the type of website being built.

Because the portfolio is primarily content-oriented, Astro allows most pages to remain statically generated without requiring a large client-side JavaScript application.

TypeScript is used throughout the project where applicable to provide stronger typing for components, utilities, and structured content.

The visual design uses custom CSS rather than a utility framework such as Tailwind. This keeps the styling system relatively small while providing complete control over the site's layout, color palette, responsive behavior, and light and dark themes.

Another important part of the project is the separation between projects and engineering journals.

Project pages focus on what was built, the architecture, technologies used, and the final result. Journal entries provide additional space to document implementation decisions, tradeoffs, problems encountered, and lessons learned.

The site is deployed under a custom domain using Cloudflare for DNS management.

### Related Journal
The [associated journal](../journals/building-my-developer-portfolio) entry provides a deeper look at the decisions behind the portfolio, including the choice of Astro and TypeScript, custom CSS, deployment behavior, Cloudflare domain configuration, and lessons learned while building the site.

### Resources/Links
- [Astro](https://astro.build/)
- [Cloudflare](https://www.cloudflare.com/)
- [Font Awesome](https://fontawesome.com/)
- [GitHub](https://github.com/)
- [Git](https://git-scm.com/)
