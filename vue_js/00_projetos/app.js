const vm = new Vue({
  el: "#app",
  data: {
    products: [],
    product: false
  },
  filters:{
    parseCurrency(price){
      return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})
    }
  },
  methods:{
    fetchProducts(){
      fetch("./api/products.json")
        .then(response => response.json())
        .then(response => { this.products = response })
    },
    fetchProduct(id){
      fetch(`./api/products/${id}/data.json`)
        .then(response => response.json())
        .then(response => { this.product = response })
    }
  },
  created(){
    this.fetchProducts();
  }
})