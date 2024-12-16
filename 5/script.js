const table = document.querySelector("table");
const clearAllText = document.querySelector(".text_clear_all");
const radios = document.querySelectorAll('input[type="radio"]');
table.addEventListener("click", function (e) {
  const radio = e.target.closest("input");
  if (!radio) return;
  clearAllText.style.display = "block";
});
clearAllText.addEventListener("click", function () {
  radios.forEach((radio) => (radio.checked = false));
  clearAllText.style.display = "none";
});
