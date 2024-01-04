// function lifeInWeeks(age) { //add their answer in the brackets, so should be information you're going to need to solve function//
//     var yearsRemaining = 90 - age;
//     var days = yearsRemaining * 365;
//     var weeks = yearsRemaining * 52;
//     var months = yearsRemaining * 12;

//     console.log("You have" + days + "days", + weeks + "weeks" + and + "months" + months + "left")
// } 


function bmiCalc(weight, height) {
    return (weight/height**2) //returns results without outputting anything//
}

var myBmi = bmiCalc(65, 1.8)
console.log(myBmi)