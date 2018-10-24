import React from "react";
import { connect } from "react-redux";
import BDA from "./ButtonDeleteArticle";
import IMA from "./InputModifyArticle";

const mapStateToProps = state => {
    return { articles: state.articles };
};

const ConnectedList = ({ articles }) => (
    <ul className="list-group list-group-flush">
        {articles.map(el => (
            <li className="list-group-item" key={el.id}>
                <div className="input-group">
                    <IMA article={el}/>
                    <BDA id={el.id}/>
                </div>
            </li>
        ))}
    </ul>
);
const List = connect(mapStateToProps)(ConnectedList);
export default List;