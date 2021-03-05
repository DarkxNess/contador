<template>
  <div class="contadoresContainer">
    <button id="btnOpenModalAdd" disabled type="button" @click="displayModal()">
      Agregar
    </button>
    <div v-for="contador in contadores" :key="contador.name" class="contador">
      <div class="contenedorName">
        <label class="contadorName"> {{ contador.name }} </label>
      </div>
      <div class="contadorSettings">
        <button type="button" @click="subtractContador(contador)">
          -
        </button>
        <input v-model="contador.count" class="contadorNumber" name="contadorNumber" required>
        <button type="button" @click="addContador(contador)">
          +
        </button>
        <button type="button" @click="removeContador(contador)">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  props: ['displayModal'],
  computed: {
    contadores () {
      return this.$store.state.contadores
    }
  },
  mounted () {
    const btnOpenModalAdd = document.getElementById('btnOpenModalAdd');
    (this.contadores.length >= 20) ? btnOpenModalAdd.disabled = true : btnOpenModalAdd.disabled = false
    this.getContadores()
  },
  methods: {
    ...mapMutations(['getContadores', 'editContador', 'removeContador']),
    subtractContador (contador) {
      contador.count--
      if (contador.count >= 0) {
        this.editContador(contador)
      } else {
        contador.count++
        alert('Contador no puede ser menor a 0')
      }
    },
    addContador (contador) {
      if (contador.count < 20) {
        contador.count++
        this.editContador(contador)
      } else {
        contador.count--
        alert('Contador no puede ser mayor a 20')
      }
    }
  }
}
</script>
<style>
.contadoresContainer{
  border: 1px solid;
  margin: 0 auto;
  height: 100%;
  padding: 0px 10px 0px 10px;
}
.contador{
  display: flex;
  align-items: center;
  margin: 10px 0px 10px 0px;
  padding: 5px;
  background-color: rgb(167, 212, 172);
  border-radius: 3px;
  width: 100%;
}
.contenedorName{
  margin: 0px 10px 0px 10px;
  padding: 5px;
  width: 80%;
}
.contadorName{
  padding: 3px;
  background-color: white;
}
.contadorSettings{
  float: right;
  width: 20%;
}
.contadorNumber{
  width: 30px;
  max-width: 60px;
}
@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
