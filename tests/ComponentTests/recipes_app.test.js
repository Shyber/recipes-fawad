import React from 'react';
import { shallow } from 'enzyme';
import {RecipeGalleryMain} from '../../src/app/containers/RecipeGalleryMain';
import Card from '@material-ui/core/Card';

function shallowSetup() {
  // Sample props to pass to our shallow render
  const props = {recipes : [
                                {
                                    id: "2342342",
                                    title: "Sample 1",
                                    imageUrl: "https://4.img-dpreview.com/files/p/TS1200x900~sample_galleries/1330372094/7004100121.jpg",
                                },
                                {
                                    id: "1232111",
                                    title: "Sample 2",
                                    imageUrl: "https://2.img-dpreview.com/files/p/TS1200x900~sample_galleries/1330372094/0024739717.jpg",
                                }
                            ],
                    bLoading : false
                }
  // wrapper instance around rendered output
  const enzymeWrapper = shallow(<RecipeGalleryMain {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe('Enzyme Shallow Render of RecipeGalleryMain', () => {
    it('should render the RecipeGalleryMain with 2 items', () => {
      // Setup wrapper and assign props.
      const { enzymeWrapper, props } = shallowSetup();

      //Just a random class check for MUI Component
      expect(enzymeWrapper.find('div').hasClass('MuiCardContent-root')).toBe(true);

      //Our fake props had two recipe items
      expect(enzymeWrapper.find(Card).length).toBe(2);

    });
  });