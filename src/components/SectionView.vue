<template>
  <section >
    <div class="container join">
      <div class="join_content">
        <h2> Join the Lumina Circle</h2>
        <p class="first_p">Subscribe to receive early access to new collections and curated stories on minimalist living.</p>
        <div class="input_part">
          <input type="text" placeholder="Email adress">
          <button>Subscribe</button>
        </div>
        <p class="second_p">By subscribing, you agree to our Privacy Policy and Terms of Service.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.join{
  background-color: #3525CD;
  border-radius: 15px;
  padding: 48px 264px;
  display: flex;
  justify-content: center;
}

.join_content{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  text-align: center;
}

h2{
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: #FFFFFF;
  font-size: 48px;
}

.first_p{
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 18px;
  color: #FFFFFF ;
}

.input_part{
  padding-top: 17px;
  display: flex;
  gap:16px;
}

input{
  padding: 18px 24px;
  background-color:#FFFFFF33 ;
  border:1px solid #FFFFFF33 ;
  border-radius: 15px;
  width:298px ;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  outline: none;
}
input ::placeholder{
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 16px;
  color: #FFFFFF80;
}

button{
  padding: 21px 32px;
  border: none;
  border-radius: 15px;
  background-color:#F9F9FF ;
  color: #3525CD;
  font-family: 'inter-semi-bold',sans-serif;
  font-size: 14px;
  cursor: pointer;
  transition: 0.5s;
}

button:hover{
  background-color: black;
  color: #FFFFFF;
}

.second_p{
  color: #FFFFFF;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 14px;
}
</style>
