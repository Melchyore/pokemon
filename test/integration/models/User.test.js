let should = require('chai').should()
let assert = require('chai').assert

let faker = require('faker')

describe('User', () => {
  it('should create one record', done => {
    User.create({
      username: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password()
    })
    .fetch()
    .then(user => {
      Notification.create({
        type: 'info',
        content: 'creating my first notification',
        target: user.id
      })
      .fetch()
      .then()
    })

    done()
  })

  it('should find one record', done => {
    User.find()
    .then(users => {
      assert.notEqual(users.length, 0)
    })

    done()
  })

  it('should find notifications with length=1', done => {
    User.findById(1)
    .populate('notifications')
    .then(user => {
      assert.equal(user.notifications.length, 1)
    })

    done()
  })
})
