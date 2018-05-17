module.exports = {
  friendlyName: 'Signup',

  description: 'Signup user.',

  inputs: {
    username:  {
      required: true,
      type: 'string',
      description: 'The user\'s login.',
    },

    email: {
      required: true,
      type: 'string',
      isEmail: true,
      description: 'The email address for the new account, e.g. m@example.com.',
      extendedDescription: 'Must be a valid email address.',
    },

    password: {
      required: true,
      type: 'string',
      maxLength: 200,
      description: 'The unencrypted password to use for the new account.'
    },

    confirmation: {
      required: true,
      type: 'string',
      maxLength: 200,
      description: 'The unencrypted confirmation to compare with the password.'
    }
  },

  exits: {
    error: {
      responseType: 'view',
      viewTemplatePath: 'static/user/register',
      description: 'Error.',
    },

    success: {
      responseType: 'view',
      viewTemplatePath: 'static/user/register'
    }
  },

  async fn(inputs, exits) {
    let newUser = await User.create(inputs)
    .intercept({}, err => {
      this.req.addFlash('error', sails.models['user'].validationMessages['username'][err.code])

      throw exits.error({ title: 'Inscription' })
    })
    .fetch()

    return exits.success({ title: 'Inscription' })
  }
}
