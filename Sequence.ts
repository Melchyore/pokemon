/**
 * Sequence.js
 *
 * @description :: A model for counting collection's documents to simulate autoIncrement in sails-mongo.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

declare const sails: any

module.exports = {
  dontUseObjectIds: true,

  attributes: {
    counter: {
      type: 'number'
    }
  },

  next (id, cb) {
    sails.models.sequence.getDatastore().manager.collection('sequence').findAndModify(
      { _id: id },
      [['_id', 'asc']],
      {$inc: { counter : 1 }},
      { new: true, upsert : true},
      (err, data) => {
        cb(err, data.value.counter)
      }
    )
  }
}

/*module.exports = {
  dontUseObjectIds: true,

  attributes: {
    counter: {
      type: 'number'
    }
  },

  next (id, cb) {
    Sequence.getDatastore().manager.collection('sequence').findAndModify(
      { _id: id },
      [['_id', 'asc']],
      {$inc: { counter : 1 }},
      { new: true, upsert : true},
      (err, data) => {
        cb(err, data.value.counter)
      }
    )*/
    /*Sequence.native((err, col) => {
      if (err) {
        console.log(err)
      }

      col.findAndModify(
        { id: id },
        [['_id', 'asc']],
        {$inc: { counter : 1 }},
        { new: true, upsert : true},
        (err, data) => {
          cb(err, data.value.counter)
        }
      )
    })*/
  //}

//}
