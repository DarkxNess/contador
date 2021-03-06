<template>
  <div class="header">
    <div class="row">
      <div class="col-flex form-inputs">
        <label>Ordenar por</label>
        <select v-model="settings.orderParam" name="orderParam" @change="refreshContent(settings)">
          <option value="name">
            Nombre
          </option>
          <option value="count">
            Contador
          </option>
        </select>
      </div>
      <div class="col-flex form-inputs">
        <label>Tipo de orden</label>
        <select v-model="settings.orderType" name="orderType" @change="refreshContent(settings)">
          <option value="asc">
            Ascendente
          </option>
          <option value="desc">
            Descendente
          </option>
        </select>
      </div>
      <div class="col-flex form-inputs">
        <label>Rango</label>
        <input v-model="settings.range" type="text" name="range" @change="refreshContent(settings)">
      </div>
      <div class="col-flex form-inputs">
        <label>Tipo de rango</label>
        <select v-model="settings.rangeType" name="rangeType" @change="refreshContent(settings)">
          <option value="mayor">
            Mayor
          </option>
          <option value="menor">
            Menor
          </option>
        </select>
      </div>
      <div class="col-flex form-inputs">
        <button class="blueBtn" @click="cleanSettings()">
          Limpiar
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      settingsForm: {
      }
    }
  },
  computed: {
    settings () {
      return this.$store.state.settings
    }
  },
  watch: {
    'settings' () {
      this.refreshContent(this.settings)
    }
  },
  mounted () {
    this.getSettings()
  },
  methods: {
    ...mapMutations(['changeSettings', 'getSettings', 'refreshContent', 'cleanSettings'])
  }
}
</script>
<style>

</style>
