import React, { Component } from 'react';
import Pokemon from "./components/Pokemon/Pokemon";
import {Box, Container} from "./App.style";

class App extends Component {

    constructor() {
        super();
        this.state = {
            ids: [1, 2, 3, 4, 5, 6, 7, 8, 9]
        }
    };

    render() {
        const pokedex = this.state.ids.map(id => <Box><Pokemon idPokemon={id}/></Box>)
        return(
            <Container>
                { pokedex }
            </Container>
        )
    };
}

export default App;
