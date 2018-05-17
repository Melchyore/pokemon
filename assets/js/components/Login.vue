<template>
  <v-form method="POST" :action="routes.action" v-model="valid" ref="form" lazy-validation>
    <v-text-field
      name="email"
      label="Adresse e-mail"
      v-model="email"
      :rules="emailRules"
      required
    ></v-text-field>
    <v-text-field
      name="password"
      :append-icon="passwordVisibility ? 'visibility' : 'visibility_off'"
      :append-icon-cb="() => (passwordVisibility = !passwordVisibility)"
      :type="passwordVisibility ? 'password' : 'text'"
      label="Mot de passe"
      v-model="password"
      :rules="passwordRules"
      required
    ></v-text-field>

    <v-btn
      type="submit"
      :disabled="!valid"
    >
      login
    </v-btn>
    <p>
      <a :href="routes.reset">
        Mot de passe perdu ?
      </a>
    </p>
  </v-form>
</template>

<script>
  export default {
    props: {
      routes: {
        type: Object,
        required: true
      }
    },

    mixins: [],

    data () {
      return {
        valid: false,
        email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
        password: '',
        passwordRules: [
          v => !!v || 'Password is required'
        ],
        passwordVisibility: true
      }
    }
  }
</script>
