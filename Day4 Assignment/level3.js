// 1.
let month=prompt("Enter a month:");
let a=month.toLowerCase();
if(a=="january"||"march"||"may"||"july"||"august"||"october"||"december")
{
    console.log(a,"has 31 days.");
}
else if(a=="february")
{
    console.log(a,"has 28 days.");
}
else
{
    console.log(a,"has 30 days.");
}

//  2.
let months=prompt("Enter a month:");
let b=months.toLowerCase();
if(a=="january"||"march"||"may"||"july"||"august"||"october"||"december")
{
    console.log(b,"has 31 days.");
}
else if(a=="february")
{
    console.log(b,"has 29 days.");
}
else
{
    console.log(b,"has 30 days.");
}