import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import Dialog from '@material-ui/core/Dialog';


import {AvatarButton,  Sprite} from "./Pokemon.style";
import {fetchRequestAction} from "../../redux";
import Pokemon from "./Pokemon";


class Avatar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    };

    componentDidMount() {
        this.props.fetch(this.props.idPokemon)
    };

    openInfo = () => {
        this.setState({
            open: true,
        });
    };

    handleClose = () => {
        this.setState({  open: false });
    };

    render() {
        return(
            <div>
                <AvatarButton onClick={this.openInfo}>
                    <Sprite src= {this.props.picture} />
                </AvatarButton>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <Pokemon idPokemon={this.props.idPokemon} />
                </Dialog>
            </div>

        )
    };
}

Avatar.propTypes = {
    idPokemon: PropTypes.number.isRequired
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetch: (id) => dispatch(fetchRequestAction(id))
    }
};

const mapStateToProps = (state,  ownProps) => {
    const pokemonObject = state[ownProps.idPokemon];
    if (pokemonObject !== undefined) {
        if (pokemonObject.success) {
            const pokemon = pokemonObject.info;
            return {
                picture: pokemon.sprites.front_default,
            }
        } else {
            return {name: pokemonObject.error}
        }
    } else {
        return {name: 'Undefined'}
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(Avatar);
