import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import Dialog from '@material-ui/core/Dialog';


import {AvatarButton,  Sprite} from "./Pokemon.style";
import {fetchRequestAction, getPokemon} from "../../redux";
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
            this.props.myProps ?
                <div>
                    <AvatarButton onClick={this.openInfo}>
                        <Sprite src= {this.props.myProps.picture} />
                    </AvatarButton>
                    <Dialog open={this.state.open} onClose={this.handleClose}>
                        <Pokemon idPokemon={this.props.idPokemon} />
                    </Dialog>
                </div>
                : <div>
                    <AvatarButton onClick={this.openInfo}>
                        <Sprite src= {require('../../data/placeholder.png')} />
                    </AvatarButton>
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
    return { myProps : getPokemon(state, ownProps.idPokemon)};
};

export default connect(mapStateToProps, mapDispatchToProps)(Avatar);
