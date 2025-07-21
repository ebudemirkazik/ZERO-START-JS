let word = "javascript";

word[0] = "Y";

console.log(word);

let numOne1 = 3;
let nubTwo2 = 3;

console.log(numOne1 == nubTwo2);

let py = "Python";
let js = "Javascript";

console.log(py == js);

// diziler

let numbs = [1, 2, 3, 4];
numbs[0] = 10; // dizinin ilk elemanına 10 değerini verdik. Sonuç ilk dize 1 değil 10 oldu.

console.log(numbs);

let userOne = {
  name: "Ebubekir",
  role: "developer",
  country: "Turkey",
};

let userTwo = {
  name: "Mesut",
  role: "deveoper",
  country: "UAB",
};

console.log(userOne == userTwo);

// sayı veri türleri

let age = 35;
const gravity2 = 9.81;
let mass2 = 72;
const PI = 3.14;

console.log(age, gravity2, mass2, PI);

// gibi

// marh objesi matematiksel işlemler.

const PI2 = Math.PI; // math.PI aslında otomatik 3.14'ü temsil ediyor.

console.log(PI2);

console.log(Math.round(PI2));

console.log(Math.round(9.81));

// round onladığı en yakın olana yuvarlar 3.14 = 3, 9.81 = 10 gibi.

console.log(Math.floor(PI2));

console.log(Math.floor(9.81));

// floor ise aşağı yuvarlar. 3.14 = 3, 9.91 = 9 gibi.

console.log(Math.ceil(9.81));
console.log(Math.ceil(PI2));

// ceil parametresi yukarı doğru yuvarlar. 3.14 = 4 gibi.

console.log(Math.min(-5, -3, -2, -24, 0, 1, 3, 6, 32));
console.log(Math.max(-5, -3, -2, -24, 0, 1, 3, 6, 32));

// min-max parametleri en küçük ile en büyük sayıyı verir.

// rastegele sayı üretir 0 ile 0.99999 arasında.
const randomNum = Math.random();

console.log(randomNum);

// mulak değer

console.log(Math.abs(-10));

// kare kök

console.log(Math.sqrt(144));

// üs

console.log(Math.pow(3, 3));

console.log(Math.E);

// lagoritma
//Math.log(x)’in sonucu e^sonuç = x olacak şekilde çıkar.
// yani sonucu 3 olan sayı e üzeri kaç olmalı? sorusunun cevabını verir. yani e "üzeri?" yi verir.

console.log(Math.log(2));
console.log(Math.log(3));

console.log(Math.exp(3)); // e üzeri 3 ise sonuç kaçtır.

let eNum = Math.E;

console.log(eNum * eNum * eNum);

console.log(Math.E);

// sırasıyla 2 ve 10 'nun doğal logaritmasını döndürür.

console.log(Math.LN2);
console.log(Math.LN10);

// random sayı üretme

let randomNumber = Math.random();

console.log(randomNumber);

let zeroToTen = randomNumber * 11;

console.log(zeroToTen)

let randomNumRoundToFloor = Math.floor(zeroToTen)
let randomNumRoundToCeil = Math.ceil(zeroToTen)
let randomNumRoundToRound = Math.round(zeroToTen)

console.log(randomNumRoundToFloor)
console.log(randomNumRoundToCeil)
console.log(randomNumRoundToRound)

// strings

let space = ' ';
let firstName = 'Ebubekir';
let lastName = 'Demirkazık';
let country = "Turkey";
let city = `Eskişehir`;

let num3 = 34;

console.log(space, firstName, lastName, country, city);

// string birleştirme

let fullName = firstName + space + lastName + space + num3;

console.log(`Adım ${firstName}, soyadım ${lastName}, ülkem ${country}, şehrim ${city}`)

console.log(fullName)

const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

console.log(paragraph)

// kodları console kısmına yazarak denerseniz daha iyi anlarsınız.
console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') //  Buradakı \n satır sonu anlamına gelir sonrası aşağı iner
console.log('Days\tTopics\tExercises') // Burada her kelimeden sonra bir tab (\t) tuşuna basılmış etkisi verir
console.log('Day 1\t3\t5') // \t bir başka örnek
console.log('Day 2\t3\t5') // \t bir başka örnek
console.log('Day 3\t3\t5') // \t bir başka örnek
console.log('Day 4\t3\t5') // \t bir başka örnek
console.log('This is a backslash  symbol (\\)') // Ters eğik çizgi yazmak için \\ kullanılıyor
console.log('In every programming language it starts with \"Hello, World!\"') // Hello World'ü çift tırnak içine almak için \" Hello World \" kullanılıyor.
console.log("In every programming language it starts with \'Hello, World!\'") // Hello World'ü tek tırnak içine almak için \' Hello World \' kullanılıyor.
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020') // Bu kısımdada alıntıları kullanmak için \ kullanımı gösterilmiş.


let a = 2
let b = 3
console.log(`${a} is greater than ${b}: ${a > b}`) // a b den büyüktür yazıyor ve  interpolasyon metodu bunun yanlış olduğunu söylecek


let aa = 2;
let bb = 4;

console.log(`${aa} ile ${bb}'ün  toplamı ${aa + bb} yapar.`)

// string metodları

//1- length metodu

let js2 = "javascript"
console.log(js.length)
let firstName2 = "Ebubekir"
console.log(firstName2.length)

// 2- stringdeki karakterlere erişim.

let string = "Javascript"
let firstLetter = string[0];

console.log(firstLetter);

let secondLetter = string[1];
let thirdLetter = string[2];
let lastLetter = string[9];

console.log(lastLetter);

let lastIndex = string.length - 1;

console.log(lastIndex);
console.log(string[lastIndex])

// 3- toUpperCase()

let string2 = "javascript"

console.log(string2.toUpperCase())

console.log(string2.substring(3,2))

// 7 split metodu

let string3 = "30 günde javascript";
let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'
console.log(string3.split(" "))
console.log(string3.split(""))
console.log(countries.split(","))

console.log(string3.includes("günde"))
console.log(string3.includes("60"))
console.log(string3.includes("30"))


let devops = "Amazon aws and linux and windows"
let developer1 = devops.replace('windows', 'mac')

console.log(devops.replace('windows', 'mac'))

console.log(devops.charAt(0))


let lastIndex1 = developer1.length - 1;
console.log(developer1.charAt(lastIndex1));

let string12 = 'I love JavaScript. If you do not love JavaScript what else can you love.'

console.log(string12.lastIndexOf('love'))       // 67
console.log(string12.lastIndexOf('you'))        // 63
console.log(string12.lastIndexOf('JavaScript')) // 38

let string32 = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string32.search('love'))          // 2
console.log(string32.search(/javascript/gi))  // 7 buradaki gi açıklaması bir alt örnekte var

let string33 = 'I love JavaScript. If you do not love JavaScript what else can you Love.'
console.log(string33.match('love'))

let pattern = /love/gi
console.log(string33.match(pattern))   // ["love", "love", "love"]

let num12 = '22';
let numInt = parseInt(num12)

console.log(numInt);

let num13 = '13';
let numIn2 = Number(num13);

console.log(numIn2)

let num14 = '14';
let numInt3 = +num14;

console.log(numInt3)

let num = '9.81'
let numFloat = parseFloat(num)

console.log(numFloat) // 9.81
