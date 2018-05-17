<template>
  <div>
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Éditer un utilisateur</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field v-model="editedItem.username" label="Pseudonyme"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md8>
                <v-text-field v-model="editedItem.email" label="Adresse e-mail"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
          <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-breadcrumbs>
      <v-icon slot="divider">chevron_right</v-icon>
      <v-breadcrumbs-item
        v-for="(item, index) in breadcrumbs"
        :href="item.route"
        :key="index"
        :disabled="false"
      >
        {{ item.text }}
      </v-breadcrumbs-item>
    </v-breadcrumbs>

    <v-data-table
      class="elevation-1"
      :headers="headers"
      :items="users"
      hide-actions
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.username }}</td>
        <td class="text-xs-left">{{ props.item.email }}</td>
        <td class="text-xs-left">{{ props.item.status }}</td>
        <td class="text-xs-left">{{ props.item.pokemons.length }}</td>
        <td class="justify-left layout px-0">
          <v-btn icon class="mx-0" @click="editItem(props.item)">
            <v-icon color="teal">edit</v-icon>
          </v-btn>
          <v-btn icon class="mx-0" @click="">
            <v-icon color="pink">delete</v-icon>
          </v-btn>
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
  export default {
    props: {
      breadcrumbs: {
        type: Object,
        required: true
      },
      users: {
        type: Array,
        required: true
      }
    },

    data () {
      return {
        dialog: false,
        headers: [
          {
            text: 'Pseudonyme',
            align: 'left',
            value: 'username'
          },
          {
            text: 'Adresse e-mail',
            value: 'email'
          },
          {
            text: 'Statut',
            value: 'status'
          },
          {
            text: 'Pokémons',
            value: 'pokemons'
          },
          {
            text: 'Actions',
            value: 'actions',
            sortable: false,
          }
        ],
        items: [],
        editedIndex: -1,
        editedItem: {
          username: '',
          email: ''
        },
        defaultItem: {
          username: '',
          email: ''
        },
      }
    },

    watch: {
      dialog (val) {
        val || this.close()
      }
    },

    methods: {
      editItem (item) {
        this.editedIndex = this.users.indexOf(item.id)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      close () {
        this.dialog = false

        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.users[this.editedIndex], this.editedItem)
        } else {
          this.users.push(this.editedItem)
        }

        this.close()
      }
    }
  }
</script>
