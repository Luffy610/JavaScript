/* Q2. Write a code which can give gtrades to students according to their scores:
    90-100 A
    70-89 B
    60-69 C
    50-59 D
    0-49 F
*/

let marks = prompt("Enter the mark of the student : ")

if (marks > 100){
    console.log("Invalid Marks, the mark can't be greater than 100, please check!!");
}
else if (marks >= 90){
    console.log("Grade = A");
}
else if (marks >= 70){
    console.log("Grade = B");
}
else if (marks >= 60){
    console.log("Grade = C");
}
else if (marks >= 50){
    console.log("Grade = D");
}
else if (marks < 0){
    console.log("Invalid marks!!, Marks can't be less than 0")
}
else{
    console.log("Grade = F")
}