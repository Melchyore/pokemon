<template>
  <div>
    <v-navigation-drawer
    temporary
    v-model="drawer"
    dark
    absolute
    >
      <v-list class="pa-1">
        <v-list-tile>
          <v-btn absolute right icon @click.stop="drawer = !drawer">
            <v-icon>close</v-icon>
          </v-btn>
        </v-list-tile>
        <v-layout row wrap align-center>
            <v-flex class="text-xs-center">
                <v-avatar size="128"><img src="https://randomuser.me/api/portraits/men/85.jpg"></v-avatar>
                <br/>
                <a class="title" href="#">Test</a>
            </v-flex>
          </v-layout>

      </v-list>
      <v-list class="pt-0" dense>
        <v-divider light></v-divider>
        <!--<v-list-tile v-for="item in items" :key="item.title" @click="">
          <v-list-tile-action>
            <v-icon>@{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>@{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>-->
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn href="/home" flat>Accueil</v-btn>
        <v-btn href="/pokemons/all" flat>Pokémons</v-btn>
        <v-btn href="/pokemons/add" flat><v-icon>add</v-icon> Ajouter</v-btn>
          <v-btn href="/user/login" flat><v-icon>person</v-icon>Connexion</v-btn>
          <v-btn href="/user/register" flat><v-icon>person_add</v-icon>Inscription</v-btn>
          <v-btn href="/user/me" flat><v-icon>person</v-icon> </v-btn>
          <v-btn href="/user/logout" flat><v-icon>exit_to_app</v-icon>Déconnexion</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
  import Vue from 'vue'

  new Vue({
    el: '#app',

    data: () => ({
      valid: false,
      drawer: null,
      items: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' }
      ],
      mini: false,
      right: null,
      username: '',
      usernameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      password: '',
      confirmation: '',
      newPassword: '',
      previousPassword: '',
      footerIcons: ['fab fa-facebook', 'fab fa-twitter', 'fab fa-google-plus', 'fab fa-linkedin', 'fab fa-instagram'],

      pokemonName: '',
      pokemonNameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      pokemonPicture: '',
      pokemonPictureRules: [
        v => !!v || 'Picture is required'
      ],
      pokemonHealth: 0,
      pokemonHealthRules: [
        v => !!v || 'Health is required',
        v => v >= 0 && v <= 100 || 'Health must be between 0 and 100'
      ],
      pokemonAttack: 0,
      pokemonAttackRules: [
        v => !!v || 'Attack is required',
        v => v >= 0 && v <= 100 || 'Attack must be between 0 and 100'
      ],
      pokemonDefense: 0,
      pokemonDefenseRules: [
        v => !!v || 'Defense is required',
        v => v >= 0 && v <= 100 || 'Defense must be between 0 and 100'
      ],
      pokemonSpeed: 0,
      pokemonSpeedRules: [
        v => !!v || 'Speed is required',
        v => v >= 0 && v <= 100 || 'Speed must be between 0 and 100'
      ],
      pokemonTypes: null,
      pokemonTypesItems: [
        'Aqua',
        'Earth',
        'Fire',
        'Light',
        'Dark',
        'Poison'
      ],
      users: [
        {
          name: 'Foo',
          email: 'bar@foo.com',
          status: 0,
          pokemons: [0, 2]
        },
        {
          name: 'Bar',
          email: 'foo@bar.com',
          status: 1,
          pokemons: []
        }
      ]
    }),

    methods: {
    },
  })
</script>
