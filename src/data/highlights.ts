export type Highlight = {
    year: string;
    title: string;
    result: string;
    href: string;
};

// Home "Highlights" section. Each row links to the section of the site where it is documented.
export const highlights: Highlight[] = [
    {
        year: "2026",
        title: "Qollab x IonQ Global Quantum Hackathon",
        result: "1st place in Quantum Impact (industrial application) and 3rd place overall (Argentina)",
        href: "/competitions#tier-hackathons",
    },
    {
        year: "2025",
        title: "Uruguay eCommerce Awards",
        result: "Nomination",
        href: "/rankings#tier-awards",
    },
    {
        year: "2024",
        title: "Uruguay eCommerce Awards",
        result: "Nomination",
        href: "/rankings#tier-awards",
    },
    {
        year: "2023 & 2025",
        title: "Buenos Aires 42k Marathon",
        result: "Finisher",
        href: "/running-agustin-diaz-cano",
    },
];
