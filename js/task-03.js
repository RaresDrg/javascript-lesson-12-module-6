/* Task 3 - Register form */

const formEl = document.querySelector("#loginForm");
const errorEl = document.querySelector(".form-errors");

const handleFormSucces = () => {
  if (formEl.classList.contains("form-errors")) {
    formEl.classList.remove("form-errors");
    errorEl.textContent = "";
  }

  console.log("Register successfully");
  formEl.reset();
};


const handleFormError = (message) => {
  if (!formEl.classList.contains("form-errors")) {
    formEl.classList.add("form-errors");
  }

  errorEl.textContent = message;
};


const handleSubmit = (event) => {
  event.preventDefault();
  const { elements: { username, password } } = event.currentTarget;

  if (!username.value || !password.value) {
    handleFormError("Compltetati toate campurile");
    return
  }

  handleFormSucces();
};

formEl.addEventListener("submit", handleSubmit);