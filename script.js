function toggleDetails(buttonSelector, paragraphSelector) {
  const paragraph = document.querySelector(paragraphSelector);
  const button = document.querySelector(buttonSelector);

  const currentDisplay = window.getComputedStyle(paragraph).display;

  if (currentDisplay === "none") {
    paragraph.style.display = "block";

    button.querySelector(".initial").innerText = "Read Less";
    button.querySelector(".new").innerText = "Read Less";
  } else {
    paragraph.style.display = "none";

    button.querySelector(".initial").innerText = "Read More";
    button.querySelector(".new").innerText = "Read More";
  }
}

document.querySelector(".read-more").addEventListener("click", () => {
  toggleDetails(".read-more", ".about-details-2");
});

const skills = [
  { name: "HTML - 5", percentage: 70 },
  { name: "CSS - 3", percentage: 50 },
  { name: "Tailwind", percentage: 40 },
  { name: "JavaScript", percentage: 25 },
];

function createSkillBars() {
  const skillsContainer = document.getElementById("skills-list");

  skills.forEach((skill) => {
    const skillDiv = document.createElement("div");
    skillDiv.classList.add("skill");

    const progressBar = document.createElement("div");
    progressBar.classList.add("progress-bar");

    const innerContent = document.createElement("div");
    innerContent.classList.add("inner-content");

    const percentage = document.createElement("span");
    percentage.classList.add("percentage");
    percentage.textContent = "0%";

    const skillName = document.createElement("span");
    skillName.classList.add("skill-name");
    skillName.textContent = skill.name;

    innerContent.appendChild(percentage);
    innerContent.appendChild(skillName);
    progressBar.appendChild(innerContent);

    skillDiv.appendChild(progressBar);
    skillsContainer.appendChild(skillDiv);

    let currentPercent = 0;
    const interval = setInterval(() => {
      if (currentPercent <= skill.percentage) {
        percentage.textContent = `${currentPercent}%`;
        progressBar.style.background = `conic-gradient(#FF520E ${currentPercent * 3.6}deg, #333 0deg)`;
        currentPercent++;
      } else {
        clearInterval(interval);
      }
    }, 15);
  });
}
window.onload = createSkillBars;

function toggleDetail(button) {
  const targetClass = button.getAttribute("data-target");
  const paragraph = document.querySelector(targetClass);

  if (paragraph) {
      paragraph.classList.toggle("hide");

      const isHidden = paragraph.classList.contains("hide");
      const buttonText = isHidden ? "Learn More" : "Learn Less";
      button.querySelector(".initial").innerText = buttonText;
      button.querySelector(".new").innerText = buttonText;
  } else {
      console.error(`Element with class ${targetClass} not found.`);
  }
}

document.querySelectorAll("[data-target]").forEach((button) => {
  button.addEventListener("click", () => toggleDetail(button));
});

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("largeImage");
  const closeModal = document.querySelector(".close");

  document.querySelectorAll(".work img").forEach(img => {
      img.addEventListener("click", () => {
          modal.style.display = "block";
          modalImg.src = img.src;
      });
  });

  closeModal.addEventListener("click", () => {
      modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
      if (e.target === modal) {
          modal.style.display = "none";
      }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const element = document.querySelector(".heading-1");
  const text = "Frontend Developer";
  let index = 0;
  let isDeleting = false;

  const typeEffect = () => {
      if (!isDeleting && index <= text.length) {
          element.textContent = text.substring(0, index);
          index++;
      } else if (isDeleting && index >= 0) {
          element.textContent = text.substring(0, index);
          index--;
      }

      if (index === text.length) {
          isDeleting = true;
          setTimeout(typeEffect, 1000);
          return;
      } else if (index === 0) {
          isDeleting = false;
      }

      setTimeout(typeEffect, isDeleting ? 100 : 150);
  };

  typeEffect();
});

const mouseDot = document.querySelector(".mouse-dot");

document.addEventListener("mousemove", (e) => {
  mouseDot.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
});

const hoverElements = document.querySelectorAll(".about-card, .process-card, .work");

hoverElements.forEach((el) => {
  el.addEventListener("mouseenter", () => {
      mouseDot.classList.add("hover");
  });

  el.addEventListener("mouseleave", () => {
      mouseDot.classList.remove("hover");
  });
});

const elementsToAnimate = document.querySelectorAll(".fade-in");

const scrollAnimation = () => {
  elementsToAnimate.forEach((el) => {
      const rect = el.getBoundingClientRect();

      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          el.classList.add("visible");
      } else {
          el.classList.remove("visible");
      }
  });
};

document.addEventListener("scroll", scrollAnimation);
scrollAnimation();

// JavaScript to toggle the navigation menu on small screens
function openMenu() {
  const sidemenu = document.getElementById("sidemenu");
  const openIcon = document.getElementById("fa-bars");

  sidemenu.style.display = "block"; // Show side menu
  openIcon.style.display = "none"; // Hide open icon
}

function closeMenu() {
  const sidemenu = document.getElementById("sidemenu");
  const openIcon = document.getElementById("fa-bars");

  sidemenu.style.display = "none"; // Hide side menu
  openIcon.style.display = "block"; // Show open icon
}

const canvas = document.getElementById('hexParticles');
const ctx = canvas.getContext('2d');
let particles = [];
const hexRadius = 20; // Radius of hexagons
const numParticles = 100;

canvas.width = window.innerWidth;
canvas.height = document.querySelector('section').offsetHeight;

// Particle Class for Hexagons
class Particle {
    constructor(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx; // Horizontal speed
        this.dy = dy; // Vertical speed
        this.radius = radius;
    }

    draw() {
        ctx.beginPath();
        const numberOfSides = 6; // Hexagon
        const angleStep = (2 * Math.PI) / numberOfSides;

        // Draw the hexagon by connecting points
        for (let i = 0; i <= numberOfSides; i++) {
            const xPoint = this.x + this.radius * Math.cos(i * angleStep);
            const yPoint = this.y + this.radius * Math.sin(i * angleStep);

            if (i === 0) {
                ctx.moveTo(xPoint, yPoint); // Start at the first point
            } else {
                ctx.lineTo(xPoint, yPoint); // Connect to subsequent points
            }
        }

        ctx.closePath(); // Close the path to form a hexagon

        // Fill and stroke the hexagon
        ctx.fillStyle = 'rgba(255, 82, 14, 0.3)'; // Semi-transparent fill color
        ctx.fill();

        ctx.strokeStyle = 'rgba(255, 82, 14, 0.8)'; // Strong outline color
        ctx.lineWidth = 1.5; // Outline thickness
        ctx.stroke();
    }

    update() {
        this.x += this.dx;
        this.y += this.dy;

        // Wrap around edges
        if (this.x > canvas.width + this.radius) this.x = -this.radius;
        if (this.x < -this.radius) this.x = canvas.width + this.radius;
        if (this.y > canvas.height + this.radius) this.y = -this.radius;
        if (this.y < -this.radius) this.y = canvas.height + this.radius;

        this.draw(); // Redraw the hexagon at its new position
    }
}

// Initialize Particles
function initParticles() {
    particles = [];
    for (let i = 0; i < numParticles; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const dx = (Math.random() - 0.5) * 1.5; // Random horizontal speed
        const dy = (Math.random() - 0.5) * 1.5; // Random vertical speed
        particles.push(new Particle(x, y, dx, dy, hexRadius));
    }
}

// Animate Particles
function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas for each frame
    particles.forEach((particle) => particle.update());
    requestAnimationFrame(animateParticles);
}

// Adjust Canvas on Resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = document.querySelector('section').offsetHeight;
    initParticles();
});

// Start Animation
initParticles();
animateParticles();
