/**
 * HomeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

export function home(req, res, next) {
  /*return res.renderVue('../../views/pages/Home.vue', { session: req.session }, {
    head: {
      title: sails.__('title')
    }
  })*/

  return res.view('pages/homepage', {
    title: sails.__('title')
  })
}
