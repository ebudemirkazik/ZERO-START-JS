console.log("çok parametreli");

function sumArrayValues(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(sumArrayValues(numbers));

function areaOfCircle(r) {
  return Math.PI * r * r;
}

console.log(areaOfCircle(12));

// birden fazla parametreleri fonksiyonlar

function sumAllNums() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(sumAllNums(5, 2, 3, 4, 5, 6, 7));

//kendi kendine çağrılan fonksiyon

(function (n) {
  console.log(n * n);
})(2);

let squaredNum = (function (n) {
  return n * n;
})(10);

console.log(squaredNum);

// ARROW FUCTİON

const changeToUpperCase = (arr) => {
  const newArr = [];
  for (const element of arr) {
    newArr.push(element.toLowerCase());
  }
  return newArr;
};

const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
console.log(changeToUpperCase(countries));

const printFullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

console.log(printFullName("Ebubekir", "Demirkazık"));

const printFullName2 = (firstName, lastName) => `${firstName} ${lastName}`;

console.log(printFullName2("Gizem", "Demirkazık"));

//arrow fuction sınırsız dayıda parametre.

const sumAllNums2 = (...args) => {
  let sum = 0;
  for (const element of args) {
    sum += element;
  }
  return sum;
};

console.log(sumAllNums2(1, 2, 3, 4, 5, 6, 7));
console.log(sumAllNums2(10, 20, 30, 40, 50));
console.log(sumAllNums2(15, 25, 35, 45, 55, 65));

//default parametre ile fonksiyon kullanımı

/* bazen parametrelere default değerler geçmez isteyeblirliz. Bu durumda fonksiyon çağırımı sırasında söz konusu parametreyi 
vermek zorunda olmadan kullanabiliriz. Eğer bu parametreyi vermezsek fonksiyon işlevinin parametrenin default değerini kullanarak
tamamlayacaktır. */

function greetings(name = "Peter") {
  let message = `${name}, welcome to 30 days of js!`;
  return message;
}

console.log(greetings());
console.log(greetings("Ebubekir"));

function generateFullName(firstName = "Ebubekir", lastName = "Demirkazık") {
  let space = " ";
  let fullName = firstName + space + lastName;
  return fullName;
}

console.log(generateFullName());
console.log(generateFullName("Gizem", "Çelik Demirkazık"));

function birthDay(birthYear, currentYear = 2025) {
  let age = currentYear - birthYear;
  return age;
}

console.log(birthDay(1991));
console.log(birthDay(1991, 2031));

function weightOfObject(mass, gravity = 9.81) {
  return mass * gravity + " N ";
}

console.log("Ağırlığın obje üzerinmdeki Newtonu :", weightOfObject(100));
console.log("Ay üzerindeki: ", weightOfObject(100, 1.62));

// yukarıdaki fonksiyonnun arrow versiyonu :

const greetings2 = (name = "Peter") => {
  return name + ", welcome to my world.";
};

console.log(greetings2());
console.log(greetings2("Ebubekir"));
