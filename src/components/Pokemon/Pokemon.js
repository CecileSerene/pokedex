import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {

    constructor(props) {
        super(props);
        this.state = {
            getUrl : 'https://pokeapi.co/api/v2/pokemon/' + props.idPokemon,
            name : '',
            picture : '',
            weight : 0
        };
        this.getPokemon = this.getPokemon.bind(this)
    };

    getPokemon = () => {
        console.log(this.state.getUrl);
        fetch(this.state.getUrl).then(
            result => { return result.json() }
        ).then(data => {
                this.setState(
                    {name : data.name,
                        picture: data.sprites.front_default,
                        weight : data.weight}
                )
            }
        )

    };

    componentDidMount() {
        this.getPokemon()
    };

    render() {
        return(
            <div>
                <img src= {this.state.picture} />
                <p>Name: { this.state.name }, Weight: { this.state.weight }</p>
            </div>
        )
    };
}

Pokemon.propTypes = {
    idPokemon: PropTypes.number.isRequired
};

export default Pokemon;
