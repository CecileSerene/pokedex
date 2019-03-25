export function getFirstAbility(pokemon) {
    if (pokemon.abilities[0] !== undefined) {
        return pokemon.abilities[0].ability.name
    } else {
        return null
    }
}

export function convertPoundsToKilograms(pounds) {
    return pounds * 0.454
}