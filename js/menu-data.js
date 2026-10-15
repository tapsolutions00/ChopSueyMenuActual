/**
 * CHOP SUEY INTERNACIONAL - Menú Digital
 * Base de datos centralizada de productos, categorías y promociones.
 * Fuente: Menú físico oficial y artes promocionales del restaurante.
 * Moneda oficial: C$ (Córdobas nicaragüenses).
 */

const MENU_DATA = {
  restaurant: {
    name: "Chop Suey Internacional",
    tagline: "Sabor y tradición",
    phone: "2225-5753",
    whatsapp: "8734-4040",
    address: "Col. Los Robles, del Hotel Colón, 1½ cuadra arriba (Este)",
    city: "Managua, Nicaragua",
    deliveryPlatform: "PedidosYa",
    hoursNote: "Abierto de Lunes a Domingo",
    googleMapsSearch: "Chop Suey Internacional Los Robles Managua"
  },

  // Promociones Oficiales
  promotions: {
    heroPromo: {
      id: "promo-3x2",
      badge: "Válida Todo el Año",
      title: "PROMO 3×2",
      headline: "PAGA DOS Y RECIBE TRES",
      restriction: "*APLICAN RESTRICCIONES",
      summary: "La promoción favorita de Nicaragua, activa durante todo el año en nuestras 4 familias de especialidades orientales.",
      families: [
        {
          name: "Chop Suey",
          desc: "Vegetales frescos salteados al wok sobre cama de fideos fritos.",
          photo: "assets/images/dishes/chop_suey_esp.webp",
          fallback: "assets/images/dishes/chop_suey_esp.jpg"
        },
        {
          name: "Chow Mein",
          desc: "Vegetales frescos salteados al wok sobre fideos precocidos.",
          photo: "assets/images/dishes/chow_mein_esp.webp",
          fallback: "assets/images/dishes/chow_mein_esp.jpg"
        },
        {
          name: "Arroz Chino",
          desc: "Tradicional arroz frito salteado al wok con huevo y vegetales.",
          photo: "assets/images/dishes/arroz_chino_esp.webp",
          fallback: "assets/images/dishes/arroz_chino_esp.jpg"
        },
        {
          name: "Lo Mein",
          desc: "Fideos orientales salteados al wok con auténticos sabores asiáticos.",
          photo: "assets/images/dishes/lo_mein_esp.webp",
          fallback: "assets/images/dishes/lo_mein_esp.jpg"
        }
      ],
      terms: "Aplica en platos enteros seleccionados de Chop Suey, Chow Mein, Arroz Chino y Lo Mein. Consulta los términos y variantes participantes con nuestro personal en mesa o por WhatsApp.",
      image: "assets/images/promos/promo_3x2.webp",
      imageFallback: "assets/images/promos/promo_3x2.jpg"
    },

    combos: [
      {
        id: "combo-ejecutivo",
        name: "COMBOS EJECUTIVO",
        badge: "Almuerzo Especial",
        price: 280,
        priceFormatted: "C$ 280.00",
        courtesy: "Bebida de Cortesía por Consumo en Local *",
        options: [
          "COMBO POLLO",
          "COMBO LO MEIN",
          "COMBO CERDO"
        ],
        details: "Porción individual equilibrada para un almuerzo rápido y con todo el sazón oriental.",
        note: "* La bebida de cortesía aplica exclusivamente por consumo dentro del local. Consulta la bebida disponible del día.",
        image: "assets/images/promos/ejecutivos.webp",
        imageFallback: "assets/images/promos/ejecutivos.jpg"
      },
      {
        id: "combo-familiar",
        name: "COMBO FAMILIAR",
        badge: "Para Compartir",
        price: 1099,
        priceFormatted: "C$ 1,099.00",
        items: [
          "2 Lbs Arroz Chino Mixto",
          "2 Lbs Chow Mein Mixto",
          "1 Orden de Wantan",
          "1 Orden de Tacos"
        ],
        details: "4 libras de nuestras especialidades mixtas acompañadas de wantanes crujientes y tacos chinos.",
        note: "Ideal para 3 a 4 personas.",
        image: "assets/images/promos/21.webp",
        imageFallback: "assets/images/promos/21.jpg"
      },
      {
        id: "combo-antojado",
        name: "COMBO ANTOJADO",
        badge: "Banquetazo",
        price: 1550,
        priceFormatted: "C$ 1,550.00",
        items: [
          "2 Lbs Arroz Chino Mixto",
          "2 Lbs Chow Mein Mixto",
          "Pollo Agridulce",
          "1 Orden de Wantan",
          "2 Lt Pepsi"
        ],
        details: "Arroz, fideos, pollo agridulce crocante con piña y vegetales, wantanes y gaseosa familiar.",
        note: "Ideal para 4 a 5 personas.",
        image: "assets/images/promos/19.webp",
        imageFallback: "assets/images/promos/19.jpg"
      },
      {
        id: "combo-jefe",
        name: "COMBO JEFE",
        badge: "Selección Especial",
        price: 1650,
        priceFormatted: "C$ 1,650.00",
        items: [
          "2 Lbs Arroz Chino Especial",
          "2 Lbs Chop Suey Especial",
          "Pollo Agridulce",
          "1 Orden Wantan",
          "1 Orden Tacos Chinos"
        ],
        details: "El favorito de los amantes del buen comer: incluye las versiones Especiales (Camarón, Pollo y Cerdo) con doble entrada.",
        note: "Ideal para 4 a 5 personas con proteína triple.",
        image: "assets/images/promos/20.webp",
        imageFallback: "assets/images/promos/20.jpg"
      },
      {
        id: "combo-fiesta",
        name: "COMBO FIESTA",
        badge: "Para Grupos Grandes",
        price: 2700,
        priceFormatted: "C$ 2,700.00",
        items: [
          "4 Lbs Arroz Chino Mixto",
          "4 Lbs Chow Mein Mixto",
          "1 Pollo Agridulce",
          "1 Cerdo Agridulce",
          "2 Orden de Wantan",
          "4 Lt Pepsi (2 botellas de 2Lt)"
        ],
        details: "8 libras completas de platos fuertes, 2 platos agridulces completos, 2 órdenes de wantan y 4 litros de bebida.",
        note: "Perfecto para reuniones de 8 a 10 personas.",
        image: "assets/images/promos/18.webp",
        imageFallback: "assets/images/promos/18.jpg"
      }
    ]
  },

  // Platos Favoritos de la Casa (Destacados)
  favorites: [
    {
      id: "fav-chop-suey-esp",
      name: "CHOP SUEY ESPECIAL",
      categoryTag: "Chop Suey",
      price: 560,
      priceFormatted: "C$ 560.00",
      composition: "Camarón, Pollo y Cerdo",
      description: "Vegetales frescos al wok con tiernas carnes y camarones sobre crujiente cama de fideos fritos tradicionales. Acompañado de pan.",
      badge: "Favorito #1",
      image: "assets/images/dishes/chop_suey_esp.webp",
      imageFallback: "assets/images/dishes/chop_suey_esp.jpg"
    },
    {
      id: "fav-arroz-chino-esp",
      name: "ARROZ CHINO ESPECIAL",
      categoryTag: "Arroz Chino",
      price: 560,
      priceFormatted: "C$ 560.00",
      composition: "Camarón, Pollo y Cerdo",
      description: "Tradicional arroz frito salteado con camarón, pollo, cerdo tierno, vegetales y huevo con el toque ahumado del wok. Acompañado de pan.",
      badge: "Más Vendido",
      image: "assets/images/dishes/arroz_chino_esp.webp",
      imageFallback: "assets/images/dishes/arroz_chino_esp.jpg"
    },
    {
      id: "fav-chow-mein-esp",
      name: "CHOW MEIN ESPECIAL",
      categoryTag: "Chow Mein",
      price: 560,
      priceFormatted: "C$ 560.00",
      composition: "Camarón, Pollo y Cerdo",
      description: "Fideos salteados al punto sobre base precocida con abundantes camarones, pollo y cerdo con salsa oriental. Acompañado de pan.",
      badge: "Inconfundible",
      image: "assets/images/dishes/chow_mein_esp.webp",
      imageFallback: "assets/images/dishes/chow_mein_esp.jpg"
    },
    {
      id: "fav-lo-mein-esp",
      name: "LO MEIN ESPECIAL",
      categoryTag: "Lo Mein",
      price: 560,
      priceFormatted: "C$ 560.00",
      composition: "Camarón, Pollo y Cerdo",
      description: "Fideos orientales suaves salteados con jugosos trozos de res, cerdo y camarones bañados en salsa oscura de la casa. Acompañado de pan.",
      badge: "Tradicional",
      image: "assets/images/dishes/lo_mein_esp.webp",
      imageFallback: "assets/images/dishes/lo_mein_esp.jpg"
    },
    {
      id: "fav-cerdo-agridulce",
      name: "CERDO AGRIDULCE",
      categoryTag: "Platos Chinos",
      price: 380,
      priceFormatted: "C$ 380.00",
      description: "Pepino, piña, cebolla y chiltoma, bañados en salsa agridulce de la casa. Acompañados de Arroz y Pan.",
      badge: "Sabor Agridulce",
      image: "assets/images/dishes/cerdo_agridulce.webp",
      imageFallback: "assets/images/dishes/cerdo_agridulce.jpg"
    },
    {
      id: "fav-watan-camaron",
      name: "WATAN FRITO DE CAMARÓN",
      categoryTag: "Entradas",
      price: 240,
      priceFormatted: "C$ 240.00",
      description: "6 unidades de wantan rellenos de camarón, dorados y crujientes, acompañados de nuestra salsa agridulce.",
      badge: "Entrada Estrella",
      image: "assets/images/dishes/wantan_frito.webp",
      imageFallback: "assets/images/dishes/wantan_frito.jpg"
    },
    {
      id: "fav-tacos-chinos",
      name: "TACOS CHINOS",
      categoryTag: "Entradas",
      price: 150,
      priceFormatted: "C$ 150.00",
      description: "3 unidades de tacos chinos partidos por la mitad, crujientes por fuera y jugosos por dentro, acompañados de salsa agridulce.",
      badge: "Crujiente",
      image: "assets/images/dishes/tacos_chinos.webp",
      imageFallback: "assets/images/dishes/tacos_chinos.jpg"
    }
  ],

  // Familias Principales (Con Fotografía de Versión Especial + Variantes)
  families: [
    {
      id: "chop-suey",
      name: "CHOP SUEY",
      accompaniment: "Acompañados de Pan",
      description: "Selección de vegetales frescos salteados al wok, combinados con proteína a elección y auténticos sabores orientales. Servido sobre una cama de fideos fritos.",
      featuredPhoto: "assets/images/dishes/chop_suey_esp.webp",
      featuredPhotoFallback: "assets/images/dishes/chop_suey_esp.jpg",
      featuredPhotoCaption: "Fotografía: Versión Especial (Camarón, Pollo y Cerdo)",
      variants: [
        {
          id: "cs-especial",
          name: "CHOP SUEY ESPECIAL",
          composition: "Camarón, Pollo y Cerdo",
          price: 560,
          priceFormatted: "C$ 560.00",
          isEspecial: true
        },
        {
          id: "cs-camaron",
          name: "CHOP SUEY DE CAMARÓN",
          composition: "Solo Camarón",
          price: 560,
          priceFormatted: "C$ 560.00"
        },
        {
          id: "cs-res",
          name: "CHOP SUEY DE RES",
          composition: "Solo Res",
          price: 560,
          priceFormatted: "C$ 560.00"
        },
        {
          id: "cs-mixto",
          name: "CHOP SUEY MIXTO",
          composition: "Pollo y Cerdo",
          price: 500,
          priceFormatted: "C$ 500.00"
        },
        {
          id: "cs-pollo",
          name: "CHOP SUEY DE POLLO",
          composition: "Solo Pollo",
          price: 500,
          priceFormatted: "C$ 500.00"
        },
        {
          id: "cs-cerdo",
          name: "CHOP SUEY DE CERDO",
          composition: "Solo Cerdo",
          price: 500,
          priceFormatted: "C$ 500.00"
        },
        {
          id: "cs-vegetariano",
          name: "CHOP SUEY VEGETARIANO",
          composition: "Solo Vegetales",
          price: 500,
          priceFormatted: "C$ 500.00",
          isVegetarian: true
        }
      ]
    },
    {
      id: "chow-mein",
      name: "CHOW MEIN",
      accompaniment: "Acompañados de Pan",
      description: "Selección de vegetales frescos salteados al wok, combinados con proteína a elección y auténticos sabores orientales. Servido sobre una cama de fideos precocidos.",
      featuredPhoto: "assets/images/dishes/chow_mein_esp.webp",
      featuredPhotoFallback: "assets/images/dishes/chow_mein_esp.jpg",
      featuredPhotoCaption: "Fotografía: Versión Especial (Camarón, Pollo y Cerdo)",
      variants: [
        {
          id: "cm-especial",
          name: "CHOW MEIN ESPECIAL",
          composition: "Camarón, Pollo y Cerdo",
          price: 560,
          priceFormatted: "C$ 560.00",
          isEspecial: true
        },
        {
          id: "cm-camaron",
          name: "CHOW MEIN DE CAMARÓN",
          composition: "Solo Camarón",
          price: 560,
          priceFormatted: "C$ 560.00"
        },
        {
          id: "cm-res",
          name: "CHOW MEIN DE RES",
          composition: "Solo Res",
          price: 560,
          priceFormatted: "C$ 560.00"
        },
        {
          id: "cm-mixto",
          name: "CHOW MEIN MIXTO",
          composition: "Pollo y Cerdo",
          price: 500,
          priceFormatted: "C$ 500.00"
        },
        {
          id: "cm-pollo",
          name: "CHOW MEIN DE POLLO",
          composition: "Solo Pollo",
          price: 500,
          priceFormatted: "C$ 500.00"
        },
        {
          id: "cm-cerdo",
          name: "CHOW MEIN DE CERDO",
          composition: "Solo Cerdo",
          price: 500,
          priceFormatted: "C$ 500.00"
        },
        {
          id: "cm-vegetariano",
          name: "CHOW MEIN VEGETARIANO",
          composition: "Solo Vegetales",
          price: 500,
          priceFormatted: "C$ 500.00",
          isVegetarian: true
        }
      ]
    },
    {
      id: "arroz-chino",
      name: "ARROZ CHINO",
      accompaniment: "Acompañados de Pan",
      description: "Tradicional arroz salteado al wok con vegetales frescos, huevo y auténticos sabores de la cocina oriental.",
      featuredPhoto: "assets/images/dishes/arroz_chino_esp.webp",
      featuredPhotoFallback: "assets/images/dishes/arroz_chino_esp.jpg",
      featuredPhotoCaption: "Fotografía: Versión Especial (Camarón, Pollo y Cerdo)",
      variants: [
        {
          id: "ac-especial",
          name: "ARROZ CHINO ESPECIAL",
          composition: "Camarón, Pollo y Cerdo",
          price: 560,
          priceFormatted: "C$ 560.00",
          isEspecial: true
        },
        {
          id: "ac-camaron",
          name: "ARROZ CHINO DE CAMARÓN",
          composition: "Solo Camarón",
          price: 560,
          priceFormatted: "C$ 560.00"
        },
        {
          id: "ac-mixto",
          name: "ARROZ CHINO MIXTO",
          composition: "Pollo y Cerdo",
          price: 500,
          priceFormatted: "C$ 500.00"
        },
        {
          id: "ac-pollo",
          name: "ARROZ CHINO DE POLLO",
          composition: "Solo Pollo",
          price: 500,
          priceFormatted: "C$ 500.00"
        },
        {
          id: "ac-vegetariano",
          name: "ARROZ CHINO VEGETARIANO",
          composition: "Solo Vegetales",
          price: 500,
          priceFormatted: "C$ 500.00",
          isVegetarian: true
        }
      ]
    },
    {
      id: "lo-mein",
      name: "LO MEIN",
      accompaniment: "Acompañados de Pan",
      description: "Tradicional preparación de fideos orientales salteados al wok, combinados con vegetales frescos, proteína a elección y auténticos sabores asiáticos.",
      featuredPhoto: "assets/images/dishes/lo_mein_esp.webp",
      featuredPhotoFallback: "assets/images/dishes/lo_mein_esp.jpg",
      featuredPhotoCaption: "Fotografía: Versión Especial (Camarón, Pollo y Cerdo)",
      variants: [
        {
          id: "lm-especial",
          name: "LO MEIN ESPECIAL",
          composition: "Camarón, Pollo y Cerdo",
          price: 560,
          priceFormatted: "C$ 560.00",
          isEspecial: true
        },
        {
          id: "lm-camaron",
          name: "LO MEIN DE CAMARÓN",
          composition: "Solo Camarón",
          price: 560,
          priceFormatted: "C$ 560.00"
        },
        {
          id: "lm-res",
          name: "LO MEIN DE RES",
          composition: "Solo Res",
          price: 560,
          priceFormatted: "C$ 560.00"
        },
        {
          id: "lm-mixto",
          name: "LO MEIN MIXTO",
          composition: "Pollo y Cerdo",
          price: 500,
          priceFormatted: "C$ 500.00"
        },
        {
          id: "lm-pollo",
          name: "LO MEIN DE POLLO",
          composition: "Solo Pollo",
          price: 500,
          priceFormatted: "C$ 500.00"
        },
        {
          id: "lm-cerdo",
          name: "LO MEIN DE CERDO",
          composition: "Solo Cerdo",
          price: 500,
          priceFormatted: "C$ 500.00"
        },
        {
          id: "lm-vegetariano",
          name: "LO MEIN VEGETARIANO",
          composition: "Solo Vegetales",
          price: 500,
          priceFormatted: "C$ 500.00",
          isVegetarian: true
        }
      ]
    }
  ],

  // Catálogo por Secciones
  sections: [
    {
      id: "entradas",
      title: "ENTRADAS",
      subtitle: "Para comenzar a disfrutar",
      items: [
        {
          id: "ent-coctel-camarones",
          name: "CÓCTEL DE CAMARONES",
          price: 320,
          priceFormatted: "C$ 320.00",
          description: "Delicioso cóctel preparado con la salsa del chef, acompañado de 4 hojas de wantán."
        },
        {
          id: "ent-watan-frito-camaron",
          name: "WATAN FRITO DE CAMARÓN",
          price: 240,
          priceFormatted: "C$ 240.00",
          description: "6 unidades de wantan acompañados de nuestra salsa agridulce.",
          photo: "assets/images/dishes/wantan_frito.webp",
          photoFallback: "assets/images/dishes/wantan_frito.jpg",
          isPhotoOwner: true
        },
        {
          id: "ent-wantan-frito-pollo",
          name: "WANTAN FRITO DE POLLO",
          price: 200,
          priceFormatted: "C$ 200.00",
          description: "6 unidades de wantan acompañados de nuestra salsa agridulce."
        },
        {
          id: "ent-wantan-vapor-camaron",
          name: "WANTAN AL VAPOR DE CAMARÓN",
          price: 240,
          priceFormatted: "C$ 240.00",
          description: "6 unidades de wantan con relleno de camarón acompañados de salsa china y cebollín."
        },
        {
          id: "ent-wantan-vapor-pollo",
          name: "WANTAN AL VAPOR DE POLLO",
          price: 200,
          priceFormatted: "C$ 200.00",
          description: "6 unidades de wantan con relleno de pollo acompañados de salsa china y cebollín."
        },
        {
          id: "ent-consome-wantan",
          name: "CONSOMÉ DE WANTÁN",
          price: 190,
          priceFormatted: "C$ 190.00",
          description: "Una deliciosa entrada de caldo ligero y reconfortante, acompañada de delicados wantanes rellenos de pollo y verduras frescas. Ideal para abrir el apetito y disfrutar de los sabores tradicionales de la cocina china.",
          photo: "assets/images/dishes/consome_de_wantan.webp",
          photoFallback: "assets/images/dishes/consome_de_wantan.jpg",
          isPhotoOwner: true
        },
        {
          id: "ent-tacos-chinos",
          name: "TACOS CHINOS",
          price: 150,
          priceFormatted: "C$ 150.00",
          description: "3 unidades de tacos chinos partidos por la mitad acompañados de nuestra salsa agridulce.",
          photo: "assets/images/dishes/tacos_chinos.webp",
          photoFallback: "assets/images/dishes/tacos_chinos.jpg",
          isPhotoOwner: true
        }
      ]
    },

    {
      id: "sopas",
      title: "SOPAS",
      subtitle: "Caldos tradicionales servidos humeantes",
      items: [
        {
          id: "sop-tallarin-camarones",
          name: "TALLARÍN CON CAMARONES",
          price: 450,
          priceFormatted: "C$ 450.00",
          description: "Tradicional sopa china de tallarines con generosa porción de camarones frescos."
        },
        {
          id: "sop-wantan-camaron",
          name: "WANTAN CON CAMARÓN",
          price: 450,
          priceFormatted: "C$ 450.00",
          description: "Caldo artesanal con wantanes rellenos y camarones enteros."
        },
        {
          id: "sop-wantan-tallarin",
          name: "WANTAN CON TALLARÍN",
          price: 390,
          priceFormatted: "C$ 390.00",
          description: "Combinación clásica de wantanes y tallarines en caldo aromático oriental."
        },
        {
          id: "sop-tallarin-especial",
          name: "TALLARÍN ESPECIAL",
          price: 390,
          priceFormatted: "C$ 390.00",
          description: "Sopa de tallarines con combinación especial de carnes y caldo de la casa.",
          photo: "assets/images/dishes/tallarin_especial.webp",
          photoFallback: "assets/images/dishes/tallarin_especial.jpg",
          isPhotoOwner: true
        },
        {
          id: "sop-tallarin-pollo",
          name: "TALLARÍN CON POLLO",
          price: 360,
          priceFormatted: "C$ 360.00",
          description: "Sopa de fideos de trigo con tiernos trozos de pollo y vegetales."
        },
        {
          id: "sop-res-verduras",
          name: "RES CON VERDURAS",
          price: 360,
          priceFormatted: "C$ 360.00",
          description: "Sopa sustanciosa con res en tiras y variedad de vegetales frescos.",
          tag: "Sopa"
        },
        {
          id: "sop-pollo-verduras",
          name: "POLLO CON VERDURAS",
          price: 340,
          priceFormatted: "C$ 340.00",
          description: "Caldo reconfortante con pechuga de pollo y vegetales orientales.",
          tag: "Sopa"
        },
        {
          id: "sop-sopa-wantan",
          name: "SOPA DE WANTAN",
          price: 320,
          priceFormatted: "C$ 320.00",
          description: "Caldo claro con delicados wantanes chinos y cebollín fresco."
        },
        {
          id: "sop-extra-tallarines",
          name: "EXTRA DE TALLARINES",
          price: 50,
          priceFormatted: "C$ 50.00",
          description: "Porción adicional de tallarines para tus sopas.",
          isExtra: true
        }
      ]
    },

    {
      id: "platos-chinos",
      title: "PLATOS CHINOS",
      subtitle: "Acompañados de Arroz y Pan",
      items: [
        {
          id: "pc-camaron-verduras",
          name: "CAMARÓN CON VERDURAS",
          price: 580,
          priceFormatted: "C$ 580.00",
          description: "Brócoli, coliflor, frijoles en vaina, cebolla, chiltoma, apio, jengibre y salsa de soya."
        },
        {
          id: "pc-camaron-agridulce",
          name: "CAMARÓN AGRIDULCE",
          price: 520,
          priceFormatted: "C$ 520.00",
          description: "Pepino, piña, cebolla y chiltoma, bañados en salsa agridulce de la casa."
        },
        {
          id: "pc-res-cebollin",
          name: "RES CON CEBOLLÍN",
          price: 400,
          priceFormatted: "C$ 400.00",
          description: "Res, brócoli, y salsa a base de soya con un toque de jengibre."
        },
        {
          id: "pc-res-brocoli",
          name: "RES CON BROCOLI",
          price: 400,
          priceFormatted: "C$ 400.00",
          description: "Res, brócoli, y salsa a base de soya con un toque de jengibre.",
          photo: "assets/images/dishes/res_con_brocoli.webp",
          photoFallback: "assets/images/dishes/res_con_brocoli.jpg",
          isPhotoOwner: true
        },
        {
          id: "pc-res-verduras",
          name: "RES CON VERDURAS",
          price: 400,
          priceFormatted: "C$ 400.00",
          description: "Brócoli, coliflor, frijoles en vaina, cebolla, chiltoma, apio, jengibre y salsa de soya.",
          tag: "Plato Fuerte"
        },
        {
          id: "pc-pollo-verduras",
          name: "POLLO CON VERDURAS",
          price: 400,
          priceFormatted: "C$ 400.00",
          description: "Brócoli, coliflor, frijoles en vaina, cebolla, chiltoma, apio, jengibre y salsa de soya.",
          photo: "assets/images/dishes/pollo_con_verduras.webp",
          photoFallback: "assets/images/dishes/pollo_con_verduras.jpg",
          isPhotoOwner: true,
          tag: "Plato Fuerte"
        },
        {
          id: "pc-pollo-curry",
          name: "POLLO AL CURRY",
          price: 400,
          priceFormatted: "C$ 400.00",
          description: "Jugosos trozos de pollo y vegetales frescos salteados en una deliciosa salsa de curry con un toque de especias orientales."
        },
        {
          id: "pc-pollo-agridulce",
          name: "POLLO AGRIDULCE",
          price: 380,
          priceFormatted: "C$ 380.00",
          description: "Pepino, piña, cebolla y chiltoma, bañados en salsa agridulce de la casa."
        },
        {
          id: "pc-cerdo-agridulce",
          name: "CERDO AGRIDULCE",
          price: 380,
          priceFormatted: "C$ 380.00",
          description: "Pepino, piña, cebolla y chiltoma, bañados en salsa agridulce de la casa.",
          photo: "assets/images/dishes/cerdo_agridulce.webp",
          photoFallback: "assets/images/dishes/cerdo_agridulce.jpg",
          isPhotoOwner: true
        },
        {
          id: "pc-beefsteak-chino",
          name: "BEEFSTEAK CHINO",
          price: 380,
          priceFormatted: "C$ 380.00",
          description: "Salsa roja, cebolla, tomate, chiltoma, apio y chile al gusto."
        }
      ]
    },

    {
      id: "platos-internacionales",
      title: "PLATOS INTERNACIONALES",
      subtitle: "Acompañado de Arroz, Papas Fritas y Ensalada",
      items: [
        {
          id: "pi-arroz-camarones",
          name: "ARROZ CON CAMARONES",
          price: 560,
          priceFormatted: "C$ 560.00",
          description: "Arroz a la valenciana de camarones."
        },
        {
          id: "pi-arroz-pollo",
          name: "ARROZ CON POLLO",
          price: 420,
          priceFormatted: "C$ 420.00",
          description: "Arroz a la valenciana de pollo."
        },
        {
          id: "pi-camarones-empanizados",
          name: "CAMARONES EMPANIZADOS",
          price: 530,
          priceFormatted: "C$ 530.00",
          description: "Empanizado de la casa, acompañados con salsa tártara de la casa.",
          photo: "assets/images/dishes/camarones_empanizados.webp",
          photoFallback: "assets/images/dishes/camarones_empanizados.jpg",
          isPhotoOwner: true
        },
        {
          id: "pi-camarones-salsa",
          name: "CAMARONES EN SALSA",
          price: 530,
          priceFormatted: "C$ 530.00",
          description: "Tomate, cebolla, chiltoma, servidos con salsa roja."
        },
        {
          id: "pi-camarones-ajillo",
          name: "CAMARONES AL AJILLO",
          price: 520,
          priceFormatted: "C$ 520.00",
          description: "Fritos en mantequilla de ajo, acompañados de papas fritas."
        },
        {
          id: "pi-churrasco",
          name: "CHURRASCO",
          price: 500,
          priceFormatted: "C$ 500.00",
          description: "Acompañado del chimichurri de la casa."
        },
        {
          id: "pi-filete-res",
          name: "FILETE DE RES",
          price: 420,
          priceFormatted: "C$ 420.00",
          description: "Filete de res a la plancha."
        },
        {
          id: "pi-beefsteak-encebollado",
          name: "BEEFSTEAK ENCEBOLLADO",
          price: 420,
          priceFormatted: "C$ 420.00",
          description: "Res a la plancha, con ensalada bañada en vinagreta de la casa y papas fritas."
        },
        {
          id: "pi-chuleta-cerdo-mixta",
          name: "CHULETA DE CERDO MIXTA",
          price: 400,
          priceFormatted: "C$ 400.00",
          description: "Chuleta de cerdo empanizada entomatada y encebollada."
        },
        {
          id: "pi-chuleta-cerdo",
          name: "CHULETA DE CERDO",
          price: 400,
          priceFormatted: "C$ 400.00",
          description: "Chuleta de cerdo empanizada encebollada.",
          photo: "assets/images/dishes/chuleta_de_cerdo_encebollada.webp",
          photoFallback: "assets/images/dishes/chuleta_de_cerdo_encebollada.jpg",
          isPhotoOwner: true
        },
        {
          id: "pi-lomito-cerdo",
          name: "LOMITO DE CERDO",
          price: 400,
          priceFormatted: "C$ 400.00",
          description: "Lomo a la plancha."
        },
        {
          id: "pi-filete-pollo-empanizado",
          name: "FILETE DE POLLO EMPANIZADO",
          price: 380,
          priceFormatted: "C$ 380.00",
          description: "Pechuga de pollo empanizada."
        },
        {
          id: "pi-filete-pollo",
          name: "FILETE DE POLLO",
          price: 360,
          priceFormatted: "C$ 360.00",
          description: "Filete de pollo a la plancha."
        },
        {
          id: "pi-dedos-pollo",
          name: "DEDOS DE POLLO",
          price: 300,
          priceFormatted: "C$ 300.00",
          description: "6 dedos de pollo empanizados acompañados unicamente de papitas fritas y salsa tártara de la casa."
        }
      ]
    },

    {
      id: "bebidas",
      title: "BEBIDAS",
      subtitle: "Refrescantes y tradicionales",
      items: [
        { id: "beb-gaseosas", name: "GASEOSAS", price: 50, priceFormatted: "C$ 50.00", description: "Variedad de sabores clásicos" },
        { id: "beb-gaseosas-lata", name: "GASEOSAS EN LATA", price: 50, priceFormatted: "C$ 50.00", description: "Lata fría 355 ml" },
        { id: "beb-limonada-natural", name: "LIMONADA NATURAL", price: 70, priceFormatted: "C$ 70.00", description: "Recién exprimida con toque refrescante" },
        { id: "beb-fruit-punch", name: "FRUIT PUNCH", price: 70, priceFormatted: "C$ 70.00", description: "Mezcla dulce de frutas de temporada" },
        { id: "beb-te-jamaica", name: "TE DE JAMAICA", price: 70, priceFormatted: "C$ 70.00", description: "Infusión natural de flor de jamaica" },
        { id: "beb-jugo-naranja", name: "JUGO DE NARANJA", price: 70, priceFormatted: "C$ 70.00", description: "Jugo natural cítrico" },
        { id: "beb-te-lipton", name: "TÉ LIPTON", price: 70, priceFormatted: "C$ 70.00", description: "Té helado aromático" },
        { id: "beb-agua-purificada", name: "AGUA PURIFICADA", price: 50, priceFormatted: "C$ 50.00", description: "Botella personal purificada" },
        { id: "beb-soda-ensa", name: "SODA ENSA", price: 50, priceFormatted: "C$ 50.00", description: "Agua con gas / soda" }
      ]
    },

    {
      id: "cervezas-seltzer",
      title: "CERVEZAS / SELTZER",
      subtitle: "Bien frías para acompañar tus platos",
      items: [
        { id: "cer-hard-seltzer", name: "HARD SELTZER", price: 70, priceFormatted: "C$ 70.00", description: "Bebida con gas ligera y frutal" },
        { id: "cer-tona", name: "TOÑA", price: 70, priceFormatted: "C$ 70.00", description: "La cerveza de Nicaragua bien fría" },
        { id: "cer-victoria-clasica", name: "VICTORIA CLASICA", price: 70, priceFormatted: "C$ 70.00", description: "Cerveza nacional tradicional" },
        { id: "cer-victoria-frost", name: "VICTORIA FROST", price: 70, priceFormatted: "C$ 70.00", description: "Microfiltrada en frío" },
        { id: "cer-boreal", name: "BOREAL", price: 85, priceFormatted: "C$ 85.00", description: "Sabor fresco y ligero" },
        { id: "cer-heineken", name: "HEINEKEN", price: 110, priceFormatted: "C$ 110.00", description: "Premium lager importada" },
        { id: "cer-smirnoff-ice", name: "SMIRNOFF ICE", price: 100, priceFormatted: "C$ 100.00", description: "Bebida saborizada con toque cítrico" },
        { id: "cer-mix-michelada", name: "MIX DE MICHELADA", price: 50, priceFormatted: "C$ 50.00", description: "Limón, salsas y escarchado de sal para tu cerveza" }
      ]
    },

    {
      id: "postres",
      title: "POSTRES",
      subtitle: "El toque dulce final",
      items: [
        {
          id: "pos-mesero",
          name: "PREGUNTA A NUESTRO MESERO!",
          price: 120,
          priceFormatted: "C$ 120.00",
          description: "Consulta las deliciosas opciones de postres del día recién preparados."
        }
      ]
    },

    {
      id: "extras",
      title: "EXTRAS Y GUARNICIONES",
      subtitle: "Personaliza y complementa tus platos",
      items: [
        { id: "ext-pan", name: "PAN", price: 20, priceFormatted: "C$ 20.00" },
        { id: "ext-arroz-blanco", name: "ARROZ BLANCO", price: 50, priceFormatted: "C$ 50.00" },
        { id: "ext-churros", name: "CHURROS", price: 50, priceFormatted: "C$ 50.00" },
        { id: "ext-tallarin", name: "TALLARÍN", price: 50, priceFormatted: "C$ 50.00" },
        { id: "ext-salsa-tartara", name: "SALSA TÁRTARA", price: 50, priceFormatted: "C$ 50.00" },
        { id: "ext-salsa-agridulce", name: "SALSA AGRIDULCE", price: 50, priceFormatted: "C$ 50.00" },
        { id: "ext-taco-chino-1und", name: "TACO CHINO (1UND)", price: 50, priceFormatted: "C$ 50.00" },
        { id: "ext-brocoli", name: "BROCOLI", price: 60, priceFormatted: "C$ 60.00" },
        { id: "ext-cebollin", name: "CEBOLLÍN", price: 60, priceFormatted: "C$ 60.00" },
        { id: "ext-verduras", name: "VERDURAS", price: 60, priceFormatted: "C$ 60.00" },
        { id: "ext-ensalada", name: "ENSALADA", price: 80, priceFormatted: "C$ 80.00" },
        { id: "ext-wantan-2und", name: "WANTAN (2UND)", price: 80, priceFormatted: "C$ 80.00" },
        { id: "ext-papas-fritas", name: "PAPAS FRITAS", price: 100, priceFormatted: "C$ 100.00" },
        { id: "ext-cerdo", name: "CERDO", price: 100, priceFormatted: "C$ 100.00" },
        { id: "ext-pollo", name: "POLLO", price: 100, priceFormatted: "C$ 100.00" },
        { id: "ext-res", name: "RES", price: 120, priceFormatted: "C$ 120.00" },
        { id: "ext-camaron", name: "CAMARÓN", price: 200, priceFormatted: "C$ 200.00" }
      ]
    }
  ]
};

// Exportar globalmente para scripts del navegador
if (typeof window !== "undefined") {
  window.MENU_DATA = MENU_DATA;
}
