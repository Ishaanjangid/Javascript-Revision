let button = document.querySelector("#button");
let name = document.querySelector("#name");
let age = document.querySelector("#age");

let answerBox = document.querySelector("#answerBox");

button.addEventListener("click", () => {
  console.log(`Name: ${name.value}`);
  console.log(`Age: ${age.value}`);
  answerBox.innerHTML = `Name: ${name.value}, Age: ${age.value}`;
});
