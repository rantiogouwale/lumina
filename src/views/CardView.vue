<script setup>
import { useCartStore } from '@/stores/addCart'
import { storeToRefs } from 'pinia'
import Header from '@/components/Header.vue'
import FooterFour from '@/components/FooterFour.vue'

import { computed, ref } from 'vue'

const store = useCartStore()

const { cartItems, total, totalItems } = storeToRefs(store)

const { addToCart, increaseQty, decreaseQty,payer, removeFromCart } = store



const tax = ref(15)

function totaltaxe() {
  return parseFloat(((total.value * tax.value) / 100).toFixed(2))
}
const totalFormate = computed(() => total.value.toFixed(2))

const allTotal = computed(() => {
  return parseFloat((totaltaxe() + total.value).toFixed(2))
})

</script>

<template>
  <header>
    <Header />
  </header>
  <main>
    <div class="container">

      <div class="card_flex">
        <h1 class="main-title">Your Cart</h1>
        <p class="subtitle">Review your items before proceeding to checkout.</p>

        <div v-for="item in cartItems" :key="item.id" class="cart-item">
          <div class="item-left">
            <div class="item-img">
              <img :src="item.img" />
            </div>

            <div class="item-info">
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>

              <div class="mini-qty">

                <span @click="decreaseQty(item.id)">−</span>
                <span>{{ item.quantity }}</span>
                <span @click="increaseQty(item.id)">+</span>
              </div>
            </div>
          </div>

          <div class="item-price">${{ item.price }}</div>
        </div>

        <h2 class="section-title">Complete the Look</h2>

        <div class="product-card">
          <div>
            <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=600" />
          </div>

          <h4>Essentials Tote</h4>
          <p>$185.00</p>

          <button>Add to Cart</button>
        </div>
      </div>

      <!-- RIGHT -->

      <div class="card summary">
        <h2>Order Summary</h2>

        <div class="line">
          <span>Subtotal</span>
          <strong>{{ totalFormate }}</strong>
        </div>

        <div class="line">
          <span>Shipping</span>
          <strong>$0.00</strong>
        </div>

        <div class="line">
          <span>Estimated Tax</span>
          <strong>${{ totaltaxe() }}</strong>
        </div>

        <div class="total">
          <span>Total</span>
          <h3>${{ allTotal }}</h3>
        </div>

        <button @click.prevent="store.payer(allTotal)" class="checkout">Checkout →</button>

        <div class="secure">🔒 Secure encrypted checkout</div>

        <div class="promo">
          <h4>Promo Code</h4>

          <div class="promo-box">
            <input type="text" placeholder="Enter code" />
            <button>Apply</button>
          </div>
        </div>
      </div>
    </div>
  </main>


</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

body {
  background: #f5f5fb;
  min-height: 100vh;
  padding: 30px;
  color: #151515;
}

.container {
  display: flex;
  gap: 40px;

  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.card {
  background: #fff;
  border-radius: 22px;
  padding: 28px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
  padding-top: 70px;
}

.card_flex {
  flex: 1;
  padding-top: 70px;
}

/* LEFT */

.badge {
  display: inline-block;
  background: #eef0ff;
  color: #4f46e5;
  padding: 8px 14px;
  border-radius: 50px;
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 20px;
}

.title {
  font-size: 48px;
  line-height: 1;
  font-weight: 800;
  margin-bottom: 20px;
}

.price-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 28px;
}

.price {
  color: #4338ca;
  font-size: 42px;
  font-weight: 700;
}

.stars {
  color: #a14d0c;
  font-size: 15px;
  font-weight: 600;
}

.description {
  color: #6b7280;
  line-height: 1.8;
  font-size: 15px;
  margin-bottom: 30px;
}

.label {
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 14px;
}

.colors {
  display: flex;
  gap: 14px;
  margin-bottom: 28px;
}

.color {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  cursor: pointer;
  border: 3px solid transparent;
}

.c1 {
  background: #e8e4de;
}
.c2 {
  background: #2e3140;
}
.c3 {
  background: #8d9582;
}

.sizes {
  display: flex;
  gap: 12px;
  margin-bottom: 35px;
}

.size {
  flex: 1;
  padding: 16px;
  border-radius: 14px;
  border: 1px solid #d8d8e5;
  background: #f9f9fd;
  cursor: pointer;
  font-weight: 600;
}

.size.active {
  border: 2px solid #4338ca;
  background: #fff;
}

.bottom-actions {
  display: flex;
  gap: 14px;
  margin-bottom: 14px;
}

.qty {
  width: 105px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px;
  border: 1px solid #ddd;
  border-radius: 14px;
  height: 60px;
  background: #fafafa;
  font-weight: 600;
}

.cart-btn {
  flex: 1;
  border: none;
  background: #4338ca;
  color: #fff;
  border-radius: 14px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
}

.wishlist {
  width: 100%;
  height: 58px;
  border-radius: 14px;
  border: 1px solid #ddd;
  background: #fff;
  font-size: 15px;
  cursor: pointer;
  margin-bottom: 30px;
}

.features {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #eee;
  padding-top: 24px;
}

.feature {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  width: 48%;
}

.feature-icon {
  color: #4338ca;
  font-size: 22px;
}

.feature h4 {
  font-size: 14px;
  margin-bottom: 4px;
}

.feature p {
  color: #777;
  font-size: 13px;
}

/* CENTER */

.main-title {
  font-size: 48px;
  margin-bottom: 8px;
  font-weight: 800;
}

.subtitle {
  color: #777;
  margin-bottom: 30px;
}

.cart-item {
  background: #fff;
  border-radius: 18px;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
  background-color: #f7fafa;
}

.item-left {
  display: flex;
  gap: 18px;
}

.item-img {
  width: 95px;
  height: 95px;
  border-radius: 14px;
  overflow: hidden;
}

.item-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.item-info h3 {
  font-size: 20px;
  margin-bottom: 8px;
}

.item-info p {
  color: #777;
  font-size: 14px;
  margin-bottom: 18px;
}

.mini-qty {
  width: 95px;
  height: 38px;
  border-radius: 10px;
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  background: #fafafa;
}

.item-price {
  color: #4338ca;
  font-weight: 700;
}

.section-title {
  font-size: 22px;
  margin: 45px 0 25px;
  font-weight: 800;
}

.product-card {
  width: 180px;
  background: #fff;
  border-radius: 18px;
  padding: 14px;
}

.product-card img {
  width: 100%;
  border-radius: 14px;
  margin-bottom: 14px;
}

.product-card h4 {
  font-size: 14px;
  margin-bottom: 4px;
}

.product-card p {
  color: #666;
  margin-bottom: 14px;
}

.product-card button {
  width: 100%;
  height: 36px;
  border: none;
  border-radius: 10px;
  background: #eef0ff;
  color: #4338ca;
  font-weight: 600;
  cursor: pointer;
}

/* RIGHT */

.summary h2 {
  font-size: 30px;
  margin-bottom: 35px;
}

.line {
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  color: #555;
}

.line strong {
  color: #111;
}

.total {
  border-top: 1px solid #eee;
  padding-top: 25px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.total h3 {
  font-size: 36px;
  color: #4338ca;
}

.checkout {
  width: 100%;
  height: 58px;
  border: none;
  border-radius: 14px;
  background: #4338ca;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  margin: 24px 0 16px;
  cursor: pointer;
}

.secure {
  text-align: center;
  color: #777;
  font-size: 14px;
  margin-bottom: 30px;
}

.promo {
  border-top: 1px solid #eee;
  padding-top: 30px;
}

.promo h4 {
  margin-bottom: 16px;
}

.promo-box {
  display: flex;
  gap: 10px;
}

.promo-box input {
  flex: 1;
  height: 48px;
  border-radius: 12px;
  border: 1px solid #ddd;
  padding: 0 14px;
  outline: none;
}

.promo-box button {
  width: 70px;
  border: none;
  border-radius: 12px;
  background: #e7e9f7;
  font-weight: 600;
  cursor: pointer;
}

@media (max-width: 1200px) {
  .container {
    grid-template-columns: 1fr;
  }
}
</style>
