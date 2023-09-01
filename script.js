let togleBtnIcons = document.querySelectorAll(".faq");

let openFaq = null; // keep track of the current open FAQ
togleBtnIcons.forEach((togleBtnIcon) => {
  togleBtnIcon.addEventListener("click", () => {
    if (openFaq && openFaq == togleBtnIcon) {
      openFaq.classList.remove("open");
      const openIcon = openFaq.querySelector(".icon i");
      openIcon.className = "fas fa-plus";
    }
    togleBtnIcon.classList.toggle("open");

    let icon = togleBtnIcon.querySelector(".icon i");

    if (icon.className === "fas fa-plus") {
      icon.className = "fas fa-xmark";
    } else {
      icon.className = "fas fa-plus";
    }

    openFaq = togleBtnIcon.classList.contains("open") ? togleBtnIcon : null;
  });
});