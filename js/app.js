/**
 * CHOP SUEY INTERNACIONAL - Lógica de Interfaz y Navegación
 * Barra fija en toda la página, combos compactos con modal lightbox y navegación estable.
 */

// ---------------------------------------------------------------------------
// PANTALLA DE CARGA INICIAL (SPLASH SCREEN)
// Manejo de animación elegante, duración óptima (~1.4s) y desbloqueo seguro
// ---------------------------------------------------------------------------
(function initSplashScreen() {
  const splashStartTime = (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();
  const MIN_DISPLAY_TIME = 1400; // 1.4 segundos para una transición agradable
  const MAX_SAFETY_TIMEOUT = 2800; // Límite de seguridad máximo
  let isSplashDismissed = false;

  function dismissSplashScreen() {
    if (isSplashDismissed) return;
    isSplashDismissed = true;

    const splash = document.getElementById('splash-screen');
    if (!splash) {
      document.body.classList.remove('is-splash-active');
      return;
    }

    const now = (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();
    const elapsed = now - splashStartTime;
    const remainingTime = Math.max(0, MIN_DISPLAY_TIME - elapsed);

    setTimeout(() => {
      splash.classList.add('is-hidden');
      splash.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('is-splash-active');

      // Ocultar completamente una vez finalizada la transición CSS
      setTimeout(() => {
        splash.style.display = 'none';
      }, 550);
    }, remainingTime);
  }

  // Programar salida al completarse la carga de la página
  if (document.readyState === 'complete') {
    dismissSplashScreen();
  } else {
    window.addEventListener('load', dismissSplashScreen, { once: true });
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(dismissSplashScreen, MIN_DISPLAY_TIME + 200);
    }, { once: true });
  }

  // Respaldo de seguridad absoluto
  setTimeout(dismissSplashScreen, MAX_SAFETY_TIMEOUT);
})();

document.addEventListener('DOMContentLoaded', () => {
  const data = window.MENU_DATA;
  if (!data) {
    console.error('No se encontró MENU_DATA');
    return;
  }

  // Contenedores del DOM
  const promoContainer = document.getElementById('promo-hero-container');
  const favoritesContainer = document.getElementById('favorites-container');
  const entradasContainer = document.getElementById('entradas-container');
  const sopasContainer = document.getElementById('sopas-container');
  const platosChinosContainer = document.getElementById('platos-chinos-container');
  const familiesContainer = document.getElementById('families-container');
  const platosInternacionalesContainer = document.getElementById('platos-internacionales-container');
  const combosContainer = document.getElementById('combos-container');
  const bebidasContainer = document.getElementById('bebidas-container');
  const cervezasContainer = document.getElementById('cervezas-container');
  const postresContainer = document.getElementById('postres-container');
  const extrasContainer = document.getElementById('extras-container');

  // Buscador y navegación
  const searchInput = document.getElementById('menu-search-input');
  const searchFeedback = document.getElementById('search-feedback');
  const searchFeedbackText = document.getElementById('search-feedback-text');
  const searchClearBtn = document.getElementById('search-clear-btn');
  const noResultsBox = document.getElementById('no-results-box');
  const navContainer = document.querySelector('.categories-nav');
  const stickyNav = document.querySelector('.sticky-nav-container');
  const navPills = document.querySelectorAll('.cat-pill');

  // Modal Lightbox
  const lightbox = document.getElementById('flyer-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxPrice = document.getElementById('lightbox-price');
  const lightboxCloseBtn = document.getElementById('lightbox-close-btn');
  const lightboxOverlay = document.getElementById('lightbox-overlay');

  // Helper para buscar sección por ID
  function getSectionData(id) {
    return data.sections.find(s => s.id === id);
  }

  // Normalizador de texto para búsquedas (insensible a mayúsculas, acentos, diacríticos y puntuación)
  function normalizeSearchText(str) {
    if (!str) return '';
    return str
      .toString()
      .toLowerCase()
      .replace(/[×✕]/g, 'x')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[-_.,;:()¿?¡!/\\"'`~]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  // 1. Renderizar Promoción Hero 3×2
  function renderPromoHero() {
    const p = data.promotions.heroPromo;
    if (!promoContainer || !p) return;

    const promoSearchText = normalizeSearchText([
      p.title,
      p.headline,
      p.badge,
      p.summary,
      (p.families || []).map(fam => `${fam.name} ${fam.desc}`).join(' '),
      p.terms,
      'promo promocion 3x2 especialidad chop suey chow mein arroz chino lo mein'
    ].filter(Boolean).join(' '));

    promoContainer.innerHTML = `
      <article class="promo-hero-card" id="card-promo-3x2" data-search-text="${promoSearchText}" aria-labelledby="promo-3x2-title">
        <div class="promo-hero-badge-strip">
          <span>${p.badge}</span>
          <span class="promo-tag-pill">Especialidad</span>
        </div>
        <div class="promo-hero-body">
          <div class="promo-headline-wrap">
            <h2 class="promo-huge-title" id="promo-3x2-title">${p.title}</h2>
            <div class="promo-sub-headline">${p.headline}</div>
            <div class="promo-restriction-text">${p.restriction}</div>
          </div>

          <p class="section-subtitle" style="text-align: center; margin-bottom: 14px;">
            ${p.summary}
          </p>

          <div class="promo-families-grid" role="list">
            ${p.families.map(fam => `
              <div class="promo-family-cell" role="listitem">
                <picture>
                  <source srcset="${fam.photo}" type="image/webp">
                  <img 
                    src="${fam.fallback}" 
                    alt="${fam.name} Chop Suey Internacional" 
                    class="promo-family-thumb"
                    loading="lazy"
                    width="400"
                    height="300"
                  >
                </picture>
                <div class="promo-family-info">
                  <div class="promo-family-name">${fam.name}</div>
                  <div class="promo-family-desc">${fam.desc}</div>
                </div>
              </div>
            `).join('')}
          </div>

          <div class="promo-footer-note">
            <strong>Condiciones de la casa:</strong> ${p.terms}
          </div>
        </div>
      </article>
    `;
  }

  // 2. Renderizar Favoritos de la Casa
  function renderFavorites() {
    if (!favoritesContainer) return;
    favoritesContainer.innerHTML = data.favorites.map(dish => {
      const favSearchText = normalizeSearchText([
        dish.name,
        dish.categoryTag,
        dish.composition,
        dish.description,
        dish.badge,
        'favorito favoritos'
      ].filter(Boolean).join(' '));

      return `
      <article class="featured-dish-card" id="${dish.id}" data-search-text="${favSearchText}">
        <div class="featured-dish-image-wrap">
          <picture>
            <source srcset="${dish.image}" type="image/webp">
            <img 
              src="${dish.imageFallback}" 
              alt="${dish.name}" 
              class="featured-dish-img"
              loading="lazy"
              width="600"
              height="375"
            >
          </picture>
          <span class="featured-dish-badge">${dish.badge}</span>
          <span class="featured-dish-category-tag">${dish.categoryTag}</span>
        </div>
        <div class="featured-dish-content">
          <div class="dish-header-row">
            <h3 class="dish-title">${dish.name}</h3>
            <span class="dish-price">${dish.priceFormatted}</span>
          </div>
          ${dish.composition ? `<div class="dish-composition">Composición: ${dish.composition}</div>` : ''}
          ${dish.description ? `<p class="dish-desc">${dish.description}</p>` : ''}
        </div>
      </article>
    `;
    }).join('');
  }

  // Helper para renderizar catálogo regular
  function renderStandardCatalogList(container, sectionId) {
    const sec = getSectionData(sectionId);
    if (!container || !sec) return;

    container.innerHTML = `
      <div class="catalog-list" role="list">
        ${sec.items.map(item => {
          const itemSearchText = normalizeSearchText([
            item.name,
            item.description,
            item.tag,
            sec.title,
            sec.subtitle
          ].filter(Boolean).join(' '));

          return `
          <div class="catalog-item" role="listitem" id="${item.id}" data-search-text="${itemSearchText}">
            ${item.photo ? `
              <picture>
                <source srcset="${item.photo}" type="image/webp">
                <img 
                  src="${item.photoFallback}" 
                  alt="${item.name}" 
                  class="catalog-item-thumb"
                  loading="lazy"
                  width="120"
                  height="120"
                >
              </picture>
            ` : ''}
            <div class="catalog-item-body">
              <div class="catalog-item-header">
                <h4 class="catalog-item-name">${item.name}</h4>
                <span class="catalog-item-price">${item.priceFormatted}</span>
              </div>
              ${item.description ? `<p class="catalog-item-desc">${item.description}</p>` : ''}
              ${item.tag ? `<span class="catalog-item-tag">${item.tag}</span>` : ''}
            </div>
          </div>
        `;
        }).join('')}
      </div>
    `;
  }

  // 3. Renderizar las 4 Familias Principales
  function renderFamilies() {
    if (!familiesContainer) return;
    familiesContainer.innerHTML = data.families.map(fam => `
      <div class="family-block" id="family-${fam.id}">
        <div class="family-header">
          <div class="family-title-row">
            <h3 class="family-name">${fam.name}</h3>
            <span class="family-badge">${fam.accompaniment}</span>
          </div>
          <p class="family-intro">${fam.description}</p>
        </div>

        <div class="family-featured-photo-wrap">
          <picture>
            <source srcset="${fam.featuredPhoto}" type="image/webp">
            <img 
              src="${fam.featuredPhotoFallback}" 
              alt="${fam.name} Especial Chop Suey Internacional" 
              class="family-featured-img"
              loading="lazy"
              width="800"
              height="450"
            >
          </picture>
          <div class="family-photo-caption">
            ${fam.featuredPhotoCaption}
          </div>
        </div>

        <div class="variants-table" role="list">
          ${fam.variants.map(v => {
            const variantSearchText = normalizeSearchText([
              v.name,
              v.composition,
              fam.name,
              fam.accompaniment,
              fam.description,
              v.isEspecial ? 'especial' : '',
              v.isVegetarian ? 'vegetariano vegetariana vegetales' : ''
            ].filter(Boolean).join(' '));

            return `
            <div class="variant-row ${v.isEspecial ? 'is-especial' : ''}" role="listitem" data-search-text="${variantSearchText}">
              <div class="variant-main">
                <div class="variant-name-row">
                  <span class="variant-name">${v.name}</span>
                  ${v.isEspecial ? `<span class="especial-tag">ESPECIAL</span>` : ''}
                  ${v.isVegetarian ? `<span class="veg-tag">VEGETARIANO</span>` : ''}
                </div>
                ${v.composition ? `<div class="variant-composition">${v.composition}</div>` : ''}
              </div>
              <div class="variant-price">${v.priceFormatted}</div>
            </div>
          `;
          }).join('')}
        </div>
      </div>
    `).join('');
  }

  // 4. Renderizar Combos y Banquetes (Presentación Compacta, Equilibrada y con Afiche Ampliable)
  function renderCombos() {
    if (!combosContainer) return;
    const combos = data.promotions.combos;
    combosContainer.innerHTML = combos.map(c => {
      const comboSearchText = normalizeSearchText([
        c.name,
        c.badge,
        c.courtesy,
        (c.options || []).join(' '),
        (c.items || []).join(' '),
        c.details,
        c.note,
        'combo combos banquete banquetes'
      ].filter(Boolean).join(' '));

      return `
      <article class="combo-compact-card" id="${c.id}" data-search-text="${comboSearchText}">
        <div class="combo-compact-main">
          <div class="combo-compact-header">
            <span class="combo-type-tag">${c.badge}</span>
            <span class="combo-price-pill">${c.priceFormatted}</span>
          </div>

          <h3 class="combo-compact-title">${c.name}</h3>
          ${c.details ? `<p class="combo-compact-desc">${c.details}</p>` : ''}
          ${c.courtesy ? `<div class="combo-courtesy-badge">${c.courtesy}</div>` : ''}

          ${c.options ? `
            <ul class="combo-items-compact" aria-label="Opciones del combo">
              ${c.options.map(opt => `<li><span class="check-icon">✔</span> ${opt}</li>`).join('')}
            </ul>
          ` : ''}

          ${c.items ? `
            <ul class="combo-items-compact" aria-label="Contenido del combo">
              ${c.items.map(it => `<li><span class="check-icon">✔</span> ${it}</li>`).join('')}
            </ul>
          ` : ''}

          ${c.note ? `<p class="combo-note-compact">${c.note}</p>` : ''}
        </div>

        <div class="combo-compact-thumb-wrap">
          <button type="button" class="combo-thumb-btn" data-full-flyer="${c.image}" data-combo-name="${c.name}" data-combo-price="${c.priceFormatted}" aria-label="Ver afiche oficial de ${c.name}">
            <picture>
              <source srcset="${c.image}" type="image/webp">
              <img 
                src="${c.imageFallback}" 
                alt="Vista previa afiche ${c.name}" 
                class="combo-compact-thumb"
                loading="lazy"
                width="120"
                height="150"
              >
            </picture>
            <span class="thumb-zoom-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
              Ver afiche
            </span>
          </button>
        </div>
      </article>
    `;
    }).join('');

    setupLightboxListeners();
  }

  // 5. Configurar Modal Lightbox para Afiches
  function openLightbox(imgSrc, title, price) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = imgSrc;
    lightboxImg.alt = title;
    if (lightboxTitle) lightboxTitle.textContent = title;
    if (lightboxPrice) lightboxPrice.textContent = price;
    lightbox.style.display = 'flex';
    requestAnimationFrame(() => {
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
    });
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    setTimeout(() => {
      lightbox.style.display = 'none';
      if (lightboxImg) lightboxImg.src = '';
    }, 200);
  }

  function setupLightboxListeners() {
    document.querySelectorAll('.combo-thumb-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const imgSrc = btn.getAttribute('data-full-flyer');
        const title = btn.getAttribute('data-combo-name');
        const price = btn.getAttribute('data-combo-price');
        openLightbox(imgSrc, title, price);
      });
    });

    if (lightboxCloseBtn) lightboxCloseBtn.onclick = closeLightbox;
    if (lightboxOverlay) lightboxOverlay.onclick = closeLightbox;

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox && lightbox.classList.contains('is-open')) {
        closeLightbox();
      }
    });
  }

  // 6. Renderizar Extras
  function renderExtras() {
    const sec = getSectionData('extras');
    if (!extrasContainer || !sec) return;

    extrasContainer.innerHTML = `
      <div class="extras-grid" role="list">
        ${sec.items.map(item => {
          const extraSearchText = normalizeSearchText([
            item.name,
            'extra extras guarnicion guarniciones acompanamiento'
          ].filter(Boolean).join(' '));

          return `
          <div class="extra-chip" role="listitem" data-search-text="${extraSearchText}">
            <span class="extra-name">${item.name}</span>
            <span class="extra-price">${item.priceFormatted}</span>
          </div>
        `;
        }).join('')}
      </div>
    `;
  }

  // Ejecutar todos los renderizados
  renderPromoHero();
  renderFavorites();
  renderStandardCatalogList(entradasContainer, 'entradas');
  renderStandardCatalogList(sopasContainer, 'sopas');
  renderStandardCatalogList(platosChinosContainer, 'platos-chinos');
  renderFamilies();
  renderStandardCatalogList(platosInternacionalesContainer, 'platos-internacionales');
  renderCombos();
  renderStandardCatalogList(bebidasContainer, 'bebidas');
  renderStandardCatalogList(cervezasContainer, 'cervezas-seltzer');
  renderStandardCatalogList(postresContainer, 'postres');
  renderExtras();

  // =========================================================================
  // 7. NAVEGACIÓN Y DESPLAZAMIENTO ROBUSTO (BARRA FIJA PERMANENTE)
  // =========================================================================

  let isClickScrolling = false;
  let clickScrollTimer = null;

  // Actualiza el botón activo sin provocar desplazamientos de ventana
  function updateActiveNavPill(targetId, shouldScrollNav = false) {
    navPills.forEach(pill => {
      const match = pill.getAttribute('data-target') === targetId;
      if (match) {
        pill.classList.add('is-active');
        pill.setAttribute('aria-selected', 'true');

        if (shouldScrollNav && navContainer) {
          const pillOffset = pill.offsetLeft;
          const pillWidth = pill.offsetWidth;
          const containerWidth = navContainer.clientWidth;
          const targetScrollLeft = pillOffset - (containerWidth / 2) + (pillWidth / 2);

          navContainer.scrollTo({
            left: targetScrollLeft,
            behavior: 'smooth'
          });
        }
      } else {
        pill.classList.remove('is-active');
        pill.setAttribute('aria-selected', 'false');
      }
    });
  }

  // Click en tabs de categorías
  navPills.forEach(pill => {
    pill.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = pill.getAttribute('data-target');
      let targetEl = document.getElementById(targetId);

      if (!targetEl) return;

      // Si la sección objetivo está oculta por búsqueda activa, restablecer la búsqueda para mostrarla
      if (targetEl.offsetParent === null && searchInput && searchInput.value) {
        searchInput.value = '';
        handleSearch();
        targetEl = document.getElementById(targetId);
      }

      isClickScrolling = true;
      if (clickScrollTimer) clearTimeout(clickScrollTimer);
      clickScrollTimer = setTimeout(() => {
        isClickScrolling = false;
      }, 750);

      updateActiveNavPill(targetId, true);

      // Descontar la altura exacta de la barra fija para que el título siempre quede visible
      const navHeight = stickyNav ? stickyNav.offsetHeight : 52;
      const elementRect = targetEl.getBoundingClientRect();
      const absoluteTop = elementRect.top + window.pageYOffset;
      const scrollToPosition = Math.max(0, absoluteTop - navHeight - 12);

      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth'
      });
    });
  });

  // Secciones observadas
  const observedSectionIds = [
    'seccion-promociones',
    'seccion-favoritos',
    'seccion-entradas',
    'seccion-sopas',
    'seccion-platos-fuertes',
    'seccion-combos',
    'seccion-bebidas',
    'seccion-mas',
    'seccion-contacto'
  ];

  // Scrollspy pasivo y ligero con requestAnimationFrame
  let isTicking = false;
  function handleScrollSpy() {
    if (isClickScrolling) return;

    const navHeight = stickyNav ? stickyNav.offsetHeight : 52;
    const triggerPoint = navHeight + 50;

    let currentSectionId = observedSectionIds[0];

    for (let i = 0; i < observedSectionIds.length; i++) {
      const el = document.getElementById(observedSectionIds[i]);
      if (el && el.offsetParent !== null) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= triggerPoint) {
          currentSectionId = observedSectionIds[i];
        }
      }
    }

    updateActiveNavPill(currentSectionId, false);
  }

  window.addEventListener('scroll', () => {
    if (!isTicking) {
      window.requestAnimationFrame(() => {
        handleScrollSpy();
        isTicking = false;
      });
      isTicking = true;
    }
  }, { passive: true });

  // =========================================================================
  // 8. BÚSQUEDA Y FILTRADO EN TIEMPO REAL INTELIGENTE Y MULTI-CAMPO
  // =========================================================================
  function handleSearch() {
    const rawQuery = searchInput.value.trim();
    const normalizedQuery = normalizeSearchText(rawQuery);
    const tokens = normalizedQuery.split(/\s+/).filter(Boolean);

    // Si la búsqueda está vacía o contiene solo espacios: restaurar estado original
    if (tokens.length === 0) {
      if (searchFeedback) searchFeedback.style.display = 'none';
      if (searchClearBtn) searchClearBtn.style.display = 'none';
      if (noResultsBox) noResultsBox.style.display = 'none';

      // Restaurar visibilidad original de todos los platillos
      document.querySelectorAll('[data-search-text]').forEach(el => {
        el.style.display = '';
      });

      // Restaurar visibilidad original de familias, sub-bloques y secciones
      document.querySelectorAll('.family-block, .sub-catalog-block, .section-wrapper').forEach(sec => {
        sec.style.display = '';
      });
      return;
    }

    // Mostrar botón de limpiar búsqueda cuando hay texto
    if (searchClearBtn) searchClearBtn.style.display = 'flex';

    let totalMatches = 0;
    const searchableItems = document.querySelectorAll('[data-search-text]');

    // Filtrar platillos: cada platillo debe contener TODOS los términos buscados (AND lógico)
    searchableItems.forEach(el => {
      const itemText = el.getAttribute('data-search-text') || '';
      const matches = tokens.every(token => itemText.includes(token));
      el.style.display = matches ? '' : 'none';
      if (matches) totalMatches++;
    });

    // Actualizar visibilidad de familias (ocultar si ninguna variante coincide)
    document.querySelectorAll('.family-block').forEach(fam => {
      const visibleVariants = fam.querySelectorAll('.variant-row:not([style*="display: none"])');
      fam.style.display = (visibleVariants.length > 0) ? '' : 'none';
    });

    // Actualizar visibilidad de sub-bloques de catálogo (ocultar si no tienen elementos visibles)
    document.querySelectorAll('.sub-catalog-block').forEach(subBlock => {
      const hasVisibleItems = subBlock.querySelector('[data-search-text]:not([style*="display: none"])') !== null;
      const hasVisibleFamilies = subBlock.querySelector('.family-block:not([style*="display: none"])') !== null;
      subBlock.style.display = (hasVisibleItems || hasVisibleFamilies) ? '' : 'none';
    });

    // Actualizar visibilidad de secciones principales (ocultar si no tienen elementos visibles)
    document.querySelectorAll('.section-wrapper').forEach(sec => {
      const hasVisibleItems = sec.querySelector('[data-search-text]:not([style*="display: none"])') !== null;
      const hasVisibleFamilies = sec.querySelector('.family-block:not([style*="display: none"])') !== null;
      sec.style.display = (hasVisibleItems || hasVisibleFamilies) ? '' : 'none';
    });

    // Estado vacío y retroalimentación de resultados
    if (totalMatches === 0) {
      if (searchFeedback) searchFeedback.style.display = 'none';
      if (noResultsBox) noResultsBox.style.display = 'block';
    } else {
      if (noResultsBox) noResultsBox.style.display = 'none';
      if (searchFeedback && searchFeedbackText) {
        searchFeedback.style.display = 'flex';
        const displayQuery = rawQuery.replace(/\s+/g, ' ');
        searchFeedbackText.textContent = `${totalMatches} ${totalMatches === 1 ? 'resultado encontrado' : 'resultados encontrados'} para "${displayQuery}"`;
      }
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', handleSearch);
    searchInput.addEventListener('search', handleSearch);
  }

  if (searchClearBtn) {
    searchClearBtn.addEventListener('click', () => {
      searchInput.value = '';
      handleSearch();
      searchInput.focus();
    });
  }

  console.log('Chop Suey Internacional - Menú digital completamente optimizado.');
});
