import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";


export const useProductStore= defineStore('products',()=>{
  const products= ref([])
  const loading= ref(false)
  const parPages= 6
  const pageCourantes= ref(0)

  const pageAfficher= computed(()=>{
    const debut = pageCourantes.value * parPages
    return products.value.slice(debut, debut+parPages)
  })

  const pagesTotal = computed(()=>{
    return Math.ceil(products.value.length/parPages)
  })
  function changerPage (page){
    pageCourantes.value= page
  }




  async function getProduct(){
    loading.value= true
    try{
      const response= await axios.get('https://dummyjson.com/products')
      products.value= response.data.products


    }catch(error){
      console.log('error', error);
    }
    finally{
      loading.value= false
    }
  }
  return{ products, loading, getProduct, pageAfficher, parPages, pagesTotal, changerPage}
})
