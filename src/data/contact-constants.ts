/* * * * * * * * * *
 * Used to hold the links for socials, emails, and resume.
 * Mitigates the amount of hardcoded html on contacts.
 * * * * * * * * * */

interface LinkItem {
  label: string;
  href: string;
  alternateText?: string;
  mailTo?: boolean;
  download?: boolean;
};

export const CONTACT_LINKS: LinkItem[] = [
  {
    label: "Email",
    href: "dustinjoneswe@gmail.com",
    mailTo: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dustin-jones-swe/",
  },
  {
    label: "GitHub",
    href: "https://github.com/DustinLJones",
  },
  {
    label: "Resume",
    href: "/documents/resume.pdf",
    alternateText: "Download PDF",
    download: true,
  },
];

export const CONTACT_MESSAGE: string = `
Interested in working together, discussing a project,
or just talking software? You can reach me through any
of the channels below.`;
