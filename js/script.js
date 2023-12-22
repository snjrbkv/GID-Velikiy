let darkBtn = document.querySelector(".dark-btn");
let inputRadio = document.querySelectorAll(".form-info");
let select = document.querySelector("select");

darkBtn.addEventListener("click", () => {
});

inputRadio.forEach(function (btn) {
  btn.onclick = function () {
    select.classList.toggle("select");
  };
});
