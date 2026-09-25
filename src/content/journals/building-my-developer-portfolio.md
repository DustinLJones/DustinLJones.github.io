---
title: 'Building My Developer Portfolio'
pubDate: 2026-09-07
readTimeMinutes: 10
image: '../../images/journals/journal-placeholder.jpg'
tags: ['Astro', 'TypeScript', 'Web Development']
slug: building-my-developer-portfolio
---

## Building My Developer Portfolio
I wanted to build a portfolio that did more than act as an online copy of my resume. I needed an outlet that could show the projects I have worked on, explain the engineering decisions behind them, and provide a place to document what I learn while building software.

The portfolio itself became a project worth documenting.

### Context
My professional work has increasingly focused on systems integration, automation, APIs, and backend development. I wanted my portfolio to reflect that work while still giving me room to show personal projects and technical experimentation.

A traditional portfolio with a short biography, a list of technologies, and links to GitHub did not feel sufficient. I wanted the site to demonstrate how I approach engineering problems rather than simply list the technologies I have used.

That led to the idea of including both project pages and journals. Project pages can show the finished result, while journal entries can explain architecture decisions, tradeoffs, problems encountered, and lessons learned.

The site also needed to be a project I would actually want to maintain. That meant keeping the architecture relatively simple and avoiding unnecessary dependencies.

### Requirements
The initial requirements for the portfolio were:
- Provide a clear introduction to who I am and the type of projects I enjoy building.
- Showcase selected projects.
- Organize technical skills by category instead of displaying a wall of technology logos.
- Provide access to my resume, GitHub, LinkedIn, and email.
- Provide a journal for technical write-ups.
- Remain easy to maintain and expand as new projects are completed.
- Keep the visual design custom rather than relying heavily on a UI framework.
- Support both light and dark themes.

### Approach
I approached the portfolio as a small software project rather than a collection of static HTML pages.

The site was broken into reusable pieces such as the header, navigation, footer, theme controls, layouts, project content, and journal content. Instead of trying to finish every page immediately, I started with the shared structure of the site.

The first major pieces were:
- Establish the Astro project.
- Configure TypeScript.
- Build the global page structure.
- Create the site header and navigation.
- Build a reusable footer.
- Establish the global color palette.
- Implement light and dark themes.
- Set up the main page structure.
- Plan the project and journal content models.
- Deploy the site and verify the custom domain.

This allowed the foundation of the site to stabilize before spending significant time building individual pages.

### Technology Choices
#### Astro
I chose Astro as the framework for the portfolio.

A portfolio is primarily a content-oriented website. Most of the pages do not require a large client-side JavaScript application, which makes Astro a good match for the project.

Astro also provides reusable components and layouts while still allowing the final site to remain relatively lightweight.

That gives me the organizational benefits of a framework without requiring the entire site to behave like a single-page application.

#### TypeScript
I prefer TypeScript over JavaScript, so I configured the project to use TypeScript wherever possible.

For a project this size, JavaScript would have been completely capable of handling the requirements. TypeScript was primarily a maintainability decision.

Using explicit types makes components and utilities easier to understand and should become increasingly useful as features such as project metadata and journal entries become more structured.

#### Custom CSS
I considered whether to use a CSS framework such as Tailwind, but decided to continue with custom CSS.

The site does not currently require a large design system, and writing the CSS directly gives me complete control over the visual language of the site without adding another abstraction.

I also wanted the portfolio to serve as an opportunity to strengthen my CSS skills rather than immediately relying on a utility framework.

#### Font Awesome
Font Awesome is used for interface elements such as email and social icons.

Using an established icon library avoids maintaining custom SVGs for common symbols while still allowing the icons to be styled consistently with the rest of the site.

### Key Implementation Detail
One of the more important implementation details was connecting my custom domain to the deployed portfolio through Cloudflare.

The site itself could be successfully built and deployed before the custom domain worked correctly. That distinction made the domain configuration a useful lesson in how DNS, hosting, and the application deployment process fit together.

The custom domain needed to direct traffic toward the service hosting the generated Astro site. Cloudflare acts as the DNS provider for the domain, so the appropriate DNS records had to point the domain at the deployed site rather than the domain being handled by the application itself.

### Challenges
One challenge was deployment behavior.

During local development, routes such as the About and Resume pages worked correctly, but deployment introduced routing and hosting differences that were not visible when running Astro's development server.

There was also an issue where the generated site successfully deployed to the hosting URL while the custom domain returned a 404.

These problems reinforced an important distinction between application development and application deployment. A site working locally only proves that the development environment works. Hosting configuration, build output, routing, DNS, and custom-domain configuration are separate parts of the system.

### Tradeoffs and Decisions
One of the largest decisions was choosing custom CSS instead of Tailwind.

The advantage of Tailwind would have been faster implementation of many common layout and spacing patterns. It would also provide a consistent utility system across the site.

The downside was introducing another layer of abstraction to a relatively small project.

For this portfolio, I decided the additional framework was not necessary. The site has a limited number of components, and maintaining a focused global stylesheet is currently manageable.

Another decision was choosing Astro instead of a heavier client-side framework.

A framework such as React could easily build this site, but most portfolio content does not need client-side rendering or application-level state.

Astro better matches the actual requirements.

I also decided that the engineering journal should replace a traditional blog.

The distinction is intentional.

I am less interested in publishing general-purpose articles and more interested in documenting technical decisions, project architecture, implementation problems, and lessons learned. The planned site structure reflects that direction.

### Result
The project now has the foundation needed for the rest of the portfolio.

The site includes a reusable global layout, navigation, footer, TypeScript configuration, custom styling, theme support, and deployment through my portfolio domain.

More importantly, the site's information architecture is becoming clearer.

The planned portfolio includes:
- A homepage introducing my work
- Featured projects
- Categorized technical skills
- Project write-ups
- An engineering journal
- A digital Resume
- Contact information

This creates a much stronger foundation than treating the portfolio as a single page containing links to other websites.

The portfolio is still evolving, but the underlying structure is now capable of supporting that growth.

### What I Learned
One of the biggest lessons from building the portfolio has been that seemingly simple websites still contain meaningful engineering decisions.

Choosing a framework, designing reusable components, creating a theme system, managing layout behavior, configuring deployment, and defining content structure are all architectural decisions at a smaller scale.

I also gained a greater appreciation for building the foundation before filling the site with content.

Creating the shared layout, styles, navigation, and deployment process first means future pages can focus primarily on their content instead of repeatedly solving the same infrastructure problems.

Another lesson was the value of designing around semantic concepts.

Using variables such as --primary-color and --text-color is more maintainable than thinking about individual hardcoded colors throughout the application.

The same idea applies beyond CSS. Components, routes, and content structures become easier to evolve when they represent concepts rather than individual implementations.

### What I Would Change
If I restarted the project, I would establish the responsive layout strategy earlier.

Desktop layouts are easy to visualize during initial development, but navigation, footer alignment, project cards, and long-form journal content all behave differently on smaller screens.

Finally, I would test the production build and deployment environment earlier in the development process.

Local development hides several classes of deployment problems. Running production builds and testing deployed routes earlier would reduce the chance of discovering hosting or routing problems after larger portions of the site have already been completed.

### Resources/Links
- Portfolio: [Home](https://dustinjones.dev)
- Framework: [Astro](https://astro.build/)
- Domain: [Cloudflare](https://www.cloudflare.com/)
- Icons: [Font Awesome](https://fontawesome.com/)
- Source Control: [GitHub](https://github.com/) | [Git](https://git-scm.com/)
