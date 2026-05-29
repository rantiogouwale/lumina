<script setup>
import cardOne from '@/components/cardsOne.vue'
import sideBar from '@/components/sideBar.vue'
import headPage from '@/components/headPage.vue'
import Header from '@/components/Header.vue'
import FooterTwo from '@/components/FooterTwo.vue'
import { onMounted } from 'vue'
import { useProductStore } from '@/stores/products'
import { storeToRefs } from 'pinia'

const store = useProductStore()

const { pageAfficher, pagesTotal, pageCourantes, loading } = storeToRefs(store)
const { changerPage, getProduct } = store
onMounted(() => {
  getProduct()
})
</script>
<template>
  <div class="container">
    <header>
      <Header />
    </header>
    <main>
      <div class="content">
      <headPage />

      <div class="all">
        <sideBar />
        <div class="cards">
          <p v-if="loading" class="chargement"></p>
          <cardOne
            v-for="item in pageAfficher"
            :key="item.id"
            :img="item.thumbnail"
            :title="item.title"
            :price="item.price"
            :description="item.description"
            :id="item.id"
          >
            <RouterLink class="link" :to="`/products/${item.id}`">Voir</RouterLink>
          </cardOne>
        </div>
      </div>
      <div class="pagination">
        <button
          v-for="page in pagesTotal"
          :key="page"
          @click="changerPage(page - 1)"
          :class="{ active: pageCourantes === page - 1 }"
        >
          {{ page }}
        </button>
      </div>
    </div>
    </main>
    <footer>
      <FooterTwo />
    </footer>
  </div>
</template>
<style scoped>
.all {
  display: flex;
  gap: 24px;
  background-color: #c7c4d84d;
  padding: 20px 10px 20px;
  border-radius: 15px;
}
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.pagination {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}
.pagination button {
  padding: 8px 15px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: #e2dfdf;
  margin-bottom: 50px;
}
.pagination button.active {
  background-color: #3525cd;
  color: #fff;
}
.chargement {
  width: 40px;
  height: 40px;
  border: 4px solid #e2dfdf;
  border-top: 4px solid #3525cd;
  border-radius: 50%;
  animation: charge 1s linear infinite;
}

@keyframes charge {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
