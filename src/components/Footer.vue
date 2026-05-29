<script setup>
import FooterCategory from './FooterCategory.vue'
</script>

<template>
  <div class="container">
    <div class="content">
      <div class="content_child">
        <h4>Lumina</h4>
        <p>
          Crafting premium essentials with a commitment to minimalist design, exceptional quality,
          and sustainable practices.
        </p>
      </div>
      <div>
        <FooterCategory
          title="Shop"
          option1="New arrivals"
          option2="Best Sellers"
          option3="Collections"
          option4="Sustainable Line"
        />
      </div>
      <div>
        <FooterCategory
          title="Company"
          option1="About us"
          option2="Sustainability"
          option3="Careers"
          option4="Journal"
        />
      </div>
      <div>
        <FooterCategory
          title="Support"
          option1="Privacy Policy"
          option2="Terms of Service"
          option3="Shipping Info"
          option4="Contact Us"
        />
      </div>
    </div>
    <div class="footer_bottom">
      <p>© 2024 Lumina Premium E-commerce. All rights reserved.</p>
      <div class="footer_bottom_icon">
        <i class="fa-solid fa-medal"></i>
        <i class="fa-solid fa-share-nodes"></i>
        <i class="fa-regular fa-envelope"></i>

      </div>
    </div>
  </div>
</template>

<style scoped>
.content{
  display:flex;
  gap: 24px;
  justify-content: space-between;
  align-items: baseline;
   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.content_child{
  width: 25%;
}

h4{
  font-weight: 700;
  color: #3525CD;
  font-size: 16px;
  text-transform: uppercase;
   font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

p{
  text-align:start;
  font-size: 14px;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.footer_bottom{
  display: flex;
  justify-content: space-between;
  margin-top: 48px;
  align-items: center;
}
.footer_bottom_icon{
  display: flex;
  gap: 24px;

}
</style>


