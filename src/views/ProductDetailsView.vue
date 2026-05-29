<script setup>
import { ref, computed, onMounted, watchEffect } from 'vue'
import { useProductStore } from '@/stores/products'
import { storeToRefs } from 'pinia'
import { useDetailsStore } from '@/stores/productDetails'
import { useRoute } from 'vue-router'
import Header from '@/components/Header.vue'
import FooterThree from '@/components/FooterThree.vue'

const route = useRoute()

const store = useProductStore()
const { products } = storeToRefs(store)

const { getProduct } = store

const storeDetails = useDetailsStore()
watchEffect(() => {
  getProduct()
})

watchEffect(() => {
  storeDetails.getProductById(route.params.id)
})

import Detail from '@/components/Detail.vue'
// import img1 from '../assets/images/ctlimage1.svg'
// import img2 from '../assets/images/ctlimage2.svg'
// import img3 from '../assets/images/ctlimage3.svg'
// import img4 from '../assets/images/ctlimage4.svg'

const showAll = ref(false)
const number = ref > 0

const images = ref([
  new URL('../assets/images/Detailview 1.svg', import.meta.url).href,
  new URL('../assets/images/Detailview 2.svg', import.meta.url).href,
  new URL('../assets/images/Detailview 3.svg', import.meta.url).href,
  new URL('../assets/images/Detailview 4.svg', import.meta.url).href,
  new URL('../assets/images/Detailview 5.svg', import.meta.url).href,
  new URL('../assets/images/Detailview 6.svg', import.meta.url).href,
])

const visibleImages = computed(() => {
  return showAll.value ? images.value : images.value.slice(0, 4)
})

const remainingCount = computed(() => {
  return images.value.length - 4
})

const handleClick = () => {
  showAll.value = true
}

const increment = () => {
  number.value++
}

const decrement = () => {
  if (number.value > 0) {
    number.value--
  }
}
</script>

<template>
  <div class="container">
    <header>
      <Header />
    </header>
    <section>
      <div class="detail_top" style="margin-top: 47px">
        <p>Home</p>
        <i class="fa-solid fa-chevron-right"></i>
        <p>Shop</p>
        <i class="fa-solid fa-chevron-right"></i>
        <p>{{ storeDetails.productsDetails.title }}</p>
      </div>

      <div class="detail_content">
        <div class="left_part_img">
          <div class="left_top_img">
            <img :src="storeDetails.productsDetails.thumbnail ?? ''" alt="" />
          </div>
          <div class="image-grid">
            <div v-for="(img, index) in visibleImages" :key="index" class="image-item">
              <img :src="img" />

              <div
                v-if="!showAll && index === 3 && remainingCount > 0"
                class="overlay"
                @click.stop="handleClick"
              >
                +{{ remainingCount }} More
              </div>
            </div>
          </div>
        </div>

        <div class="detail_right_content">
          <h5>NEW ARRIVAL</h5>
          <h2>{{ storeDetails.productsDetails.title }}</h2>
          <div class="price_and_rating">
            <h3>${{ storeDetails.productsDetails.price }}</h3>
            <span>★★★★⯪ (48 Reviews)</span>
          </div>
          <p class="detail_desc">
            {{ storeDetails.productsDetails.description }}
          </p>
          <div class="detail_length_reglage">
            <div class="size">
              <p>Size</p>
              <RouterLink class="links" to="#">Size Guide</RouterLink>
            </div>
            <div class="size_detail">
              <p>Stadard</p>
              <p>Grand</p>
              <p>Petite</p>
            </div>
          </div>
          <div class="detail_add_confirm">
            <div class="detail_add_confirm_btn">
              <div class="detail_btn_increment_and_discrement">
                <button @click="decrement"><i class="fa-solid fa-minus"></i></button>
                <span>{{ number }}</span>
                <button @click="increment"><i class="fa-solid fa-plus"></i></button>
              </div>
              <div class="add_btn">
                <button>Add to cart</button>
              </div>
            </div>
            <div class="wishlist_btn">
              <button><i class="fa-regular fa-heart"></i> Add to Wishlist</button>
            </div>
          </div>
          <div class="right_part_bottom">
            <div class="bottom_right_top">
              <div>
                <i class="fa-regular fa-truck"></i>
              </div>
              <div class="bottom_desc">
                <h4>Free Shipping</h4>
                <p>On orders over $500</p>
              </div>
            </div>
            <div class="bottom_right_top">
              <div>
                <i class="fa-solid fa-shield"></i>
              </div>
              <div>
                <h4>5-Year Warranty</h4>
                <p>Premium protection</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="ctl_content">
        <div class="ctl_content_top">
          <h3>Complete the Look</h3>
          <RouterLink to="#" class="link">View Collection ⟶</RouterLink>
        </div>
        <div class="ctl_content_bottom">
          <Detail
            v-for="item in products.slice(0, 4)"
            :key="item.id"
            :img="item.thumbnail"
            :title="item.title"
            :price="item.price"
          />
        </div>
      </div>
    </section>
  </div>
  <footer>
    <FooterThree />
  </footer>
</template>

<style scoped>
.detail_top {
  display: flex;
  align-items: center;
  gap: 3px;
  margin-bottom: 21px;
}

.detail_content {
  display: flex;
  gap: 64px;
}

.left_part_img {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.left_bottom_img {
  display: flex;
  gap: 26px;
}

.left_top_img img {
  border-radius: 15px;
}

.detail_right_content h5 {
  font-size: 12px;
  padding: 4px;
  margin-bottom: 14px;
  color: rgba(53, 37, 205, 1);
  background: rgba(231, 238, 254, 1);
  border-radius: 10px;
  width: fit-content;
}

h2 {
  font-size: 48px;
  line-height: 52px;
  letter-spacing: -0.96px;
  margin-bottom: 15px;
}

.price_and_rating {
  display: flex;
  gap: 12px;
  align-items: center;
}

.price_and_rating h3 {
  font-size: 30px;
  line-height: 39px;
  color: rgba(53, 37, 205, 1);
}

.price_and_rating span {
  font-size: 14px;
  line-height: 14px;
  color: rgba(123, 47, 0, 1);
}

.detail_desc {
  font-size: 16px;
  line-height: 26px;
  text-align: start;
  margin-bottom: 32px;
}

.detail_length_reglage {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
}

.size {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.size p {
  font-size: 14px;
  line-height: 14px;
}

.size .links {
  font-size: 14px;
  line-height: 14px;
  color: rgba(53, 37, 205, 1);
}

.size_detail {
  display: flex;

  align-items: center;
  gap: 12px;
}

.size_detail p {
  font-size: 14px;
  line-height: 14px;
  border: 2px solid rgb(183, 183, 183);
  padding: 14px;
  border-radius: 12px;
  flex: 1;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.size_detail p:hover {
  border: 2px solid rgba(53, 37, 205, 1);
}

.detail_add_confirm {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
}

.detail_add_confirm_btn {
  display: flex;
  align-items: center;
  gap: 16px;
}

.detail_btn_increment_and_discrement {
  display: flex;
  align-items: center;
  gap: 16px;
  border: 2px solid rgb(183, 183, 183);
  padding: 10px 25px;
  border-radius: 12px;
}

.detail_btn_increment_and_discrement button {
  background: transparent;
  border: none;
  cursor: pointer;
}

.add_btn button {
  background: transparent;
  border: none;
  font-size: 16px;
  line-height: 24px;
  color: white;
  text-align: center;
  cursor: pointer;
}

.add_btn {
  background: rgba(53, 37, 205, 1);
  flex: 1;
  padding: 10px 25px;
  border-radius: 12px;
  text-align: center;
}

.wishlist_btn button {
  background: transparent;
  border: none;
  font-size: 16px;
  flex: 1;
  padding: 10px 25px;
  border-radius: 12px;
  border: 2px solid rgb(183, 183, 183);
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.wishlist_btn {
  display: flex;
  border: none;
  cursor: pointer;
  flex: 1;
}

.wishlist_btn button:hover {
  background: rgba(53, 37, 205, 1);
  color: white;
}

.right_part_bottom {
  display: flex;
  align-items: center;
  gap: 110px;
}

.bottom_right_top {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.fa-truck,
.fa-shield {
  color: rgba(53, 37, 205, 1);
}

.image-grid {
  display: flex;
  gap: 12px;
}

.image-item {
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 12px;
  overflow: hidden;
}

.image-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.6);
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 20px;
  font-weight: bold;

  cursor: pointer;
}

.ctl_content {
  margin-top: 124px;
}

.ctl_content_top {
  display: flex;
  justify-content: space-between;
}

.ctl_content_top h3 {
  font-size: 30px;
  margin-bottom: 24px;
}

.link {
  text-decoration: none;
}

.ctl_content_bottom {
  display: flex;
  gap: 24px;
  justify-content: space-between;
}

.ctl_content_detail {
  line-height: 20px;
}

.ctl_content_detail h5 {
  font-size: 14px;
}
.ctl_content_detail p {
  font-size: 16px;
  color: rgba(53, 37, 205, 1);
}
.ctl_content_detail img {
  border-radius: 12px;
}
</style>
