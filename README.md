Actúa como un Desarrollador Frontend Senior experto en optimización web, UI/UX y diseño minimalista y elegante. Necesito que crees el código completo (HTML, CSS y JavaScript vainilla, sin frameworks ni dependencias externas pesadas) para un catálogo web de productos regionales del Perú, empezando por Oxapampa.

---

### 1. Requisitos Técnicos y de Rendimiento
- **Tecnologías:** Únicamente HTML5, CSS3 y JavaScript moderno (ES6+). No usar React, Vue, Tailwind CDN pesado ni jQuery. 
- **Librerías permitidas:** Google Fonts (tipografía limpia y elegante, ej: "Plus Jakarta Sans" o "Outfit") y FontAwesome (solo mediante CDN optimizado o SVG en línea) para iconos amigables.
- **Rendimiento Extremo:** El código debe estar optimizado para cargar instantáneamente. CSS estructurado de forma eficiente y JavaScript modular y limpio.
- **Despliegue:** Preparado para GitHub Pages (estructura de archivos plana o estándar, rutas relativas).

---

### 2. Estructura y Diseño Visual (UI/UX)
- **Estilo:** Un equilibrio perfecto entre lo profesional, moderno y la calidez de los productos regionales. Debe verse **elegante y sofisticado**, huyendo de estilos excesivamente rústicos.
- **Efecto de Fondo Llamativo:** Implementa un fondo visualmente atractivo y sutil (puede ser un patrón CSS geométrico/orgánico elegante, un degradado moderno con tonos tierra suaves que evoquen café, cacao, chocolate, miel y naturaleza, o partículas/ondas CSS ligeras) que no afecte el rendimiento ni dificulte la lectura.
- **Navegación por Regiones:** - Selector o pestañas de regiones del Perú.
  - Por defecto, la región activa será **Oxapampa** con sus respectivos productos de ejemplo (café, cacao, chocolate artesanal, miel de abeja, embutidos, quesos).
  - Para las demás regiones (ej. Cusco, Arequipa, Piura, etc.), muestra una sección o tarjeta elegante con el mensaje: *"Próximamente disponible en esta región"*.
- **Redes Sociales:** Añade enlaces flotantes o en el footer con iconos modernos y amigables para **TikTok, Instagram, Facebook y YouTube**.

---

### 3. Funcionalidades del Catálogo y Tarjetas (Cards)
- **Grid de Productos:** Tarjetas de producto con diseño limpio, sombras suaves, bordes redondeados y efectos de "hover" sutiles.
- **Botones por Card:** Cada tarjeta de producto tendrá exactamente dos botones:
  1. **"Ver Detalles":** Abre un modal elegante con la descripción completa del producto, galería o imagen ampliada y características.
  2. **"Consultar por WhatsApp":** Botón con icono de WhatsApp que genera un enlace directo (api.whatsapp.com) prellenado con un mensaje específico sobre ese producto (ej: *"Hola, estoy interesado en el producto [Nombre del Producto] del catálogo de Oxapampa"*).

---

### 4. Funcionalidad de Carrito de Compras
- **Panel de Carrito:** Un botón flotante o en el header que muestre la cantidad de ítems agregados y permita desplegar un panel lateral (Drawer) o modal del carrito.
- **Gestión del Carrito:** - Permite aumentar, disminuir o eliminar productos del carrito.
  - Cálculo automático y en tiempo real del **subtotal del pedido**.
- **Checkout hacia WhatsApp:** En lugar de una pasarela de pago convencional, el carrito tendrá un botón final llamado **"Enviar pedido por WhatsApp"**. Al hacer clic, generará un enlace que abrirá WhatsApp con un resumen estructurado de todos los productos seleccionados, las cantidades y el subtotal total.

---

### 5. Entrega Esperada
Por favor, entrégame el código organizado en bloques claros:
1. Estructura `index.html`.
2. Estilos `styles.css` (incluyendo variables CSS, efectos de fondo y diseño responsivo para móviles y desktop).
3. Lógica `script.js` (manejo del estado del carrito, renderizado de productos, modales y generación de enlaces dinámicos para WhatsApp).
