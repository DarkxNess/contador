<template>
  <div v-if="show" class="modal">
    <div class="modal-content">
      <div class="modalHeader">
        Agregar Contador
      </div>
      <div class="modalBody">
        <form id="formAddContador">
          <label>Nombre</label> <br>
          <input
            v-model="nameContador"
            type="text"
            name="nameContador"
            placeholder="Nombre contador"
            maxlength="20"
            required
          >
        </form>
      </div>
      <div class="modalFooter">
        <button id="btnAddContador" class="blueBtn" disabled @click="submitForm(nameContador)">
          Agregar
        </button>
        <button class="redBtn" @click="displayModal()">
          Cancelar
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  props: ['show', 'displayModal'],
  data () {
    return {
      newContador: {},
      nameContador: ''
    }
  },
  computed: {
    contadores () {
      return this.$store.state.contadores
    }
  },
  watch: {
    'nameContador' (after, before) {
      const btnContador = document.getElementById('btnAddContador');
      (after !== '') ? btnContador.disabled = false : btnContador.disabled = true
    }
  },
  methods: {
    ...mapMutations(['pushContador']),
    submitForm (nameContador) {
      if (this.contadores.find(c => c.name === nameContador)) {
        alert('Nombre de contador repetido')
      } else {
        this.displayModal()
        this.pushContador(nameContador)
        this.nameContador = ''
      }
    }
  }
}
</script>
<style>
</style>
