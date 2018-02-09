import Vue from 'vue'

import Home from './pages/Login.vue'

const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  methods: {
    ViewComponent() {
      return Home
    }
  },
  render (h) {
    return h(this.ViewComponent())
  }
})

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})
