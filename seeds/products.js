const productsList = [
  {
    title: "Camiseta Masculina Básica",
    name: "Camiseta Básica",
    description: "Camiseta em algodão, ideal para o dia a dia.",
    price: 49.99,
    photosUrls: [
      "/home/rafaelfacundo/Documents/FASHION_SITE/FASHION_STORE_SITE_BACK_END/seeds/images/male/basic_tShirt_1.png",
      "/home/rafaelfacundo/Documents/FASHION_SITE/FASHION_STORE_SITE_BACK_END/seeds/images/male/basic_tShirt_2.png",
      "/home/rafaelfacundo/Documents/FASHION_SITE/FASHION_STORE_SITE_BACK_END/seeds/images/male/basic_tShirt_3.png",
    ],
    sizes: ["P", "M", "G", "GG"],
    category: "masculino",
    stock: 100,
    colors: ["Branco", "Preto", "Azul"],
  },
  {
    title: "Calça Jeans Masculina",
    name: "Calça Jeans Slim Fit",
    description: "Calça jeans com corte slim fit, confortável e moderna.",
    price: 129.99,
    photosUrls: [
      "/home/rafaelfacundo/Documents/FASHION_SITE/FASHION_STORE_SITE_BACK_END/seeds/images/male/jeans_1.png",
      "/home/rafaelfacundo/Documents/FASHION_SITE/FASHION_STORE_SITE_BACK_END/seeds/images/male/jeans_2.png",
    ],
    sizes: ["38", "40", "42", "44"],
    category: "masculino",
    stock: 50,
    colors: ["Azul Claro", "Azul Escuro"],
  },
  {
    title: "Jaqueta de Couro Masculina",
    name: "Jaqueta de Couro",
    description: "Jaqueta estilosa em couro sintético.",
    price: 299.99,
    photosUrls: [
      "/home/rafaelfacundo/Documents/FASHION_SITE/FASHION_STORE_SITE_BACK_END/seeds/images/male/jacket_1.png",
      "/home/rafaelfacundo/Documents/FASHION_SITE/FASHION_STORE_SITE_BACK_END/seeds/images/male/jacket_2.png",
    ],
    sizes: ["M", "G", "GG"],
    category: "masculino",
    stock: 20,
    colors: ["Preto", "Marrom"],
  },
  {
    title: "Camisa Social Masculina",
    name: "Camisa Social",
    description: "Camisa social 100% algodão, ideal para eventos formais.",
    price: 89.99,
    photosUrls: [
      "/home/rafaelfacundo/Documents/FASHION_SITE/FASHION_STORE_SITE_BACK_END/seeds/images/male/formal_dress1.png",
      "/home/rafaelfacundo/Documents/FASHION_SITE/FASHION_STORE_SITE_BACK_END/seeds/images/male/formal_dress2.png",
    ],
    sizes: ["P", "M", "G"],
    category: "masculino",
    stock: 70,
    colors: ["Branco", "Cinza"],
  },
  {
    title: "Tênis Esportivo Masculino",
    name: "Tênis Running",
    description: "Tênis leve e confortável para atividades esportivas.",
    price: 199.99,
    photosUrls: [
      "/home/rafaelfacundo/Documents/FASHION_SITE/FASHION_STORE_SITE_BACK_END/seeds/images/male/tennis1.png",
      "/home/rafaelfacundo/Documents/FASHION_SITE/FASHION_STORE_SITE_BACK_END/seeds/images/male/tennis2.png",
    ],
    sizes: ["39", "40", "41", "42", "43"],
    category: "masculino",
    stock: 80,
    colors: ["Preto", "Cinza", "Verde"],
  },
  {
    title: "Blusa Feminina de Tricô",
    name: "Blusa de Tricô",
    description: "Blusa quentinha em tricô, ideal para o inverno.",
    price: 79.99,
    photosUrls: [
      "/home/rafaelfacundo/Documents/FASHION_SITE/FASHION_STORE_SITE_BACK_END/seeds/images/female/knit1.png",
      "/home/rafaelfacundo/Documents/FASHION_SITE/FASHION_STORE_SITE_BACK_END/seeds/images/female/knit2.png",
    ],
    sizes: ["P", "M", "G"],
    category: "feminino",
    stock: 50,
    colors: ["Bege", "Vermelho"],
  },
  {
    title: "Vestido Midi Floral",
    name: "Vestido Floral",
    description: "Vestido com estampa floral, perfeito para o verão.",
    price: 139.99,
    photosUrls: [
      "/home/rafaelfacundo/Documents/FASHION_SITE/FASHION_STORE_SITE_BACK_END/seeds/images/female/floral_dress1.png",
      "/home/rafaelfacundo/Documents/FASHION_SITE/FASHION_STORE_SITE_BACK_END/seeds/images/female/floral_dress2.png",
    ],
    sizes: ["P", "M", "G"],
    category: "feminino",
    stock: 30,
    colors: ["Rosa", "Verde"],
  },
  {
    title: "Saia Jeans Feminina",
    name: "Saia Jeans",
    description: "Saia jeans com botão frontal, estilo casual.",
    price: 89.99,
    photosUrls: [
      "/home/rafaelfacundo/Documents/FASHION_SITE/FASHION_STORE_SITE_BACK_END/seeds/images/female/jeans_skirt1.png",
      "/home/rafaelfacundo/Documents/FASHION_SITE/FASHION_STORE_SITE_BACK_END/seeds/images/female/jeans_skirt2.png",
    ],
    sizes: ["36", "38", "40", "42"],
    category: "feminino",
    stock: 60,
    colors: ["Azul Claro", "Preto"],
  },
  {
    title: "Sandália Rasteira Feminina",
    name: "Sandália Rasteira",
    description: "Sandália confortável, perfeita para o dia a dia.",
    price: 59.99,
    photosUrls: [
      "/home/rafaelfacundo/Documents/FASHION_SITE/FASHION_STORE_SITE_BACK_END/seeds/images/female/sandal1.png",
      "/home/rafaelfacundo/Documents/FASHION_SITE/FASHION_STORE_SITE_BACK_END/seeds/images/female/sandal2.png",
    ],
    sizes: ["35", "36", "37", "38", "39"],
    category: "feminino",
    stock: 100,
    colors: ["Dourado", "Prata"],
  },
  {
    title: "Bolsa de Couro Feminina",
    name: "Bolsa Casual",
    description: "Bolsa de couro sintético, ideal para uso diário.",
    price: 159.99,
    photosUrls: [
      "/home/rafaelfacundo/Documents/FASHION_SITE/FASHION_STORE_SITE_BACK_END/seeds/images/female/leather_bag1.png",
      "/home/rafaelfacundo/Documents/FASHION_SITE/FASHION_STORE_SITE_BACK_END/seeds/images/female/leather_bag2.png",
    ],
    sizes: [],
    category: "feminino",
    stock: 25,
    colors: ["Marrom", "Preto"],
  },
  {
    title: "Camiseta Infantil Estampada",
    name: "Camiseta Infantil",
    description: "Camiseta divertida com estampas coloridas.",
    price: 39.99,
    photosUrls: [
      "/home/rafaelfacundo/Documents/FASHION_SITE/FASHION_STORE_SITE_BACK_END/seeds/images/children/shirt1.png",
      "/home/rafaelfacundo/Documents/FASHION_SITE/FASHION_STORE_SITE_BACK_END/seeds/images/children/shirt2.png",
    ],
    sizes: ["2", "4", "6", "8"],
    category: "infantil",
    stock: 120,
    colors: ["Amarelo", "Azul", "Verde"],
  },
  {
    title: "Shorts Infantil",
    name: "Shorts Verão",
    description: "Shorts leve e confortável para brincar.",
    price: 49.99,
    photosUrls: [
      "/home/rafaelfacundo/Documents/FASHION_SITE/FASHION_STORE_SITE_BACK_END/seeds/images/children/short1.png",
      "/home/rafaelfacundo/Documents/FASHION_SITE/FASHION_STORE_SITE_BACK_END/seeds/images/children/short2.png",
    ],
    sizes: ["2", "4", "6", "8"],
    category: "infantil",
    stock: 80,
    colors: ["Rosa", "Azul"],
  },
  {
    title: "Tênis Infantil Colorido",
    name: "Tênis Colorido",
    description: "Tênis confortável e estiloso para crianças.",
    price: 129.99,
    photosUrls: [
      "/home/rafaelfacundo/Documents/FASHION_SITE/FASHION_STORE_SITE_BACK_END/seeds/images/children/shoes1.png",
      "/home/rafaelfacundo/Documents/FASHION_SITE/FASHION_STORE_SITE_BACK_END/seeds/images/children/shoes2.png",
    ],
    sizes: ["28", "30", "32", "34"],
    category: "infantil",
    stock: 40,
    colors: ["Multicolorido", "Branco"],
  },
  {
    title: "Mochila Escolar Infantil",
    name: "Mochila Escolar",
    description: "Mochila leve e prática para o dia a dia escolar.",
    price: 99.99,
    photosUrls: [
      "/home/rafaelfacundo/Documents/FASHION_SITE/FASHION_STORE_SITE_BACK_END/seeds/images/children/bag1.png",
      "/home/rafaelfacundo/Documents/FASHION_SITE/FASHION_STORE_SITE_BACK_END/seeds/images/children/bag2.png",
    ],
    sizes: [],
    category: "infantil",
    stock: 30,
    colors: ["Azul", "Vermelho"],
  },
  {
    title: "Pijama Infantil de Algodão",
    name: "Pijama Infantil",
    description: "Pijama confortável para uma boa noite de sono.",
    price: 69.99,
    photosUrls: [
      "/home/rafaelfacundo/Documents/FASHION_SITE/FASHION_STORE_SITE_BACK_END/seeds/images/children/pajamas1.png",
      "/home/rafaelfacundo/Documents/FASHION_SITE/FASHION_STORE_SITE_BACK_END/seeds/images/children/pajamas2.png",
    ],
    sizes: ["2", "4", "6", "8"],
    category: "infantil",
    stock: 60,
    colors: ["Rosa", "Cinza"],
  },
];

export default productsList;
