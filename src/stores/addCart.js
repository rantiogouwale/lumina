import { ref,computed } from 'vue'
import { defineStore } from 'pinia'
import { openKkiapayWidget} from 'kkiapay'

export const useCartStore = defineStore('cart', () => {
  const cartItems = ref([])

  function addToCart(product) {
    const existe = cartItems.value.find((item) => item.id === product.id)
    if (existe) {
      existe.quantity++
    } else {
      cartItems.value.push({ ...product, quantity: 1 })
    }
  }

  function removeFromCart(id) {
    cartItems.value = cartItems.value.filter((item) => item.id !== id)
  }

  function increaseQty(id) {
  const item = cartItems.value.find((item) => item.id === id)
  if (item) item.quantity++
}

function decreaseQty(id) {
  const item = cartItems.value.find((item) => item.id === id)
  if (item) {
    if (item.quantity > 1) {
      item.quantity--
    } else {
      removeFromCart(id)
    }
  }
}

function payer(montant) {
  openKkiapayWidget({
    amount: Math.round(montant),
    api_key: '5c2e8bf05b7d11f1b65de76b5fd4032f',
    sandbox: true,
    phone: '22900000000',
    email: 'test@gmail.com',
    name: 'LUMINA',
    callback: 'http://localhost:5173/success',
    theme: '#2563eb'
  })
}

  const total = computed(() => {
    return cartItems.value.reduce((acc, item) => acc + item.price * item.quantity, 0)
  })

  const totalItems = computed(() => {
    return cartItems.value.reduce((acc, item) => acc + item.quantity, 0)
  })

  return { cartItems, addToCart, removeFromCart, increaseQty, decreaseQty,payer, total, totalItems }
})



