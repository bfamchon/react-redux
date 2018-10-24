import React, {Component} from "react";
import {connect} from "react-redux";
import {modifyArticle} from "../actions/index";

const mapDispatchToProps = dispatch => {
    return {
        modifyArticle: article => dispatch(modifyArticle(article))
    };
};

class ConnectedInputModifyArticle extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.modifyArticle({...this.props.article, title: event.target.value});
    }

    render() {
        return (
            <input type="text"
                   className="form-control"
                   value={this.props.article.title}
                   onChange={this.handleChange}/>
        );
    }
}

const InputModifyArticle = connect(null, mapDispatchToProps)(ConnectedInputModifyArticle);
export default InputModifyArticle;