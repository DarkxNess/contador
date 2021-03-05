export default {
  state: {
    contadores: [],
    contador: {}
  },
  getters: {
    contadores (store) {
      return store.contadores
    },
    contador (store) {
      return store.contador
    }
  },
  mutations: {
    SET_CONTADORES (state, contadores) {
      state.contadores = contadores
    },
    ADD_CONTADOR (state, contador) {
      state.contadores.push(contador)
    }
  },
  actions: {
    getContadores (context) {
      context.commit('SET_CONTADORES', JSON.parse(localStorage.getItem('contadores')))
    },
    saveContador (context, contador) {
      const contadoresOld = JSON.parse(localStorage.getItem('contadores'))
      localStorage.removeItem('contadores')
      localStorage.setItem(JSON.stringify(contadoresOld))
      context.commit('SET_CONTADOR', contador)
    }
  },
  modules: {
  }
}
