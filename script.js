// ===== Contact Form =====
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  document.getElementById("msg").innerText = "Thanks! Your message has been sent.";
  this.reset();
});

// ===== Animate Skills on Scroll =====
const skillsSection = document.getElementById("skills");
const progressBars = document.querySelectorAll(".progress-bar");

function animateSkills() {
  const sectionTop = skillsSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (sectionTop < windowHeight - 100) {
    progressBars.forEach(bar => {
      const width = bar.classList.contains("html") ? "90%" :
                    bar.classList.contains("css") ? "80%" :
                    bar.classList.contains("js") ? "70%" : "0";
      bar.style.width = width;
    });
    window.removeEventListener("scroll", );
  }
}

window.addEventListener("scroll", animateSkills);
animateSkills(); // animate if visible on load 
