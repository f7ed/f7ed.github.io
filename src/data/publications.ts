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

export const publications: Publication[] = [
  {
    title: 'HasteBoots: Proving TFHE Programmable Bootstrapping in Seconds',
    authors: 'Fengrun Liu, Haofei Liang, Xiang Xie, Yu Yu, Wenting Zheng, Yuncong Hu',
    venue: 'USENIX Security',
    year: 2026,
    blurb: 'A succinct proof system for verifying outsourced TFHE computation with programmable bootstrapping.'
  },
  {
    title: 'Akita: A High-Performance Lattice-Based Polynomial Commitment Scheme',
    authors: 'Quang Dao, Omid Bodaghi, Amirhossein Khajehpour, Giuseppe Vitto, Mohammadtaghi Badakhshan, Markos Georghiades, Fengrun Liu, Jiapeng Zhang, Justin Thaler',
    venue: 'IACR ePrint 2026/1983',
    year: 2026,
    blurb: 'A high-performance lattice-based polynomial commitment scheme with an emphasis on practical implementation.'
  },
  {
    title: 'Scalable Multi-Party Computation Protocols for Machine Learning in the Honest-Majority Setting',
    authors: 'Fengrun Liu, Xiang Xie, Yu Yu',
    venue: 'USENIX Security',
    year: 2024,
    blurb: 'Scalable secure computation protocols for privacy-preserving machine-learning inference.'
  },
  {
    title: 'Edabits Generation with Quasi-Linear Communication Complexity',
    authors: 'Alexander Bienstock, Daniel Escudero, Qijia Fan, Fengrun Liu, Yifan Song',
    venue: 'In submission',
    year: 2026
  }
];
