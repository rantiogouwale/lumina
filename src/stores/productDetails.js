import axios from "axios";
import { ref } from "vue";
import { defineStore } from "pinia";

  export const useDetailsStore= defineStore('ProductDetails', ()=>{
  const loading= ref(false)
  const productsDetails= ref(null)

  
  async function getProductById(id) {
    loading.value=true
    try{
      const response= await axios.get(`https://dummyjson.com/products/${id}`)
      productsDetails.value= response.data
    }catch(error){
      console.log('error', error)
    }finally{
      loading.value=false
    }

  }


return {loading, productsDetails, getProductById}
})
