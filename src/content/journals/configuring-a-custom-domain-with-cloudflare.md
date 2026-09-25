---
title: 'Configuring a Custom Domain with Cloudflare'
pubDate: 2026-09-05
readTimeMinutes: 7
image: '../../images/journals/cf-logo-2.jpg'
tags: ['Cloudflare', 'DNS', 'GitHub Pages', 'HTTPS']
slug: configuring-a-custom-domain-with-cloudflare
---

## Configuring a Custom Domain with Cloudflare
Deploying a website and making it available through a custom domain are two related but separate problems.

My portfolio was already deploying successfully, but I wanted visitors to reach it through `dustinjones.dev` instead of the default hosting URL. Configuring that required connecting the domain, DNS provider, hosting platform, and HTTPS configuration correctly.

What initially appeared to be a simple domain change became a useful exercise in understanding the infrastructure behind a web request.

### Context

The portfolio is an Astro static site stored in GitHub and deployed through GitHub Pages.

After migrating the site to Astro, the generated site was successfully available through the GitHub Pages address:

```text
https://dustinljones.github.io/
```

However, visiting my custom domain:

```text
https://dustinjones.dev
```

returned a `404`.

That was an important clue.

The application itself was building successfully, and GitHub Pages was capable of serving it. The problem not inside the Astro application. The failure existed somewhere between the custom domain and the hosting platform.

Cloudflare was already managing DNS for `dustinjones.dev`, so the task became configuring the request path correctly between Cloudflare and GitHub Pages.

### Requirements

The domain configuration needed to satisfy several requirements:
- `dustinjones.dev` should resolve to the deployed portfolio.
- The site should remain hosted through GitHub Pages.
- Cloudflare should continue managing DNS for the domain.
- HTTPS should work correctly.
- Visitors should not need to know or use the GitHub Pages URL.
- The configuration should remain simple enough to troubleshoot later.
- Deploying a new version of the Astro site should not require additional DNS changes.

The DNS configuration also needed to remain separate from the application itself. Updating site content should be an application deployment concern, while routing the domain should remain an infrastructure concern.

### Goals

The immediate goal was straightforward:

```text
https://dustinjones.dev
```

should serve the same portfolio that was already available through GitHub Pages.

The larger goal was to better understand how the pieces involved in public web hosting fit together.

Instead of treating DNS configuration as a set of values to copy into a dashboard, I wanted to understand the path a request takes from the browser to the deployed site.

Conceptually, the request flow looks like this:

```text
Browser
   |
   v
dustinjones.dev
   |
   v
DNS Resolution
   |
   v
Cloudflare
   |
   v
GitHub Pages
   |
   v
Generated Astro Site
```

Each layer is responsible for something different, and a failure at any one of them can prevent the domain from working.

### Approach

I started by isolating the parts of the deployment that were already functioning.

Since the GitHub Pages URL loaded successfully, I knew several things were already working:

* The repository could be built.
* Astro was generating the production site.
* GitHub Pages was receiving the deployment.
* GitHub Pages was capable of serving the generated files.

I then focused on the custom-domain configuration.

The process involved verifying three separate areas:

- GitHub Pages recognized the custom domain.
- Cloudflare DNS directed the domain toward GitHub Pages.
- HTTPS could be established correctly for the custom hostname.

This became the general troubleshooting model for the configuration:

```text
Does the deployment URL work?
        |
       Yes
        |
        v
Does DNS resolve correctly?
        |
       Yes
        |
        v
Does the hosting platform recognize the hostname?
        |
       Yes
        |
        v
Does HTTPS work?
```

Breaking the problem into layers made it considerably easier to identify where a failure was occurring.

### Key Implementation Detail

The most important part of the configuration was understanding the relationship between DNS records and the custom-domain setting in GitHub Pages.

DNS answers a question similar to:

```text
Where should requests for dustinjones.dev go?
```

GitHub Pages answers a different question:

```text
Do I have a site configured to respond to dustinjones.dev?
```

Both sides need to agree.

Configuring DNS alone is not sufficient if the hosting platform does not recognize the hostname. Likewise, configuring the custom domain inside GitHub Pages does not help if DNS never directs requests toward GitHub's infrastructure.

### Challenges

The main challenge was that the visible symptom initially looked like an application failure.

A browser displayed a `404`, so it would have been reasonable to assume that Astro had generated an incorrect route.

However, the default GitHub Pages URL continued to work.

That meant the same deployed files behaved differently depending on the hostname used to reach them.

The issue was therefore outside the normal application routing path.

This highlighted an important debugging technique: compare working and failing paths and identify where they diverge.

In this case:

```text
Working:
Browser -> github.io -> GitHub Pages -> Astro Site

Failing:
Browser -> dustinjones.dev -> Cloudflare -> ? -> 404
```

The divergence happened before the application was served.

Another challenge was that several systems expose settings related to domains and HTTPS.

Cloudflare has DNS and SSL settings. GitHub Pages has custom-domain and HTTPS configuration. The browser ultimately evaluates the TLS certificate it receives.

It is easy to think of these as one configuration, but they are separate systems participating in the same request.

### Tradeoffs and Decisions

One decision was to keep GitHub Pages as the hosting platform rather than moving the site simply because the custom-domain configuration required troubleshooting.

The deployment itself was already working, so changing hosting providers would have replaced a relatively narrow DNS problem with an entirely new deployment configuration.

I preferred to solve the actual problem rather than change architecture around it.

I also chose to keep Cloudflare as the DNS provider.

Technically, the domain could be managed elsewhere, but Cloudflare gives me a single place to manage DNS and leaves room for additional edge features later.

The tradeoff is that adding Cloudflare introduces another layer into the request path.

That means troubleshooting requires understanding whether a problem originates from:

* The application.
* GitHub Pages.
* DNS.
* Cloudflare.
* HTTPS configuration.

The additional layer is worthwhile, but only if I understand what responsibility it owns.

### Result

The final result was that the portfolio became available through:

```text
https://dustinjones.dev
```

while continuing to use GitHub Pages as the hosting platform.

The final architecture remained relatively simple:

```text
GitHub Repository
       |
       v
Astro Build
       |
       v
GitHub Pages
       ^
       |
Cloudflare DNS
       ^
       |
dustinjones.dev
       ^
       |
    Browser
```

This configuration also means that application deployments and domain configuration are largely independent.

When I update the portfolio, GitHub Pages receives a new version of the generated site. The domain continues pointing to the same hosting infrastructure, so normal content deployments do not require DNS changes.

### What I Learned

The biggest lesson was that a deployed application and a working domain are not the same thing.

Before this issue, it was easy to mentally group deployment, DNS, and HTTPS together as one process. They are better understood as separate layers.

The application has to build correctly.

The hosting platform has to serve the application.

DNS has to direct the hostname toward the hosting infrastructure.

The hosting provider has to associate the incoming hostname with the correct deployment.

HTTPS then has to establish trust for that hostname.

A failure at any one layer can make the entire site appear unavailable.

### Resources/Links
- Portfolio: [Home](https://dustinjones.dev)
- DNS Provider: [Cloudflare](https://www.cloudflare.com/)
- Hosting: [GitHub Pages](https://docs.github.com/en/pages)
- Framework: [Astro](https://astro.build/)
- Source Control: [Git](https://git-scm.com/) and [GitHub](https://github.com/)
