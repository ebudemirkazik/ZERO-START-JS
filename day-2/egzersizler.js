let challenge = '30 Days Of JavaScript';
let lastIndex12 = challenge.length -1;
console.log(challenge);

console.log(challenge.length)

console.log(challenge.toUpperCase())
console.log(challenge.toLocaleLowerCase())

console.log(challenge.substring(3))

console.log(challenge.substring(2,0))

console.log(challenge.includes('Script'))

console.log(challenge.split(" "))

let challenge2 = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' ;

console.log(challenge2.split(","))

console.log(challenge.replace("JavaScript", "Python"))

console.log(challenge.charAt(15))

console.log(challenge.charCodeAt(12))

console.log(challenge.indexOf(0))
console.log(challenge.lastIndexOf(lastIndex12))

let challenge3 = 'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır';

console.log(challenge3.indexOf("çünkü"))
console.log(challenge3.lastIndexOf("çünkü"))
console.log(challenge3.search("çünkü"))

let challenge4 = '    30 Days Of JavaScript.    ';

console.log(challenge4.trim())

console.log(challenge4.trim().startsWith("30"))
console.log(challenge4.trim().endsWith("."))

console.log(challenge4.match(/a/gi))

let con1 = '30 Days of ';

console.log(con1.concat("Javascript"))

console.log(challenge.repeat(2))

// egzersiz 2

let number44 = "10";

console.log(number44 === 10);

let equal = parseInt(number44)

console.log(equal === 10)

let number55 = 9.81;

console.log(Math.ceil(number55) === 10)

let string55 = "python";
let string66 = "jargonda";

console.log(string55.includes("on"))
console.log(string66.includes("on"))

let string56 = "Umarım bu kurs jargonla dolu değildir.";

console.log(string56.includes("jargon"))

let int12 = (Math.random() * 100) + 1;

console.log(int12)

let int13 = (Math.random() * 255) + 1;

console.log(int13);

let int14 = Math.floor(Math.random() * (100 - 50 + 1)) + 50;

console.log(int14)

let string22 = 'Aşk bu dünyadaki en iyi şeydir. Bazıları aşkını buldu ve bazıları hala aşkını arıyor.' ;

console.log(string22.search("aşk"))

let challenge33 = 'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır';

console.log(challenge33.match(/çünkü/gi))