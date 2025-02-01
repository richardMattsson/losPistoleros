if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/losPistoleros/service-worker.js')
    .then((reg) => console.log('Service Worker registered', reg))
    .catch((err) => console.log('Service Worker error', err));
}

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
  data() {
    return {
      showForm: false,
      products: [
        { id: 1, name: 'Banan / Hasselnötskräm (Nutella)' },
        { id: 2, name: 'Kokos / Hasselnötskräm (Nutella)' },
        { id: 3, name: 'Mint / Mörk choklad' },
        { id: 4, name: 'Passionsfrukt / Kond. mjölk' },
        { id: 5, name: 'Vanilj karamell' },
        { id: 6, name: 'Choklad / Kaka' },
        { id: 7, name: 'Cookies & Cream (Oreo)' },
        { id: 8, name: 'Citron / Lime' },
        { id: 9, name: 'Hallon' },
        { id: 10, name: 'Jordgubb (Ekologisk)' },
        { id: 11, name: 'Mango (Ekologisk)' },
        { id: 12, name: 'Tropical' },
        { id: 13, name: 'Ananas (Ekologisk)' },
        { id: 14, name: 'Kiwi' },
        { id: 15, name: 'Kokos' },
      ],
      numbers: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
      newProductName: '',
      nextId: 16,
      selectedCounters: [],
      selectedCounters2: [],
      sum: 0,
      sum2: 0,
      totalSum: 0,
      userEmail: '',
    };
  },
  methods: {
    addProduct() {
      if (this.newProductName) {
        this.products.push({
          id: this.nextId++,
          name: this.newProductName,
        });
        this.newProductName = '';
      }
    },
    removeProduct(id) {
      this.products = this.products.filter((product) => product.id !== id);
    },
    onSend() {
      this.sendClicked = true;
      console.log('hej');
      alert(this.totalSum);
    },
    onChange() {
      this.sum = 0;
      this.selectedCounters.forEach((value) => (this.sum += value));
    },
    onChange2() {
      this.sum2 = 0;
      this.selectedCounters2.forEach((value) => (this.sum2 += value));
    },
  },
});

// const Home = {
//   template: `

//     `,
// };
// const Page = {
//   template: `
//     <h1>Page</h1>
//     `,
// };

// const routes = [
//   {
//     component: Home,
//     path: '/',
//   },
//   { component: Page, path: '/page' },
// ];

// const router = VueRouter.createRouter({
//   history: VueRouter.createWebHashHistory(),
//   routes,
// });

// app.use(router);

app.mount('#app');
