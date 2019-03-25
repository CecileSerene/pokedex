import {convertPoundsToKilograms, getFirstAbility} from './service';
import React from 'react';

const emptyPokemon = {
    abilities: [],
    weight: 0
};
const pokemon = {
    abilities: [
        {
            ability:{
                name: "chlorophyll"
            }
        }
    ],
    weight: 100
};


describe('Tests for getFirstAbility', () => {
    it('Should return null if there is no abilities', () => {
        expect(getFirstAbility(emptyPokemon)).toEqual(null);
    });
    it('Should return the first ability', () => {
        expect(getFirstAbility(pokemon)).toEqual("chlorophyll");
    });
});

describe('Tests for convertPoundsToKilograms', () => {
    it('Should convert 0 to 0', () => {
        expect(convertPoundsToKilograms(emptyPokemon.weight)).toEqual(0);
    });
    it('Should convert pounds to kilogramms', () => {
        expect(convertPoundsToKilograms(pokemon.weight)).toEqual(45.4);
    });
});