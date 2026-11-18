export type BlogPost = {
    slug: string;
    title: string;
    date: string;
    description: string;
};

// Source for the /writing (Blog) page and the home page blog section
export const posts: BlogPost[] = [
  {
    slug: "fundamental-principles",
    title: "Fundamental Principles of Scientific Validation",
    date: "Mar 3, 2026",
    description:
      "If you cannot describe the physical or logical mechanism driving the inner workings of a phenomenon, you do not have a theory, you have a statistical anecdote.",
  },
  {
    slug: "predicting-generative-ai-boom",
    title: "Predicting the Generative AI Boom: My Tech Presentation in March 2021",
    date: "Mar 2021",
    description:
      "A timestamped, verifiable record of live engagement with generative AI technology and accurate forecasting of its trajectory, 20 months before ChatGPT.",
  }
];
