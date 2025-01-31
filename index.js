const app = Vue.createApp({
  created() {
    // Initialize selectedCounters with null or a default value
    this.selectedCounters = new Array(this.products.length).fill(null);
    this.selectedCounters2 = new Array(this.products.length).fill(null);
  },
  computed: {
    total() {
      return (this.totalSum = this.sum + this.sum2);
    },
  },
  methods: {
    onChange() {
      this.sum = 0;
      this.selectedCounters.forEach((value) => (this.sum += value));
    },
    onChange2() {
      this.sum2 = 0;
      this.selectedCounters2.forEach((value) => (this.sum2 += value));
    },
  },
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
      numbers: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],

      selectedCounters: [],
      selectedCounters2: [],
      sum: 0,
      sum2: 0,
      totalSum: 0,
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
