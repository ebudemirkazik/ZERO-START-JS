function fullNameGenerator(fullName, LastName) {
  let space = " ";
  return fullName + space + LastName;
}

console.log("Ebubekir", "Demirkazık");

function fullNameGenerator2() {
  let name = "Ebubekir";
  let surName = "Demirkazık2";
  let space = " ";
  let fullName2 = name + space + surName;
  return fullName2;
}

console.log(fullNameGenerator2());

const addNumber = (a, b) => {
  return a + b;
};

console.log(addNumber(5, 3));

const dkAlan = (u, g) => {
  return u * g;
};

console.log(dkAlan(5, 3));

const dkCevre = (u, g) => {
  return 2 * (u * g);
};

console.log(dkCevre(5, 5));

const dkHacim = (u, g, y) => u * g * y;

console.log(dkHacim(3, 3, 3));

const daireAlan = (r) => Math.PI * r * r;

console.log(daireAlan(12));

const daireCevre = (r) => 2 * Math.PI * r;

console.log(daireCevre(5));

const yog = (k, h) => k / h;

console.log(yog(5, 2));

const cisim = (m, z) => m / z;

console.log(cisim(10000, 8500));

const agirlik = (k, y) => k * y;

console.log(agirlik(55, 9.81));

const fToC = (s) => {
  let f = (s * 9) / 5 + 32;
  return f + " fa";
};

console.log(fToC(41));
