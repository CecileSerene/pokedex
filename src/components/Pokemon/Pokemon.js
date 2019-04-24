import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import {convertPoundsToKilograms, getFirstAbility} from "./service";
import {Attribute, Card, Sprite, Title} from "./Pokemon.style";
import {fetchRequestAction} from "../../redux";


class Pokemon extends Component {

    constructor(props) {
        super(props);
        this.state = {
            getUrl : `https://pokeapi.co/api/v2/pokemon/${props.idPokemon}`,
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
        this.props.fetch(this.props.idPokemon)
        //this.getPokemon()
    };

    render() {
        return(
            <Card>
                <Title> { this.props.name } </Title>
                <Sprite src= {this.props.picture} />
                <Attribute>Weight: { convertPoundsToKilograms(this.props.weight) }kg</Attribute>
                <Attribute>Ability : { this.props.firstAbility }</Attribute>
            </Card>
        )
    };
}

Pokemon.propTypes = {
    idPokemon: PropTypes.number.isRequired
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetch: (id) => dispatch(fetchRequestAction(id))
    }
};

const mapStateToProps = (state,  ownProps) => {
    const pokemon = state[ownProps.idPokemon];
    if (pokemon !== undefined) {
        return {name : pokemon.name,
            picture: pokemon.sprites.front_default,
            weight : pokemon.weight,
            firstAbility: getFirstAbility(pokemon)}
    }

};


export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);
