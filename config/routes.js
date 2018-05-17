/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {


  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    name: '/',
    controller: 'HomeController',
    action: 'home'
  },

  '/home': {
    name: 'home',
    controller: 'HomeController',
    action: 'home'
  },

  'GET /user/login': {
    name: 'auth.login',
    controller: 'AuthController',
    action: 'showLoginForm'
  },

  'POST /user/login': {
    name: 'auth.login',
    controller: 'AuthController',
    action: 'login'
  },

  'GET /user/register': {
    name: 'auth.register',
    controller: 'AuthController',
    action: 'showRegisterForm'
  },

  'POST /user/register': {
    name: 'auth.register',
    //controller: 'AuthController',
    action: 'user/signup'
  },

  'GET /user/reset': {
    name: 'reset_password'
  },

  'GET /user/:name': {
    name: 'user.show',
    controller: 'UserController',
    action: 'show'
  },

  'GET /user/edit': {
    name: 'user.edit',
    controller: 'UserController',
    action: 'showEditForm'
  },

  'POST /user/edit': {
    name: 'user.edit',
    controller: 'UserController',
    action: 'edit'
  },

  'GET /user/logout': {
    name: 'user.logout',
    controller: 'AuthController',
    action: 'logout'
  },

  'GET /foo': 'TestController.foo',

  'GET /pokemon/all': {
    name: 'pokemons',
    controller: 'PokemonController',
    action: 'showAll'
  },

  'GET /pokemon/add': {
    name: 'pokemon.add',
    controller: 'PokemonController',
    action: 'showAddForm'
  },

  'POST /pokemon/add': {
    name: 'pokemon.add',
    controller: 'PokemonController',
    action: 'add'
  },

  'GET /pokemon/:id': {
    name: 'pokemon.show',
    controller: 'PokemonController',
    action: 'show'
  },

  'GET /admin': {
    name: 'admin',
    controller: 'AdminController',
    action: 'showPanel'
  },

  'GET /admin/users': {
    name: 'admin.users',
    controller: 'AdminController',
    action: 'showUsers'
  }
}
