import React, {Component} from 'react';
import {Attribute, Card, Sprite, Title} from "../Pokemon/Pokemon.style";
import {convertPoundsToKilograms} from "../Pokemon/service";
import {Link} from "react-router-dom";

class Detail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: 1
        }

    };

    componentDidMount() {
        const { match: { params } } = this.props;
        this.setState({id: params.id})
    }

    render() {
        return(
            <div>
                <p>
                    This is the detail page for pokemon # { this.state.id }.
                </p>
            </div>
        )
    };

}

export default Detail;