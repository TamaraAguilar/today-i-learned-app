const btn = document.querySelector(".btn-open");
const factForm = document.querySelector(".fact-form");

btn.addEventListener("click", function () {
  const attr = factForm.getAttribute("class");

  if (attr.includes("hidden")) {
    factForm.classList.remove("hidden");

    // Change text button to "Close" if form is open
    btn.textContent = "Close";
  } else {
    factForm.classList.add("hidden");

    // Change text button to original if form is closed
    btn.textContent = "Share a Fact";
  }
});
