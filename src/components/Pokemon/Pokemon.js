import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import {convertPoundsToKilograms, getFirstAbility} from "./service";
import {Attribute, Card, Sprite, Title} from "./Pokemon.style";
import Detail from "../Detail/Detail";
import { Route, Link } from "react-router-dom";


class Pokemon extends Component {

    constructor(props) {
        super(props);
    };

    render() {
        return(
            <div>
                <Card>
                    <Title> { this.props.name } </Title>
                    <Sprite src= {this.props.picture} />
                    <Attribute>Weight: { convertPoundsToKilograms(this.props.weight) }kg</Attribute>
                    <Attribute>Ability : { this.props.firstAbility }</Attribute>
                </Card>
                <Link to={"/detail/" + this.props.idPokemon}>See details</Link>
                <Route path="/detail/:id" component={Detail}/>
            </div>
        )
    };
}

Pokemon.propTypes = {
    idPokemon: PropTypes.number.isRequired
};


const mapStateToProps = (state,  ownProps) => {
    const pokemonObject = state[ownProps.idPokemon];
    if (pokemonObject !== undefined) {
        if (pokemonObject.success) {
            const pokemon = pokemonObject.info;
            return {
                name: pokemon.name,
                picture: pokemon.sprites.front_default,
                weight: pokemon.weight,
                firstAbility: getFirstAbility(pokemon)
            }
        } else {
            return {name: pokemonObject.error}
        }
    } else {
        return {name: 'Undefined'}
    }

};

export default connect(mapStateToProps, null)(Pokemon);
