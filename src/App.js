import React, { Component } from 'react';
import {Box, Container} from "./App.style";
import Avatar from "./components/Pokemon/Avatar";

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
        const pokedex = this.state.ids.map(id => <Box key={id}><Avatar idPokemon={id}/></Box>)
        return(
            <Container>
                { pokedex }
            </Container>
        )
    };
}

export default App;
