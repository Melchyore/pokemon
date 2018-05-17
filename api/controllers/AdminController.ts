/**
 * AdminController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

export function showPanel(req: any, res: any, next: Function) {
  return res.view('static/admin/panel')
}

export function showUsers(req: any, res: any, next: Function) {
  User
  .find()
  .populate('pokemons')
  .then(users => {
    return res.view('static/admin/users', {
      title: sails.__('admin.users'),
      users,
      breadcrumbs: {
        panel: {
          text: sails.__('admin.panel'),
          route: sails.route('admin')
        },
        users: {
          text: sails.__('admin.users'),
          route: sails.route('admin.users')
        }
      }
    })
  })
  .catch(err => {
    console.log(err)
  })
}
