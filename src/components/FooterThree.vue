<script setup>
import FooterCategory from './FooterCategory.vue'
</script>

<template>
  <div class="container">
    <div class="content">
      <div class="content_child">
        <h4>Lumina</h4>
        <p>
          Redefining modern living through premium materials and effortless, minimalist design.
        </p>
      </div>
      <div>
        <FooterCategory
          title="SHOP"
          option1="Living Room"
          option2="Bedroom"
          option3="Lighting"
          option4="Accessories"
        />
      </div>
      <div>
        <FooterCategory
          title="COMPANY"
          option1="About Us"
          option2="Careers"
          option3="Press"
          option4="Contact"
        />
      </div>
      <div>
        <div class="newsletter">
          <h4>JOIN LUMINA</h4>
          <p>
            Subscribe for exclusive offers and design inspiration.
          </p>
          <div class="input">
            <input type="text" placeholder="Your email">
            <button>Join</button>
          </div>
        </div>
      </div>
    </div>
    <div class="footer_bottom">
      <p>© 2024 Lumina Premium E-commerce. All rights reserved.</p>
      <div class="footer_bottom_icon">
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
        <p>Shipping Info</p>
      </div>
    </div>
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
  color: #3525CD;
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
  justify-content: space-between;
  margin-top: 48px;
  align-items: center;
}

.footer_bottom_icon {
  display: flex;
  gap: 24px;

}

.newsletter{

display: flex;
flex-direction: column;
gap: 16px;
}

.newsletter h4{
  color: black ;
}

.input{
  display: flex;
  gap: 8px;;
}

input{
  border: 1px solid #C7C4D84D;
  padding: 10px 16px;
  border-radius: 8px;
  outline: none;
  background-color: #C7C4D84D;
}

button{
  background-color: #3525CD;
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
}

button:hover{
  background-color: black;
  color: white;
  transition: all 0.3s ease-in-out;
  
}
</style>


