const app = Vue.createApp({
  data() {
    return {
      products: [
        'Banan / Hasselnötskräm (Nutella)',
        'Kokos / Hasselnötskräm (Nutella)',
        'Mint / Mörk choklad',
        'Passionsfrukt / Kond. mjölk',
        'Vanilj karamell',
        'Choklad / Kaka',
        'Cookies & Cream (Oreo)',
        'Citron / Lime',
        'Hallon',
        'Jordgubb (Ekologisk)',
        'Mango (Ekologisk)',
        'Tropical',
        'Ananas (Ekologisk)',
        'Kiwi',
        'Kokos',
      ],
    };
  },
});

app.component('table-data', {
  template: `
        <tr>
          <td class="amountOf">1</td>
          <td class="amountOf">2</td>
        </tr>
    `,
});

const Home = {
  template: `
    
    `,
};
const Page = {
  template: `
    <h1>Page</h1>
    `,
};

const routes = [
  {
    component: Home,
    path: '/',
  },
  { component: Page, path: '/page' },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

app.use(router);

app.mount('#app');
