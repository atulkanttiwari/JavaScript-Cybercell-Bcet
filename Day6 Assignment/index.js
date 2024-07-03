//Level - 1
// Q1
for(let i = 0; i <= 10; i++) {
    console.log(i);
}

let i = 0;
while(i <= 10) {
    console.log(i);
    i++;
}

i = 0;
do {
    console.log(i);
    i++;
} while(i <= 10);

// Q2
for(let i = 10; i >= 0; i--) {
    console.log(i);
}

i = 10;
while(i >= 0) {
    console.log(i);
    i--;
}

i = 10;
do {
    console.log(i);
    i--;
} while(i >= 0);

// Q3 
let n = 10;
for(let i = 0; i <= n; i++) {
    console.log(i);
}

// Q4 
let pattern = '';
for(let i = 0; i < 7; i++) {
    pattern += '#';
    console.log(pattern);
}

// Q5 
for(let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`);
}

// Q6 
for(let i = 0; i <= 10; i++) {
    console.log(`${i} ${i * i} ${i * i * i}`);
}

// Q7 
for(let i = 0; i <= 100; i++) {
    if(i % 2 === 0) {
        console.log(i);
    }
}

// Q8 
for(let i = 0; i <= 100; i++) {
    if(i % 2 !== 0) {
        console.log(i);
    }
}

// Q9 
for(let i = 2; i <= 100; i++) {
    let isPrime = true;
    for(let j = 2; j < i; j++) {
        if(i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if(isPrime) {
        console.log(i);
    }
}

// Q10 
let sum = 0;
for(let i = 0; i <= 100; i++) {
    sum += i;
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}.`);

// Q11 
let sumEvens = 0;
let sumOdds = 0;
for(let i = 0; i <= 100; i++) {
    if(i % 2 === 0) {
        sumEvens += i;
    } else {
        sumOdds += i;
    }
}
console.log(`The sum of all evens from 0 to 100 is ${sumEvens}. And the sum of all odds from 0 to 100 is ${sumOdds}.`);

// Q12 
sumEvens = 0;
sumOdds = 0;
for(let i = 0; i <= 100; i++) {
    if(i % 2 === 0) {
        sumEvens += i;
    } else {
        sumOdds += i;
    }
}
console.log([sumEvens, sumOdds]);

// Q13 
let randomNumbers = [];
for(let i = 0; i < 5; i++) {
    randomNumbers.push(Math.random());
}
console.log(randomNumbers);

// Q14 
let uniqueRandomNumbers = [];
while(uniqueRandomNumbers.length < 5) {
    let randomNumber = Math.floor(Math.random() * 100);
    if(!uniqueRandomNumbers.includes(randomNumber)) {
        uniqueRandomNumbers.push(randomNumber);
    }
}
console.log(uniqueRandomNumbers);

// Q15 
let id = '';
let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
for(let i = 0; i < 6; i++) {
    id += characters.charAt(Math.floor(Math.random() * characters.length));
}
console.log(id);

//Level - 2
// Q1
function generateRandomId(length) {
  let id = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for(let i = 0; i < length; i++) {
    id += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return id;
}

console.log(generateRandomId(6));

// Q2
let randomHex = '#';
const hexCharacters = '0123456789ABCDEF';
for(let i = 0; i < 6; i++) {
  randomHex += hexCharacters.charAt(Math.floor(Math.random() * hexCharacters.length));
}
console.log(randomHex);

// Q3
function generateRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

console.log(generateRandomRGB());

// Q4
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]
const upperCaseCountries = countries.map(country => country.toUpperCase());
console.log(upperCaseCountries);

//Q5
const countriesLength = countries.map(country => country.length);
console.log(countriesLength);

//Q6
const countriesArray = countries.map(country => [country, country.slice(0, 3).toUpperCase(), country.length]);
console.log(countriesArray);

//Q7
const countriesWithLand = countries.filter(country => country.toLowerCase().includes('land'));
if (countriesWithLand.length > 0) {
    console.log(countriesWithLand);
} else {
    console.log('All these countries are without land');
}

//Q8
const countriesEndsWithIA = countries.filter(country => country.endsWith('ia'));
if (countriesEndsWithIA.length > 0) {
    console.log(countriesEndsWithIA);
} else {
    console.log('These are countries ends without ia');
}

//Q9
let longestCountry = countries.reduce((acc, country) => {
    if (country.length > acc.length) {
        return country;
    } else {
        return acc;
    }
}, '');

console.log(longestCountry);

//Q10
const countriesWithFiveCharacters = countries.filter(country => country.length === 5);
console.log(countriesWithFiveCharacters);

//Q11
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
const longestWord = webTechs.reduce((acc, tech) => {
    if (tech.length > acc.length) {
        return tech;
    } else {
        return acc;
    }
}, '');

console.log(longestWord);

//Q12
const techsArray = webTechs.map(tech => [tech, tech.length]);
console.log(techsArray);

//Q13
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
const acronym = mernStack.reduce((acc, tech) => acc + tech.charAt(0), '');
console.log(acronym);

//Q14
const techArray = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];
for (let tech of techArray) {
    console.log(tech);
}

//Q15
const fruitArray = ['banana', 'orange', 'mango', 'lemon'];
for (let i = fruitArray.length - 1; i >= 0; i--) {
    console.log(fruitArray[i]);
}

//Q16
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
];

for (let stack of fullStack) {
    for (let tech of stack) {
        console.log(tech.toUpperCase());
    }
}

//Level - 3
// Q1
const copiedCountries = [...countries];

// Q2
const sortedCountries = copiedCountries.slice().sort();

// Q3
const sortedWebTechs = webTechs.slice().sort();
const sortedMernStack = mernStack.slice().sort();

// Q4
countriesWithLand = countries.filter(country => country.toLowerCase().includes('land'));

// Q5
longestCountry = countries.reduce((acc, country) => {
    if (country.length > acc.length) {
        return country;
    } else {
        return acc;
    }
}, '');

// Q6
countriesWithLand = countries.filter(country => country.toLowerCase().includes('land'));

// Q7
const countriesWithFourCharacters = countries.filter(country => country.length === 4);

// Q8
const countriesWithMultipleWords = countries.filter(country => country.includes(' '));

// Q9
const reversedAndCapitalizedCountries = countries.slice().reverse().map(country => country.toUpperCase());