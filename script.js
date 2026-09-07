/* ════════════════════════════════════════════════════════════
   SABORES DE ORIGEN — script.js
   Cart, Modals, Product Rendering, WhatsApp Integration
   ════════════════════════════════════════════════════════════ */

'use strict';

// ═══════════════════════════════════════════════════════════
// CONFIGURATION
// ═══════════════════════════════════════════════════════════

const CONFIG = {
  whatsapp: '51999999999', // ← Cambia esto por el número real
  region: 'Oxapampa',
};

// ═══════════════════════════════════════════════════════════
// PRODUCT DATA
// ═══════════════════════════════════════════════════════════

const PRODUCTS = [
  {
    id: 'cafe-specialty',
    name: 'Café de Especialidad',
    region: 'Oxapampa',
    price: 38,
    unit: 'x 250g',
    badge: 'Top Seller',
    shortDesc: 'Notas de frutos rojos, chocolate y miel. Tueste medio para un perfil balanceado y complejo.',
    fullDesc: 'Nuestro café de especialidad proviene de pequeños agricultores de la cuenca del río Palcazú en Oxapampa. Cultivado entre 1,400 y 1,800 msnm, procesado por vía húmeda y secado en camas africanas. Presenta notas de frutos rojos, chocolate negro, panela y un dulzor natural de miel. Ideal para preparar en V60, Chemex o prensa francesa.',
    tags: ['100% Arábica', 'Procesado húmedo', 'Origen único', 'Tueste medio'],
    icon: `<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.1">
      <path d="M17 8h1a4 4 0 0 1 0 8h-1"/>
      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"/>
      <line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/>
    </svg>`,
    iconSmall: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M17 8h1a4 4 0 0 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"/>
    </svg>`,
  },
  {
    id: 'cacao-organico',
    name: 'Cacao Orgánico',
    region: 'Oxapampa',
    price: 28,
    unit: 'x 500g',
    badge: 'Orgánico',
    shortDesc: 'Grano de cacao fino de aroma, certificado orgánico. De la selva central peruana.',
    fullDesc: 'Cacao fino de aroma del tipo CCN-51 y nativo cultivado en las laderas tropicales de Oxapampa. Certificación orgánica sin pesticidas ni agroquímicos. Fermentado naturalmente por 5-6 días y secado al sol. Presenta sabores florales, de frutas tropicales y con acidez suave. Ideal para elaborar chocolate artesanal, postres y bebidas.',
    tags: ['Certificado orgánico', 'Fino de aroma', 'Sin pesticidas', 'Grano entero'],
    icon: `<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.1">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
      <path d="M12 8c-2.5 0-4 2-4 4s1.5 4 4 4 4-2 4-4-1.5-4-4-4z"/>
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>
    </svg>`,
    iconSmall: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/>
    </svg>`,
  },
  {
    id: 'chocolate-artesanal',
    name: 'Chocolate Artesanal',
    region: 'Oxapampa',
    price: 22,
    unit: 'x tableta 80g',
    badge: 'Artesanal',
    shortDesc: 'Chocolate oscuro 70% cacao, elaborado a mano con cacao nativo de Oxapampa.',
    fullDesc: 'Elaborado artesanalmente con cacao nativo de Oxapampa al 70% de pureza. Sin lecitina de soja, sin aromas artificiales ni conservantes. Solo cacao, azúcar de caña y manteca de cacao pura. El proceso bean-to-bar garantiza que cada tableta preserva los matices únicos del terroir de Oxapampa: acidez suave, notas frutales y un chocolate con carácter. Disponible en versiones: natural, con nibs de cacao y con miel de abeja.',
    tags: ['70% cacao', 'Bean-to-bar', 'Sin aditivos', 'Artesanal'],
    icon: `<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.1">
      <rect x="2" y="5" width="20" height="14" rx="3"/>
      <line x1="2" y1="10" x2="22" y2="10"/><line x1="2" y1="15" x2="22" y2="15"/>
      <line x1="8" y1="5" x2="8" y2="19"/><line x1="14" y1="5" x2="14" y2="19"/>
    </svg>`,
    iconSmall: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="2" y="5" width="20" height="14" rx="3"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="9" y1="5" x2="9" y2="19"/><line x1="15" y1="5" x2="15" y2="19"/>
    </svg>`,
  },
  {
    id: 'miel-abeja',
    name: 'Miel de Abeja Pura',
    region: 'Oxapampa',
    price: 32,
    unit: 'x 500g',
    badge: 'Pura',
    shortDesc: 'Miel multifloral 100% pura, sin pasteurizar ni adulterantes. Directa del colmenar.',
    fullDesc: 'Miel multifloral extraída de colmenares situados en los bosques primarios de Oxapampa, lejos de zonas agrícolas contaminantes. Sin pasteurizar para preservar enzimas, antioxidantes y propiedades naturales. Aroma floral intenso con notas de flores silvestres tropicales y dulzor equilibrado. Ideal para endulzar infusiones, yogur, postres o consumirla directamente. Cada lote trazable al colmenero productor.',
    tags: ['100% pura', 'Sin pasteurizar', 'Multifloral', 'Bosque primario'],
    icon: `<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.1">
      <path d="M12 2l3 6.5H21l-5.5 4 2 6.5L12 15.5 6.5 19l2-6.5L3 8.5h6z"/>
      <circle cx="12" cy="12" r="2"/>
    </svg>`,
    iconSmall: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
    </svg>`,
  },
  {
    id: 'embutidos-artesanales',
    name: 'Embutidos Artesanales',
    region: 'Oxapampa',
    price: 45,
    unit: 'x pack 300g',
    badge: 'Colonia',
    shortDesc: 'Tradición austriaca en Perú. Salchichas y cecina ahumada con receta centenaria de Oxapampa.',
    fullDesc: 'La colonia austro-alemana de Oxapampa trajo sus tradiciones de charcutería hace más de 150 años. Hoy, familias locales mantienen viva esa herencia. Embutidos elaborados con cerdo de crianza campesina, especias naturales y ahumados en leña de eucalipto. Incluye: salchicha tipo Frankfurt, cecina ahumada y chorizo criollo. Sin colorantes artificiales ni conservantes sintéticos. Un sabor único que fusiona la tradición europea con el terruño peruano.',
    tags: ['Receta centenaria', 'Ahumado natural', 'Cerdo campesino', 'Sin conservantes'],
    icon: `<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.1">
      <path d="M3 11l19-9-9 19-2-8-8-2z"/>
    </svg>`,
    iconSmall: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M3 11l19-9-9 19-2-8-8-2z"/>
    </svg>`,
  },
  {
    id: 'queso-oxapampa',
    name: 'Queso Oxapampa',
    region: 'Oxapampa',
    price: 26,
    unit: 'x 400g',
    badge: 'Artesanal',
    shortDesc: 'Queso fresco o madurado elaborado con leche entera de vacas en pasturas de altura.',
    fullDesc: 'Elaborado con leche fresca de vacas Holstein y Brown Swiss que pastorean en las verdes praderas de la región de Oxapampa a más de 1,800 msnm. Sin homogenización, con cuajada natural. Textura cremosa, sabor suave con acidez leve y aroma a leche fresca de montaña. Disponible en versión fresco (listo para consumir) y madurado (7 a 14 días). Perfecto para tablas, sándwiches, pastas o consumirlo con pan artesanal.',
    tags: ['Leche entera', 'Pasturas de altura', 'Cuajada natural', 'Sin homogenizar'],
    icon: `<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.1">
      <path d="M3 19h18M5 19V9l7-6 7 6v10"/>
      <path d="M9 19v-4h6v4"/>
      <circle cx="12" cy="11" r="2"/>
    </svg>`,
    iconSmall: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M3 19h18M5 19V9l7-6 7 6v10"/><path d="M9 19v-4h6v4"/>
    </svg>`,
  },
];

// ═══════════════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════════════

let cart = [];         // [{ product, qty }]
let activeRegion = 'oxapampa';
let modalProduct = null;

// ═══════════════════════════════════════════════════════════
// DOM HELPERS
// ═══════════════════════════════════════════════════════════

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const fmt = (n) => `S/ ${Number(n).toFixed(2)}`;

// ═══════════════════════════════════════════════════════════
// HEADER — scroll effect + mobile menu
// ═══════════════════════════════════════════════════════════

function initHeader() {
  const header = $('#site-header');
  const hamburger = $('#hamburger');
  const nav = $('#main-nav');

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });

  hamburger.addEventListener('click', () => {
    const open = hamburger.classList.toggle('open');
    nav.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open);
  });

  // Close nav on link click
  $$('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      nav.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
    });
  });

  // Close nav on outside click
  document.addEventListener('click', (e) => {
    if (!header.contains(e.target)) {
      hamburger.classList.remove('open');
      nav.classList.remove('open');
    }
  });
}

// ═══════════════════════════════════════════════════════════
// REGION TABS
// ═══════════════════════════════════════════════════════════

function initRegionTabs() {
  const tabs = $$('.region-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', false); });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', true);
      activeRegion = tab.dataset.region;
      renderProducts();
    });
  });
}

// ═══════════════════════════════════════════════════════════
// PRODUCT RENDERING
// ═══════════════════════════════════════════════════════════

function buildPlaceholder(icon, label) {
  return `
    <div class="card-img-placeholder">
      ${icon}
      <span>${label}</span>
    </div>
  `;
}

function buildCard(product, index) {
  const inCart = cart.find(i => i.product.id === product.id);
  return `
    <article class="product-card" style="animation-delay:${index * 0.07}s" data-id="${product.id}">
      <div class="card-img">
        ${product.badge ? `<span class="card-badge">${product.badge}</span>` : ''}
        ${buildPlaceholder(product.icon, 'Imagen próximamente')}
      </div>
      <div class="card-body">
        <p class="card-region">${product.region}</p>
        <h3 class="card-name">${product.name}</h3>
        <p class="card-desc">${product.shortDesc}</p>
        <p class="card-price">${fmt(product.price)}<span>${product.unit}</span></p>
        <div class="card-actions">
          <button class="btn btn-ghost btn-sm" id="details-${product.id}" onclick="openModal('${product.id}')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            Ver Detalles
          </button>
          <a class="btn btn-wsp btn-sm" id="wsp-${product.id}"
            href="${buildWspLink(product)}" target="_blank" rel="noopener noreferrer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.083.534 4.038 1.472 5.741L.064 23.272l5.7-1.497A11.96 11.96 0 0 0 12 23.999C18.627 24 24 18.627 24 12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.005-1.372l-.36-.214-3.723.977.994-3.638-.236-.375A9.818 9.818 0 0 1 2.182 12C2.182 6.58 6.58 2.182 12 2.182c5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/></svg>
            Consultar
          </a>
        </div>
      </div>
    </article>
  `;
}

function buildComingSoon(regionName) {
  return `
    <div class="coming-soon-panel">
      <div class="coming-soon-content">
        <div class="coming-soon-icon">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 8v4l3 3" stroke-linecap="round"/>
          </svg>
        </div>
        <h3>Próximamente en ${regionName}</h3>
        <p>Estamos trabajando para traerte lo mejor de esta región. ¡Muy pronto!</p>
        <button class="btn btn-primary" onclick="notifyMe(this)">
          Notifícame cuando esté disponible
        </button>
      </div>
    </div>
  `;
}

function renderProducts() {
  const grid = $('#products-grid');

  if (activeRegion === 'oxapampa') {
    grid.innerHTML = PRODUCTS.map((p, i) => buildCard(p, i)).join('');
    grid.removeAttribute('hidden');
  } else {
    const labels = {
      cusco: 'Cusco',
      arequipa: 'Arequipa',
      piura: 'Piura',
      loreto: 'Loreto',
    };
    grid.innerHTML = buildComingSoon(labels[activeRegion] || activeRegion);
    grid.removeAttribute('hidden');
  }
}

// ═══════════════════════════════════════════════════════════
// WHATSAPP LINKS
// ═══════════════════════════════════════════════════════════

function buildWspLink(product) {
  const msg = encodeURIComponent(
    `Hola, estoy interesado en el producto *${product.name}* del catálogo de ${product.region}. ¿Podrías darme más información?`
  );
  return `https://api.whatsapp.com/send?phone=${CONFIG.whatsapp}&text=${msg}`;
}

function buildCartWspLink() {
  if (!cart.length) return '#';
  const lines = cart.map(({ product, qty }) =>
    `• ${product.name} × ${qty} = ${fmt(product.price * qty)}`
  );
  const subtotal = cart.reduce((sum, { product, qty }) => sum + product.price * qty, 0);
  const body = [
    '🛒 *Mi pedido — Sabores de Origen*',
    '',
    ...lines,
    '',
    `💰 *Subtotal: ${fmt(subtotal)}*`,
    '',
    'Por favor confirmar disponibilidad y método de envío. ¡Gracias!',
  ].join('\n');
  return `https://api.whatsapp.com/send?phone=${CONFIG.whatsapp}&text=${encodeURIComponent(body)}`;
}

// ═══════════════════════════════════════════════════════════
// MODAL
// ═══════════════════════════════════════════════════════════

function openModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  modalProduct = product;

  const overlay = $('#modal-overlay');
  $('#modal-region').textContent = product.region;
  $('#modal-title').textContent = product.name;
  $('#modal-price').textContent = `${fmt(product.price)} ${product.unit}`;
  $('#modal-desc').textContent = product.fullDesc;

  // Tags
  $('#modal-tags').innerHTML = product.tags
    .map(t => `<span class="modal-tag">${t}</span>`).join('');

  // Placeholder image
  $('#modal-img').innerHTML = `
    <div class="modal-img-placeholder">
      ${product.icon}
      <span>Imagen próximamente</span>
    </div>
  `;

  // WhatsApp link
  $('#modal-whatsapp').href = buildWspLink(product);

  overlay.classList.add('active');
  overlay.setAttribute('aria-hidden', false);
  document.body.style.overflow = 'hidden';

  // Focus trap
  setTimeout(() => $('#modal-close').focus(), 100);
}

function closeModal() {
  const overlay = $('#modal-overlay');
  overlay.classList.remove('active');
  overlay.setAttribute('aria-hidden', true);
  document.body.style.overflow = '';
  modalProduct = null;
}

function initModal() {
  const overlay = $('#modal-overlay');
  $('#modal-close').addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  // Add to cart from modal
  $('#modal-add-cart').addEventListener('click', () => {
    if (modalProduct) {
      addToCart(modalProduct);
      closeModal();
    }
  });

  // Esc key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if ($('#modal-overlay').classList.contains('active')) closeModal();
      if ($('#cart-drawer').classList.contains('open')) closeCart();
    }
  });
}

// ═══════════════════════════════════════════════════════════
// CART
// ═══════════════════════════════════════════════════════════

function addToCart(product) {
  const existing = cart.find(i => i.product.id === product.id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ product, qty: 1 });
  }
  updateCartUI();
  showToast(`✓ ${product.name} agregado al carrito`);
  bumpCartBadge();
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.product.id !== productId);
  updateCartUI();
  renderCartItems();
}

function changeQty(productId, delta) {
  const item = cart.find(i => i.product.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
    return;
  }
  updateCartUI();
  renderCartItems();
}

function updateCartUI() {
  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  const total = cart.reduce((sum, { product, qty }) => sum + product.price * qty, 0);

  $('#cart-count').textContent = count;
  $('#cart-subtotal').textContent = fmt(total);

  const checkoutBtn = $('#cart-checkout-btn');
  checkoutBtn.disabled = count === 0;
  checkoutBtn.onclick = () => {
    const link = buildCartWspLink();
    if (link !== '#') window.open(link, '_blank');
  };

  renderCartItems();
  saveCart();
}

function renderCartItems() {
  const body = $('#cart-body');

  if (!cart.length) {
    body.innerHTML = `
      <div class="cart-empty">
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
          <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
        <p>Tu carrito está vacío.<br/>¡Agrega productos para comenzar!</p>
      </div>
    `;
    return;
  }

  body.innerHTML = cart.map(({ product, qty }) => `
    <div class="cart-item" data-id="${product.id}">
      <div class="cart-item-icon">${product.iconSmall}</div>
      <div class="cart-item-info">
        <p class="cart-item-name">${product.name}</p>
        <p class="cart-item-price">${fmt(product.price * qty)}</p>
      </div>
      <div class="cart-item-controls">
        <button class="qty-btn" id="qty-minus-${product.id}" onclick="changeQty('${product.id}', -1)" aria-label="Disminuir cantidad">−</button>
        <span class="qty-val">${qty}</span>
        <button class="qty-btn" id="qty-plus-${product.id}" onclick="changeQty('${product.id}', 1)" aria-label="Aumentar cantidad">+</button>
        <button class="remove-btn" id="remove-${product.id}" onclick="removeFromCart('${product.id}')" aria-label="Eliminar ${product.name}">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
    </div>
  `).join('');
}

function openCart() {
  $('#cart-drawer').classList.add('open');
  $('#cart-drawer').setAttribute('aria-hidden', false);
  $('#cart-overlay').classList.add('active');
  $('#cart-overlay').setAttribute('aria-hidden', false);
  document.body.style.overflow = 'hidden';
  renderCartItems();
}

function closeCart() {
  $('#cart-drawer').classList.remove('open');
  $('#cart-drawer').setAttribute('aria-hidden', true);
  $('#cart-overlay').classList.remove('active');
  $('#cart-overlay').setAttribute('aria-hidden', true);
  document.body.style.overflow = '';
}

function initCart() {
  $('#cart-btn').addEventListener('click', openCart);
  $('#cart-close').addEventListener('click', closeCart);
  $('#cart-overlay').addEventListener('click', closeCart);
  loadCart();
  updateCartUI();
}

// Persist cart
function saveCart() {
  try { localStorage.setItem('sdo_cart', JSON.stringify(cart)); } catch (_) {}
}
function loadCart() {
  try {
    const stored = JSON.parse(localStorage.getItem('sdo_cart') || '[]');
    // Re-hydrate with full product data
    cart = stored.map(({ product, qty }) => {
      const found = PRODUCTS.find(p => p.id === product.id);
      return found ? { product: found, qty } : null;
    }).filter(Boolean);
  } catch (_) { cart = []; }
}

// ═══════════════════════════════════════════════════════════
// TOAST
// ═══════════════════════════════════════════════════════════

let toastTimer = null;
function showToast(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

// ═══════════════════════════════════════════════════════════
// CART BADGE ANIMATION
// ═══════════════════════════════════════════════════════════

function bumpCartBadge() {
  const badge = $('#cart-count');
  badge.classList.remove('bump');
  void badge.offsetWidth; // force reflow
  badge.classList.add('bump');
  setTimeout(() => badge.classList.remove('bump'), 400);
}

// ═══════════════════════════════════════════════════════════
// NOTIFY (Coming Soon)
// ═══════════════════════════════════════════════════════════

function notifyMe(btn) {
  btn.textContent = '✓ Te avisaremos pronto';
  btn.disabled = true;
  const tab = $$('.region-tab').find(t => t.dataset.region === activeRegion);
  const regionName = tab ? tab.textContent.trim() : activeRegion;
  const msg = encodeURIComponent(`Hola, me gustaría que me avisen cuando estén disponibles los productos de ${regionName}. ¡Gracias!`);
  setTimeout(() => {
    window.open(`https://api.whatsapp.com/send?phone=${CONFIG.whatsapp}&text=${msg}`, '_blank');
  }, 600);
}

// ═══════════════════════════════════════════════════════════
// INTERSECTION OBSERVER — animate on scroll
// ═══════════════════════════════════════════════════════════

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  $$('.about-card-stack, .about-content, .contact-inner, .footer-inner').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.15 }).observe($('.about-card-stack') || document.body);
}

// ═══════════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initRegionTabs();
  renderProducts();
  initModal();
  initCart();

  // Delayed scroll animation init
  setTimeout(initScrollAnimations, 300);

  // Expose globals needed by inline handlers
  window.openModal = openModal;
  window.addToCart = addToCart;
  window.changeQty = changeQty;
  window.removeFromCart = removeFromCart;
  window.notifyMe = notifyMe;
});
