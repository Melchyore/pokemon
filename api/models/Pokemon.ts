/**
 * Pokemon.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    createdAt: false,
    updatedAt: false,

    name: {
      type: 'string',
      unique: true,
      required: true
    },
    picture: {
      type: 'string',
      required: true
    },
    types: {
      type: 'json',
      required: true,
      custom: (value) => {
        return _.difference(value, ['Aqua', 'Light', 'Fire', 'Poison', 'Dark', 'Earth']).length < 1
      }
    },
    attack: {
      type: 'number',
      min: 0,
      max: 100,
      required: true
    },
    defense: {
      type: 'number',
      min: 0,
      max: 100,
      required: true
    },
    health: {
      type: 'number',
      min: 0,
      max: 100,
      required: true
    },
    speed: {
      type: 'number',
      min: 0,
      max: 100,
      required: true
    },

    owner: {
      model: 'user'
    }
  },

}

/* Sequelize model
module.exports = {
  attributes: {
    name: {
      type: Sequelize.STRING,
      unique: true,
      validate: {
        allowNull: false
      }
    },
    picture: {
      type: Sequelize.STRING,
      validate: {
        allowNull: false
      }
    },
    types: {
      type: Sequelize.ARRAY(Sequelize.TEXT) ,
      validate: {
        allowNull: false
      }
    },
    attack: {
      type: Sequelize.INTEGER,
      validate: {
        allowNull: false,
        min: 0,
        max: 100,
      }
    },
    defense: {
      type: Sequelize.INTEGER,
      validate: {
        allowNull: false,
        min: 0,
        max: 100,
      }
    },
    health: {
      type: Sequelize.INTEGER,
      validate: {
        allowNull: false,
        min: 0,
        max: 100,
      }
    },
    speed: {
      type: Sequelize.INTEGER,
      validate: {
        allowNull: false,
        min: 0,
        max: 100,
      }
    }
  },
  options: {
    timestamps: false,
    tableName: 'pokemon',
    classMethods: {},
    instanceMethods: {},
    hooks: {}
  }
}*/
