function adminMi(rol) {
  if (rol === "admin") {
    return Boolean(true);
  } else {
    return Boolean(false);
  }
}

adminMi("admin") ? console.log("Admin") : console.log("user");

if (5 > 30) {
  console.log("x > y");
} else {
  console.log("x < y");
}

// Global Scope
let globalDegisken = "ben globalim";

function ornek() {
  // Function Scope
  let lokalDegisken = "ben sadece burada varım";

  if (true) {
    let ifblok = "if blok içindeki değişkene ulaşılamaz.";
  }

  if (true) {
    // Block Scope
    let blokDegiskeni = "ben bu bloğa aitim";
  }

  //console.log(blokDegiskeni); // ❌
  console.log(lokalDegisken); // ✅
  console.log(globalDegisken); // ✅

  // console.log(ifblok); if blok içindeki değişkene ulaşılamaz.
}

ornek();


// Bir fonksiyonun başka bir fonksiyonu geri döndürme örneği.
const higherOrder = n => {
  const doSomething = m => {
    const doWhatEver = t => {
      return 2 * n + 3 * m + t
    }
    return doWhatEver
  }
  return doSomething
}
console.log(higherOrder(2)(3)(10))