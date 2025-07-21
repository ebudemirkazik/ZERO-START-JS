let num = 0;

do {
  console.log(num);
  num++;
} while (num <= 10);

let num2 = 10;

do {
  console.log(num2);
  num2--;
} while (num2 >= 0);

let num3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const num4 of num3) {
  console.log(`${num4} * ${num4} = ${num4 * num4}`);
}

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

for (let i = 0; i <= 100; i++) {
  if (!(i % 2 === 0)) {
    console.log(i);
  }
}

for (let num = 2; num <= 100; num++) {
  let asalMi = true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      asalMi = false;
      break;
    }
  }
  if (asalMi) {
    console.log(num);
  }
}

console.log("Boşluk");
for (let i = 0; i <= 10; i++) {
  console.log("KARESİ");
  do {
    console.log(i * i);
    i++;
  } while (i <= 10);
  console.log("BOŞLUK 2");
}

for (let i = 0; i <= 10; i++) {
  console.log("KÜP SAYI");
  do {
    console.log(i ** 3);
    i++;
  } while (i <= 10);
}

console.log("BOŞLUK 3");

let toplam = 0;

for (let sayi = 0; sayi <= 100; sayi++) {
  toplam = toplam + sayi;
}
console.log(toplam); // içeride yazarsak adım adım 0'dan 100'e kadar olan tüm sayıları oadımdaki toplamını verir.

console.log("ÇİFT SAYI TOPLAMI");

let ciftToplam = 0;
let tekToplam = 0;

for (let i = 0; i <= 100; i++) {
  console.log("ÇİFT TOPLAM");
  if (i % 2 === 0) {
    ciftToplam += i;
  }
  if (!(i % 2 === 0)) {
    tekToplam += i;
  }
}

console.log(ciftToplam);
console.log(tekToplam);

const arr2 = [
  "ALBANIA",
  "BOLIVIA",
  "CANADA",
  "DENMARK",
  "ETHIOPIA",
  "FINLAND",
  "GERMANY",
  "HUNGARY",
  "IRELAND",
  "JAPAN",
  "KENYA",
];

let newArr3 = [];

for (let i = 0; i < arr2.length; i++) {
  newArr3.push(arr2[i].length);
}
console.log(newArr3);

const sayilar = [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5];
const arr3 = [
  "ALBANIA",
  "BOLIVIA",
  "CANADA",
  "DENMARK",
  "ETHIOPIA",
  "FINLAND",
  "GERMANY",
  "HUNGARY",
  "IRELAND",
  "JAPAN",
  "KENYA",
];

let newArr4 = arr3.map((country) => country.slice(0, 3));

for (let i = 0; i < arr3.length; i++) {
  console.log(`'${arr3[i]}' '${newArr4[i]}' ${sayilar[i]}`);
}

const countries = [
  ["Albania", "ALB", 7],
  ["Bolivia", "BOL", 7],
  ["Canada", "CAN", 6],
  ["Denmark", "DEN", 7],
  ["Ethiopia", "ETH", 8],
  ["Finland", "FIN", 7],
  ["Germany", "GER", 7],
  ["Hungary", "HUN", 7],
  ["Ireland", "IRE", 7],
  ["Iceland", "ICE", 7],
  ["Japan", "JAP", 5],
  ["Kenya", "KEN", 5],
];
const landCountries = [];

for (const country of countries) {
  if (country[0].toLowerCase().includes("land")) {
    landCountries.push(country[0]);
  }
}

if (landCountries.length > 0) {
  console.log("ai içeren ülkeler:", landCountries);
} else {
  console.log("Hiçbir ülke land içermiyor:");
}

let maxLength = 0;
let longCountry = "";
for (const country of countries) {
  if (country[0].length > maxLength) {
    maxLength = country[0].length;
    longCountry = country[0];
  }
}
console.log(longCountry, maxLength);

let onlyFife = [];
let fife = 5;
for (const country of countries) {
  if (country[0].length === fife) {
    onlyFife.push(country[0])
  }
}
console.log(onlyFife);

/* for (let i = 0; i < countries.length; i++) {
  newArr.push(countries[i].toUpperCase());
}
console.log(newArr);
 */
