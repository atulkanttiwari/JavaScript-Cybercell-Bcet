//Level - 1
// Q1
function fullName() {
    console.log("Your Full Name");
}

// Q2
function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

// Q3
function addNumbers(num1, num2) {
    return num1 + num2;
}

// Q4
function areaOfRectangle(length, width) {
    return length * width;
}

// Q5
function perimeterOfRectangle(length, width) {
    return 2 * (length + width);
}

// Q6
function volumeOfRectPrism(length, width, height) {
    return length * width * height;
}

// Q7
function areaOfCircle(r) {
    return Math.PI * r * r;
}

// Q8
function circumOfCircle(r) {
    return 2 * Math.PI * r;
}

// Q9
function density(mass, volume) {
    return mass / volume;
}

// Q10
function speed(distance, time) {
    return distance / time;
}

// Q11
function weight(mass, gravity) {
    return mass * gravity;
}

// Q12
function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Q13
function bmi(weight, height) {
    let bmi = weight / (height * height);
    if(bmi < 18.5) {
        return "Underweight";
    } else if(bmi < 24.9) {
        return "Normal weight";
    } else if(bmi < 29.9) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

// Q14
function checkSeason(month) {
    if(month === "September" || month === "October" || month === "November") {
        return "Autumn";
    } else if(month === "December" || month === "January" || month === "February") {
        return "Winter";
    } else if(month === "March" || month === "April" || month === "May") {
        return "Spring";
    } else if(month === "June" || month === "July" || month === "August") {
        return "Summer";
    } else {
        return "Invalid month";
    }
}

// Q15
function findMax(a, b, c) {
    if(a > b && a > c) {
        return a;
    } else if(b > a && b > c) {
        return b;
    } else {
        return c;
    }
}

//Level - 2
//Q1
function solveLinEquation(a, b, c, x, y) {
    return a*x + b*y + c;
}

// Q2
function solveQuadEquation(a, b, c) {
    let discriminant = b*b - 4*a*c;
    if (discriminant === 0) {
        return {root: -b / (2*a)};
    } else if (discriminant > 0) {
        let root1 = (-b + Math.sqrt(discriminant)) / (2*a);
        let root2 = (-b - Math.sqrt(discriminant)) / (2*a);
        return {root1, root2};
    } else {
        return {error: "No real roots"};
    }
}

// Q3
function printArray(arr) {
    arr.forEach(element => console.log(element));
}

// Q4
function showDateTime() {
    let date = new Date();
    let formattedDate = date.toLocaleDateString() + " " + date.toLocaleTimeString();
    console.log(formattedDate);
}

// Q5
function swapValues(x, y) {
    let temp = x;
    x = y;
    y = temp;
    return {x, y};
}

// Q6
function reverseArray(arr) {
    let reversed = [];
    for(let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

// Q7
function capitalizeArray(arr) {
    return arr.map(word => word.toUpperCase());
}

// Q8
function addItem(item, arr) {
    arr.push(item);
    return arr;
}

// Q9
function removeItem(index, arr) {
    arr.splice(index, 1);
    return arr;
}

// Q10
function sumOfNumbers(n) {
    let sum = 0;
    for(let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// Q11
function sumOfOdds(n) {
    let sum = 0;
    for(let i = 1; i <= n; i += 2) {
        sum += i;
    }
    return sum;
}

// Q12
function sumOfEven(n) {
    let sum = 0;
    for(let i = 2; i <= n; i += 2) {
        sum += i;
    }
    return sum;
}

// Q13
function evensAndOdds(n) {
    let evens = Math.floor(n/2);
    let odds = n - evens;
    return `The number of odds are ${odds}. The number of evens are ${evens}.`;
}

// Q14
function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
}

// Q15
function randomUserIp() {
    return `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
}

// Q16
function randomMacAddress() {
    let mac = '';
    for(let i = 0; i < 6; i++) {
        mac += (Math.floor(Math.random() * 16)).toString(16) + (Math.floor(Math.random() * 16)).toString(16);
        if(i !== 5) mac += ':';
    }
    return mac;
}

// Q17
function randomHexaNumberGenerator() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

// Q18
function userIdGenerator() {
    let id = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for(let i = 0; i < 7; i++) {
        id += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return id;
}

//Level - 3
//Q1
function userIdGeneratedByUser() {
    let numCharacters = parseInt(prompt("Enter the number of characters:"));
    let numIds = parseInt(prompt("Enter the number of ids:"));
    let ids = [];
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for(let i = 0; i < numIds; i++) {
        let id = '';
        for(let j = 0; j < numCharacters; j++) {
            id += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        ids.push(id);
    }
    return ids;
}

// Q2
function rgbColorGenerator() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

// Q3
function arrayOfHexaColors(num) {
    let colors = [];
    for(let i = 0; i < num; i++) {
        colors.push('#' + Math.floor(Math.random() * 16777215).toString(16));
    }
    return colors;
}

// Q4
function arrayOfRgbColors(num) {
    let colors = [];
    for(let i = 0; i < num; i++) {
        colors.push(rgbColorGenerator());
    }
    return colors;
}

// Q5
function convertHexaToRgb(hex) {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
}

// Q6
function convertRgbToHexa(rgb) {
    let [r, g, b] = rgb.slice(4, -1).split(', ').map(num => parseInt(num).toString(16));
    return `#${r}${g}${b}`;
}

// Q7
function generateColors(type, num) {
    if(type === 'hexa') {
        return arrayOfHexaColors(num);
    } else if(type === 'rgb') {
        return arrayOfRgbColors(num);
    }
}

// Q8
function shuffleArray(arr) {
    for(let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Q9
function factorial(n) {
    if(n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Q10
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

// Q11
function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
}

// Q12
function sumOfArrayItems(arr) {
    if(arr.some(item => typeof item !== 'number')) {
        return "All items in the array should be numbers";
    } else {
        return arr.reduce((a, b) => a + b, 0);
    }
}

// Q13
function average(arr) {
    if(arr.some(item => typeof item !== 'number')) {
        return "All items in the array should be numbers";
    } else {
        return sumOfArrayItems(arr) / arr.length;
    }
}

// Q14
function modifyArray(arr) {
    if(arr.length < 5) {
        return "Not Found";
    } else {
        arr[4] = arr[4].toUpperCase();
        return arr;
    }
}

// Q15
function isPrime(n) {
    for(let i = 2; i < n; i++) {
        if(n % i === 0) {
            return false;
        }
    }
    return n > 1;
}

// Q16
function isUnique(arr) {
    return new Set(arr).size === arr.length;
}

// Q17
function isSameType(arr) {
    let type = typeof arr[0];
    return arr.every(item => typeof item === type);
}

// Q18
function isValidVariable(variable) {
    return /^[a-zA-Z_$][a-zA-Z_$0-9]*$/.test(variable);
}

// Q19
function sevenRandomNumbers() {
    let numbers = new Set();
    while(numbers.size < 7) {
        numbers.add(Math.floor(Math.random() * 10));
    }
    return Array.from(numbers);
}

// Q20
function reverseCountries(countries) {
    return [...countries].reverse();
}