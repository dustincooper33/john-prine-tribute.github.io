// The below overrides the website header text defined in index.html
const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

// The below adds a click listener to the entire webpage
document.querySelector("html").addEventListener("click", function () {
	alert("Ouch! Stop poking me!");
  });
  