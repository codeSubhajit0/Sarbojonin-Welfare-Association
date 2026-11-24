export interface Founder {
    name: string;
    position: string;
    image: string;
    description: string;
}

export interface TrusteeGroup {
    id: number;
    image: string;
    members: { name: string; position: string }[];
}

export interface Member {
    name: string;
    position: string;
    image: string;
}

export const trusteeGroups: TrusteeGroup[] = [
    {
        id: 1,
        image: "/images/trusteemembers/founder.jpeg",
        members: [
            { name: "Dr Ashish Mitra", position: "Founder Trustee" },
            { name: "Neeta Mitra", position: "Founder Trustee" },
        ],
    },
    {
        id: 2,
        image:
            "/images/trusteemembers/somendu-aparna-ghosh.jpeg",
        members: [
            { name: "Dr Somendu Ghosh", position: "Founder Trustee" },
            { name: "Smt Aparna Ghosh", position: "Founder Trustee" },
        ],
    },
    {
        id: 3,
        image: "/images/placeholder.png",
        members: [{ name: "Powshali Chatterjee", position: "President" }],
    },
    {
        id: 4,
        image: "/images/trusteemembers/Pallab Bhanja Chaudhary Vice President.jpeg",
        members: [{ name: "Pallab Bhanja Chaudhary", position: "Vice President" }],
    },
    {
        id: 5,
        image: "/images/placeholder.png",
        members: [{ name: "Protima Roychowdhury", position: "Secretary" }],
    },
];

export const foundingMembers: Member[] = [
    {
        name: "Shri Arun Dey and Shrimati Deepti Dey",
        position: "Founding Member",
        image: "/images/foundingMembers/arun-dey-deepti-dey.jpeg",
    },
    {
        name: "Shri Alok Bhattacharya & Smt Nibedita Bhattacharya",
        position: "Founding Member",
        image: "/images/foundingMembers/alok-nibedita-bhattacharya.jpeg",
    },
    {
        name: "Shri Abhrajeet Dey & Smt Mahua Dey",
        position: "Founding Member",
        image: "/images/foundingMembers/abhrajeet-mahua-dey.jpeg",
    },
    {
        name: "Shri R.K.Dutta Roy & Smt Lajumita Dutta",
        position: "Founding Member",
        image: "/images/trusteemembers/rk-dutta-lajumita-dutta.jpeg",
    },
    {
        name: "Shri Amaresh Chatterjee & Smt Snigdha Chatterjee",
        position: "Founding Member",
        image: "/images/foundingMembers/amaresh-snigdha-chatterjee.jpeg",
    },
    {
        name: "Shri Aniket Mukherjee & Smt Sonakshi Mukherjee",
        position: "Founding Member",
        image: "/images/foundingMembers/aniket-sonakshi-mukherjee.jpeg",
    },
    {
        name: "Shri Anil Roy & Smt Sunita Roy",
        position: "Founding Member",
        image: "/images/foundingMembers/anil-sunita-roy.jpeg",
    },
    {
        name: "Shri Arpan Ghosh & Late Smt Manjula Ghosh",
        position: "Founding Member",
        image: "/images/foundingMembers/arpan-manjula-ghosh.jpeg",
    },
    {
        name: "Shri Arup Banerjee & Smt Ruma Banerjee",
        position: "Founding Member",
        image: "/images/foundingMembers/arup-ruma-banerjee.jpeg",
    },
    {
        name: "Shri Boren Roy & Smt Deepali Roy",
        position: "Founding Member",
        image: "/images/foundingMembers/boren-deepali-roy.jpeg",
    },
    {
        name: "Shri Debashish Chakraborty & Smt Boisakhi Chakraborty",
        position: "Founding Member",
        image: "/images/foundingMembers/debashish-boisakhi-chakraborty.jpeg",
    },
    {
        name: "Shri Debashish Chakraborty & Smt Geetanjali Chakraborty",
        position: "Founding Member",
        image: "/images/foundingMembers/debashish-geetanjali-chakraborty.jpeg",
    },
    {
        name: "Shri S.K.Sengupta",
        position: "Founding Member",
        image: "/images/foundingMembers/sk-sengupta.jpeg",
    },
    {
        name: "Shri Santosh Roy & Smt Reeta Roy",
        position: "Founding Member",
        image: "/images/foundingMembers/santosh-reeta-roy.jpeg",
    },
    {
        name: "Shri Shiv Kumar Ghosh & Smt Sumita Ghosh",
        position: "Founding Member",
        image: "/images/foundingMembers/shiv-sumita-ghosh.jpeg",
    },
    {
        name: "Smt Protima Ghosh & Late Shri N.K.Ghosh",
        position: "Founding Member",
        image: "/images/foundingMembers/protima-nk-ghosh.jpeg",
    },
];
