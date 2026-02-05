/**
 * Problem 2: Student Marks Analyzer
Function name: analyzeMarks(marksObj)
Statement:
 Return total marks, average marks, highest scoring subject, and lowest scoring subject.

Test case 1
Input: { math: 78, english: 65, physics: 88, bangla: 55 }
Output: { total: 286, average: 71.5, highest: "physics", lowest: "bangla" }

Test case 2
Input: { ict: 90, biology: 90, chemistry: 70 }
Output: { total: 250, average: 83.33, highest: "ict", lowest: "chemistry" }
 */

function sentenceFrequency (sentence){
  const words = sentence.split(' ');
  let longestWord = "";

for (let word of words) {
    if (word.length > longestWord.length) {
        longestWord = word;
    }
}
return longestWord;
}
const output = sentenceFrequency("I love JavaScript coding");
console.log(output);