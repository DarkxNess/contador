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
.container-grid{
  display: grid;
  grid-template-rows: auto 8fr 50px;
  grid-template-areas: 'header'
  'main'
  'footer';
  margin: 0 auto;
  min-height: 100vh;
}
.header{
  grid-area: header;
}
.main{
  margin: 10px 0px 10px 0px;
  grid-area: main;
}
.footer{
  grid-area: footer;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
