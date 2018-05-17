import Vue from 'vue'
import Vuetify from 'vuetify'
import Toolbar from './components/Toolbar.vue'
import Login from './components/Login.vue'
import AddPokemon from './components/AddPokemon.vue'
import Users from './components/admin/Users.vue'

Vue.use(Vuetify)

Vue.component('toolbar', Toolbar)
Vue.component('login', Login)
Vue.component('add-pokemon', AddPokemon)
Vue.component('users', Users)

new Vue({
  el: '#app',

  data () {
    return {
      drawer: null,
      footerIcons: ['fab fa-facebook', 'fab fa-twitter', 'fab fa-google-plus', 'fab fa-linkedin', 'fab fa-instagram']
    }
  }
})
