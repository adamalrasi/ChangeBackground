const btn = document.querySelector("#btn");
const back = document.querySelector("body");

// btn.addEventListener("click", function () {
//   back.style.background = randomBg();
//   console.log("hello");
// });

// function randomBg() {
//   return "url('https://source.unsplash.com/featured')";
// }

// function load() {
//   back.style.background = randomBg();
//   btn.onclick = clicked;
// }

// btn.addEventListener("click", function () {
//   back.style.background = "url('https://source.unsplash.com/featured')";
// });

// Only way to reload multiple times
btn.addEventListener("click", function () {
  location.reload();
});
