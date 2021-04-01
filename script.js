const openSignUp = document.getElementById("open-signup");
const closeSignUp = document.getElementById("close-signup");
const container = document.querySelector(".container");

openSignUp.addEventListener("click", () =>
  container.classList.add("show-signup")
);
closeSignUp.addEventListener("click", () =>
  container.classList.remove("show-signup")
);
