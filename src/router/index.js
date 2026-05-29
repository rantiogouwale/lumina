import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '@/views/AccueilView.vue'
import ProductsView from '@/views/ProductsView.vue'
import ProductDetailsView from '@/views/ProductDetailsView.vue'
import CardView from '@/views/CardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: AccueilView,
    },
    {
      path: '/products',
      name: 'Products',
      component: ProductsView,
    },
    {
      path: '/products/:id',
      name: 'ProductDetail',
      component: ProductDetailsView,
    },
    {
      path: '/cart',
      name: 'cartview',
      component: CardView,
    },

  ],
})

export default router
