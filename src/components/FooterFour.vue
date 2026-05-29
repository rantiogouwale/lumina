<script setup>
import FooterCategory from './FooterCategory.vue'
</script>

<template>
  <div class="content">
    <div class="content_child">
      <h4>Lumina</h4>
      <p>Redefining modern elegance through curated collections of premium lifestyle goods.</p>
    </div>
    <div>
      <FooterCategory
        title="Customer Support"
        option1="Contact Us"
        option2="Shipping Info"
        option3="Returns & Exchanges"
      />
    </div>
    <div>
      <FooterCategory title="Legal" option1="Privacy Policy" option2="Terms of Service" />
    </div>
    <div>
      <div class="newsletter">
        <h4>Connect</h4>
        <div class="icon">
          <i></i>
          <i></i>
        </div>
      </div>
    </div>
  </div>
  <div class="footer_bottom">
    <p>© 2024 Lumina Premium E-commerce. All rights reserved.</p>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  gap: 24px;
  justify-content: space-between;
  align-items: baseline;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.content_child {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 25%;
}

.content_child h4 {
  font-weight: 700;
  color: #3525cd;
  font-size: 16px;
  text-transform: uppercase;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

p {
  text-align: start;
  font-size: 14px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.footer_bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
}

.newsletter {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
