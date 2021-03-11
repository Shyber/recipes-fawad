import React from 'react';
import { shallow } from 'enzyme';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { RecipeGalleryMainComponent } from '../../src/app/containers/RecipeGalleryMain';

function recipeGalleryShallowSetup() {
    // Sample props to pass to our shallow render
    const props = {
        recipes: [
            {
                id: '2342342',
                title: 'Sample 1',
                imageUrl:
                        'https://4.img-dpreview.com/files/p/TS1200x900~sample_galleries/1330372094/7004100121.jpg'
            },
            {
                id: '1232111',
                title: 'Sample 2',
                imageUrl:
                        'https://2.img-dpreview.com/files/p/TS1200x900~sample_galleries/1330372094/0024739717.jpg'
            }
        ]
        ,
        bLoading: false
    };
    // wrapper instance around rendered output
    const enzymeGalleryWrapper = shallow(<RecipeGalleryMainComponent {...props} />);

    return {
        props,
        enzymeGalleryWrapper
    };
}

describe('Enzyme Shallow Render of RecipeGalleryMain', () => {
    it('should render the RecipeGalleryMain with 2 items', () => {
        // Setup wrapper and assign props.
        const { enzymeGalleryWrapper, props } = recipeGalleryShallowSetup();

        // Our fake props had two recipe items, making sure that's rendered correctly

        // Gallery Item 1
        // Check title
        expect(
            enzymeGalleryWrapper
                .find(Card)
                .first()
                .childAt(1)
                .text()
        ).toBe(props.recipes[0].title);
        // Check image
        expect(
            enzymeGalleryWrapper
                .find(CardMedia)
                .first()
                .getElement(0)
                .props
                .image
        ).toBe(props.recipes[0].imageUrl);

        // Gallery Item 2
        // Check title
        expect(
            enzymeGalleryWrapper
                .find(Card)
                .last()
                .childAt(1)
                .text()
        ).toBe(props.recipes[1].title);
        // Check image
        expect(
            enzymeGalleryWrapper
                .find(CardMedia)
                .last()
                .getElement(0)
                .props
                .image
        ).toBe(props.recipes[1].imageUrl);
    });
});
