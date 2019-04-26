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

export const mapPokemon = (pokemonFromApi) => {
    return {
        name: pokemonFromApi.name,
        picture: pokemonFromApi.sprites.front_default,
        weight: convertPoundsToKilograms(pokemonFromApi.weight),
        firstAbility: getFirstAbility(pokemonFromApi)
    }
};