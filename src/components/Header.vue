<script setup>
import { useCartStore } from '@/stores/addCart'

const store = useCartStore()
</script>

<template>
  <!-- <div class="container"> -->
  <div class="content">
    <div class="header_content_left">
      <span>LUMINA</span>
      <nav>
        <ul>
          <li><RouterLink class="link" to="/products">Shop</RouterLink></li>
          <li><RouterLink class="link" to="#">Collections</RouterLink></li>
          <li><RouterLink class="link" to="#">About</RouterLink></li>
        </ul>
      </nav>
    </div>
    <div class="header_content_right">
      <div class="searchbar">
        <i class="fa-brands fa-sistrix"></i>
        <input type="search" name="" placeholder="Search..." id="" />
      </div>
      <div class="fahhhhhhhhh">
        <RouterLink to="/cart">
          <i class="fa-solid fa-cart-arrow-down">
            <span class="cart">{{ store.totalItems }}</span>
          </i>
        </RouterLink>

      </div>
      <i class="fa-solid fa-user"></i>
    </div>
  </div>
  <!-- </div> -->
</template>

<style scoped>
.content {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #ded4d4;

}
.cart {
  position: absolute;
  top: -10px;
  left: 13px;
  font-size: 10px;
  background-color: blue;
  color: white;
  padding: 3px;
  border-radius: 50%;
}

.header_content_left {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
}

li {
  list-style: none;
}
.link {
  text-decoration: none;
  color: black;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.link:hover {
  text-decoration: underline;
  color: #6760fd;
}
ul {
  display: flex;
  gap: 10px;
}

.header_content_right {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

input {
  border: none;
  background: none;
  outline: none;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.searchbar {
  background-color: #f0f3ff;
  padding: 15px;
  border-radius: 10px;
}

.fa-cart-arrow-down,
.fa-user {
  color: blue;
}

.fa-cart-arrow-down {
  position: relative;
}
span {
  font-size: xx-large;
  color: blue;
  font-weight: bold;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>
