export type PublicationLink = {
  label: 'PDF' | 'ePrint' | 'Code' | 'BibTeX' | 'Project';
  href: string;
};

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  blurb?: string;
  abstract?: string;
  links?: PublicationLink[];
};

// Add real publications here. The page renders this list automatically.
// Example:
// {
//   title: 'Paper title',
//   authors: 'Freya Liu, Coauthor',
//   venue: 'Conference',
//   year: 2027,
//   blurb: 'One sentence explaining the contribution.',
//   abstract: 'Full abstract...',
//   links: [{ label: 'ePrint', href: 'https://eprint.iacr.org/...' }]
// }
export const publications: Publication[] = [];
