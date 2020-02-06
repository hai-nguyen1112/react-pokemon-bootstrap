import {isEqual} from 'lodash'

export default function(pokemon, editForm) {
  let currentPokemonAttributes = {}
  currentPokemonAttributes["name"] = pokemon.name

  pokemon.stats.forEach(stat => {
    if (stat.name === "hp" || stat.name === "attack" || stat.name === "defense" || stat.name === "speed") {
      currentPokemonAttributes[stat.name] = stat.value
    }
  })

  if (isEqual(currentPokemonAttributes, editForm)) {
    return false
  } else {
    return true
  }
}
