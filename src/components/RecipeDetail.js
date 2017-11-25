import React from 'react';

export default class RecipeDetail extends React.Component {

    render() {
        const recipe = this.props.recipe;

        return (

            <tr>
                <td>#{recipe.id}</td>
                <td>{recipe.recipeName}</td>
                <td>{recipe.category}</td>
                <td>
                    <a href={'/recipe-edit/' + recipe.id}>
                        edit
                    </a>
                </td>
                <td>
                    <buton data-id={recipe.id}>delete</buton>
                </td>

            </tr>
        );

    }
}
RecipeDetail.propTypes = {
    recipe: React.PropTypes.object.isRequired
}
