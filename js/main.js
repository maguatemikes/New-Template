const featureCards = [
  {
    title: "Sustainable Materials",
    icon: "assets/svg/leaf icon.svg",

    description:
      "Made from 100% organic cotton sourced from certified sustainable farms. Our eco-friendly approach ensures minimal environmental impact.",
  },
  {
    title: "Handcrafted Quality",
    icon: "assets/svg/heart icon.svg",

    description:
      "Each bandana is carefully crafted by skilled artisans who take pride in their work. Every stitch represents dedication to excellence.",
  },
  {
    title: "Unique Designs",
    icon: "assets/svg/design icon.svg",

    description:
      "Our exclusive patterns are created by independent artists from around the world. You won't find these designs anywhere else.",
  },
  {
    title: "Lifetime Guarantee",
    icon: "assets/svg/durable icon.svg",

    description:
      "We stand behind our products with a lifetime guarantee. If you're not satisfied, we'll make it right or refund your purchase.",
  },
  {
    title: "Fast & Free Shipping",
    icon: "assets/svg/toprated icon.svg",

    description:
      "Free worldwide shipping on orders over $50. Express delivery available. Track your order every step of the way.",
  },
  {
    title: "24/7 Support",
    icon: "assets/svg/care icon.svg",

    description:
      "Our dedicated customer service team is available around the clock to help with any questions or concerns you may have.",
  },
];

const renderCards = () => {
  const cardWrapper = document.querySelector(".card_wrapper");

  featureCards.forEach(({ icon, title, description }) => {
    cardWrapper.insertAdjacentHTML(
      "beforeend",
      `
  <div class="card_container">
    <div class="icon_container">
      <img src="${icon}" alt="${title} icon" />
    </div>
    <h3 class="card_title">${title}</h3>
    <p class="card_description">${description}</p>
  </div>
`
    );
  });
};

renderCards();

const navigationAnim = () => {
  const header = document.querySelector(".main_header");
  const navMain = document.querySelector(".nav_main");

  const handleScroll = () => {
    // Only run on desktop
    if (window.innerWidth > 768) {
      if (window.scrollY > 10) {
        header.style.backgroundColor = "transparent";
        navMain.style.borderRadius = "50px";
        navMain.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
        navMain.style.backdropFilter = "blur(10px)";
        navMain.style.webkitBackdropFilter = "blur(10px)";
        navMain.style.marginTop = "16px"; // updated marginTop
      } else {
        navMain.style.backgroundColor = "white";
        navMain.style.backdropFilter = "none";
        navMain.style.webkitBackdropFilter = "none";
        navMain.style.borderRadius = "0";
        header.style.backgroundColor = "white";
        navMain.style.marginTop = "0"; // reset marginTop
      }
    }
  };

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleScroll);
};

navigationAnim();

const handleNavMenu = () => {
  const hamburgerMenu = document.querySelector(".hamburger_menu");
  const navMenu = document.querySelector(".nav_menu");
  const navLinks = document.querySelectorAll(".nav_menu .nav_link"); // all links inside nav_menu

  // Only add event listeners if mobile
  const isMobile = () => window.innerWidth <= 768;

  // Toggle menu on hamburger click
  hamburgerMenu.addEventListener("click", () => {
    if (!isMobile()) return; // exit if not mobile

    const attribute = navMenu.getAttribute("data-open");

    if (attribute === "false") {
      navMenu.style.transform = "translateX(0)";
      navMenu.setAttribute("data-open", "true");
    } else {
      navMenu.style.transform = "translateX(500px)";
      navMenu.setAttribute("data-open", "false");
    }
  });

  // Close menu when a link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (!isMobile()) return; // exit if not mobile

      navMenu.style.transform = "translateX(500px)";
      navMenu.setAttribute("data-open", "false");
    });
  });
};

handleNavMenu();
