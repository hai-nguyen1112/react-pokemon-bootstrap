export default function(name, hp, attack, defense, speed, pokemonNumber) {
  let newPokemon = {}
  newPokemon["name"] = name.toLowerCase()
  newPokemon["stats"] = []
  newPokemon["stats"].push({name: "hp", value: parseInt(hp, 10)})
  newPokemon["stats"].push({name: "attack", value: parseInt(attack, 10)})
  newPokemon["stats"].push({name: "defense", value: parseInt(defense, 10)})
  newPokemon["stats"].push({name: "speed", value: parseInt(speed, 10)})
  newPokemon["sprites"] = {}
  newPokemon["sprites"]["front"] = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNumber}.png`
  newPokemon["sprites"]["back"] = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonNumber}.png`
  return newPokemon
}
