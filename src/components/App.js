import React from 'react';


export default class App extends React.Component {

    render() {

        const recipes = [];
        for (let i = 1; i < 10; i++) {
            recipes.push({
                id: i,
                category: 'entrees',
                recipeName: `test${i}`
            })
        }

        return (
            <table>
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
            {recipes.map((recipe, index) => {
                return (
                    <tr key={recipe.id}>
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

                )

            })}
            </tbody>
            </table>


        );

    }


}
