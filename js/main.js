const eyeicon = document.getElementById("eyeicon");
const password = document.getElementById("password");

eyeicon.addEventListener("click", () => {
  password.type = password.type === "password" ? "text" : "password";
  eyeicon.src   = password.type === "password" ? "img/eye-close.png" : "img/eye-open.png";
});

