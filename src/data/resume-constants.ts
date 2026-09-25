/* * * * * * * * * *
 * Used to hold information tied to a resume entry. 
 * Mitigates the amount of hardcoded html on resume page.
 * * * * * * * * * */

interface DevEduItem {
  title: string;
  organization: string;
  description: string;
  dateObtained: Date;
};

interface SkillGroup {
  group: string;
  items: string[];
};

interface ExperienceItem {
  title: string;
  organization: string;
  startDate: Date;
  endDate?: Date;
  location: string;
  highlights: string[];
};

interface ResumeData {
  name: string;
  summary: string;
  experience: ExperienceItem[];
  skills: SkillGroup[];
  development: DevEduItem[];
  education: DevEduItem[];
};

export const RESUME: ResumeData = {
  name: "Dustin Lynn Jones",
  summary: `
Applications & Integrations Manager with experience leading enterprise 
system implementations, designing system integrations, automating business 
processes, and managing business-critical applications. Proven success 
developing API-driven solutions, coordinating cross-functional technology 
projects, and translating operational requirements into scalable technical 
solutions. Hands-on experience with application ownership, mentoring, and 
enterprise technology planning.`,
  experience: [
    {
      title: "Applications and Integrations Manager",
      organization: "Housley Group",
      startDate: new Date("2026-08-01"),
      location: "San Angelo, TX",
      highlights: [
        `Leading the end-to-end technical implementation of a multi-system 
ERP rollout, integrating job costing, payroll/HR, sales tax, and document 
management platforms.`,
        `Designed and deployed custom automation scripts to streamline 
billing workflows, migrate data between systems, and reduce manual 
administrative effort.`,
        `Developed and maintained API integrations to import customer 
data into legacy software for automated ticket creation and 
improved data accuracy.`,
        `Serve as a primary SME and escalation resource for 
enterprise applications and process improvements.`,
        `Mentor IT team members through technical guidance, 
knowledge transfer, and delegated ownership.`,
      ],
    },
    {
      title: "Network Administrator",
      organization: "Housley Group",
      startDate: new Date("2023-01-01"),
      location: "Hybrid",
      highlights: [
        `Administered Microsoft 365 Services including Teams, Exchange 
Online, SharePoint, and user account management.`,
        `Awarded "Employee of the Month" for techinal initiative and 
process improvements.`,
        `Recognized with the “Up and Comer” Award for rapid skill growth,
ownership, and cross-functional impact.`,
      ],
    },
    {
      title: "Associate Software Engineer",
      organization: "Mphasis",
      startDate: new Date("2022-07-01"),
      endDate: new Date("2023-01-01"),
      location: "Remote",
      highlights: [
        `Contributed to enterprise modernization efforts by updating and
maintaining legacy codebases using Java.`,
        `Collaborated within an Agile/Kanban environment to deliver
enhancements, bug fixes, and code improvements.`,
      ],
    },
  ],
  skills: [
    {
      group: "Languages",
      items: [
        "Java",
        "JavaScript",
        "TypeScript",
        "Python",
        "Go (Golang)",
        "VBA",
        "SQL",
      ],
    },
    {
      group: "Backend & Integration",
      items: [
        "Microservices",
        "API Design",
        "Message Queues",
        "Process Automation",
      ],
    },
    {
      group: "Platforms & Infrastructure",
      items: [
        "Windows",
        "Linux",
        "AWS",
        "Git",
        "Postman",
        "Microsoft 365",
        "Neovim",
      ],
    },
    {
      group: "Practices & Methodologies",
      items: [
        "Agile",
        "Kanban",
        "Technical Documentation",
        "EOS",
      ],
    },
  ],
  development: [
    {
      title: "Post Graduate Program in Cloud Computing",
      organization: "The University of Texas at Austin",
      description: `Developed practical experience designing, deploying, and managing
cloud-based solutions using AWS services, automation tools, and modern
cloud architecture principles.`,
      dateObtained: new Date("2023-01-01"),
    },
    {
      title: "Java Full Stack Developer Training",
      organization: "Quintrix Solutions",
      description: `Hands-on development experience with Spring Boot, RESTful APIs, SQL
databases, AWS services, and microservices architecture used to build
and deploy full-stack applications with emphasis on backend services
and data integration.`,
      dateObtained: new Date("2022-06-01"),
    },
  ],
  education: [
    {
      title: "Bachelor of Science in Computer Science",
      organization: "Angelo State University",
      description: "Minor in Mathematics",
      dateObtained: new Date("2020-12-01"),
    },
  ],
};
