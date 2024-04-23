let validPassword = "2Fj(jjbFsuj" || "eoZiugBf&g9";

const contrasenaValida = (passwordToValidate) => {
  let isValid = false;
  if (passwordToValidate === validPassword) {
    isValid = true;
  }
  console.log(isValid);
}

contrasenaValida("patitos");
contrasenaValida("2Fj(jjbFsuj");

