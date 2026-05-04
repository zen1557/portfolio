document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  document.getElementById("msg").innerText =
    "Message sent successfully. I will get back to you soon.";

  this.reset();
});
