/* * * * * * * * * *
 * Will be used as router in navbar component.
 * Mitigates the amount of hardcoded html.
 * * * * * * * * * */

export interface NavigationItem {
  label: string;
  href: string;
};

export const PRIMARY_NAVIGATION: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Journals",
    href: "/journals",
  },
  {
    label: "Resume",
    href: "/resume",
  },
  {
    label: "Contact",
    href: "/contact",
  }
];
