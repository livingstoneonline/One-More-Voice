function myFunction() {
  var element1 = document.getElementById("rotate-button");
  var element2 = document.getElementById("img0016-0017");
  if (element1.getAttribute("aria-checked") == "true") {
      element1.setAttribute("aria-checked", "false");
  } else {
      element1.setAttribute("aria-checked", "true");
  }
  element1.classList.toggle("click-color");
  element2.classList.toggle("rotate-180");
}