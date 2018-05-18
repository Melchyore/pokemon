<template>
  <v-toolbar dark>
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>

    <v-toolbar-title>Pokédex</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn :href="route('/')" flat>Accueil</v-btn>
    </v-toolbar-items>

    <v-toolbar-items>
      <v-btn :href="route('pokemons')" flat>Pokémons</v-btn>
    </v-toolbar-items>

    <v-toolbar-items>
      <v-btn :href="route('pokemon.add')" flat>Ajouter</v-btn>
    </v-toolbar-items>

    <v-toolbar-items v-if="!user">
      <v-btn :href="route('auth.login')" flat>Connexion</v-btn>
    </v-toolbar-items>

    <v-toolbar-items v-if="!user">
      <v-btn :href="route('auth.register')" flat>Inscription</v-btn>
    </v-toolbar-items>

    <v-toolbar-items v-if="user">
      <v-menu :attach="true" bottom left :nudge-bottom="64" min-width="200" z-index="8">
        <v-btn type="button" slot="activator" flat @click="getNotifications()">
          <v-badge top color="red" v-model="show"> <!-- Show only if user.notifications.length > 0 -->
            <span slot="badge">{{ user.notifications.length }}</span>
            <v-icon>notifications</v-icon>
          </v-badge>
        </v-btn>
        <v-list light>
          <v-list-tile v-for="item in user.notifications" :key="item" @click="">
            <v-list-tile-title v-text="item.content"></v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar-items>

    <v-toolbar-items v-if="user">
      <!--<v-btn :href="getProfileRoute()" flat>Profil</v-btn>-->
      <v-menu :attach="true" bottom left :nudge-bottom="64" min-width="200" z-index="8">
        <v-btn type="button" slot="activator" flat>
          <v-icon dark>adb</v-icon>
        </v-btn>
        <v-list light>
          <v-list-tile :href="getProfileRoute()" @click="">
            <v-list-tile-avatar>
              <v-icon light>person</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title v-text="'Profil'"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile :href="route('admin')" @click="" v-if="user.rank === 2">
            <v-list-tile-avatar>
              <v-icon light>build</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title v-text="'Administration'"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-divider light></v-divider>

          <v-list-tile :href="route('user.logout')" @click="">
            <v-list-tile-avatar>
              <v-icon light>exit_to_app</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title v-text="'Déconnexion'"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar-items>

    <!--<v-toolbar-items v-if="user">
      <v-btn :href="route('admin')" flat>Administration</v-btn>
    </v-toolbar-items>

    <v-toolbar-items v-if="user">
      <v-btn :href="route('user.logout')" flat>Déconnexion</v-btn>
    </v-toolbar-items>-->
  </v-toolbar>
</template>

<script>
  export default {
    props: {
      routes: {
        type: Object,
        required: true
      },
      user: {
        type: Object,
        default: null
      }
    },

    data () {
      return {
        show: true
      }
    },

    methods: {
      route (name) {
        return this.routes[name]
      },

      getProfileRoute () {
        return `/user/${this.user.username}`
      },

      getNotifications() {
        // Send request
        this.show = false
      },

      readNotifications() {
        // send ajax query using axios
      }
    }
  }
</script>
