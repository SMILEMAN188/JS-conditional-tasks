// Grade Calculator

// Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

//     A: 90-100
//     B: 80-89
//     C: 70-79
//     D: 60-69
//     E: 0-59

let Mark=0;
if (Mark ==100 && Mark >= 90) {
    console.log("A+");
    
}

else if (Mark < 90 && Mark >=80) {
    console.log("B");
    
}

else if (Mark >= 70 && Mark <= 79) {
    console.log("C");
    
}

else if (Mark >= 60 && Mark <= 69) {
    console.log("D");
    
}

else {
    console.log("E");
    
}