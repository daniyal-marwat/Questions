const selectionList = document.querySelector(".selection_list");
const selectionListItems = document.querySelectorAll(".selection_list_item");
const selectionListItemOtherInput = document.querySelector(
  ".selection_other_edit_input"
);
selectionList.addEventListener("click", function (e) {
  const selection = e.target.closest(".selection_list_item");
  if (!selection) return;
  selectionListItems.forEach((item) => item.classList.remove("selected"));
  selection.classList.toggle("selected");
  if (selection.classList.contains("selection_list_item_edit")) {
    selectionListItemOtherInput.focus();
  }
});
