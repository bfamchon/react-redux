import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteArticle } from "../actions/index";

const mapDispatchToProps = dispatch => {
    return {
        deleteArticle: id => dispatch(deleteArticle(id))
    };
};

class ConnectedButtonDeleteArticle extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.deleteArticle(this.props.id);
    }
    render() {
        return (
            <button className="btn btn-danger float-right input-group-addon"
                    onClick={this.handleClick}>
                <i className="fa fa-trash"/>
            </button>
        );
    }
}
const ButtonDeleteArticle = connect(null, mapDispatchToProps)(ConnectedButtonDeleteArticle);
export default ButtonDeleteArticle;