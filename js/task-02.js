/* Task 2 - Sumbit form */

const formEl = document.querySelector("#loginForm");

const handleSubmit = (event) => {
  event.preventDefault();

  // const username = event.currentTarget.elements.username;
  // const password = event.currentTarget.elements.password;

  // const form = event.currentTarget;
  // const username = form.elements.username
  // const password = form.elements.password

  // const username = formEl.elements.username
  // const password = formEl.elements.password

  // const username = document.querySelector("#username");
  // const password = document.querySelector("#password");

  // const { elements: { username, password } } = event.currentTarget;
  // const { elements: { username, password} } = formEl;

  if (username.value === "" || password.value === "") {
    alert("Completati ambele campuri");
    return;
  }

  alert("Formular a fost trimis cu succes");
  console.log(`Username: ${username.value}, password: ${password.value}`);

  formEl.reset();
  // username.value = "";
  // password.value = "";
};

formEl.addEventListener("submit", handleSubmit);


// *setTimeout() --> aceasta se activeaza dupa ce se executa tot codul din pagina //

// const username = document.getElementById("username");
// const password = document.getElementById("password");

// setTimeout(() => {
//   username.value = "sergiu";
// }, 5000);