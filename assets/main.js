var app = new Vue ({
  el: '#root',
  data: {
    icons: [
      'fab fa-facebook-f',
      'fab fa-twitter',
      'fab fa-instagram',
      'fab fa-youtube'
    ],
    headerTop: [
      {
        cartVisible: false,
        name: 'Shopping cart',
        iconVisible: false,
        classIcon: 'fas fa-angle-down'
      },
      {
        cartVisible: false,
        name:'My Account',
        iconVisible: true,
        classIcon: 'fas fa-angle-down'
      },
      {
        cartVisible: true,
        name: 'CART',
        iconVisible: true,
        classIcon: 'fas fa-chevron-down'
      }
    ],
    mainHeaderNav: [
      {
        name: 'Home',
        dropMenuIconVisible: true
      },
      {
        name:'Shop',
        dropMenuIconVisible: true
      },
      {
        name: 'Products',
        dropMenuIconVisible: true
      },
      {
        name: 'Categories',
        dropMenuIconVisible: true
      },
      {
        name: 'News',
        dropMenuIconVisible: false
      },
      {
        name: 'Elements',
        dropMenuIconVisible: true
      }
    ],
    topRatedProducts: [
      {
        name: 'Black Leather Jacket',
        oldPriceVisible: true,
        oldPrice: '$235',
        newPrice: '$200',
        image: 'black_elegant_leather_jacket-120x156.jpg'
      },
      {
        name: 'Leather Gloves',
        oldPriceVisible: false,
        oldPrice: '',
        newPrice: '$45',
        image: 'leather_gloves-120x156.jpg'
      },
      {
        name: 'Spring Dress',
        oldPriceVisible: false,
        oldPrice: '',
        newPrice: '$47',
        image: 'spring_printed_dress-120x156.jpg'
      }
    ],
    stars: 5,
    recentPosts: [
      'Aenean lobortis sapien enim viverra',
      'Duis ac massa semper maximus',
      'Nunc fermint nulla eu justo sem id',
      'Aliquam posuere magna eget nibh',
      'Cras ac nulla ac consecte rutrum',
      'Fusce mattis nunc ut aliquam'
    ],
    tags: [
      'Black', 'boots', 'Brown', 'Casual', 'D&G', 'Fabric', 'flowers','Grey', 'hat', 'Hipster', 'lines', 'multi-purpose', 'New York', 'Outdoors', 'red', 'responsive', 'summer', 'sweater', 'Travel', 'Warm', 'White', 'winter'
    ],
    copyright: [
      '©Copyright 2012-2020',
      'Avada Theme by Theme Fusion',
      'All Rights Reserved',
      'Powered By Wordpress'
    ]
  }
});
