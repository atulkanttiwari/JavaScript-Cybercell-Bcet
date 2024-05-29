// 1.
let age=parseInt(prompt("Enter your age:"));
if(age>=18)
{
    console.log("You are old enough to drive");
}
else
{
    console.log("You are left with",18-age,"years to drive");
}

// 2.
let myAge=21;
let yourAge=parseInt(prompt("Enter your age:"));
if(myAge>yourAge)
{
    console.log("I am",myAge-yourAge,"years older than you");
}
else if(myAge==yourAge)
{
    console.log("Your and my age is same");
}
else
{
    console.log("You are",yourAge-myAge,"years old than me");
}

// 3.
let a=parseInt(prompt("Enter the value of a:"));
let b=parseInt(prompt("Enter the value of b:"));
if(a>b)
{
    console.log(a,"is greater than",b);
}
else
{
    console.log(b,"is greater than",a);
}
(a>b)?console.log(a,"is greater than",b):console.log(b,"is greater than",a);

// 4.
let num=parseInt(prompt("Enter a number:"));
if(num%2==0)
{
    console.log(num,"is a even number");
}
else
{
    console.log(num,"is a odd number");
}