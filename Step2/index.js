export function getGrade(score) {
  if (score >= 100) return "A++";
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

console.log(getGrade(100));
console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));
