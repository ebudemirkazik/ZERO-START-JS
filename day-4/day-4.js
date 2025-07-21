let MyAge = 34;
let MyWifeAge = 36;

if (MyAge < MyWifeAge) {
  console.log("You're very rich!");
} else {
  console.log("Sorry, fakiiirrr");
}

let isRaining = true;

if (isRaining) {
  console.log("you need a rain coat");
} else {
  console.log("no need");
}

isRaining = false;

if (isRaining) {
  console.log("you need");
} else {
  console.log("no need");
}

let weather = "sunny";

if (weather === "rainy") {
  console.log("you need rain coat.");
} else if (weather === "cloudy") {
  console.log("it mighr be cold, you need jacket.");
} else if (weather === "sunny") {
  console.log("go out frelly");
} else {
  console.log("no need for rain coat");
}

// SWTİCH

/* switch(caseValue) {
    case 1:
        //code
        break
    case 2:
        //code
        break
} */

let weather2 = 'cloudy';

switch (weather2) {
    case 'rain':
        console.log('you need coat')
        break
    case 'cloudy':
        console.log('it mighr be cold2')
        break
    case 'sunny':
        console.log('go out freely')
        break
    default:
        console.log('no need ')
}


let age = prompt('Yaşın kaç?');
let wifeAge = prompt('Eşinin yaşı?')

switch (true) {
    case age < wifeAge:
        console.log('Ben karımdan küçüğüm')
        break
    case age > wifeAge:
        console.log('ben karımdan büyüğüm')
        break
    case age === wifeAge:
        console.log('eşitiz.')
        break
}


// ternary operatörü 

let isRain = true
isRain
? console.log('şemsiye al')
: console.log('gerek yok')



