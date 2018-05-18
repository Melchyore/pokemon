/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

import * as bcrypt from 'bcryptjs'

declare const sails: any

export function showLoginForm(req: any, res: any, next: Function) {
  return res.view('static/user/login', {
    title: sails.__('auth.login'),
    routes: {
      action: sails.route('auth.login'),
      reset: sails.route('reset_password')
    }
  })

  /*return res.renderVue('static/user/Login.vue', { session: req.session }, {
    head: {
      title: sails.__('login')
    }
  })*/
}

export function showRegisterForm(req: any, res: any, next: Function): any {
  return res.view('static/user/register', {
    title: sails.__('auth.register'),
  })
}

export function login(req: any, res: any, next: Function): any {
  User.findOne({ where: { email: req.param('email') } })
  .then(user => {
    if (!user || (user && !bcrypt.compareSync(req.param('password'), user.password))) {
      req.addFlash('error', 'Email or password is wrong.')

      return res.redirect('/user/login')
    } else {
      User.update({
        email: user.email
      })
      .set({
        updatedAt: +new Date(),
        status: 1
      })
      .fetch()
      .then(async (user) => {
        let _user = user[0]
        _user.notifications = await Notification.find({ owner: user.id })

        req.session.authenticated = true
        req.session.user = _user

        return res.redirect('/home')
      }).catch(err => {
        console.log(err)
        return res.redirect('/user/login')
      })
    }
  }).catch(err => {
    if (err) {
      req.addFlash('error', err)

      console.log(err)

      return res.redirect('/user/login')
    }
  })
}

export function register(req: any, res: any, next: Function): any {
  User.create(req.allParams())
  .fetch()
  .then(user => {
    res.json(user)
  })
  .catch(err => {
    if (err) {
      req.addFlash('error', err)

      return res.redirect('/user/register')
    }
  })
}

export function logout(req: any, res: any, next: Function): any {
  if (req.session.authenticated) {
    req.session.destroy()
  }

  return res.redirect('/home')
}
