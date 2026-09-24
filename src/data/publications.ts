export type PublicationLink = {
  label: 'Paper' | 'PDF' | 'ePrint' | 'Code' | 'BibTeX' | 'Project';
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
    blurb: 'A succinct proof system for verifying outsourced TFHE computation with programmable bootstrapping.',
    links: [
      { label: 'Paper', href: 'https://www.usenix.org/conference/usenixsecurity26/presentation/liu-fengrun' },
      { label: 'ePrint', href: 'https://eprint.iacr.org/2025/261' },
      { label: 'Code', href: 'https://github.com/f7ed/HasteBoots' }
    ]
  },
  {
    title: 'Scalable Multi-Party Computation Protocols for Machine Learning in the Honest-Majority Setting',
    authors: 'Fengrun Liu, Xiang Xie, Yu Yu',
    venue: 'USENIX Security',
    year: 2024,
    blurb: 'Scalable secure computation protocols for privacy-preserving machine-learning inference.',
    links: [
      { label: 'Paper', href: 'https://www.usenix.org/conference/usenixsecurity24/presentation/liu-fengrun' },
      { label: 'Code', href: 'https://github.com/f7ed/hmmpc-public' }
    ]
  }
];

export const preprints: Publication[] = [
  {
    title: 'Akita: A High-Performance Lattice-Based Polynomial Commitment Scheme',
    authors: 'Quang Dao, Omid Bodaghi, Amirhossein Khajehpour, Giuseppe Vitto, Mohammadtaghi Badakhshan, Markos Georghiades, Fengrun Liu, Jiapeng Zhang, Justin Thaler',
    venue: 'IACR ePrint 2026/1983',
    year: 2026,
    blurb: 'A high-performance lattice-based polynomial commitment scheme with an emphasis on practical implementation.',
    links: [
      { label: 'ePrint', href: 'https://eprint.iacr.org/2026/1983' },
      { label: 'Code', href: 'https://github.com/LayerZero-Labs/akita' }
    ]
  }
];
