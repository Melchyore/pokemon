/**
 * TestController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

declare var sails: any

export function foo(req: any, res: any, next: Function): any {
  res.status(200).send('Hello from Typescript!');
}
