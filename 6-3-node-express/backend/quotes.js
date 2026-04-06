import { getRandomInt } from "./utils/random.js";

const quotes = [
  "The only limit to our realization of tomorrow is our doubts of today.",
  "In the middle of every difficulty lies opportunity.",
  "Life is 10% what happens to us and 90% how we react to it.",
  "Your time is limited, so don’t waste it living someone else’s life.",
];

export function getRandomQuote() {
  const index = getRandomInt(quotes.length);
  return quotes[index];
}
