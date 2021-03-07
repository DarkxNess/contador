<template>
  <div class="container-grid">
    <Header />
    <div class="main">
      <Contador :display-modal="displayModal" />
    </div>
    <Footer />
    <Modal :show="show" :display-modal="displayModal" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      objContadores: []
    }
  },
  methods: {
    displayModal () {
      (this.show) ? this.show = false : this.show = true
    }
  }
}
</script>

<style>
</style>
