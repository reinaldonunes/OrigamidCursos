const vm = new Vue({
  el: "#app",
  data: {
    products: []
  },
  methods:{
    fetchProducts(){
      fetch("./api/products.json")
        .then(response => response.json())
        .then(response => { this.products = response } )
    }
  },
  created(){
    this.fetchProducts();
  }
})