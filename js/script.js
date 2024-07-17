document.addEventListener("DOMContentLoaded", function () {
  const viewMoreButtons = document.querySelectorAll(".btn-primary");
  const modal = document.getElementById("portfolioModal");
  const modalTitle = modal.querySelector(".modal-title");
  const modalBody = modal.querySelector(".modal-body img");
  const modalDescription = modal.querySelector(".modal-body p");
  const form = document.querySelector("#contact form");

  viewMoreButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const card = button.closest(".card");
      const title = card.querySelector(".card-title").textContent;
      const imgSrc = card.querySelector(".card-img-top").src;
      const description = card.querySelector(".card-text").textContent;

      modalTitle.textContent = title;
      modalBody.src = imgSrc;
      modalDescription.textContent = description;

      $("#portfolioModal").modal("show");
    });
  });

  // Smooth scrolling for links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    // Form validation and submission logic here
    alert("Message sent successfully!");
  });
});
