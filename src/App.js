import React, { Component } from 'react';
import Pokemon from "./components/Pokemon/Pokemon";
import {Box, Container} from "./App.style";
import createSagaMiddleware from 'redux-saga'

class App extends Component {

    constructor() {
        super();
        let pokemonIds = [];
        for (let i = 1; i <= 151; i++) {
            pokemonIds.push(i);
        }
        this.state = {
            ids: pokemonIds
        }
    };

    render() {
        const pokedex = this.state.ids.map(id => <Box key={id}><Pokemon idPokemon={id}/></Box>)
        return(
            <Container>
                { pokedex }
            </Container>
        )
    };
}

export default App;
