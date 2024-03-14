// Question 1:
var firstName = "Sahil" ;
var lastName = "Kumar" ;
var country = "INDIA" ;
var city = "Bhagalpur" ;
var age = 20 ;
var isMarried = false ;
var year = 2024 ;
console.log(typeof(firstName));
console.log(typeof(lastName));
console.log(typeof(country));
console.log(typeof(city));
console.log(typeof(age));
console.log(typeof(isMarried));
console.log(typeof(year));

// Question 2:
console.log(typeof('10') == typeof(10));

// Question 3:
console.log(parseInt('9.8') == 10);

// Question 4:
// Truthy Conditions
console.log(10 != NaN);
console.log('a' == 'a');
console.log(age ? true : false);

// Falsy Conditions
console.log(10 == NaN);
console.log('a' != 'a');
console.log(!age);

// Question 5:
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');
console.log("python".length != "jargon".length);

// Question 6:
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));
console.log(!("dragon".includes('on') && "python".includes('on')));

// Question 7:
var date = new Date();

console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());

var prevDate = new Date(1970 , 0 , 1);
console.log((date - prevDate)/1000);