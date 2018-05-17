module.exports = {
  sync: true,

  friendlyName: 'Route',


  description: 'Get a route url and replace parameters with values if it exists.',


  inputs: {
    routeQuery: {
      description: 'Name of the route.',
      type: 'string'
    },
    value: {
      description: 'Value of a parameter (:paramName) if it exists.',
      type: 'ref'
    }
  },


  exits: {
    success: {

    }
  },


  fn: function (inputs, exits) {
    let route = sails.getUrlFor(inputs.routeQuery)

    console.log(sails.router)

    // All done.
    return exits.success()

  }


}
