import React, { Component } from 'react';
import './App.css';
import Pokemon from "./components/Pokemon/Pokemon";

class App extends Component {

    constructor() {
        super();
        this.state = {
            ids: [1, 2, 3, 4, 5, 6, 7, 8, 9]
        }
    };

    render() {
        const pokedex = this.state.ids.map(id => <li><Pokemon idPokemon={id}/></li>)
        return(
            <ul>
                { pokedex }
            </ul>
        )
    };
}

export default App;
