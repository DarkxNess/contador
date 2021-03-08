<template>
  <div class="footer">
    Total de contadores: {{ contadoresCount }}
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  computed: {
    contadoresCount () {
      return this.$store.state.contadoresTotales.length
    }
  },
  mounted () {
  },
  methods: {
    ...mapMutations([])
  }
}
</script>
<style>
.footer{
  display: flex;
  justify-content: center;
  padding: 10px;
  color: white;
  background-color: rgb(69,40,159);
}
</style>
