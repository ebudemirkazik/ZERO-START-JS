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

