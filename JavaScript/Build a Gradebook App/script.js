function getAverage(testScores) {
  let sum = 0;
  for (let num of testScores) {
    sum += num;
  }
  return sum / testScores.length;
}

function getGrade(score) {
  if (score === 100) return "A+";
  else if (score >= 90) return "A";
  else if (score >= 80) return "B";
  else if (score >= 70) return "C";
  else if (score >= 60) return "D";
  else return "F";
}

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

function studentMsg(scores, score) {
  return hasPassingGrade(score)
    ? `Class average: ${getAverage(scores)}. Your grade: ${getGrade(
        score,
      )}. You passed the course.`
    : `Class average: ${getAverage(scores)}. Your grade: ${getGrade(
        score,
      )}. You failed the course.`;
}
