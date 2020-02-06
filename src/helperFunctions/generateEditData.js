import {isEqual} from 'lodash'

export default function(pokemon, name, hp, attack, defense, speed) {
  let editData = {}
  editData["stats"] = JSON.parse(JSON.stringify(pokemon.stats))
  if (pokemon.name.toLowerCase() !== name.toLowerCase()) {
    editData["name"] = name.toLowerCase()
  }
  if (pokemon.stats.find(stat => stat.name === "hp").value !== parseInt(hp, 10)) {
    editData["stats"].find(stat => stat.name === "hp").value = parseInt(hp, 10)
  }
  if (pokemon.stats.find(stat => stat.name === "attack").value !== parseInt(attack, 10)) {
    editData["stats"].find(stat => stat.name === "attack").value = parseInt(attack, 10)
  }
  if (pokemon.stats.find(stat => stat.name === "defense").value !== parseInt(defense, 10)) {
    editData["stats"].find(stat => stat.name === "defense").value = parseInt(defense, 10)
  }
  if (pokemon.stats.find(stat => stat.name === "speed").value !== parseInt(speed, 10)) {
    editData["stats"].find(stat => stat.name === "speed").value = parseInt(speed, 10)
  }

  if (isEqual(pokemon.stats, editData.stats)) {
    delete editData.stats
  }

  return editData
}
