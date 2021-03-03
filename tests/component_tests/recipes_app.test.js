import React from 'react';
import { shallow } from 'enzyme';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { RecipesAppContainer } from '../../src/app/containers/RecipesApp';

function recipeAppShallowSetup() {
    // Sample props to pass to our shallow render
    const props = {
        recipes: {},
        dispatch: jest.fn()
    };
    // wrapper instance around rendered output
    const enzymeRecipeAppWrapper = shallow(<RecipesAppContainer {...props} />);

    return {
        props,
        enzymeRecipeAppWrapper
    };
}

describe('Enzyme Shallow Render of RecipesApp', () => {
    it('should render the view with a single button and title', () => {
        // Setup wrapper and assign props.
        const { enzymeRecipeAppWrapper, props } = recipeAppShallowSetup();

        // We check if the button is there
        expect(
            enzymeRecipeAppWrapper
                .find(Button)
                .first()
                .text()
        ).toBe("Load Recipes");

        // And the title
        expect(
            enzymeRecipeAppWrapper
                .find(Typography)
                .first()
                .text()
        ).toBe("Recipe Gallery");
    });
});
