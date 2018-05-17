/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

declare const sails: any

export function show(req: any, res: any, next: Function) {
  User.findByName(req.param('name'))
  .populate('pokemons')
  .then(user => {
    if (!user) {
      return res.notFound()
    }

    // TODO : send 404 error if no user found.

    return res.view('static/user/show', {
      title: user.username,
      user
    })
  })
  .catch(err => {
    console.log(err)

    req.addFlash('error', 'Server error.')

    return res.view('static/user/show')
  })
}

export function showEditForm(req: any, res: any, next: Function) {
  if (req.session.user) {
    return res.view('static/user/edit', {
      title: req.session.user.username,
      user: req.session.user
    })
  } else {
    return res.redirect('/home')
  }
}

export function edit(req: any, res: any, next: Function) {

}
