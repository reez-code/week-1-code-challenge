// A function that prompts user for input and calculates grade
//takes marks as input 
function calculateGrade (marks){
    //prompt user for input 
   /* 
     let marks = prompt("What is the student's grade");
   */

    //Checks if input is a valid number between 0 and 100
    if (marks < 0 || marks > 100){
       return("Invalid input. Please enter a number between 0 to 100")
    }

   //Calculates grades based on marks
    if (marks > 79) {
        grade = 'A';
        return grade;
    } else if (marks >= 60 && marks <= 79) {
        grade = 'B';
        return grade;
    } else if (marks >= 50 && marks <= 59) {
        grade = 'C';
        return grade;
    } else if (marks >= 40 && marks <= 49) {
        grade = 'D';
        return grade;
    } else {
        grade = 'E';
        return grade;
    }
}
console.log(calculateGrade(101))