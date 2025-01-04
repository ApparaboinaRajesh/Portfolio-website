// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
  
  // Form Submission Alert
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for reaching out! I'll get back to you soon.");
  });
  