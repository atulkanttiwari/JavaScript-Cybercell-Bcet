// Question 1:
// var base = prompt('Enter base:');
// var height = prompt('Enter Height:');
// var area = 0.5 * base * height ;
// console.log(area);

// Question 2:
// var sideA = parseInt(prompt('Enter side a:'))
// var sideB = parseInt(prompt('Enter side b:'))
// var sideC = parseInt(prompt('Enter side c:'))
// var perimeter = sideA + sideB + sideC
// console.log(perimeter);

// Question 3:
// var length = parseInt(prompt('Enter length:'))
// var breadth = parseInt(prompt('Enter breadth:'))
// var area = length * breadth;
// var perimeter = 2 * (length + breadth);
// console.log(area+"\n"+perimeter);

// Question 4:
// var pi = 3.14 ;
// var radius = parseInt(prompt("enter radius:"))
// var area = pi * radius * radius;
// var perimeter = 2 * pi * radius;
// console.log(area+"\n"+perimeter);

// Question 5:
var xIntercept = [1,0] ;
var yIntercept = [0 ,-2] ;
var slope1 = 2;

// Question 6:
var point1 = [2 , 2];
var point2 = [6 ,10];
var slope = (point2[1]-point1[1])/(point2[0]-point1[0]);
console.log(slope);

// Question 7:
if(slope1 > slope){
    console.log(slope1+"is greater");
}
else if(slope > slope1){
    console.log(slope+"is greater");
}
else{
    console.log(slope+" = "+slope1);
}
// Question 8:
for(let i = 0 ; ;i++){
    var y1 = i*i + 6*i + 9;
    var y2 = -i*-i + 6*-i + 9;

    if(y1 == 0) {
        console.log("y = 0 at x = "+i);
        break ;
    }else if(y2 == 0) {
        console.log(("y = 0 at x = "+i));
        break ;
    }
    
}

// Question 9:
// var hours = parseInt(prompt("Enter the hours: "));
// var ratePerHour = parseInt(prompt("Enter rate per hour : "));
// var payPerson = hours * ratePerHour ;
// console.log(payPerson);

// Question 10:
var myName = "sahil" ;
if(myName.length < 7) {
    console.log("Short name");
} else {
    console.log("Long Name");
}

// Question 11:
let firstName = 'Asabeneh';
let lastName = 'Yetayeh';

if(firstName.length > lastName.length){
    console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`);
}else if(firstName.length < lastName.length) {
    console.log(`Your last name, ${lastName} is longer than your first name, ${firstName}`);
}else{
    console.log(`Your first name, ${firstName} is of equal length to your last name, ${lastName}`);
}


// Question 12:
let myAge = 250 ;
let yourAge = 25 ;
if(myAge > yourAge){
    console.log(`I am ${myAge - yourAge} years older than you.`);
}else if(myAge < yourAge){
    console.log(`you are ${myAge - yourAge} years older than me.`);
}

// Question 13:
// var birthYear = parseInt(prompt("Enter birth year:"));
// var date = new Date();
// var userAge = date.getFullYear() - birthYear;
// if(userAge >= 18) {
//     console.log(`You are ${userAge}. You are old enough to drive`);
// }else{
//     console.log(`You are ${userAge}. You will be allowed to drive after ${18-userAge} years.`);
// }

// Question 14:
// var years = parseInt(prompt("Enter Number of years : "))
// var secondsYouLive = years * 365 * 24 * 60 * 60 ;
// console.log(secondsYouLive);

// Question 15:
var date = new Date();
var fullYear = date.getFullYear();
var month = date.getMonth() <= 9 ? "0"+(date.getMonth()+1):date.getMonth() ;
var dateNumber = date.getDate() <= 9?"0"+date.getDate():date.getDate() ;

var hours = date.getHours()<=9?"0"+date.getHours():date.getHours()
var minutes = date.getMinutes <= 9 ? "0"+date.getMinutes() : date.getMinutes();

console.log(fullYear+"-"+month+"-"+dateNumber+" "+hours+":"+minutes);
console.log(dateNumber+"-"+month+"-"+fullYear+" "+hours+":"+minutes);
console.log(dateNumber+"/"+month+"/"+fullYear+" "+hours+":"+minutes);