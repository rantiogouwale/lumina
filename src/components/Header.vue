<script setup></script>

<template>
  <div class="container">
    <div class="content">
      <div class="header_content_left">
        <span>LUMINA</span>
        <nav>
          <ul>
            <li><RouterLink class="link" to="#">Shop</RouterLink></li>
            <li><RouterLink class="link" to="#">Collections</RouterLink></li>
            <li><RouterLink class="link" to="#">About</RouterLink></li>
          </ul>
        </nav>
      </div>
      <div class="header_content_right">
        <div class="searchbar">
          <i class="fa-brands fa-sistrix"></i>
          <input type="search" name="" placeholder="Search..." id="" />
        </div>
        <i class="fa-solid fa-cart-arrow-down"></i>
        <i class="fa-solid fa-user"></i>
      </div>
    </div>
  </div>
</template>

<style scoped>

  .content{
    display: flex;
    justify-content: space-between;
  }

  .header_content_left{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
  }

  li{
    list-style: none;
  }
  .link{
    text-decoration: none;
    color: black;
     font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  .link:hover{
    text-decoration:underline;
    color: #6760FD;

  }
  ul{
    display:flex;
    gap:10px;
  }

  .header_content_right{
     display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }

input{
  border: none;
  background: none;
  outline: none;
}


.searchbar{
  background-color: #F0F3FF;
  padding: 15px;
  border-radius: 10px;
}

.fa-cart-arrow-down, .fa-user{
  color: blue;
}

span{
  font-size:xx-large;
  color:blue;
  font-weight: bold;
   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

}


</style>
