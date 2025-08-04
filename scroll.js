// top product btn scrollers

function scrollHorizontally(containerSelector, direction) {
  const container = document.querySelector(containerSelector);
  const scrollAmount = 300;

  if (container) {
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // Sample product data matching your image
  const products = [

    {
      id: "B0C2345678",
      title: "PSS/Slim/Pro Stand and Cooling Station with LED Controller Charging Station for PlayStation 5 Console, Controller...",
      image: "https://images-na.ssl-images-amazon.com/images/I/81LQpTeS3FL._AC_UL165_SR165,165_.jpg",
      rating: 4,
      reviews: 20013,
      price: 28.29,
      offers: 2,
      badge: "Best Seller"
    },
    {
      id: "B0C3456789",
      title: "PSS Controller Charging Station, PlayStation 5 Dualsense Charger Dock with Dual Stand, Upgrade PSS Charger Accessor with Fast Charge Cable...",
      image: "charging-station.jpg",
      rating: 4,
      reviews: 2682,
      price: 23.99,
      offers: 1
    },
    {
      id: "B0C4567890",
      title: "NBA 2K24 Kobe Bryant Edition - PlayStation 5",
      image: "https://images-na.ssl-images-amazon.com/images/I/81YtQwKHlaL._AC_UL165_SR165,165_.jpg",
      brand: "2K",
      rating: 4,
      reviews: 1508,
      platform: "PlayStation 5",
      price: 11.55,
      shipping: "Get it Aug 14 - 25",
      shippingCost: "$9.99 shipping",
      stock: "Only 18 left in stock - order soon"
    }
    // Add more products as needed
  ];

  // DOM elements
  const carouselTrack = document.querySelector('.carousel-track');
  const prevButton = document.querySelector('.carousel-nav.prev');
  const nextButton = document.querySelector('.carousel-nav.next');
  const currentPageEl = document.querySelector('.current-page');
  const totalPagesEl = document.querySelector('.total-pages');
  const restartLink = document.querySelector('.restart-link');
  
  // Configuration
  const productsPerPage = 4;
  let currentPage = 4; // Starting at page 4 as in your example
  const totalPages = 8; // As in your example
  
  // Initialize
  function init() {
    totalPagesEl.textContent = totalPages;
    createProductCards();
    updateCarousel();
    setupEventListeners();
  }
  
  // Create product cards
  function createProductCards() {
    carouselTrack.innerHTML = '';
    
    products.forEach((product) => {
      const card = document.createElement('div');
      card.className = 'sims-card';
      
      // Generate star rating (4 stars with empty 5th star)
      const starsHTML = '★★★★☆';
      
      // Format reviews number with comma
      const formattedReviews = product.reviews.toLocaleString();
      
      // Build card HTML
      let cardHTML = `
        <div class="sims-image-container">
          <img src="${product.image}" alt="${product.title}" class="sims-image">
        </div>
        <div class="sims-details">
          <div class="sims-title">${product.title}</div>
      `;
      
      // Add brand if exists
      if (product.brand) {
        cardHTML += `<div class="sims-brand">${product.brand}</div>`;
      }
      
      // Add rating
      cardHTML += `
        <div class="sims-rating">
          <span class="sims-stars">${starsHTML}</span>
          <span class="sims-rating-count">${formattedReviews}</span>
        </div>
      `;
      
      // Add platform if exists
      if (product.platform) {
        cardHTML += `<div class="sims-platform">${product.platform}</div>`;
      }
      
      // Add price/offers
      if (product.offers) {
        cardHTML += `
          <div class="sims-offers">${product.offers} offer${product.offers > 1 ? 's' : ''} from <span class="sims-price">$${product.price.toFixed(2)}</span></div>
        `;
      } else {
        cardHTML += `
          <div class="sims-price">$${product.price.toFixed(2)}</div>
        `;
      }
      
      // Add shipping info if exists
      if (product.shipping) {
        cardHTML += `<div class="sims-shipping">${product.shipping}</div>`;
      }
      
      if (product.shippingCost) {
        cardHTML += `<div class="sims-shipping">${product.shippingCost}</div>`;
      }
      
      // Add stock info if exists
      if (product.stock) {
        cardHTML += `<div class="sims-stock">${product.stock}</div>`;
      }
      
      // Close details div
      cardHTML += `</div>`;
      
      // Add badge if exists
      if (product.badge) {
        cardHTML += `<div class="sims-badge">${product.badge}</div>`;
      }
      
      card.innerHTML = cardHTML;
      carouselTrack.appendChild(card);
    });
  }
  
  // Update carousel position
  function updateCarousel() {
    const cardWidth = 190 + 15; // width + gap
    const offset = -(currentPage - 1) * (productsPerPage * cardWidth);
    carouselTrack.style.transform = `translateX(${offset}px)`;
    currentPageEl.textContent = currentPage;
    
    // Disable buttons when at extremes
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;
  }
  
  // Event listeners
  function setupEventListeners() {
    prevButton.addEventListener('click', (e) => {
      e.preventDefault();
      if (currentPage > 1) {
        currentPage--;
        updateCarousel();
      }
    });
    
    nextButton.addEventListener('click', (e) => {
      e.preventDefault();
      if (currentPage < totalPages) {
        currentPage++;
        updateCarousel();
      }
    });
    
    restartLink.addEventListener('click', (e) => {
      e.preventDefault();
      currentPage = 1;
      updateCarousel();
    });
  }
  
  // Start the carousel
  init();
});