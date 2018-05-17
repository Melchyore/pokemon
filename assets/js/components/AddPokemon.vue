<template>
  <v-form method="POST" action="" v-model="valid" ref="form" lazy-validation>
    <input name="_method" type="hidden" value="PUT">

    <v-text-field
      name="name"
      label="Nom"
      v-model="name"
      :rules="nameRules"
      :counter="10"
      prepend-icon="adb"
      required
    ></v-text-field>

    <v-text-field
      name="picture"
      type="url"
      label="Image"
      v-model="picture"
      :rules="pictureRules"
      required
    ></v-text-field>

    <v-text-field
      name="health"
      type="number"
      min=0
      max=100
      label="HP"
      v-model="health"
      :rules="healthRules"
      required
    ></v-text-field>

    <v-text-field
      name="attack"
      type="number"
      min=0
      max=100
      label="Puissance d'attaque"
      v-model="attack"
      :rules="attackRules"
      required
    ></v-text-field>

    <v-text-field
      name="defense"
      type="number"
      min=0
      max=100
      label="Puissance de défense"
      v-model="defense"
      :rules="defenseRules"
      required
    ></v-text-field>

    <v-text-field
      name="speed"
      type="number"
      min=0
      max=100
      label="Vitesse"
      v-model="speed"
      :rules="speedRules"
      required
    ></v-text-field>

    <v-select
      label="Type"
      :items="types"
      v-model="select"
      :rules="[v => !!v || 'Type is required']"
      required
      multiple
      chips
      deletable-chips
    ></v-select>

    <input name="type" type="hidden" v-model="select" />

    <v-btn
      type="submit"
      :disabled="!valid"
    >
      submit
    </v-btn>
    <v-btn @click="clear">clear</v-btn>
  </v-form>
</template>

<script>
  export default {
    props: {
      pokemon: {
        type: Object
      }
    },

    mixins: [],

    data () {
      return {
        valid: false,
        name: '',
        nameRules: [
          v => !!v || 'Name is required',
          v => (v && v.length <= 10) || 'Name must be less than 10 characters'
        ],
        picture: '',
        pictureRules: [
          v => !!v || 'Picture is required'
        ],
        health: 0,
        healthRules: [
          v => !!v || 'Health is required',
          v => v >= 0 && v <= 100 || 'Health must be between 0 and 100'
        ],
        attack: 0,
        attackRules: [
          v => !!v || 'Attack is required',
          v => v >= 0 && v <= 100 || 'Attack must be between 0 and 100'
        ],
        defense: 0,
        defenseRules: [
          v => !!v || 'Defense is required',
          v => v >= 0 && v <= 100 || 'Defense must be between 0 and 100'
        ],
        speed: 0,
        speedRules: [
          v => !!v || 'Speed is required',
          v => v >= 0 && v <= 100 || 'Speed must be between 0 and 100'
        ],
        select: [],
        types: [
          'Aqua',
          'Earth',
          'Fire',
          'Light',
          'Dark',
          'Poison'
        ]
      }
    },

    methods: {
      clear () {
        this.$refs.form.reset()
      }
    },

    mounted () {
      if (this.pokemon) {
        this.name = this.pokemon.name
        this.picture = this.pokemon.picture
        this.health = this.pokemon.health
        this.attack = this.pokemon.attack
        this.defense = this.pokemon.defense
        this.speed = this.pokemon.speed
        this.select = this.pokemon.type
      }
    }
  }
</script>
