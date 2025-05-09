export function getAverage(scores) {
  if (!Array.isArray(scores)) {
    throw new Error("Invalid input: scores must be an array of numbers.");
  }

  if (scores.length === 0) return 0;

  const total = scores.reduce((acc, score) => {
    if (typeof score !== "number") {
      throw new Error("Invalid input: all elements in scores must be numbers.");
    }
    return acc + score;
  }, 0);

  const average = total / scores.length;

  return average.toFixed(1);
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));
