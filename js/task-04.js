/* Task 4 - Modal window */

const openBtn = document.querySelector("#openModalBtn");
const closeBtn = document.querySelector("#closeBtn");
const bodyEl = document.querySelector("body");
const overlayEl = document.querySelector("#overlay");


const handleOpen = () => {
  bodyEl.classList.add("open");
};

const handleClose = () => {
  bodyEl.classList.remove("open");
};

const handleCloseOnEsc = (event) => {
  if (event.key === "Escape") {
    handleClose();
  }
};


openBtn.addEventListener("click", handleOpen);
closeBtn.addEventListener("click", handleClose);
overlayEl.addEventListener("click", handleClose);
document.addEventListener("keydown", handleCloseOnEsc);



// *event delegation (kind of) //

// const handleClick = ({target}) => {
//   if (target === closeBtn || target === overlayEl) {
//     handleClose();
//   }
// };

// document.addEventListener("click", handleClick);