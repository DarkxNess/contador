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
        <button id="btnAddContador" disabled @click="submitForm(nameContador)">
          Agregar
        </button>
        <button @click="displayModal()">
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
  watch: {
    'nameContador' (after, before) {
      const btnContador = document.getElementById('btnAddContador');
      (after !== '') ? btnContador.disabled = false : btnContador.disabled = true
    }
  },
  methods: {
    ...mapMutations(['pushContador']),
    submitForm (nameContador) {
      // this.createContador(nameContador)
      this.pushContador(nameContador)
      this.nameContador = ''
    }
  }
}
</script>
<style>
.modal{
  height: 100%;
  position: absolute;
  width: 100%;
  background: rgb(85 89 90 / 82%);
}
.modalHeader{
  text-align: center;
  border-bottom: 1px solid;
  grid-area: header;
  font-size:large;
  font-weight: 600;
  padding: 10px;
}
.modalBody{
  display:flex;
  justify-content: center;
  grid-area: main;
}
.modalFooter{
  display: flex;
  flex-direction: row-reverse;
  grid-area: footer;
  border-top: 1px solid;
  padding: 10px;
}
.modalFooter button{
  margin-left: 5px;
}
.modal-content{
  background-color:white;
  width:50%;
  height:40%;
  position:absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
  margin:auto;
  color: black;
  display: grid;
  grid-template-rows: 1fr 4fr 1fr;
  grid-template-areas: 'header'
  'main'
  'footer';
}
#formAddContador{
  margin: 30px
}
</style>
