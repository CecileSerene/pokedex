import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import {Attribute, Card, Sprite, Title} from "./Pokemon.style";
import {getPokemon} from "../../redux";


class Pokemon extends Component {

    render() {
        return(
            <Card>
                <Title> { this.props.myProps.name } </Title>
                <Sprite src= {this.props.myProps.picture} />
                <Attribute>Weight: { this.props.myProps.weight }kg</Attribute>
                <Attribute>Ability : { this.props.myProps.firstAbility }</Attribute>
            </Card>
        )
    };
}

Pokemon.propTypes = {
    idPokemon: PropTypes.number.isRequired
};


const mapStateToProps = (state,  ownProps) => {
    return { myProps : getPokemon(state, ownProps.idPokemon)};
};

export default connect(mapStateToProps, null)(Pokemon);
