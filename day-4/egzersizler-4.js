let age = prompt('yaşınızı girin')

switch(true) {
    case age >= 18:
        console.log('Yaşın tutuyor')
        break
    case age < 18:
        console.log(`18 olmana ${18 - age}`)
}

let myAge = 34;
let yourAge = prompt("Enter your age: ")

/* yourAge > myAge 
? console.log(`${yourAge-myAge} yaş büyüksün.`)
: console.log(`${myAge-yourAge} yaş küçüksün.`) */

switch (true) {
    case yourAge > myAge:
        console.log(`${yourAge-myAge} yaş büyüksün.`)
        break
    case yourAge < myAge:
        console.log(`${myAge-yourAge} yaş küçüksün.`)
        break
    case yourAge == myAge:
        console.log('Aynı yaştayız.')
        break
}

//Çift sayılar 2'ye tam bölünür kalan sıfırdır. 
// Bir sayının çift olup olmadığını veya JavaScript kullanıp kullanmadığını nasıl kontrol edersiniz?

let sayi = prompt("Sayı giriniz.")


if (sayi % 2 === 0) {
    console.log("Sayı çift")
} else {
    console.log("SAyı tek")
}


