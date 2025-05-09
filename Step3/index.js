import { getGrade } from "../Step2/index.js";

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

console.log(hasPassingGrade(100)); // true
console.log(hasPassingGrade(82)); // true
console.log(hasPassingGrade(56)); // false
