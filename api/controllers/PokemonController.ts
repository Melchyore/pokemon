/**
 * PokemonController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

declare const sails: any

export function showAddForm(req: any, res: any, next: Function) {
  return res.view('static/pokemon/add', {
    title: sails.__('pokemon.add')
  })
}

export function add(req: any, res: any, next: Function) {
  req.body.types = req.body.types.split(',')

  Pokemon.create(_.merge(req.allParams(), { owner: req.session.user.id }))
  .fetch()
  .then(pokemon => {
    return res.json(pokemon)
  })
  .catch(err => {
    console.log(err)

    return res.redirect('/pokemon/add')
  })
}

export async function showAll(req: any, res: any, next: Function) {
  let pokemons = await Pokemon.find({
    select: ['id', 'name', 'picture']
  })

  return res.view('static/pokemon/all', {
    title: sails.__('pokemon.all'),
    pokemons
  })
}

export async function show(req: any, res: any, next: Function) {
  Pokemon
  .findOne({
    id: req.param('id')
  })
  .then(pokemon => {
    return res.json(pokemon)
  })
  .catch(err => {
    console.log(err)

    res.redirect('/pokemon/all')
  })
}
