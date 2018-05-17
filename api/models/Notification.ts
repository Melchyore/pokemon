/**
 * Notification.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    type: {
      type: 'string',
      isIn: ['info', 'warn', 'success', 'message'],
      required: true
    },
    content: {
      type: 'string',
      maxLength: 1000,
      required: true
    },
    target: {
      type: 'number',
      required: true
    }
  },

};
