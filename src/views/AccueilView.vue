<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import CardOne from '@/components/CardOne.vue'
import SectionView from '@/components/SectionView.vue'
import BottomHeader from '@/components/BottomHeader.vue'
import Monimage from '@/assets/images/img.svg'
import Monimage2 from '@/assets/images/image2.svg'
import Monimage3 from '@/assets/images/image3.svg'
import Monimage4 from '@/assets/images/image4.svg'
</script>

<template>
  <div class="container">
    <header>
      <Header />
    </header>

    <main>
      <div>
        <BottomHeader />
      </div>
      <div class="arrivals_text">
        <h4>Latest Arrivals</h4>
        <p>Quality that last beyond the season</p>
      </div>
      <div class="arrivals">
        <CardOne
          :img="Monimage"
          titleCard="Organic Cotton Tee"
          subTitle="Sage Green"
          price="$45.00"
        />
        <CardOne
          :img="Monimage2"
          titleCard="Slim Leather Wallet"
          subTitle="Charcoal"
          price="$85.00"
        />
        <CardOne
          :img="Monimage3"
          titleCard="Studio Wireless Headphones"
          subTitle="Matte Black"
          price="$299.00"
        />
        <CardOne
          :img="Monimage4"
          titleCard="Ceramic Morning Mug"
          subTitle="Eggshell White"
          price="$24.00"
        />
      </div>

      <div class="section">
        <SectionView />
      </div>
    </main>

    <Footer />
  </div>
</template>

<style scoped>


.section {
  margin: 80px 40px;
}
.arrivals {
  display: flex;
  justify-content: space-between;
}

h4 {
  text-align: center;
  font-size: 20px;
  font-weight: 800;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

p {
  text-align: center;
  font-weight: 500;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.arrivals_text {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
</style>
