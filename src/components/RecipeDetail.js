import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

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
                        <Button bsSize="xsmall">
                        edit <Glyphicon glyph="edit" />
                        </Button>
                    </a>
                </td>
                <td>
                    <Button bsSize="xsmall" data-id={recipe.id} data-recipeName={recipe.recipeName}>
                        delete <Glyphicon glyph="remove-circle" />
                    </Button>
                </td>

            </tr>
        );

    }
}
RecipeDetail.propTypes = {
    recipe: React.PropTypes.object.isRequired
}
