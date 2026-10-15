/**
 * CHOP SUEY INTERNACIONAL - Lógica de Interfaz y Navegación
 * Renderizado modular, seguimiento de scroll, búsqueda en vivo y accesibilidad.
 */

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
  const navPills = document.querySelectorAll('.cat-pill');

  // Helper para buscar sección por ID
  function getSectionData(id) {
    return data.sections.find(s => s.id === id);
  }

  // 1. Renderizar Promoción Hero 3×2
  function renderPromoHero() {
    const p = data.promotions.heroPromo;
    if (!promoContainer || !p) return;

    promoContainer.innerHTML = `
      <article class="promo-hero-card" id="card-promo-3x2" aria-labelledby="promo-3x2-title">
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

          <p class="section-subtitle" style="text-align: center; margin-bottom: 12px;">
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
    favoritesContainer.innerHTML = data.favorites.map(dish => `
      <article class="featured-dish-card" id="${dish.id}" data-search-text="${dish.name.toLowerCase()} ${dish.description ? dish.description.toLowerCase() : ''} ${dish.categoryTag.toLowerCase()}">
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
    `).join('');
  }

  // Helper para renderizar lista estándar del catálogo
  function renderStandardCatalogList(container, sectionId) {
    const sec = getSectionData(sectionId);
    if (!container || !sec) return;

    container.innerHTML = `
      <div class="catalog-list" role="list">
        ${sec.items.map(item => `
          <div class="catalog-item" role="listitem" id="${item.id}" data-search-text="${item.name.toLowerCase()} ${item.description ? item.description.toLowerCase() : ''} ${sec.title.toLowerCase()}">
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
        `).join('')}
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
          ${fam.variants.map(v => `
            <div class="variant-row ${v.isEspecial ? 'is-especial' : ''}" role="listitem" data-search-text="${v.name.toLowerCase()} ${v.composition ? v.composition.toLowerCase() : ''} ${fam.name.toLowerCase()}">
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
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  // 4. Renderizar Combos Promocionales
  function renderCombos() {
    if (!combosContainer) return;
    const combos = data.promotions.combos;
    combosContainer.innerHTML = combos.map(c => `
      <article class="combo-card" id="${c.id}" data-search-text="${c.name.toLowerCase()} ${(c.items || []).join(' ').toLowerCase()} ${c.details ? c.details.toLowerCase() : ''}">
        <div class="combo-card-image-wrap">
          <picture>
            <source srcset="${c.image}" type="image/webp">
            <img 
              src="${c.imageFallback}" 
              alt="${c.name} - Chop Suey Internacional" 
              class="combo-card-img"
              loading="lazy"
              width="800"
              height="500"
            >
          </picture>
          <span class="combo-card-type-tag">${c.badge}</span>
          <span class="combo-card-price-badge">${c.priceFormatted}</span>
        </div>
        <div class="combo-card-content">
          <h3 class="combo-title">${c.name}</h3>
          ${c.details ? `<p class="combo-details-text">${c.details}</p>` : ''}
          ${c.courtesy ? `<div class="combo-courtesy-badge">${c.courtesy}</div>` : ''}

          ${c.options ? `
            <ul class="combo-items-list">
              ${c.options.map(opt => `<li class="combo-item-li">${opt}</li>`).join('')}
            </ul>
          ` : ''}

          ${c.items ? `
            <ul class="combo-items-list">
              ${c.items.map(it => `<li class="combo-item-li">${it}</li>`).join('')}
            </ul>
          ` : ''}

          ${c.note ? `<p class="combo-note-text">${c.note}</p>` : ''}
        </div>
      </article>
    `).join('');
  }

  // 5. Renderizar Extras en Grid Compacto
  function renderExtras() {
    const sec = getSectionData('extras');
    if (!extrasContainer || !sec) return;

    extrasContainer.innerHTML = `
      <div class="extras-grid" role="list">
        ${sec.items.map(item => `
          <div class="extra-chip" role="listitem" data-search-text="${item.name.toLowerCase()} extra">
            <span class="extra-name">${item.name}</span>
            <span class="extra-price">${item.priceFormatted}</span>
          </div>
        `).join('')}
      </div>
    `;
  }

  // Renderizar cada sección
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

  // 6. Navegación Sticky: Scrollspy con IntersectionObserver
  const sectionsToObserve = [
    { id: 'seccion-promociones', navSelector: '[data-target="seccion-promociones"]' },
    { id: 'seccion-favoritos', navSelector: '[data-target="seccion-favoritos"]' },
    { id: 'seccion-entradas', navSelector: '[data-target="seccion-entradas"]' },
    { id: 'seccion-sopas', navSelector: '[data-target="seccion-sopas"]' },
    { id: 'seccion-platos-fuertes', navSelector: '[data-target="seccion-platos-fuertes"]' },
    { id: 'seccion-combos', navSelector: '[data-target="seccion-combos"]' },
    { id: 'seccion-bebidas', navSelector: '[data-target="seccion-bebidas"]' },
    { id: 'seccion-mas', navSelector: '[data-target="seccion-mas"]' },
    { id: 'seccion-contacto', navSelector: '[data-target="seccion-contacto"]' }
  ];

  function setActiveNavPill(targetId) {
    navPills.forEach(pill => {
      if (pill.getAttribute('data-target') === targetId) {
        pill.classList.add('is-active');
        pill.setAttribute('aria-current', 'true');
        pill.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      } else {
        pill.classList.remove('is-active');
        pill.removeAttribute('aria-current');
      }
    });
  }

  // Click en tabs de navegación
  navPills.forEach(pill => {
    pill.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = pill.getAttribute('data-target');
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
        setActiveNavPill(targetId);
      }
    });
  });

  // IntersectionObserver para detectar la sección activa durante el scroll
  const observerOptions = {
    root: null,
    rootMargin: '-80px 0px -60% 0px',
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setActiveNavPill(entry.target.id);
      }
    });
  }, observerOptions);

  sectionsToObserve.forEach(item => {
    const el = document.getElementById(item.id);
    if (el) sectionObserver.observe(el);
  });

  // 7. Búsqueda y Filtrado en Tiempo Real
  function handleSearch() {
    const query = searchInput.value.trim().toLowerCase();

    if (query === '') {
      if (searchFeedback) searchFeedback.style.display = 'none';
      if (searchClearBtn) searchClearBtn.style.display = 'none';
      if (noResultsBox) noResultsBox.style.display = 'none';

      document.querySelectorAll('[data-search-text]').forEach(el => {
        el.style.display = '';
      });
      document.querySelectorAll('.section-wrapper, .family-block, .sub-catalog-block').forEach(sec => {
        sec.style.display = '';
      });
      return;
    }

    if (searchClearBtn) searchClearBtn.style.display = 'flex';

    let totalMatches = 0;
    const searchableItems = document.querySelectorAll('[data-search-text]');

    searchableItems.forEach(el => {
      const text = el.getAttribute('data-search-text') || '';
      const matches = text.includes(query);
      el.style.display = matches ? '' : 'none';
      if (matches) totalMatches++;
    });

    // Ocultar familias completas si no tienen variantes visibles
    document.querySelectorAll('.family-block').forEach(fam => {
      const visibleVariants = fam.querySelectorAll('.variant-row:not([style*="display: none"])');
      fam.style.display = (visibleVariants.length > 0) ? '' : 'none';
    });

    // Mostrar feedback de conteo
    if (searchFeedback && searchFeedbackText) {
      searchFeedback.style.display = 'flex';
      searchFeedbackText.textContent = `${totalMatches} ${totalMatches === 1 ? 'resultado encontrado' : 'resultados encontrados'} para "${query}"`;
    }

    // Mostrar estado sin resultados
    if (noResultsBox) {
      noResultsBox.style.display = (totalMatches === 0) ? 'block' : 'none';
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', handleSearch);
  }

  if (searchClearBtn) {
    searchClearBtn.addEventListener('click', () => {
      searchInput.value = '';
      handleSearch();
      searchInput.focus();
    });
  }

  console.log('Chop Suey Internacional - Menú digital cargado con éxito.');
});
