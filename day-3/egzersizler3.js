/* const now1 = new Date()
const year1 = now1.getFullYear() // yılı döndürür
const month1 = now1.getMonth() + 1 // ayı döndürür (0 - 11) olduğu için +1 ekliyor
const date1 = now1.getDate() // günü döndürür (1 - 31)
const hours1 = now1.getHours() // sayıyı döndürür (0 - 23)
const minutes1 = now1.getMinutes() // sayıyı döndürür (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // çıktı farklı olacaktır */

const now = new Date()
const year = now.getFullYear()
const month = now.getMonth()
const date = now.getDate()
const hours = now.getHours()
const minutes = now.getMinutes()

console.log(`${year}/${month}/${date} - ${hours}:${minutes}`)

console.log(`${year}-${month}-${date} - ${hours}:${minutes}`)
console.log(`${date}-${month}-${year} - ${hours}:${minutes}`)
console.log(`${date}/${month}/${year} - ${hours}:${minutes}`)


// üst egzersiz 3 ve 2'nin son sorusu

// egzersiz 1 

const firstName = "Ebubekir"
const lastName = "Demirkazık"
const country = "Turkey"
const city = "Bursa"
const age = 34;
const isMarried = true;
const year1 = 2025;

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year1)

const num = "10";

console.log(num === 10)

const num2 = "9.81"

console.log(parseInt(num2) === 10)


console.log("JavaScript" <= "JavaScript")
console.log("JavaScript" === "JavaScript")
console.log("JavaScript" >= "JavaScript")

console.log("JavaScript" < "JavaScript")
console.log("JavaScript" > "JavaScript")
console.log("JavaScript" != "JavaScript")


console.log(4 > 3)
console.log(4 < 3)
console.log(4 >= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')

console.log("python".length > "jargon".length)


console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4<3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))

console.log(!("dragon".search("on") === "python".search("on")))


/*  let number = prompt('Enter number', 'number goes here')  */


let yukseklik = prompt('Yukseklik Griniz', 'Yukseklik')
let tabanAlani = prompt('Taban Alanı Giriniz', 'Taban Alanı')

console.log((0,5 * (yukseklik * tabanAlani)))

let aSide = Number(prompt("a kenarı"))
let bSide = Number(prompt("b kenarı"))
let cSide = Number(prompt("c kenarı"))

console.log((aSide) + (bSide) + (cSide))


//Komut istemini kullanarak yarıçapı alın ve bir dairenin alanını (alan = pi x r x r) ve 
// bir dairenin çevresini (c = 2 x pi x r) hesaplayın, burada pi = 3.14.

let yariCap = prompt("Yarı Çap")
const PI = 3.14;

console.log(`Daire Alanı : ${PI * yariCap * yariCap}`)
console.log(`Daire Çevresi: ${2 * PI * yariCap}`)

let myName = "Ebubekir"

myName.length > 7 ? console.log("Adın 7 den büyük") : console.log("7 den küçük.")


let myFirstName = "Ebubekir";
let mySecondName = "Demirkazık";

myFirstName > mySecondName ? console.log(`${myFirstName} daha uzun ${mySecondName}'dan`)
: console.log("soyadım daha büyükmüş.")


let myAge = 250;
let yourAge = 25;

console.log(`older then you ${Number(myAge) - Number(yourAge)}`)


