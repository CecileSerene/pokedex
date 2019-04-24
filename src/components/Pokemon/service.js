export function getFirstAbility(pokemon) {
    if (pokemon.abilities[0] !== undefined) {
        return pokemon.abilities[0].ability.name
    } else {
        return null
    }
}

export function convertPoundsToKilograms(pounds) {
    const kg = pounds * 0.454
    return kg.toFixed(2)
}