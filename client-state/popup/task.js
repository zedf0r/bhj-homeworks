const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".modal__close");

if (getCookie("modal") !== "active") {
  modal.classList.add("modal_active");
} else {
  modal.classList.remove("modal_active");
}

closeButton.addEventListener("click", () => {
  if (modal.classList.contains("modal_active")) {
    modal.classList.remove("modal_active");
    setCookie("modal", "active");
  }
});

function setCookie(name, value) {
  document.cookie = name + "=" + value;
}

function getCookie(name) {
  const pairs = document.cookie.split("; ");
  const cookie = pairs.find((p) => p.startsWith(name + "="));
  return cookie ? cookie.substring(name.length + 1) : null;
}
