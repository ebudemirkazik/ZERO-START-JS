let isLightOn = true;
let isLightOff = false;
let isHungry = false;
let isMarried = true;
let truValue = 4 > 3;
let falseValue = 4 < 3;

let number11 = 11;

number11 += 5;

console.log(number11)

console.log(3 > 2)              // true, çünkü 3 2 den büyüktür
console.log(3 >= 2)             // true, çünkü 3 2 den büyüktür
console.log(3 < 2)              // false,  çünkü 3 2 den büyüktür
console.log(2 < 3)              // true, çünkü 2 3 den küçüktür
console.log(2 <= 3)             // true, çünkü 2 3 den küçüktür
console.log(3 == 2)             // false, çünkü 3 2 ye eşit değildir
console.log(3 != 2)             // true, çünkü 3 2 ye eşit değildir
console.log(3 == '3')           // true, sadece değeri karşılaştırıyor
console.log(3 === '3')          // false, hem değeri hemde veri türünü karşılaştırıyor o yüzden yanlış. Birisi int değeri birisi string değerinden ( Bu denklik operatörü )
console.log(3 !== '3')          // true, hem değeri hemde veri türünü karşılaştırıyor o yüzden doğru. (Bu denk değil operatörü)
console.log(3 != 3)             // false, değeri karşılaştırıyor
console.log(3 !== 3)            // false, hem değeri hem de veri türünü karşılaştırıyor
console.log(0 == false)         // true, eşdeğer
console.log(0 === false)        // false, tam olarak aynı değil
console.log(0 == '')            // true, eşdeğer
console.log(0 == ' ')           // true, eşdeğer
console.log(0 === '')           // false, tam olarak aynı değil
console.log(1 == true)          // true, eşdeğer
console.log(1 === true)         // false, tam olarak aynı değil
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, eşit değil
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number

console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false

// &&   ve işareti operatörü örneği ( ampersand olarak anlandırılıyor)

const check1 = 4 > 3 && 10 > 5         // true && true -> true
const check2 = 4 > 3 && 10 < 5         // true && false -> false
const check3 = 4 < 3 && 10 < 5         // false && false -> false

// || boru veya operatör, örnek

const check4 = 4 > 3 || 10 > 5         // true  || true -> true
const check5 = 4 > 3 || 10 < 5         // true  || false -> true
const check6 = 4 < 3 || 10 < 5         // false || false -> false

// olumsuzlama örnekleri

let check7 = 4 > 3                     // true
let check8 = !(4 > 3)                  //  false
let isLightOn1 = true
let isLightOff2 = !isLightOn1           // false
let isMarried3 = !false                // true

let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
isRaining = false

isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')

  let number111 = 5;
  number111 > 0
  ? console.log(`${number111} is pozifit`)
  : console.log(`${number111} is negatif`)

const now1 = new Date()
const year1 = now1.getFullYear() // yılı döndürür
const month1 = now1.getMonth() + 1 // ayı döndürür (0 - 11) olduğu için +1 ekliyor
const date1 = now1.getDate() // günü döndürür (1 - 31)
const hours1 = now1.getHours() // sayıyı döndürür (0 - 23)
const minutes1 = now1.getMinutes() // sayıyı döndürür (0 -59)

console.log(`${date1}/${month1}/${year1} ${hours1}:${minutes1}`) // çıktı farklı olacaktır


