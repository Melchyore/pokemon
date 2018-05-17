/**
 * HTTP Server Settings
 * (sails.config.http)
 *
 * Configuration for the underlying HTTP server in Sails.
 * (for additional recommended settings, see `config/env/production.js`)
 *
 * For more information on configuration, check out:
 * https://sailsjs.com/config/http
 */

let path = require('path')

module.exports.http = {

  /****************************************************************************
  *                                                                           *
  * Sails/Express middleware to run for every HTTP request.                   *
  * (Only applies to HTTP requests -- not virtual WebSocket requests.)        *
  *                                                                           *
  * https://sailsjs.com/documentation/concepts/middleware                     *
  *                                                                           *
  ****************************************************************************/

  middleware: {

    /***************************************************************************
    *                                                                          *
    * The order in which middleware should be run for HTTP requests.           *
    * (This Sails app's routes are handled by the "router" middleware below.)  *
    *                                                                          *
    ***************************************************************************/

    /*order: [
      'cookieParser',
      'session',
      'bodyParser',
      'compress',
      'poweredBy',
      'expressVue',
      'router',
      'www',
      'favicon',
    ],*/

    /***************************************************************************
    *                                                                          *
    * The body parser that will handle incoming multipart HTTP requests.       *
    *                                                                          *
    * https://sailsjs.com/config/http#?customizing-the-body-parser             *
    *                                                                          *
    ***************************************************************************/

    /*expressVue: (function _configureExpressVue() {
      let expressVue = require('express-vue')
      let middlewareFn = expressVue.init({
        rootPath: path.join(__dirname, '../views'),
        vueVersion: {
          disabled: true
        },
        head: {
          metas: [
            { charset: 'utf-8' },
            { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          ],
          styles: [
            { style: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
            { style: 'https://unpkg.com/vuetify/dist/vuetify.min.css' },
            { style: 'https://use.fontawesome.com/releases/v5.0.8/css/all.css' }
          ],
          scripts: [
            {
              src: 'https://cdn.jsdelivr.net/npm/vue@latest/dist/vue.min.js'
            },
            {
              src: 'https://unpkg.com/vuetify/dist/vuetify.js'
            },
            {
              src: 'https://cdn.jsdelivr.net/npm/jdenticon@2.1.0',
              async: true
            }
          ]
        },
        template: {
          html: {
            start: '<!DOCTYPE html><html>',
            end: '</html>'
          },
          body: {
            start: `<body>`,
            end: '</body>'
          },
          template: {
            start: '<div id="app">',
            end: '</div>'
          }
        }
      })

      return middlewareFn
    })()*/

    // bodyParser: (function _configureBodyParser(){
    //   var skipper = require('skipper');
    //   var middlewareFn = skipper({ strict: true });
    //   return middlewareFn;
    // })(),

  }

}
