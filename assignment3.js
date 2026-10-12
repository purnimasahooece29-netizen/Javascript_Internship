
let score = 85;
let grade;

// if...else statement
if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 40) {
    grade = "D";
} else {
    grade = "F";
}

// switch statement
switch (grade) {
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Good");
        break;
    case "C":
        console.log("Average");
        break;
    case "D":
        console.log("Pass");
        break;
    default:
        console.log("Needs Improvement");
}

// Ternary operator
let status = score >= 40 ? "Passed" : "Failed";

console.log("Score:", score);
console.log("Grade:", grade);
console.log("Status:", status);
