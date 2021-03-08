import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      contadoresCount: 0,
      contadores: [],
      contadoresTotales: [],
      contador: {},
      settings: {},
      setting: {}
    },
    mutations: {
      getContadores (state) {
        if (localStorage.getItem('contadores')) {
          state.contadoresTotales = JSON.parse(localStorage.getItem('contadores'))
          state.contadores = JSON.parse(localStorage.getItem('contadores'))
        }
      },
      editContador (state, contador) {
        const index = state.contadoresTotales.findIndex(c => c.id === contador.id)
        state.contadoresTotales[index] = contador
        localStorage.removeItem('contadores')
        localStorage.setItem('contadores', JSON.stringify(state.contadoresTotales))
        state.contadoresTotales = JSON.parse(localStorage.getItem('contadores'))
      },
      removeContador (state, id) {
        // eslint-disable-next-line vue/no-mutating-props
        state.contadores.splice(state.contadores.indexOf(c => c.id === id), 1)
        state.contadoresTotales.splice(state.contadores.indexOf(c => c.id === id), 1)
        localStorage.removeItem('contadores')
        localStorage.setItem('contadores', JSON.stringify(state.contadoresTotales))
        state.contadoresTotales = JSON.parse(localStorage.getItem('contadores'))
      },
      pushContador (state, contador) {
        if (localStorage.getItem('contadores')) {
          state.contadoresTotales = JSON.parse(localStorage.getItem('contadores'))
        }
        localStorage.removeItem('contadores')
        state.contadoresTotales.push({ id: new Date().valueOf().toString(16), name: contador, count: 0 })
        localStorage.setItem('contadores', JSON.stringify(state.contadoresTotales))
        state.contadoresTotales = JSON.parse(localStorage.getItem('contadores'))
      },
      getSettings (state) {
        if (sessionStorage.getItem('settings') != null) {
          state.settings = JSON.parse(sessionStorage.getItem('settings'))
        } else {
          state.settings = {
            range: 0,
            orderType: '',
            rangeType: '',
            orderParam: ''
          }
        }
      },
      changeSettings (state, settings) {
        sessionStorage.removeItem('settings')
        sessionStorage.setItem('settings', JSON.stringify(settings))
      },
      cleanSettings (state) {
        sessionStorage.removeItem('settings')
        state.settings = {
          range: 0,
          orderType: '',
          rangeType: '',
          orderParam: ''
        }
        sessionStorage.setItem('settings', JSON.stringify(state.settings))
      },
      refreshContent (state, settings) {
        if (localStorage.getItem('contadores')) {
          state.contadores = JSON.parse(localStorage.getItem('contadores'))
        }
        state.contadoresCount = state.contadoresTotales.length
        if (sessionStorage.getItem('settings')) {
          state.setting = JSON.parse(sessionStorage.getItem('settings'))
        } else {
          state.settings = {
            range: 0,
            orderType: '',
            rangeType: '',
            orderParam: ''
          }
        }
        if (settings.rangeType && settings.range) {
          // eslint-disable-next-line array-callback-return
          state.contadores = state.contadores.filter((s) => {
            if (settings.rangeType === 'mayor') {
              if (s.count >= settings.range) {
                return s
              }
            } else if ((settings.rangeType === 'menor')) {
              if (s.count <= settings.range) {
                return s
              }
            }
          })
        }
        if (settings.orderType && settings.orderParam) {
          state.contadores.sort(function (a, b) {
            if (settings.orderType === 'asc') {
              if (a[settings.orderParam] > b[settings.orderParam]) {
                return 1
              }
              if (a[settings.orderParam] < b[settings.orderParam]) {
                return -1
              }
            } else {
              if (a[settings.orderParam] < b[settings.orderParam]) {
                return 1
              }
              if (a[settings.orderParam] > b[settings.orderParam]) {
                return -1
              }
            }
            return 0
          })
        }
        sessionStorage.removeItem('settings')
        sessionStorage.setItem('settings', JSON.stringify(settings))
      }
    }
  })
}

export default createStore
