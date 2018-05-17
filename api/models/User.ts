/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

import * as bcrypt from 'bcryptjs'

module.exports = {
  schema: true,

  attributes: {
    username: {
      type: 'string',
      required: true,
      unique: true,
      minLength: 3,
      maxLength: 10
    },
    email: {
      type: 'string',
      isEmail: true,
      unique: true,
      required: true
    },
    password: {
      type: 'string',
      required: true
    },
    status: {
      type: 'number',
      isIn: [0, 1],
      defaultsTo: 0
    },
    rank: {
      type: 'number',
      isIn: [0, 1, 2],
      defaultsTo: 0
    },

    pokemons: {
      collection: 'pokemon',
      via: 'owner'
    },
    notifications: {
      collection: 'notification',
      via: 'target'
    }
  },

  validationMessages: {
    username: {
      E_UNIQUE: 'Le pseudo entré est déjà utilisé.',
      E_MISSING_OR_INVALID_PARAMS: 'Le pseudo est requis.',
      E_INVALID_NEW_RECORD: 'Le nombre de caractères du pseudo doit être compris entre 3 et 10.'
    }
  },

  beforeCreate(attrs, cb: Function): void {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(attrs.password, salt, (err, hash: string): Function => {
        attrs.password = hash;
        return cb();
      });
    })
  },

  findById(id: number) {
    return User.findBy('id', id)
  },

  findByName(name: string) {
    return User.findBy('username', name)
  },

  findByEmail(email: string) {
    return User.findBy('email', email);
  },

  findBy(key: string, value: string | number) {
    let criteria = {}
    criteria[key] = value

    return User.findOne(criteria)
  }

  /*beforeCreate(values, cb) {
    Sequence.next('user', (err, count) => {
      if (err) {
        return cb(err)
      }

      values.user = count

      cb()
    })
  }*/
}

/*module.exports = {
  schema: true,

  attributes: {
    user: {
      type: 'number',
      unique: true
    },
    name: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      isEmail: true,
      unique: true,
      required: true
    },
    password: {
      type: 'string',
      encrypt: true
    }
  },

  beforeCreate (values, cb) {
    Sequence.next('user', (err, count) => {
      if (err) {
        return cb(err)
      }

      values.user = count

      cb()
    })
  }
}*/


/* Sequelize model
module.exports =  {
  attributes: {
    createdAt: {
      type: Sequelize.INTEGER,
      defaultValue: +new Date()
    },
    updatedAt: {
      type: Sequelize.INTEGER,
      defaultValue: +new Date()
    },
    username: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
      validate: {
        len: {
          args: [3, 10],
          msg: 'The length must be betwen 3 and 10.'
        }
      }
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
      valiate: {
        isEmail: true,
      }
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    status: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      validate: {
        isIn: [[0, 1]]
      }
    }
  },
  options: {
    timestamps: true,
    tableName: 'user',
    classMethods: {},
    instanceMethods: {},
    hooks: {}
  }
}*/
