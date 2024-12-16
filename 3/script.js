const boxContainer = document.querySelector(".box_container");
const boxes = document.querySelectorAll(".box");
boxContainer.addEventListener("click", function (e) {
  const box = e.target.closest(".box");
  if (!box) return;
  const isSelected = box.classList.contains("selected");
  boxes.forEach((box) => box.classList.remove("selected"));
  if (!isSelected) {
    box.classList.add("selected");
  }
});
