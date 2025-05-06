document.addEventListener("DOMContentLoaded", () => {
  emailjs.init("AEnmk-mpvCegMylmp");

  const contactForm = document.getElementById("contactForm");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      if (!name.value && !email.value && !message.value) {
        alert("Please enter the following inputs.");
      }

      emailjs
        .sendForm("service_5dpkusx", "template_uriiqm9", this)
        .then(() => {
          alert("Message sent successfully!");
          contactForm.reset();
        })
        .catch((error) => {
          alert("Failed to send message. Please try again.");
          console.error("EmailJS Error:", error);
        });
    });
  }

  // Mobile menu handling
  const menuButton = document.querySelector("button");
  const navLinks = document.querySelector(".buttons");

  menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("hidden");
    navLinks.classList.toggle("flex");
    navLinks.classList.toggle("flex-col");
    navLinks.classList.toggle("absolute");
    navLinks.classList.toggle("top-25");
    navLinks.classList.toggle("left-0");
    navLinks.classList.toggle("w-full");
    navLinks.classList.toggle("bg-gradient-to-r");
    navLinks.classList.toggle("from-black/80");
    navLinks.classList.toggle("to-main-color/80");
    navLinks.classList.toggle("backdrop-blur-lg");
    navLinks.classList.toggle("p-4");
    navLinks.classList.toggle("space-y-4");
    navLinks.classList.toggle("z-50");
  });

  // Close menu on window resize
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) {
      // 1024px is the 'lg' breakpoint in Tailwind
      navLinks.classList.add("hidden");
      navLinks.classList.remove(
        "flex",
        "flex-col",
        "absolute",
        "top-25",
        "left-0",
        "w-full",
        "bg-gradient-to-r",
        "from-black/80",
        "to-main-color/80",
        "backdrop-blur-lg",
        "p-4",
        "space-y-4",
        "z-50",
      );
    }
  });
});
