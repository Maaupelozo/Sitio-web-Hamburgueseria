/* ============================================ */
/* PANCHOS 22 - MAIN LOGIC (Consolidated) */
/* ============================================ */

/* State */
const state = {
  cart: [],
  products: [],
  categories: []
};

/* DOM Elements */
const elements = {
  productsGrid: document.getElementById('products-grid'),
  categoriesNav: document.getElementById('categories-nav'),
  cartItems: document.getElementById('cart-items'),
  cartTotal: document.getElementById('cart-total'),
  cartBadge: document.getElementById('cart-badge'),
  modal: document.getElementById('product-modal'),
  searchInput: document.getElementById('search-input')
};

/* --- INITIALIZATION --- */
document.addEventListener('DOMContentLoaded', () => {
  loadData();
  setupEventListeners();
  loadCartStorage();
});

/* --- DATA LOADING --- */
async function loadData() {
  try {
    const response = await fetch('data/menu.json');
    if (!response.ok) throw new Error('Failed to load menu');
    const data = await response.json();

    state.categories = data.categories;
    // Flatten products for easier access
    state.products = data.categories.flatMap(cat => cat.products);

    renderCategories();
    renderProducts();
  } catch (error) {
    console.error('Error:', error);
    elements.productsGrid.innerHTML = '<p class="error">Error cargando el menú.</p>';
  }
}

/* --- RENDERING --- */
function renderCategories() {
  if (!elements.categoriesNav) return;

  elements.categoriesNav.innerHTML = state.categories.map((cat, index) => `
    <button class="category-tab ${index === 0 ? 'active' : ''}" onclick="filterCategory('${cat.id}', this)">
      <div class="cat-icon">
        <img src="${cat.icon}" alt="" style="width:24px;height:24px;">
      </div>
      <span class="cat-name">${cat.name}</span>
    </button>
  `).join('');
}

function renderProducts() {
  if (!elements.productsGrid) return;

  // Render by category
  elements.productsGrid.innerHTML = state.categories.map(cat => {
    // Only render if category has products
    if (!cat.products || cat.products.length === 0) return '';

    return `
      <div class="category-section" id="cat-${cat.id}" style="grid-column: 1 / -1; margin-top: 1rem;">
        <h2 class="category-title-section">${cat.name}</h2>
      </div>
      ${cat.products.map(product => `
        <article class="product-card" onclick="openProductModal(${product.id})">
          <div class="product-details">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-price">$${formatPrice(product.price)}</p>
            <p class="product-tax-text">Sin impuestos nacionales: $${formatPrice(product.price * 0.8)}</p>
          </div>
          <div class="product-img-wrapper">
            <img src="${product.image}" alt="${product.name}" class="product-img" onerror="this.src='assets/img/logo.png'">
          </div>
        </article>
      `).join('')}
    `;
  }).join('');
}

function renderCart() {
  if (!elements.cartItems) return;

  if (state.cart.length === 0) {
    elements.cartItems.innerHTML = `
      <div class="empty-state">
        <span class="empty-icon">🛒</span>
        <p>Tu carrito está vacío</p>
      </div>
    `;
    updateTotal(0);
    return;
  }

  let total = 0;

  elements.cartItems.innerHTML = state.cart.map(item => {
    total += item.price * item.quantity;
    return `
      <div class="cart-item" style="display:flex; justify-content:space-between; margin-bottom:1rem; border-bottom:1px solid #eee; padding-bottom:0.5rem;">
        <div>
          <div style="font-weight:600;">${item.name}</div>
          <div style="color:var(--color-accent); font-weight:700;">$${formatPrice(item.price)}</div>
        </div>
        <div style="display:flex; align-items:center; gap:0.5rem;">
          <button onclick="updateQty(${item.id}, -1)" style="padding:0 5px;">-</button>
          <span>${item.quantity}</span>
          <button onclick="updateQty(${item.id}, 1)" style="padding:0 5px;">+</button>
        </div>
      </div>
    `;
  }).join('');

  updateTotal(total);
}

/* --- ACTIONS --- */
let currentModalProduct = null;
let currentModalQty = 1;

window.filterCategory = (catId, btnElement) => {
  // Visual update
  document.querySelectorAll('.category-tab').forEach(b => b.classList.remove('active'));
  btnElement.classList.add('active');

  // Scroll to section
  const section = document.getElementById(`cat-${catId}`);
  if (section) {
    const y = section.getBoundingClientRect().top + window.pageYOffset - 150;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

window.openProductModal = (productId) => {
  const product = state.products.find(p => p.id === productId);
  if (!product) return;

  currentModalProduct = product;
  currentModalQty = 1;
  const modal = document.getElementById('product-modal');

  // Populate
  document.getElementById('modal-img').src = product.image;
  document.getElementById('modal-title').innerText = product.name;
  document.getElementById('modal-price').innerText = `$${formatPrice(product.price)}`;

  updateModalQtyUI();

  // Show
  modal.classList.add('active');
};

window.closeProductModal = () => {
  document.getElementById('product-modal').classList.remove('active');
  currentModalProduct = null;
};

window.updateModalQty = (delta) => {
  const newQty = currentModalQty + delta;
  if (newQty >= 1) {
    currentModalQty = newQty;
    updateModalQtyUI();
  }
};

function updateModalQtyUI() {
  document.getElementById('modal-qty').innerText = currentModalQty;
  if (currentModalProduct) {
    const total = currentModalProduct.price * currentModalQty;
    document.getElementById('modal-total-btn').innerText = `$${formatPrice(total)}`;
  }
}

window.addToCartFromModal = () => {
  if (currentModalProduct) {
    addToCart(currentModalProduct, currentModalQty);
    closeProductModal();
  }
};

function addToCart(product, quantity = 1) {
  const existing = state.cart.find(i => i.id === product.id);
  if (existing) {
    existing.quantity += quantity;
  } else {
    state.cart.push({ ...product, quantity: quantity });
  }
  saveCart();
  renderCart();
}

window.updateQty = (id, delta) => {
  const item = state.cart.find(i => i.id === id);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) {
      state.cart = state.cart.filter(i => i.id !== id);
    }
    saveCart();
    renderCart();
  }
};

function updateTotal(amount) {
  if (elements.cartTotal) elements.cartTotal.innerText = `$${formatPrice(amount)}`;
  if (elements.cartBadge) {
    const count = state.cart.reduce((a, b) => a + b.quantity, 0);
    elements.cartBadge.innerText = count;
  }
}

/* --- UTILS --- */
function formatPrice(price) {
  return price.toLocaleString('es-AR', { minimumFractionDigits: 0 });
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(state.cart));
}

function loadCartStorage() {
  const saved = localStorage.getItem('cart');
  if (saved) {
    state.cart = JSON.parse(saved);
    renderCart();
  }
}

function setupEventListeners() {
  if (elements.searchInput) {
    elements.searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase();
      const filtered = state.products.filter(p => p.name.toLowerCase().includes(term));
      renderProducts(filtered);
    });
  }
}
