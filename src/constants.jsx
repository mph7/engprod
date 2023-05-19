const accounts = {
  engenhariadeproducao: {
    accountName: 'engenhariadeproducao.unifsp', accountImage: './images/instagram/account-image-1.jpg',
  },
  atletica: {
    accountName: 'atleticaengenharia_producao', accountImage: './images/instagram/account-image-2.jpg'
  }
};

export const instagramPosts = {
  'activities': [ {
    account: accounts.engenhariadeproducao, post: {
      postImage: './images/instagram/activities-1.jpg',
      postLink: 'https://www.instagram.com/p/Chs5YY4OMVZ/?img_index=1',
    },
  }, {
    account: accounts.engenhariadeproducao, post: {
      postImage: './images/instagram/activities-2.jpg',
      postLink: 'https://www.instagram.com/p/Ck_ptkwOJW9/?img_index=8',
    },
  } ], 'visit': [ {
    account: accounts.engenhariadeproducao, post: {
      postImage: './images/instagram/visit-1.jpg', postLink: 'https://www.instagram.com/p/Cr_4VXCOVoj/?img_index=1',
    },
  }, {
    account: accounts.engenhariadeproducao, post: {
      postImage: './images/instagram/visit-2.jpg', postLink: 'https://www.instagram.com/p/CmRcsPWuGC4/?img_index=1',
    },
  } ], 'week': [ {
    account: accounts.engenhariadeproducao, post: {
      postImage: './images/instagram/week-1.jpg', postLink: 'https://www.instagram.com/p/CkeJa2IufbG/?img_index=1',
    },
  }, {
    account: accounts.engenhariadeproducao, post: {
      postImage: './images/instagram/week-2.jpg', postLink: 'https://www.instagram.com/p/CkuUPqVuHXN/?img_index=1',
    },
  } ], 'athletic': [ {
    account: accounts.atletica, post: {
      postImage: './images/instagram/athletic-1.webp', postLink: 'https://www.instagram.com/p/CrM1Z7_uYDq/?img_index=1',
    },
  }, {
    account: accounts.atletica, post: {
      postImage: './images/instagram/athletic-2.webp', postLink: 'https://www.instagram.com/p/Cn4bJ79Owxy/?img_index=1',
    },
  } ],
};