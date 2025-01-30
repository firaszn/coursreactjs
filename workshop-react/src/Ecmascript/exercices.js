export const findLongestWord = (words) => 
    words.reduce((longest, word) => word.length > longest.length ? word : longest, "");

export const countOccurrences = (array) => 
    array.flat().reduce((acc, value) => ({ ...acc, [value]: (acc[value] || 0) + 1 }), {});

export const calculateTotalGrades = (grades) => 
    grades.map(grade => grade < 50 ? grade + 15 : grade)
          .filter(grade => grade > 50)
          .reduce((sum, grade) => sum + grade, 0);
