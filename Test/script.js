console.log("Start");

// select elements
const btn = document.querySelector(".btn");
const text = document.querySelector(".text");

btn.addEventListener("click", () => {
  console.log("Clicked");

  text.textContent = "Processing...";

  setTimeout(() => {
    console.log("Middle");
    text.textContent = "Done";
  }, 2000);

  setTimeout(() => {
    console.log("Async Task");
  }, 0);

  console.log("End");
});