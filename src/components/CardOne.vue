<script setup>
defineProps({
  img:String,
  titleCard: String,
  subTitle:String,
  price: String
})
</script>

<template>
  <div class="card_content">
    <div class="card_content_top">
      <img :src="img" alt="ProductImg">
    </div>
    <div class="card_content_bottom">
      <span class="first_1">{{ titleCard }}</span>
      <span class="first_2">{{subTitle}}</span>
      <span class="first_3">{{price}}</span>
    </div>
  </div>
</template>

<style scoped>
.card_content{
  display: flex;
  flex-direction: column;
  background:none;
  gap: 16px;
  width:fit-content;

}
.card_content_top{
  height: 282px;
  width: 282px;

}
.card_content_top img{
border-radius: 10px;

}
.card_content_bottom{
  display: flex;
  flex-direction: column;

}

.first_1{
  color:#151C27 ;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size:14px ;
}
.first_2{
  color:#464555 ;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size:14px ;
}
.first_3{
  color:#3525CD ;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size:14px ;
}
</style>
