const bar = document.getElementById("bar");
const nav = document.getElementById("mobileMenu");

bar.addEventListener("click", (e) => {
  e.stopPropagation();
  nav.classList.toggle("active");

  // ICON CHANGE
  if (nav.classList.contains("active")) {
    bar.classList.remove("fa-bars");
    bar.classList.add("fa-xmark");
  } else {
    bar.classList.remove("fa-xmark");
    bar.classList.add("fa-bars");
  }
});

// CLICK OUTSIDE

document.addEventListener("click", function (e) {
  if (!nav.contains(e.target) && !bar.contains(e.target)) {
    nav.classList.remove("active");

    bar.classList.remove("fa-xmark");
    bar.classList.add("fa-bars");
  }
});

// EMAIL MESSAGE

const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";

  const serviceID = "default_service";
  const templateID = "template_sqpyp99";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Send Email";
      alert("Your Message sent Successfully");
    },
    (err) => {
      btn.value = "Send Email";
      alert(JSON.stringify(err));
    }
  );
});
