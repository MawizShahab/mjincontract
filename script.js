// Get the toggle button and the mobile navigation
const toggleButton = document.getElementById("menu-toggle");
const mobileNav = document.getElementById("mobile-nav");

// Toggle the 'hidden' class on the mobile navigation
toggleButton.addEventListener("click", () => {
  mobileNav.classList.toggle("hidden");
});

// Popular cards data
const cardsData = [
  {
    id: 1,
    category: "arbeid",
    image: "./images/cards/card1.jpg",
    title: "Arbeidscontracten",
    description: "Beheer arbeidsrelaties met zorgvuldigheid.",
    personName: "Justin Case",
    personImage: "/images/cards/profile1.png",
    price: "€34.00",
  },
  {
    id: 2,
    category: "vastgoed",
    image: "./images/cards/card2.jpg",
    title: "Vastgoedooreenkomsten",
    description: "Stel huurcontracten op die voldoen aan wetgeving.",
    personName: "Natasha Vandekerckhove",
    personImage: "/images/cards/profile2.png",
    price: "€89.00",
  },
  {
    id: 3,
    category: "zakelijk",
    image: "./images/cards/card3.jpg",
    title: "Zakelijke overeenkomsten",
    description: "Professionele contracten voor samenwerking.",
    personName: "Will Barrow",
    personImage: "/images/cards/profile3.png",
    price: "€39.00",
  },
  {
    id: 4,
    category: "autos",
    image: "./images/cards/card4.jpg",
    title: "Autoverkoopcontracten",
    description:
      "Maak snel en eenvoudig juridisch correcte contracten voor autoverkoop.",
    personName: "Will Barrow",
    personImage: "/images/cards/profile4.png",
    price: "€34.00",
  },
  {
    id: 5,
    category: "zakelijk",
    image: "./images/cards/card5.jpg",
    title: "Licentieovereenkomsten",
    description:
      "Bescherm uw intellectuele eigendom met duidelijke licentievoorwaarden.",
    personName: "Penny Tool",
    personImage: "/images/cards/profile5.png",
    price: "€34.00",
  },
  {
    id: 6,
    category: "arbeid",
    image: "./images/cards/card6.jpg",
    title: "Freelance overeenkomsten",
    description:
      "Contracten voor freelancers en opdrachtgevers, op maat gemaakt.",
    personName: "Auston Ager",
    personImage: "/images/cards/profile2.png",
    price: "€14.00",
  },
  {
    id: 7,
    category: "zakelijk",
    image: "./images/cards/card3.jpg",
    title: "Zakelijke overeenkomsten",
    description: "Professionele contracten voor samenwerking.",
    personName: "Will Barrow",
    personImage: "/images/cards/profile3.png",
    price: "€39.00",
  },
  {
    id: 8,
    category: "arbeid",
    image: "./images/cards/card1.jpg",
    title: "Arbeidscontracten",
    description: "Beheer arbeidsrelaties met zorgvuldigheid.",
    personName: "Justin Case",
    personImage: "/images/cards/profile1.png",
    price: "€34.00",
  },

  // Add more data here as needed
];

// State Variables
let visibleCards = 6; // Number of cards visible
let currentCategory = "all"; // Current filter category

// Elements
const cardsContainer = document.getElementById("cards-container");
const loadMoreButton = document.getElementById("load-more");
const filterTabs = document.querySelectorAll(".filter-tab");

// Render Cards
function renderCards() {
  cardsContainer.innerHTML = ""; // Clear container
  const filteredCards = cardsData.filter(
    (card) => currentCategory === "all" || card.category === currentCategory
  );
  const cardsToShow = filteredCards.slice(0, visibleCards);

  cardsToShow.forEach((card) => {
    const cardElement = `
      <div class="popular-card-container bg-white shadow-md rounded-[10px]">
        <div class="card-info">
          <div class="card-image">
            <img src="${card.image}" class="w-full object-cover" />
          </div>
          <div class="card-content px-[25px] py-[30px]">
            <div class="card-title px-[10px] py-[10px] bg-[#3270fc] inline-block rounded-[5px]">
              <a href="#" class="text-[14px] font-semibold text-[#fff]">
                ${card.title}
              </a>
            </div>
            <div class="card-description mt-[15px] mb-[15px]">
              <p class="text-[20px] font-semibold">${card.description}</p>
            </div>
            <div class="person-profile flex items-center gap-[15px]">
              <div class="person-image">
                <img src="${card.personImage}" />
              </div>
              <div class="person-name">
                <span clas="text-[#5B5F64] text-[16px] font-normal">${card.personName}</span>
              </div>
            </div>

            <div class="flex justify-end items-end mt-[20px] border-t-[#eee] border-t-[1px]"><span class="pt-[20px] text-[#0f1216] text-[20px] font-bold">${card.price}</span></div>
          </div>
        </div>
      </div>`;

    cardsContainer.innerHTML += cardElement;
  });

  // Show/Hide Load More Button
  if (filteredCards.length > visibleCards) {
    loadMoreButton.parentElement.classList.remove("hidden");
  } else {
    loadMoreButton.parentElement.classList.add("hidden");
  }
}

// Event Listeners
filterTabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    currentCategory = e.target.getAttribute("data-category");
    visibleCards = 6; // Reset visible cards
    filterTabs.forEach((t) => t.classList.replace("bg-[#3270FC]", "bg-[#fff]"));
    filterTabs.forEach((t) =>
      t.classList.replace("text-[#fff]", "text-[#5B5F64]")
    );
    e.target.classList.replace("bg-[#fff]", "bg-[#3270FC]");
    e.target.classList.replace("text-[#5B5F64]", "text-[#fff]");
    renderCards();
  });
});

loadMoreButton.addEventListener("click", () => {
  visibleCards += 3; // Show 3 more cards
  renderCards();
});

// Initial Render
renderCards();
