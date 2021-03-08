<template>
  <div class="contadoresContainer">
    <button id="btnOpenModalAdd" class="blueBtn" disabled type="button" @click="displayModal()">
      Agregar
    </button>
    <div v-for="contador in contadores" :key="contador.name" class="contador">
      <div class="contenedorName">
        <label class="contadorName"> {{ contador.name }} </label>
      </div>
      <div class="contadorSettings">
        <button type="button" class="redBtn" @click="subtractContador(contador)">
          -
        </button>
        <input v-model="contador.count" class="contadorNumber" name="contadorNumber" required>
        <button type="button" class="blueBtn" @click="addContador(contador)">
          +
        </button>
        <img
          src="../assets/trash.svg"
          class="deleteBtn"
          x="50%"
          y="50%"
          alt="Kiwi standing on oval"
          @click="removeContador(contador)"
        >
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['displayModal'],
  computed: {
    contadores () {
      return this.$store.state.contadores
    },
    contadoresTotales () {
      return this.$store.state.contadoresTotales
    },
    settings () {
      return this.$store.state.settings
    }
  },
  mounted () {
    const btnOpenModalAdd = document.getElementById('btnOpenModalAdd');
    (this.contadores.length >= 20) ? btnOpenModalAdd.disabled = true : btnOpenModalAdd.disabled = false
    this.getContadores()
  },
  methods: {
    ...mapMutations(['getContadores', 'editContador', 'removeContador', 'refreshContent']),
    subtractContador (contador) {
      if (contador.count >= 0) {
        contador.count--
        this.editContador(contador)
        this.refreshContent(this.settings)
      } else {
        contador.count++
        alert('Contador no puede ser menor a 0')
      }
    },
    addContador (contador) {
      if (contador.count < 20) {
        contador.count++
        this.editContador(contador)
        this.refreshContent(this.settings)
      } else {
        contador.count--
        alert('Contador no puede ser mayor a 20')
      }
    }
  }
}
</script>
<style>
</style>
