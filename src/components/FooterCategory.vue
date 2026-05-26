<script setup>
defineProps({
  title:String,
  option1:String,
  option2:String,
  option3:String
})
</script>

<template>

    <div class="option">
      <h4>{{ title }}</h4>
      <RouterLink class="link" to="#">{{ option1 }}</RouterLink>
      <RouterLink class="link" to="#">{{ option2 }}</RouterLink>
      <RouterLink class="link" to="#">{{ option3 }}</RouterLink>
      <RouterLink class="link" to="#">{{ option4 }}</RouterLink>
    </div>

</template>

<style scoped>

  .option{
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: justify;
  }

h4{
  margin: 0;
  font-weight: 600;


}
 .link{
    text-decoration: none;
    color: black;
  }

</style>
