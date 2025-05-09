import { getAverage } from "../Step1/index.js";
import { getGrade } from "../Step2/index.js";

function studentMsg(totalScores, studentScore) {
  if (getGrade(studentScore) === "F") {
    return `Class average: ${getAverage(totalScores)}. Your grade: ${getGrade(
      studentScore
    )}. You failed the course.`;
  }
  return `Class average: ${getAverage(totalScores)}. Your grade: ${getGrade(
    studentScore
  )}. You passed the course.`;
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 71));
