<script setup>
defineProps({
  img: String,
  title: String,
  price: Number,
  id: Number,
})
</script>

<template>
  <div class="ctl_content_detail">
    <img :src="img" alt="" />
    <h5>{{ title }}</h5>
    <p>${{price}}</p>
  </div>
</template>
<style scoped>
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
