var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

var grade =[];
for (var i =0 ; i < scores.length ;i =i +1) {
if (scores[i] >=50 && scores[i]<=60 ){
grade.push ("F"); 
}
 else if (scores[i] >= 61 && scores[i]<= 70) {
grade.push ("D"); 
}
else if (scores[i] >=71 && scores[i]<=80) {
grade.push ("C"); 
} 
else if (scores[i] >=81 && scores[i]<=90) {
grade.push ("B"); 
} 
else if (scores[i] >=91 && scores[i]<=100) {
grade.push ("A"); 
}
}

var numberOfGradeF= 0 ;
var numberOfGradeD= 0 ;
var numberOfGradeC= 0 ;
var numberOfGradeB= 0 ;
var numberOfGradeA= 0 ;

for (var j=0 ; j< grade.length ;j = j+1){
if (grade[j]=== "F" ){
numberOfGradeF = numberOfGradeF +1 ;
} 
else if (grade[j]=== "D" ){
numberOfGradeD = numberOfGradeD +1 ;
}
else if (grade[j]=== "C" ){
numberOfGradeC = numberOfGradeC +1 ;
}
else if (grade[j]=== "B" ){
numberOfGradeB = numberOfGradeB +1 ;
}
else if (grade[j]=== "A" ){
numberOfGradeA = numberOfGradeA +1 ;
}
}


console.log(" number of F grade = " + numberOfGradeF + " . ");

console.log(" number of D grade = " + numberOfGradeD + " . ");

console.log(" number of C grade = " + numberOfGradeC + " . ");

console.log(" number of B grade = " + numberOfGradeB + " . ");

console.log(" number of A grade = " + numberOfGradeA + " . ");

var scores = scores.sort(function(a,b){ 
    return a-b;  // sort from the lower to the higher
}
);
 console.log("the lowest grade is " + scores[0] + "")


var scores = scores.sort(function(a,b){ 
    return a+b;  // sort from the to the higherlower
}
);
 console.log("the highest grade is " + scores[0] + "")











