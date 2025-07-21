for (let i = 0; i <= 5; i++) {
  console.log(i);
}

for (let i = 32; i > 23; i--) {
  console.log(i);
}

for (let i = 0; i <= 5; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
}

const countries = ["Turkey", "İsveç", "Denmark", "Norveç", "izlanda"];
const newArr = [];

for (let i = 0; i < countries.length; i++) {
  newArr.push(countries[i].toUpperCase());
}
console.log(newArr);

// dizideki tüm elemanları toplama

const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i];
  // daha pratik kullanım için, sum += numbers[i]
}

console.log(sum); // 15

// mevcut diziyi temel alan yeni dizi oluşturma.

let numbers2 = [1, 2, 3, 4, 5, 6];
let newArr2 = [];
let sum2 = 0;
for (let i = 0; i < numbers2.length; i++) {
  newArr2.push(numbers2[i] ** 2);
}

console.log(newArr2);

// WHİLE DÖNGÜSÜ

let i = 0;
while (i <= 5) {
  console.log(i);
  i++;
}

let y = 0;

do {
  console.log(y);
  y++;
} while (y <= 5);

// for of for döngüleri

const numbers3 = [1, 2, 3, 4, 5, 6, 7];
console.log(numbers3);
for (const num of numbers3) {
  console.log(num);
}

for (const num2 of numbers3) {
  console.log(num2 * num2);
}

for (const num3 of numbers3) {
  console.log(num3 + num3 * num3);
}

let sum3 = 0;
for (const num4 of numbers3) {
  sum3 = sum3 + num4;
}

console.log(sum3);

const webTechs = ["HTML", "CSS", "JS", "REACT", "REDUX", "NODE", "MONGO"];

for (const tech of webTechs) {
  console.log(tech.toLowerCase());
}

for (let i = 0; i <= 5; i++) {
  if (i == 5) {
    break;
  }
  console.log(i);
}

for (let i = 0; i <= 5; i++) {
  if(i == 3) {
    continue;
  }
  console.log(i)
}
