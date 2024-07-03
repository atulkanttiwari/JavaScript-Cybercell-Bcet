//Level - 1
//Q1
let dog = {};

//Q2
console.log(dog);

//Q3
dog = {
  name: "Shiba",
  legs: 4,
  color: "cream",
  age: 4,
  bark: "woof woof",
};

//Q4
console.log(
  `Dog Breed: ${dog.name} - ${dog.legs} Legs - ${dog.color} Color - ${dog.age} years old - ${dog.bark}`
);

//Q5
dog = {
  ...dog,
  breed: "Shiba Inu",
  getDogInfo: console.log(dog),
};

//Level - 2
const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

//Q1
let personMaxSkill;
let maxSkills = 0;

for (const user in users) {
  if (users[user].skills.length > maxSkills) {
    maxSkills = users[user].skills.length;
    personMaxSkill = users[user];
  }
}

console.log(personMaxSkill);

//Q2
let userAboveFifty = 0;

for (const user in users) {
  if (users[user].isLoggedIn) {
    console.log(`${user} is loggen in!`);
  }
  if (users[user].points >= 50) {
    userAboveFifty++;
  }
}

console.log(userAboveFifty);

//Q3
for (const user in users) {
  if (
    users[user].skills.includes("MongoDB") &&
    users[user].skills.includes("Express") &&
    users[user].skills.includes("React") &&
    users[user].skills.includes("Node")
  ) {
    console.log(`${user} is a MERN Developer.`);
  }
}

//Q4
const newUsers = {
  ...users,
  Harsh: {
    email: "harshsharmaasl80@gmail.com",
    skills: ["html", "css", "javascript"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
};

console.log(newUsers);

//Q5
console.log(Object.keys(newUsers));

//Q6
console.log(Object.values(newUsers));

//Q7
const countries = {
  France: {
    capital: "Paris",
    population: 67076000,
    languages: ["French"],
  },
  Germany: {
    capital: "Berlin",
    population: 83122889,
    languages: ["German"],
  },
  Italy: {
    capital: "Rome",
    population: 60550075,
    languages: ["Italian"],
  },
  Spain: {
    capital: "Madrid",
    population: 46733038,
    languages: ["Spanish"],
  },
};

for (const country in countries) {
  console.log(
    `Country: ${country} - 
    Capital: ${countries[country].capital} - 
    Population: ${countries[country].population} - 
    Languages: ${countries[country].languages.join(", ")}`
  );
}

//Level - 3
//Q1
const personAccount = {
  firstName: "John",
  lastName: "Doe",
  incomes: {},
  expenses: {},

  get totalIncome() {
    return Object.values(this.incomes).reduce(
      (total, income) => total + income,
      0
    );
  },

  get totalExpense() {
    return Object.values(this.expenses).reduce(
      (total, expense) => total + expense,
      0
    );
  },

  accountInfo() {
    return `Name: ${this.firstName} ${this.lastName}\nTotal Income: $${this.totalIncome}\nTotal Expense: $${this.totalExpense}`;
  },

  addIncome(description, amount) {
    if (typeof amount === "number" && amount > 0) {
      this.incomes[description] = amount;
    } else {
      console.log("Amount should be a positive number.");
    }
  },

  addExpense(description, amount) {
    if (typeof amount === "number" && amount > 0) {
      this.expenses[description] = amount;
    } else {
      console.log("Amount should be a positive number.");
    }
  },

  accountBalance() {
    return this.totalIncome - this.totalExpense;
  },
};

users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",

    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];
const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",

    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];
//Q2
//a 
function signUp(newUser) {
  const existingUser = users.find(user => user.email === newUser.email);
  if (existingUser) {
    console.log("User already exists. Please log in.");
  } else {
    users.push(newUser);
    console.log("User signed up successfully!");
  }
}
const newUser = {
  _id: "abc123",
  username: "John",
  email: "john@example.com",
  password: "password123",
  createdAt: "05/14/2024 11:00 AM",
  isLoggedIn: false,
};

signUp(newUser);
//b
function signIn(email, password) {
  const user = users.find(user => user.email === email && user.password === password);
  if (user) {
    user.isLoggedIn = true;
    console.log("You have successfully signed in!");
    console.log(user);
  } else {
    console.log("Invalid email or password. Please try again.");
  }
}

signIn("thomas@thomas.com", "123333");
console.log(users);
//Q3
//a
function rateProduct(productId, userId, rating) {
  const product = products.find(product => product._id === productId);
  if (product) {
    product.ratings.push({ userId, rate: rating });
    console.log("Product rated successfully!");
  } else {
    console.log("Product not found!");
  }
}
rateProduct("hedfcg", "abc123", 4);
//b
function averageRating(productId) {
  const product = products.find(product => product._id === productId);
  if (product) {
    const totalRating = product.ratings.reduce((acc, rating) => acc + rating.rate, 0);
    const average = totalRating / product.ratings.length;
    console.log(`Average rating for ${product.name}: ${average}`);
  } else {
    console.log("Product not found!");
  }
}

averageRating("hedfcg");

//Q4
function likeProduct(productId, userId) {
  const product = products.find(product => product._id === productId);
  if (product) {
    const index = product.likes.indexOf(userId);
    if (index === -1) {
      product.likes.push(userId);
      console.log("Product liked successfully!");
    } else {
      product.likes.splice(index, 1);
      console.log("Product unliked successfully!");
    }
  } else {
    console.log("Product not found!");
  }
}

likeProduct("hedfcg", "abc123");
console.log(products[0].likes);
likeProduct("hedfcg", "abc123");
console.log(products[0].likes);