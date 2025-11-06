// src/constants/index.ts
export interface VocabularyWord {
  word: string;
  explanation: string;
  example: string;
  example1: string;
}

export const vocabularyWords: VocabularyWord[] = [
  {
    word: "Apostrophe + s for singular",
    explanation:
      "Add ’s to a singular noun to show that one person, animal, or thing owns something.",
    example: "The dog’s bowl is empty.",
    example1: "Jessica’s umbrella never survives windy days.",
  },
  {
    word: "s + apostrophe for plural ending in s",
    explanation:
      "Add just an apostrophe to a plural noun that ends with s to show that several own something.",
    example: "The players’ lockers smell suspiciously like socks.",
    example1: "The twins’ laughter filled the house.",
  },
  {
    word: "Apostrophe + s for irregular plurals",
    explanation:
      "Use ’s for irregular plurals that don’t end in s, like children, men, women.",
    example: "The children’s toys cover the entire floor.",
    example1: "The women’s tournament starts tomorrow.",
  },
  {
    word: "No apostrophe in possessive pronouns",
    explanation:
      "Possessive pronouns like mine, yours, his, hers, its, ours, theirs already show ownership and never use an apostrophe.",
    example: "The green bag is mine.",
    example1: "Which book is yours?",
  },
  {
    word: "It's vs. its",
    explanation:
      "‘It’s’ means ‘it is’ or ‘it has’. ‘Its’ is the possessive for ‘it’ and means ‘belonging to it’.",
    example: "It’s raining, but the cat cleaned its whiskers.",
    example1: "It’s been a long week; its ending feels peaceful.",
  },
  {
    word: "Use 'of' for awkward expressions",
    explanation:
      "When the possessive with ’s is confusing or too long, use 'of' instead to show ownership.",
    example: "The cover of the magazine was shiny.",
    example1: "The ending of the film surprised everyone.",
  },
  {
    word: "Stack possessives carefully",
    explanation:
      "Chain possessive forms to show complicated relationships, but more than two or three can confuse your reader.",
    example: "My neighbor’s cat’s collar is missing.",
    example1: "The teacher’s friend’s birthday cake was a disaster.",
  },
];
