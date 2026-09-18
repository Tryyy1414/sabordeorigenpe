/**
 * ══════════════════════════════════════════════════════════════
 *  TIENDA: Tonny Chocolates — Datos del Catálogo
 *  Archivo: js/tony.js
 *
 *  Estructura por tienda:
 *    - TONY_STORE     →  metadatos de la tienda
 *    - TONY_PRODUCTS  →  array de productos (global window)
 *
 *  Convención de rutas de imagen:
 *    assets/images/tony/<nombre-archivo>.webp
 * ══════════════════════════════════════════════════════════════
 */

'use strict';

/* ─────────────────────────────────────────────────────────────
   METADATOS DE LA TIENDA
───────────────────────────────────────────────────────────── */
const TONY_STORE = {
  id: 'tony',
  brand: 'Tonny',
  region: 'Oxapampa',
  description: 'Chocolates artesanales 100% peruanos elaborados con cacao nativo orgánico de Oxapampa, Pasco.',
  whatsapp: 'faw.tong',
  socialLinks: {
    tiktok:    'https://www.tiktok.com/@tonny.oxa',
    facebook:  'https://www.facebook.com/share/1D6uEoHzGq/',
    instagram: 'https://www.instagram.com/tonny.oxa?igsh=MXV6OGExZjJ2dmRvYw=='
  },
  imgBase: 'assets/images/tony/'
};

/* ─────────────────────────────────────────────────────────────
   IIFE — define helper p() y expone TONY_PRODUCTS globalmente
───────────────────────────────────────────────────────────── */
(function () {
  const IMG = TONY_STORE.imgBase;
  const WA  = TONY_STORE.whatsapp;
  const SOC = TONY_STORE.socialLinks;

  /**
   * Helper: construye un objeto producto compatible con script.js
   * @param {string}   id
   * @param {string}   title
   * @param {string}   description
   * @param {string[]} tags
   * @param {number}   price
   * @param {string[]} images   — solo el nombre de archivo
   */
  function p(id, title, description, tags, price, images) {
    return {
      id,
      brand:          TONY_STORE.brand,
      region:         TONY_STORE.region,
      title,
      name:           title,        // alias usado por script.js
      description,
      shortDesc:      description.split('.')[0] + '.',
      fullDesc:       description,
      category:       tags.includes('Packs') ? 'Packs' : 'Chocolates',
      tags,
      price,
      unit:           '',
      mainImage:      IMG + images[0],
      images:         images.map(i => IMG + i),
      sellerWhatsapp: WA,
      socialLinks:    SOC
    };
  }

  /* ══════════════════════════════════════════════════════════
     REFERENCIA DE PRECIOS
       60% barra 50g  → S/ 12    70% barra 50g  → S/ 12
       60% barra 70g  → S/ 16    70% barra 70g  → S/ 16
       80% barra 70g  → S/ 17
       Cacao polvo 90g → S/ 10   Cacao polvo 180g → S/ 18
       Nibs 100g → S/ 10         Nibs 250g → S/ 22
       Pasta cacao 100g → S/ 10  Maní 70% 20g → S/ 4
     PACKS:
       Pack 1: 3 × 12 = S/ 36    Pack 2: 3 × 12 = S/ 36
       Pack 3: 4 × 12 = S/ 48    Pack 4: 3 × 16 = S/ 48
       Pack 5: 3 × 16 = S/ 48    Pack 6: 4 × 17 = S/ 68
       Pack 7: 4 × 16 = S/ 64
  ══════════════════════════════════════════════════════════ */

  window.TONY_PRODUCTS = [

    // ────────────────────────────────────────────────────────
    // 60 % – 50 g  → S/ 12
    // ────────────────────────────────────────────────────────
    p('chocolate_arandanos_60_barra_50g',
      'Barra Chocolate 60% Cacao con Arándanos 50g',
      'Barra de chocolate semiamargo 60% cacao orgánico de Oxapampa con arándanos deshidratados. Notas frutales intensas y antioxidantes naturales.',
      ['% Cacao', 'Frutados'], 12,
      ['chocolate_arandanos_60_barra_50g.webp',
       'chocolate_arandanos_60_barra_50g_2.webp']),

    p('chocolate_fresa_60_barra_50g',
      'Barra Chocolate 60% Cacao con Fresa 50g',
      'Barra de chocolate semiamargo 60% cacao de Oxapampa con trozos de fresa deshidratada. Equilibrio perfecto entre dulce y amargo.',
      ['% Cacao', 'Frutados'], 12,
      ['chocolate_fresa_60_barra_50g.webp',
       'chocolate_fresa_60_barra_50g_2.webp']),

    p('chocolate_kiwi_60_barra_50g',
      'Barra Chocolate 60% Cacao con Kiwi 50g',
      'Barra de chocolate semiamargo 60% cacao con relleno de kiwi deshidratado. Sabor frutal exótico con el toque intenso del cacao oxapampino.',
      ['% Cacao', 'Frutados'], 12,
      ['chocolate_kiwi_60_barra_50g.webp',
       'chocolate_kiwi_60_barra_50g_2.webp']),

    p('chocolate_quitoquito_60_barra_50g',
      'Barra Chocolate 60% Cacao con Quito Quito 50g',
      'Barra de chocolate semiamargo 60% cacao con quito quito, fruta silvestre exótica de la selva peruana. Sabor único y sorprendente.',
      ['% Cacao', 'Frutados'], 12,
      ['chocolate_quitoquito_60_barra_50g.webp',
       'chocolate_quitoquito_60_barra_50g_2.webp',
       'chocolate_quitoquito_60_barra_50g_3.webp',
       'chocolate_quitoquito_60_barra_50g_4.webp',
       'chocolate_quitoquito_60_barra_50g_5.webp']),

    // ────────────────────────────────────────────────────────
    // 70 % – 50 g  → S/ 12
    // ────────────────────────────────────────────────────────
    p('chocolate_arandanos_70_barra_50g',
      'Barra Chocolate 70% Cacao con Arándanos 50g',
      'Barra de chocolate amargo 70% cacao orgánico de Oxapampa con arándanos deshidratados. Intensidad del cacao con notas frutales vibrantes.',
      ['% Cacao', 'Frutados'], 12,
      ['chocolate_arandanos_70_barra_50g.webp',
       'chocolate_arandanos_70_barra_50g_2.webp',
       'chocolate_arandanos_70_barra_50g_3.webp']),

    p('chocolate_fresa_70_barra_50g',
      'Barra Chocolate 70% Cacao con Fresa 50g',
      'Barra de chocolate amargo 70% cacao con trozos de fresa deshidratada. Combinación frutal e intensa de cacao puro oxapampino.',
      ['% Cacao', 'Frutados'], 12,
      ['chocolate_fresa_70_barra_50g.webp',
       'chocolate_fresa_70_barra_50g_2.webp',
       'chocolate_fresa_70_barra_50g_3.webp']),

    p('chocolate_kiwi_70_barra_50g',
      'Barra Chocolate 70% Cacao con Kiwi 50g',
      'Barra de chocolate amargo 70% cacao con kiwi deshidratado. Contraste exótico entre la potencia del cacao y el kiwi.',
      ['% Cacao', 'Frutados'], 12,
      ['chocolate_kiwi_70_barra_70g.webp']),

    // ────────────────────────────────────────────────────────
    // 60 % – 70 g  → S/ 16
    // ────────────────────────────────────────────────────────
    p('chocolate_arandanos_60_barra_70g',
      'Barra Chocolate 60% Cacao con Arándanos 70g',
      'Barra grande de chocolate semiamargo 60% cacao con arándanos deshidratados. Antioxidante y delicioso.',
      ['% Cacao', 'Frutados'], 16,
      ['chocolate_arandanos_60_barra_70g.webp']),

    p('chocolate_fresa_60_barra_70g',
      'Barra Chocolate 60% Cacao con Fresa 70g',
      'Barra grande de chocolate semiamargo 60% cacao con fresa deshidratada. Presentación perfecta para regalar.',
      ['% Cacao', 'Frutados'], 16,
      ['chocolate_fresa_60_barra_70g.webp']),

    p('chocolate_almendra_60_barra_70g',
      'Barra Chocolate 60% Cacao con Almendra 70g',
      'Barra de chocolate semiamargo 60% cacao con almendras enteras seleccionadas. Textura crujiente y sabor equilibrado.',
      ['% Cacao', 'Frutos secos'], 16,
      ['chocolate_almendra_60_barra_70g.webp']),

    p('chocolate_pecana_60_barra_70g',
      'Barra Chocolate 60% Cacao con Pecana 70g',
      'Barra de chocolate semiamargo 60% cacao con pecanas seleccionadas. Crujiente y con personalidad.',
      ['% Cacao', 'Frutos secos'], 16,
      ['chocolate_pecana_60_barra_70g.webp']),

    p('chocolate_nueces_60_barra_70g',
      'Barra Chocolate 60% Cacao con Nueces 70g',
      'Barra de chocolate semiamargo 60% cacao con nueces seleccionadas. Combinación clásica de cacao intenso y fruto seco.',
      ['% Cacao', 'Frutos secos'], 16,
      ['chocolate_almendra_60_barra_70g.webp']),

    // ────────────────────────────────────────────────────────
    // 70 % – 70 g  → S/ 16
    // ────────────────────────────────────────────────────────
    p('chocolate_70_barra_70g',
      'Barra Chocolate 70% Cacao Puro 70g',
      'Barra pura de chocolate amargo 70% cacao nativo de Oxapampa. Sin rellenos, para apreciar el sabor auténtico del cacao de finca.',
      ['% Cacao'], 16,
      ['chocolate_70_barra_70g.webp']),

    p('chocolate_arandano_70_barra_70g',
      'Barra Chocolate 70% Cacao con Arándano 70g',
      'Barra de chocolate amargo 70% cacao con arándano deshidratado. Intensidad del cacao oxapampino con notas frutales.',
      ['% Cacao', 'Frutados'], 16,
      ['chocolate_arandano_70_barra_70g.webp']),

    p('chocolate_fresa_70_barra_70g',
      'Barra Chocolate 70% Cacao con Fresa 70g',
      'Barra grande de chocolate amargo 70% cacao con fresa deshidratada. Combinación clásica de chocolate intenso y fruta.',
      ['% Cacao', 'Frutados'], 16,
      ['chocolate_fresa_70_barra_70g.webp']),

    p('chocolate_kiwi_70_barra_70g',
      'Barra Chocolate 70% Cacao con Kiwi 70g',
      'Barra de chocolate amargo 70% cacao con kiwi deshidratado. Sabor frutal exótico con la intensidad del cacao nativo.',
      ['% Cacao', 'Frutados'], 16,
      ['chocolate_kiwi_70_barra_70g.webp']),

    p('chocolate_pasas_70_barra_70g',
      'Barra Chocolate 70% Cacao con Pasas 70g',
      'Barra de chocolate amargo 70% cacao con pasas seleccionadas. Dulzura natural de la uva pasa con el amargor del cacao puro.',
      ['% Cacao', 'Frutados'], 16,
      ['chocolate_pasas_70_barra_70g.webp',
       'chocolate_pasas_70_barra_70g_2.webp']),

    p('chocolate_pecana_70_barra_70g',
      'Barra Chocolate 70% Cacao con Pecana 70g',
      'Barra de chocolate amargo 70% cacao con pecanas enteras. Combinación perfecta de intensidad y textura crujiente.',
      ['% Cacao', 'Frutos secos'], 16,
      ['chocolate_pecana_70_barra_70g.webp']),

    p('chocolate_nueces_70_barra_70g',
      'Barra Chocolate 70% Cacao con Nueces 70g',
      'Barra de chocolate amargo 70% cacao con nueces seleccionadas. El clásico maridaje de cacao intenso con fruto seco.',
      ['% Cacao', 'Frutos secos'], 16,
      ['chocolate_pecana_70_barra_70g.webp']),

    p('chocolate_manzana_70_barra_70g',
      'Barra Chocolate 70% Cacao con Manzana 70g',
      'Barra de chocolate amargo 70% cacao con manzana deshidratada. Contraste frutal dulce con la profundidad del cacao oxapampino.',
      ['% Cacao', 'Frutados'], 16,
      ['chocolate_fresa_70_barra_70g.webp']),

    // ────────────────────────────────────────────────────────
    // 80 % – 70 g  → S/ 17
    // ────────────────────────────────────────────────────────
    p('chocolate_80_barra_70g',
      'Barra Chocolate 80% Cacao Puro 70g',
      'Barra pura de chocolate extra amargo 80% cacao nativo de Oxapampa. Intensidad máxima, rico en antioxidantes y flavonoides.',
      ['% Cacao'], 17,
      ['chocolate_80_barra_70g.webp']),

    p('chocolate_arandanos_80_barra_70g',
      'Barra Chocolate 80% Cacao con Arándanos 70g',
      'Barra de chocolate extra amargo 80% cacao con arándanos deshidratados. La máxima expresión del cacao con un toque frutal.',
      ['% Cacao', 'Frutados'], 17,
      ['chocolate_arandanos_80_barra_70g.webp']),

    p('chocolate_kiwi_80_barra_70g',
      'Barra Chocolate 80% Cacao con Kiwi 70g',
      'Barra de chocolate extra amargo 80% cacao con kiwi deshidratado. Contraste exótico entre la potencia del cacao y el kiwi.',
      ['% Cacao', 'Frutados'], 17,
      ['chocolate_kiwi_80_barra_70g.webp']),

    p('chocolate_pasas_80_barra_70g',
      'Barra Chocolate 80% Cacao con Pasas 70g',
      'Barra de chocolate extra amargo 80% cacao con pasas selectas. Dulzura natural con potencia de cacao al máximo.',
      ['% Cacao', 'Frutados'], 17,
      ['chocolate_pasas_80_barra_70g.webp']),

    // ────────────────────────────────────────────────────────
    // OTROS PRODUCTOS
    // ────────────────────────────────────────────────────────
    p('chocolate_mani_70_20g',
      'Chocolate 70% Cacao con Maní 20g',
      'Pequeña tableta de chocolate amargo 70% cacao con maní tostado. Snack perfecto para llevar, crujiente y con sabor intenso.',
      ['% Cacao', 'Frutos secos'], 4,
      ['chocolate_mani_70_20g.webp']),

    p('cacao_polvo_90g',
      'Cacao en Polvo 90g',
      'Cacao puro en polvo 100% orgánico de Oxapampa. Sin azúcar añadida. Ideal para bebidas calientes, repostería y smoothies. Presentación 90g.',
      ['% Cacao'], 10,
      ['cacao_polvo_90g.webp']),

    p('cacao_polvo_180g',
      'Cacao en Polvo 180g',
      'Cacao puro en polvo 100% orgánico de Oxapampa. Sin azúcar añadida. Ideal para bebidas calientes, repostería y smoothies. Presentación familiar 180g.',
      ['% Cacao'], 18,
      ['cacao_polvo_180g.webp',
       'cacao_polvo_180g_2.webp']),

    p('nibs_cacao_100g',
      'Nibs de Cacao Tostado y Triturado 100g',
      'Trozos crujientes de cacao tostado y triturado sin procesar. Snack saludable con sabor intenso a cacao puro. Alto en magnesio y antioxidantes. Presentación 100g.',
      ['% Cacao'], 10,
      ['nibs_cacao.webp']),

    p('nibs_cacao_250g',
      'Nibs de Cacao Tostado y Triturado 250g',
      'Trozos crujientes de cacao tostado y triturado sin procesar. Snack saludable con sabor intenso a cacao puro. Alto en magnesio y antioxidantes. Presentación familiar 250g.',
      ['% Cacao'], 22,
      ['nibs_cacao.webp']),

    p('pasta_cacao_100g',
      'Pasta de Cacao 100g',
      'Pasta de cacao orgánico 100% puro de Oxapampa. Sin aditivos. Ideal para repostería artesanal o consumo directo. Presentación 100g.',
      ['% Cacao'], 10,
      ['pasta_cacao_100g.webp',
       'pasta_cacao_100g_2.webp',
       'pasta_cacao_100g_3.webp']),

    // ────────────────────────────────────────────────────────
    // PACKS
    // ────────────────────────────────────────────────────────
    p('pack1',
      'Pack 1 – Mix 50g (3 unidades)',
      '• Chocolate 70% cacao con Arándanos 50g — S/ 12\n• Chocolate 70% cacao con Fresa 50g — S/ 12\n• Chocolate 60% cacao con Quito Quito 50g — S/ 12\n\nTotal: S/ 36',
      ['Packs'], 36,
      ['pack1.webp', 'pack1_2.webp', 'pack1_3.webp']),

    p('pack2',
      'Pack 2 – Mix 60% 50g (3 unidades)',
      '• Chocolate 60% cacao con Arándanos 50g — S/ 12\n• Chocolate 60% cacao con Fresa 50g — S/ 12\n• Chocolate 60% cacao con Kiwi 50g — S/ 12\n\nTotal: S/ 36',
      ['Packs'], 36,
      ['pack2.webp', 'pack2_2.webp', 'pack2_3.webp']),

    p('pack3',
      'Pack 3 – Mix 70% 50g (4 unidades)',
      '• Chocolate 70% cacao con Fresa 50g — S/ 12\n• Chocolate 70% cacao con Arándanos 50g — S/ 12\n• Chocolate 70% cacao con Kiwi 50g — S/ 12\n• Chocolate 70% cacao con Quito Quito 50g — S/ 12\n\nTotal: S/ 48',
      ['Packs'], 48,
      ['pack3.webp', 'pack3_2.webp']),

    p('pack4',
      'Pack 4 – Mix 70% 70g Frutos (3 unidades)',
      '• Chocolate 70% cacao con Pasas 70g — S/ 16\n• Chocolate 70% cacao con Pecana 70g — S/ 16\n• Chocolate 70% cacao con Kiwi 70g — S/ 16\n\nTotal: S/ 48',
      ['Packs'], 48,
      ['pack4.webp']),

    p('pack5',
      'Pack 5 – Mix 70% 70g Surtido (3 unidades)',
      '• Chocolate 70% cacao con Fresa 70g — S/ 16\n• Chocolate 70% cacao con Arándanos 70g — S/ 16\n• Chocolate 70% cacao Puro 70g — S/ 16\n\nTotal: S/ 48',
      ['Packs'], 48,
      ['pack5.webp']),

    p('pack6',
      'Pack 6 – Mix 80% 70g (4 unidades)',
      '• Chocolate 80% cacao Puro 70g — S/ 17\n• Chocolate 80% cacao con Kiwi 70g — S/ 17\n• Chocolate 80% cacao con Arándanos 70g — S/ 17\n• Chocolate 80% cacao con Pasas 70g — S/ 17\n\nTotal: S/ 68',
      ['Packs'], 68,
      ['pack6.webp', 'pack6_2.webp']),

    p('pack7',
      'Pack 7 – Mix 60% 70g Surtido (4 unidades)',
      '• Chocolate 60% cacao con Fresa 70g — S/ 16\n• Chocolate 60% cacao con Arándanos 70g — S/ 16\n• Chocolate 60% cacao con Almendra 70g — S/ 16\n• Chocolate 60% cacao con Pecana 70g — S/ 16\n\nTotal: S/ 64',
      ['Packs'], 64,
      ['pack7.webp', 'pack7_2.webp'])

  ]; // end TONY_PRODUCTS

}());
