<template lang="ejs">
  <v-app>
    <v-content>
      <v-container fluid>
        <v-form method="post" action="/user/login" v-model="valid" ref="form" lazy-validation>
          <v-text-field
            name="email"
            label="Email"
            v-model="email"
            :rules="emailRules"
            required
          ></v-text-field>
          <v-text-field
            name="password"
            label="Mot de passe"
            v-model="password"
            required
            type="password"
          ></v-text-field>

          <v-btn
            type="submit"
            :disabled="!valid"
          >
            Connexion
          </v-btn>
          <p>
            <a href="/lost-password">
              Mot de passe perdu ?
            </a>
          </p>
        </v-form>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Toolbar from '../../layouts/Toolbar'

export default {
  components: { Toolbar },
  data: function() {
    return {}
  },
  methods: {
  }
}
</script>
