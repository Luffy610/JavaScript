//Q12. We are given array of marks of student, filter out the marks of students that scored 90.

let marks = [90,100,0,89,56,90,43,87,10,90,45,33,90]

result = marks.filter((val)=>{
    return val == 90
})

console.log(result)