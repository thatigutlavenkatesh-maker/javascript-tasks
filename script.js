// Global Variables
var allProducts = [];
var cart = [];


// ── MEMBER 1: Fetch Products from API ──
function fetchProducts() {
  var statusEl = document.getElementById("status-msg");
  statusEl.textContent = "⏳ Loading Products...";
  statusEl.className = "";

  fetch("https://fakestoreapi.com/products")
    .then(function(response) {
      if (!response.ok) throw new Error("Network error");
      return response.json();
    })
    .then(function(products) {
      allProducts = products;
      renderStats(products);
      renderProducts(products);
      statusEl.textContent = "✅ Products Loaded Successfully";
      statusEl.className = "success";
      setTimeout(function() {
        statusEl.style.display = "none";
      }, 2500);
    })
    .catch(function(error) {
      console.error("Error:", error);
      statusEl.textContent = "❌ Failed to load. Please refresh.";
      statusEl.className = "error";
    })
    .finally(function() {
      console.log("Fetch complete.");
    });
}


// ── MEMBER 6: Statistics Dashboard ──
function renderStats(products) {
  var total = products.length;

  var totalPrice = products.reduce(function(sum, p) {
    return sum + p.price;
  }, 0);
  var avg = totalPrice / total;

  var sorted = [...products].sort(function(a, b) {
    return a.price - b.price;
  });

  var lowest  = sorted[0];
  var highest = sorted[sorted.length - 1];

  document.getElementById("stat-total").textContent = total;
  document.getElementById("stat-avg").textContent   = "$" + avg.toFixed(2);
  document.getElementById("stat-high").textContent  = "$" + highest.price.toFixed(2);
  document.getElementById("stat-low").textContent   = "$" + lowest.price.toFixed(2);
}


// ── MEMBER 2: Render Product Cards ──
function renderProducts(products) {
  var grid = document.getElementById("product-grid");
  var noResults = document.getElementById("no-results");

  grid.querySelectorAll(".product-card").forEach(function(card) {
    card.remove();
  });

  if (products.length === 0) {
    noResults.style.display = "block";
    return;
  }
  noResults.style.display = "none";

  products.forEach(function(product) {
    var card = createProductCard(product);
    grid.appendChild(card);
  });
}

function createProductCard(product) {
  var inCart = cart.some(function(item) {
    return item.id === product.id;
  });

  var stars = generateStars(product.rating.rate);
  var card  = document.createElement("div");
  card.className  = "product-card";
  card.dataset.id = product.id;

  card.innerHTML =
    '<div class="card-img-wrap">' +
      '<img src="' + product.image + '" alt="' + product.title + '" loading="lazy"/>' +
    '</div>' +
    '<div class="card-body">' +
      '<span class="card-category">' + product.category + '</span>' +
      '<p class="card-title">'  + product.title + '</p>' +
      '<p class="card-price">$' + product.price.toFixed(2) + '</p>' +
      '<div class="card-rating">' +
        '<span class="stars">' + stars + '</span>' +
        '<span>' + product.rating.rate + ' (' + product.rating.count + ' reviews)</span>' +
      '</div>' +
      '<button class="add-btn ' + (inCart ? 'in-cart' : '') + '" onclick="toggleCart(' + product.id + ')">' +
        (inCart ? '✓ Added to Cart' : '+ Add to Cart') +
      '</button>' +
    '</div>';

  return card;
}

function generateStars(rate) {
  var full  = Math.floor(rate);
  var half  = (rate % 1 >= 0.5) ? 1 : 0;
  var empty = 5 - full - half;
  return "★".repeat(full) + (half ? "½" : "") + "☆".repeat(empty);
}


// ── MEMBER 3 & 4: Search + Category Filter ──
function applyFilters() {
  var searchTerm = document.getElementById("search-input").value.toLowerCase();
  var category   = document.getElementById("category-filter").value;

  var filtered = allProducts;

  // Member 3: Search using filter() + includes()
  if (searchTerm.trim() !== "") {
    filtered = filtered.filter(function(p) {
      return p.title.toLowerCase().includes(searchTerm) ||
             p.category.toLowerCase().includes(searchTerm);
    });
  }

  // Member 4: Category using filter()
  if (category !== "all") {
    filtered = filtered.filter(function(p) {
      return p.category === category;
    });
  }

  renderProducts(filtered);
}


// ── MEMBER 5: Cart Functionality ──
function toggleCart(productId) {
  var product = allProducts.find(function(p) {
    return p.id === productId;
  });
  if (!product) return;

  var isInCart = cart.some(function(item) {
    return item.id === productId;
  });

  if (isInCart) {
    cart = cart.filter(function(item) {
      return item.id !== productId;
    });
  } else {
    cart.push(product);
  }

  updateCartCount();
  refreshCartModal();
  refreshCardButton(productId);
}

function updateCartCount() {
  document.getElementById("cart-count").textContent = cart.length;
}

function refreshCardButton(productId) {
  var card = document.querySelector('.product-card[data-id="' + productId + '"]');
  if (!card) return;
  var btn    = card.querySelector(".add-btn");
  var inCart = cart.some(function(item) { return item.id === productId; });
  btn.textContent = inCart ? "✓ Added to Cart" : "+ Add to Cart";
  btn.className   = "add-btn" + (inCart ? " in-cart" : "");
}

function refreshCartModal() {
  var listEl  = document.getElementById("cart-items-list");
  var totalEl = document.getElementById("cart-total");
  var priceEl = document.getElementById("total-price");

  listEl.innerHTML = "";

  if (cart.length === 0) {
    listEl.innerHTML = '<div id="empty-cart">Your cart is empty.</div>';
    totalEl.style.display = "none";
    return;
  }

  cart.forEach(function(item) {
    var div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML =
      '<img src="' + item.image + '" alt="' + item.title + '"/>' +
      '<div class="cart-item-info">' +
        '<p class="cart-item-title">'  + item.title + '</p>' +
        '<p class="cart-item-price">$' + item.price.toFixed(2) + '</p>' +
      '</div>' +
      '<button class="remove-btn" onclick="toggleCart(' + item.id + ')">✕</button>';
    listEl.appendChild(div);
  });

  var total = cart.reduce(function(sum, item) {
    return sum + item.price;
  }, 0);
  priceEl.textContent    = total.toFixed(2);
  totalEl.style.display  = "block";
}

function openCart() {
  refreshCartModal();
  document.getElementById("cart-overlay").classList.add("open");
}

function closeCart() {
  document.getElementById("cart-overlay").classList.remove("open");
}

function handleOverlayClick(event) {
  if (event.target === document.getElementById("cart-overlay")) {
    closeCart();
  }
}


// ── START THE APP ──
fetchProducts();