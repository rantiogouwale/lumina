<script setup>

import {RouterLink} from 'vue-router'
import { useCartStore } from '@/stores/addCart';

defineProps({
  img: String,
  title: String,
  price: Number,
  description: String,
  id: Number
  //id: Number
})

const storeCard=useCartStore()

</script>
<template>
  <div class="theCards">
    <div class="content">
      <div class="img">
        <img :src="img" alt="">
      </div>
      <div class="card_info">
        <div class="title_price">
          <span class="title">{{ title }}</span>
          <span class="price">${{ price }}</span>
        </div>
        <p>{{ description }}
         <slot></slot>
        </p>
        <button @click="storeCard.addToCart({title,id,price,description,img})" >
          <i class="fa-solid fa-cart-arrow-down"></i>
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>


<style scoped>
/* .theCards{
  width: fit-content;
} */
  .content{
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 12px;

  }
  .img{
    width: 100%;
    object-fit: cover;
  }
  .img img{
    width: 100%;
    height: 100%;
    border-top-left-radius : 12px;
    border-top-right-radius: 12px;
  }
  button{
    padding: 12px 0 12px 0;
    color: #3525CD;
    border-radius: 8px;
    cursor: pointer;
    border: none;
    background-color: #DCE2F3;
    width: 100%;
  }
  button:active{
    transform: scale(1.1);
  }
  button:hover{
    background-color: #3525CD;
    color: white;
  }
  .price{
    color: #3525CD;
  }
  .title_price{
    display: flex;
    justify-content: space-between;
  }
  .title{
    font-style: 24px;
    font-weight: 600;
  }
  .card_info{
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
</style>
