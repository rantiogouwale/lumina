<template>
  <aside>
    <div class="content_side">
      <div class="categorie">
        <h3>Categories</h3>
        <div class="content_categories">
          <label><input type="checkbox">All products</label>
          <label><input type="checkbox">Living Room</label>
          <label><input type="checkbox">Kitchenware</label>
          <label><input type="checkbox">Office</label>
        </div>
      </div>
      <div class="price">
        <h2>Price Range</h2>
        <div class="price_bottom">
          <span>$0</span>
          <span>$1.000+</span>
        </div>
      </div>
      <div class="bottom_side">
        <h2>Colors</h2>
        <div class="colors">
          <div class="color white"></div>
          <div class="color black"></div>
          <div class="color gray"></div>
          <div class="color beige"></div>
        </div>
      </div>
    </div>
  </aside>
</template>

<style scoped>
  .content_side{
    width: 256px;
    height: 100%;
  }
  .categorie {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .content_categories {
    display: flex;
    flex-direction: column;
    gap: 12px;

  }

  .price {
    margin-top: 46px;
    gap: 48px;
  }

  .bottom_side {
    margin-top: 32px;
  }

  .price_bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .colors {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .color {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    cursor: pointer;
  }

  .white {
    background: white;
    border: 1px solid black;
  }

  .black {
    background: black;
    border: 1px solid black
  }

  .gray {
    background: gray;
    border: 1px solid black;
  }
  label{
    display: flex;
    gap: 5px;
  }
  .beige {
    background: beige;
    border: 1px solid black;
  }

  .bottom_side {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .content_side {
    display: inline-block;
    padding: 8px;
  }

</style>
