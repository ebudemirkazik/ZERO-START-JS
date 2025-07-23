// klasik fonksiyon tanımlama

function klasikFunc() {
  console.log("Klasik Fonksiyon Tanımlama");
}

klasikFunc();

//Anonymous Function - İsimsiz Fonksiyon
const anonymousFun = function () {
  console.log("İsimsiz bir fonksiyonum ve değerim anonim olarak saklanıyor.");
};

anonymousFun();

// Expression Function
//Express function isimsiz fonksiyonlardır. İsimsiz bir fonksityon oluşturduktan sonra bir değişkene atayarak kullanırız.
// Fonkstiondan değer ger idöndürmek için değişkeni çağırmalıyız.

const square = function () {
  console.log("Bu bir expression function türünde fonksiyondur.");
};

square();

//Parametresiz ve dönüş değeri olamayan fonksiyon
// fonksiyon parametre olmadan tanımlanabilir. (Şu ana kadar tanımladıklarımız zaten parametresizdir.)

function square2() {
  let num = 2;
  let square = num * num;
  console.log(square);
}

square2();

function addTwoNumbers() {
  let numOne = 10;
  let numTwo = 20;
  let sum = numOne + numTwo;
  console.log(sum);
}

addTwoNumbers();

function printFullName() {
  let firstName = "Ebubekir";
  let lastName = "Demirkazık";
  let space = " ";
  let FullName = firstName + space + lastName;
  console.log(FullName);
}

printFullName();

//örnek

function toplama() {
  let ciftSayi = 0;
  let tekSayi = 0;
  for (i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
      console.log("Çift Sayı: ", i);
      ciftSayi += i;
    }
    if (!(i % 2 === 0)) {
      console.log("Tek Sayı: ", i);
      tekSayi += i;
    }
  }

  console.log(ciftSayi);
  console.log(tekSayi);
}

toplama();

// Bir değer döndüren fonksiyon
//fonksiyonlar geriye bir değer döndürebilir. Bu işlemi "return" anahtar kelimesini kullanarak sağlarız.
// normal fonksiyonlardan farklı olarak bir field'a atanabilir veya bir metot içersinde parametre olarak kullanılabilir.

function printName() {
  let name = "Ebubekir";
  let lastName = "Ebubekir";
  let space = " ";
  let FullName = name + space + lastName;
  return FullName;
}

console.log(printName());

function addTwoNumbers2() {
  let yatan = 133456;
  let kdvHaric = yatan / 1.2;
  let kdv = yatan - kdvHaric;
  let toplam = yatan;
  console.log("Kdv: ", kdv);
  console.log("Kdv Haric: ", kdvHaric);
  return toplam;
}
console.log(addTwoNumbers2());

// Parametreleri Fonksiyonlar
// bir fonksiyonda farklı bir veri türklerini ( number, string, boolean, object,function) oarametre olarak geçebiliriz.

/* function functionName(param1) {
  console.log(param1);
}
functionName(param1);
 */

function areOfCircle(r) {
  // parametre "r" ile vereceğimiz bilgiyi bize döndürür.
  let area = Math.PI * r * r;
  return area;
}
const r = Number(prompt("Dairenin alanını yazın: ")); // prompt ile kullanıcıdan "r" değerini istiyoruz.
console.log("Daire Alanı: ", areOfCircle(r)); // ve yine r ile bu değeri fonksiyon içerisinde döndürüyoruz.

// örnek kendi fiyat bulma kdv dahil.

function kdvHesap(kdvHaric) {
  let toplam = kdvHaric * 1.2;
  return toplam;
}
const kdvHaric = Number(prompt("Kdv Hariç Hakediş: "));
console.log("Toplam Kdv Dahil: ", kdvHesap(kdvHaric));

// # iki parametreli fonksiyonlara

/*
funciton functionName(param1, param2) {
    code...
} 
    funtionName(param1, param2) //fonksiyonu çağırma sırasında parantezler arasında iki tane parametreye ihtiyaç duyar
 */

// parametresiz fonksiyon giriş yapmaz, bu nedenle parametrelerle bir fonksyion yapalım

function sumTwoNumbers(numOne, numTwo) {
  let sum = numOne + numTwo;
  console.log("Toplam: ", sum);
}

const numOne = Number(prompt("sayı 1 giriniz: "));
const numTwo = Number(prompt("Sayı 2 giriniz: "));

sumTwoNumbers(numOne, numTwo);

function hello(hiOne, hiTwo) {
  let space = " ";

  let sumHi = hiOne.toString() + space + hiTwo.toString();

  alert(`Adım Soyadım ${sumHi.toLowerCase()}`);
}

const hiOne = prompt("Hi one: ");
const hiTwo = prompt("Hi two : ");

hello(hiOne, hiTwo);

//

function daireVeCember() {
  function daire(r) {
    return Math.PI * r * r;
  }

  function alan(a) {
    return a * a;
  }

  // return etmemiz lazım ki dışarıya alalım. Console.log ile sadece içeride çalışır.

  let a = Number(prompt("Karenin Kenar Griniz: "));
  let KareAlan = alan(a);
  console.log("Kare Alanı: ", KareAlan);

  let r = Number(prompt("Daire Yarıçap Griniz: "));
  let daireAlan = daire(r);
  console.log("Daire Alanı: ", daireAlan);

  function toplam(daireAlan, KareAlan) {
    let toplam = daireAlan + KareAlan;
    console.log("Toplam: ", toplam);
  }

  toplam(daireAlan, KareAlan);
}

daireVeCember();



// çok parametreli fonksiyon
console.log("çok parametreli")

function sumArrayValues(arr) {
  let sum = 0;

  for (let i = 0; i <= arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(sumArrayValues(numbers));

 
