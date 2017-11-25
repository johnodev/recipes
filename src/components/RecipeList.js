import React from 'react';
import {connect} from 'react-redux';
import RecipeDetail from './RecipeDetail';
import { Table } from 'react-bootstrap';

class RecipeList extends React.Component {

    render() {
        return (
            <Table bordered hover responsive striped>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Recipe Name</th>
                    <th>Category</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {this.props.recipeList.map((recipe, index) => {
                    return (
                        <RecipeDetail key={recipe.id} recipe={recipe}/>
                    )
                })}
                </tbody>
            </Table>
        );
    }

}

function mapStateProps(state) {
    return ({
        recipeList: state.recipeList
    })
}

export default connect(mapStateProps)(RecipeList);
