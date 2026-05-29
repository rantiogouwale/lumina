<script setup>

</script>

<template>
  <div class="container">
    <div class="Elegance">
      <div class="Elegance_left">
        <div>
          <button class="ButtonOne">New Season Arrival</button>
        </div>
        <div>
          <h2>
            Effortless Elegance <br />
            for Everyday.
          </h2>
          <p>
            Experience a curated selection of premium <br />
            essentials designed with a minimalist aesthetic and <br />
            tactile comfort.
          </p>
        </div>
        <div class="button_bottom">
          <div>
            <button class="ButtonTwo">Shop Collection</button>
          </div>
          <div>
            <button class="ButtonThree">View Lookbook</button>
          </div>
        </div>
      </div>
      <div class="Elegance_right">
        <div class="elegance_right_img">
          <img src="../assets/images/femme.svg" alt="Modèle" />
        </div>
        <div class="card">

            <h4>Featured Selection</h4>
            <p>Linen Bierd Overshirt <br />-2024 Edit</p>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  font-size: 14px;
}
h2 {
  font-size: 40px;
  gap: 52, 8px;
  margin-bottom: 22px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.Elegance {
  display: flex;
  /* flex-direction: row; */
  justify-content: center;
  align-items: center;
  gap: 150px;
  /* height: 100vh; */
  background-color: #4f46e50d;
}
/* .Elegance_left {
  gap: 50px;
} */
.Elegance_right {
  position:relative;
}


.button_bottom {
  display: flex;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
  border: none;
  gap: 20px;
}
.ButtonOne {
  gap: 26px;
  border-radius: 20px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
  border: none;
}
.ButtonTwo {
  gap: 48px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
  border: none;
  background-color: blue;
  padding: 17px;
}
.ButtonThree {
  gap: 48px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
  border: none;
  padding: 17px;
}

.card {
  position: absolute;
  width: 200px;
  bottom: 7px;
  left: -39px;
  padding: 15px;
  background-color: #fff;
  border-radius: 10px;
}
.elegance_right_img {
  position: relative;
  margin: 20px;
}
</style>
