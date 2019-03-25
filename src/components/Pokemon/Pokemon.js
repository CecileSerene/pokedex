import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {convertPoundsToKilograms, getFirstAbility} from "./service";
import {Attribute, Card, Sprite, Title} from "./Pokemon.style";

class Pokemon extends Component {

    constructor(props) {
        super(props);
        this.state = {
            getUrl : 'https://pokeapi.co/api/v2/pokemon/' + props.idPokemon,
            name : '',
            picture : '',
            weight : 0,
            firstAbility: ''
        };
        this.getPokemon = this.getPokemon.bind(this)
    };

    getPokemon = () => {
        console.log(this.state.getUrl);
        fetch(this.state.getUrl).then(
            result => { return result.json() }
        ).then(pokemon => {
                this.setState(
                    {name : pokemon.name,
                        picture: pokemon.sprites.front_default,
                        weight : pokemon.weight,
                        firstAbility: getFirstAbility(pokemon)}
                )
            }
        )

    };

    componentDidMount() {
        this.getPokemon()
    };

    render() {
        return(
            <Card>
                <Title> { this.state.name } </Title>
                <Sprite src= {this.state.picture} />
                <Attribute>Weight: { convertPoundsToKilograms(this.state.weight) }kg</Attribute>
                <Attribute>Ability : { this.state.firstAbility }</Attribute>
            </Card>
        )
    };
}

Pokemon.propTypes = {
    idPokemon: PropTypes.number.isRequired
};

export default Pokemon;
