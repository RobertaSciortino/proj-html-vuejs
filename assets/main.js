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
    ]
  }
});
