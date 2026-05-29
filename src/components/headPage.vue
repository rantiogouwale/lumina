<template>
  <div class="hero">
    <div class="hero_content">
      <div class="content_left">
        <div class="content_left_top">
          <span>home</span><span><i class="fa-solid fa-angle-left"></i></span><span>Shop All</span>
        </div>
        <div class="content_left_bottom">
          <h1>Curated Essentials</h1>
          <p>Discover our latest collection of premium home and lifestyle goods,
            designed for the modern minimalist.
          </p>
        </div>
      </div>
      <div class="content_right">
        <span>42 Product</span>
        <select>
          <option value="">Featured </option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
    </div>
  </div>
</template>

<style scoped>


  body {
    max-width: 1208px;
    margin: 0 auto;
  }

  .hero_content {
    display: flex;
    justify-content: space-between;
    margin-top: 48px ;
    margin-bottom: 24px;

  }

  .content_left {
    display: flex;
    flex-direction: column;
    width: 576px;
  }
  .content_right{
    display: flex;
    height: auto;
    align-items: end;
    column-gap: 15px;
  }
</style>
