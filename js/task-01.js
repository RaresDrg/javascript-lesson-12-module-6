/* Task 1 - Toggle button: */

const toggleBtn = document.querySelector(".toggle-button");
const iconEl = document.querySelector(".icon");

const handleClick = () => {
  iconEl.classList.toggle("icon-red")
}
toggleBtn.addEventListener("click", handleClick);


// *setTimeout //

// setTimeout(() => {
//   toggleBtn.removeEventListener("click", handleClick);
// }, 5000);