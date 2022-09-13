const vm = new Vue({
  el: "#app",
  data: {
    products: [],
    product: false,
    cart: [],
    myCart:{
      is_active: false
    },
    alert:{
      message: '',
      is_active: false
    }
  },
  filters:{
    parseCurrency(price){
      return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})
    }
  },
  computed:{
    cartTotal(){
      let total = 0
      
      if(this.cart.length){
        this.cart.forEach(item => {
          total += item.price
        })
      }
      return total
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
    },
    openModal(id){
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })

      this.fetchProduct(id)
    },
    closeModal({target, currentTarget}){
      if(target === currentTarget) this.product = false
    },
    addItem(){
      this.product.inventory--
      
      const {id, name, price } = this.product
      this.cart.push({ id, name, price })

      this.showAlert(`${name} adicionado ao carrinho.`)
    },
    deleteItem(index){
      this.cart.splice(index, 1)
    },
    recoveryLocalStorage(){
      if(window.localStorage.cart){
        this.cart = JSON.parse(window.localStorage.cart)
      }
    },
    showAlert(message){
      this.alert.message = message
      this.alert.is_active = true
      
      setTimeout(() => {
        this.alert.is_active = false
      },1500)
    },
    router(){
      const hash = document.location.hash
      if(hash){
        this.fetchProduct(hash.replace("#",""))
      }
    },
    closeMyCart({target, currentTarget}){
      if(target === currentTarget) this.myCart.is_active = false
    },
    compareInventory(){
      const items = this.cart.filter(({id}) => id == this.product.id)
      this.product.inventory -= items.length
    }
  },
  watch:{
    cart(){
      window.localStorage.cart = JSON.stringify(this.cart)
    },
    product(){
      document.title = `Techno - ${this.product.name}` || "Techno"
      const hash = this.product.id || ""
      history.pushState(null, null, `#${hash}`)

      if(this.product) this.compareInventory()
    }
  }
  ,
  created(){
    this.fetchProducts()
    this.recoveryLocalStorage()
    this.router()
  }
})