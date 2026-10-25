/* ==================== 1. MOBILE NAVIGATION MENU ==================== */
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navLinks = document.querySelectorAll(".nav-link");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
});

/* ==================== 2. HEADER BACKGROUND ON SCROLL ==================== */
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 50) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
});

/* ==================== 3. CUSTOM PURPLE CURSOR FOLLOWER ==================== */
const cursorDot = document.getElementById("cursorDot");
const cursorGlow = document.getElementById("cursorGlow");

window.addEventListener("mousemove", (e) => {
  const posX = e.clientX;
  const posY = e.clientY;

  if (cursorDot && cursorGlow) {
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorGlow.animate(
      {
        left: `${posX}px`,
        top: `${posY}px`,
      },
      { duration: 400, fill: "forwards" },
    );
  }
});

/* ==================== 4. LIVE PROFILE PHOTO UPLOAD PREVIEW ==================== */
const uploadPhotoInput = document.getElementById("uploadPhoto");
const profileImage = document.getElementById("profileImage");

if (uploadPhotoInput && profileImage) {
  uploadPhotoInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
        profileImage.src = event.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
}

/* ==================== 5. EXPERIENCE / EDUCATION TABS SWITCHER ==================== */
const expTabs = document.querySelectorAll(".exp-tab");
const timelinePanels = document.querySelectorAll(".timeline-panel");

expTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active class from all tabs & panels
    expTabs.forEach((t) => t.classList.remove("active"));
    timelinePanels.forEach((p) => p.classList.remove("active"));

    // Activate clicked tab & target panel
    tab.classList.add("active");
    const targetPanel = document.querySelector(tab.dataset.target);
    if (targetPanel) {
      targetPanel.classList.add("active");
    }
  });
});

/* ==================== 6. WHAT I OFFER (ACCORDION CARDS) ==================== */
const offerCards = document.querySelectorAll(".offer-card");

offerCards.forEach((card) => {
  const toggleBtn = card.querySelector(".offer-toggle-btn");
  const icon = toggleBtn.querySelector("i");

  toggleBtn.addEventListener("click", () => {
    card.classList.toggle("active");
    if (card.classList.contains("active")) {
      icon.className = "ri-arrow-up-s-line";
    } else {
      icon.className = "ri-arrow-down-s-line";
    }
  });
});

/* ==================== 7. COPY EMAIL BUTTON ("Email copied ✓") ==================== */
const copyEmailBtn = document.getElementById("copyEmailBtn");
const copyBtnText = document.getElementById("copyBtnText");

if (copyEmailBtn) {
  copyEmailBtn.addEventListener("click", () => {
    const email = copyEmailBtn.getAttribute("data-email");
    navigator.clipboard.writeText(email).then(() => {
      copyBtnText.innerHTML = `Email copied <i class="ri-check-line"></i>`;
      setTimeout(() => {
        copyBtnText.innerHTML = `Copy Email <i class="ri-file-copy-line"></i>`;
      }, 2500);
    });
  });
}

/* ==================== 8. ACTIVE LINK SCROLL SPY ==================== */
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 120;
    const sectionId = current.getAttribute("id");
    const navLink = document.querySelector(`.nav-menu a[href*=${sectionId}]`);

    if (navLink) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink.classList.add("active-link");
      } else {
        navLink.classList.remove("active-link");
      }
    }
  });
}

window.addEventListener("scroll", scrollActive);
