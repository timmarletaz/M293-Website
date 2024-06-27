var details = document.querySelectorAll("details");
let opened = null;
const main = document.querySelector("main");

details.forEach((detail) => {
  detail.addEventListener("toggle", () => {
    if (detail.open) {
      setTargetDetail(detail);
    }
  });
});

function setTargetDetail(targetDetail) {
  details.forEach((detail) => {
    if (detail !== targetDetail) {
      detail.open = false;
    }
  });
}

main.addEventListener("scroll", function () {
  details.forEach((detail) => {
    detail.open = false;
  });

  document.querySelector(".home").style.opacity = "1";
  document.addEventListener("scroll", function () {
    document.querySelector(".home").style.opacity = "0";
  });
  setTimeout(() => {
    document.querySelector(".home").style.opacity = "0";
  }, 2000);
});

window.addEventListener("load", function () {
  setTimeout(function () {
    // This hides the address bar:
    window.scrollTo(0, 1);
  }, 0);
});
