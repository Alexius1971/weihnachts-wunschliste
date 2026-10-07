const correctPassword = "weihnachten2026";

const loginScreen = document.getElementById("login-screen");
const app = document.getElementById("app");
const form = document.getElementById("password-form");
const passwordInput = document.getElementById("password");
const errorMsg = document.getElementById("error-msg");
const logoutBtn = document.getElementById("logout-btn");

function unlockPage() {
  loginScreen.classList.add("hidden");
  app.classList.remove("hidden");
  passwordInput.value = "";
  errorMsg.textContent = "";
}

function lockPage() {
  app.classList.add("hidden");
  loginScreen.classList.remove("hidden");
  passwordInput.value = "";
  errorMsg.textContent = "";
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const enteredPassword = passwordInput.value.trim();

  if (enteredPassword === correctPassword) {
    unlockPage();
  } else {
    errorMsg.textContent = "Falsches Passwort. Bitte versuche es erneut.";
    passwordInput.focus();
  }
});

logoutBtn.addEventListener("click", () => {
  lockPage();
  passwordInput.focus();
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !loginScreen.classList.contains("hidden")) {
    passwordInput.focus();
  }
});

passwordInput.focus();






























