const dragDropList = document.querySelector(".drag_drop_list");
const dragDropItems = document.querySelectorAll(".drag_drop_list_item");
const dropMenuTriggers = document.querySelectorAll(".select_box_container");
const dropMenuOptionSlected = document.querySelectorAll(
  ".drop_menu_option_selected"
);
const clearText = document.querySelector(".text_clear");

dragDropList.addEventListener("click", function (e) {
  const dragDropItem = e.target.closest(".drag_drop_list_item");
  if (!dragDropItem) return;
  dragDropItems.forEach((item) => item.classList.remove("selected"));
  dragDropItem.classList.add("selected");
});

// For Dropdown menu

dragDropList.addEventListener("click", function (e) {
  const dropMenuTrigger = e.target.closest(".select_box_container");
  if (!dropMenuTrigger) return;
  dropMenuTriggers.forEach((trigger) =>
    trigger.classList.remove("drop_down_show")
  );
  dropMenuTrigger.classList.add("drop_down_show");
});

document.addEventListener("click", (event) => {
  if ([...dropMenuTriggers].some((trigger) => trigger.contains(event.target)))
    return;
  dropMenuTriggers.forEach((trigger) =>
    trigger.classList.remove("drop_down_show")
  );
});

dragDropList.addEventListener("click", function (e) {
  const dropMenuOption = e.target.closest(".dropdown-menu_option");
  if (!dropMenuOption) return;
  const selectBoxContainer = dropMenuOption.closest(".select_box_container");
  const dropMenuOptionSelected = selectBoxContainer.querySelector(
    ".drop_menu_option_selected"
  );
  dropMenuOptionSelected.textContent = dropMenuOption.dataset.value;
  showClearAllText();
  selectBoxContainer.classList.remove("drop_down_show");
});

clearText.addEventListener("click", function () {
  dragDropList.innerHTML = `              <li class="drag_drop_list_item">
                <div class="drop_down_select_text_container">
                  <div class="select_box_container">
                    <div class="drop_menu_option_selected">-</div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M3.293 8.293a1 1 0 0 1 1.414 0L12 15.586l7.293-7.293a1 1 0 1 1 1.414 1.414L13.414 17a2 2 0 0 1-2.828 0L3.293 9.707a1 1 0 0 1 0-1.414"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div class="dropdown-menu" id="dropdownMenu">
                      <div class="dropdown-menu_option" data-value="1">1</div>
                      <div class="dropdown-menu_option" data-value="2">2</div>
                      <div class="dropdown-menu_option" data-value="3">3</div>
                    </div>
                  </div>
                  <p>Tesla</p>
                </div>
                <div class="drop_down_icon">
                  <svg height="14" viewBox="0 0 10 14" width="10">
                    <g fill="currentColor">
                      <circle cx="2" cy="2" r="1.5"></circle>
                      <circle cx="2" cy="7" r="1.5"></circle>
                      <circle cx="2" cy="12" r="1.5"></circle>
                      <circle cx="8" cy="2" r="1.5"></circle>
                      <circle cx="8" cy="7" r="1.5"></circle>
                      <circle cx="8" cy="12" r="1.5"></circle>
                    </g>
                  </svg>
                </div>
              </li>
              <li class="drag_drop_list_item">
                <div class="drop_down_select_text_container">
                  <div class="select_box_container">
                    <div class="drop_menu_option_selected">-</div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M3.293 8.293a1 1 0 0 1 1.414 0L12 15.586l7.293-7.293a1 1 0 1 1 1.414 1.414L13.414 17a2 2 0 0 1-2.828 0L3.293 9.707a1 1 0 0 1 0-1.414"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div class="dropdown-menu" id="dropdownMenu">
                      <div class="dropdown-menu_option" data-value="1">1</div>
                      <div class="dropdown-menu_option" data-value="2">2</div>
                      <div class="dropdown-menu_option" data-value="3">3</div>
                    </div>
                  </div>
                  <p>Ford</p>
                </div>
                <div class="drop_down_icon">
                  <svg height="14" viewBox="0 0 10 14" width="10">
                    <g fill="currentColor">
                      <circle cx="2" cy="2" r="1.5"></circle>
                      <circle cx="2" cy="7" r="1.5"></circle>
                      <circle cx="2" cy="12" r="1.5"></circle>
                      <circle cx="8" cy="2" r="1.5"></circle>
                      <circle cx="8" cy="7" r="1.5"></circle>
                      <circle cx="8" cy="12" r="1.5"></circle>
                    </g>
                  </svg>
                </div>
              </li>
              <li class="drag_drop_list_item">
                <div class="drop_down_select_text_container">
                  <div class="select_box_container">
                    <div class="drop_menu_option_selected">-</div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M3.293 8.293a1 1 0 0 1 1.414 0L12 15.586l7.293-7.293a1 1 0 1 1 1.414 1.414L13.414 17a2 2 0 0 1-2.828 0L3.293 9.707a1 1 0 0 1 0-1.414"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div class="dropdown-menu" id="dropdownMenu">
                      <div class="dropdown-menu_option" data-value="1">1</div>
                      <div class="dropdown-menu_option" data-value="2">2</div>
                      <div class="dropdown-menu_option" data-value="3">3</div>
                    </div>
                  </div>
                  <p>BYD</p>
                </div>
                <div class="drop_down_icon">
                  <svg height="14" viewBox="0 0 10 14" width="10">
                    <g fill="currentColor">
                      <circle cx="2" cy="2" r="1.5"></circle>
                      <circle cx="2" cy="7" r="1.5"></circle>
                      <circle cx="2" cy="12" r="1.5"></circle>
                      <circle cx="8" cy="2" r="1.5"></circle>
                      <circle cx="8" cy="7" r="1.5"></circle>
                      <circle cx="8" cy="12" r="1.5"></circle>
                    </g>
                  </svg>
                </div>
              </li>`;
  // dropMenuOptionSlected.forEach((selected) => (selected.textContent = "-"));

  clearText.style.display = "none";
});

function showClearAllText() {
  clearText.style.display = "block";
}
// ***********************************************************************

new Sortable(dragDropList, {
  animation: 250,
  handle: ".drag_drop_list_item",
  onEnd: function (evt) {
    showClearAllText();
  },
});
