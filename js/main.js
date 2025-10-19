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
