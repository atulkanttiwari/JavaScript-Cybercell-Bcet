// 1.
let grade=parseInt(prompt("Enter your score:"));
if(grade>=80 && grade<=100)
{
    console.log("A");
}
else if(grade>=70 && grade<=89)
{
    console.log("B");
}
else if(grade>=60 && grade<=69)
{
    console.log("C");
}
else if(grade>=50 && grade<=59)
{
    console.log("D");
}
else if(grade>=0 && grade<=49)
{
    console.log("F");
}
else{
    console.log("Invalid input");
}

// 2.
let month = prompt("Enter month:");
if (month == "September" || "October" || "November") {
    console.log("Autumn");
}
else if (month == "December" || "January" || "February") {
    console.log("Winter");
}
else if (month == "March"|| "April"|| "May") {
    console.log("spring");
}
else {
    console.log("Summer");
}

// 3.
let day=prompt("Enter day");
let a=day.toLowerCase();
if(a=="saturday"||"sunday")
{
    console.log(a,"is a weekend.");
}
else{
    console.log(a,"is a working day.");
}