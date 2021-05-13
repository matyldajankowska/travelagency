import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });
  
  const expectedLink = '/trip/abc';
  const expectedImage = 'image.jpg';
  const expectedName = 'alt';
  let expectedTags = ['tag1', 'tag2', 'tag3'];
  const tripId = 'abc';

  const component = shallow(<TripSummary
    id={tripId}
    image={expectedImage}
    name={expectedName} 
    tags={expectedTags} />);

  it('should render correct link', () => {
    const renderedLink = component.find('.link').prop('to');
    expect(renderedLink).toEqual(expectedLink);
  });

  it('should render correct image and alt', () => {
    const renderedImage = component.find('img').prop('src');
    const renderedAlt = component.find('img').prop('alt');
    expect(renderedImage).toEqual(expectedImage);
    expect(renderedAlt).toEqual(expectedName);
  });

  it('should render tags in correct spans', () => {
    const renderedTagOne = component.find('.tags span').at(0).text();
    const renderedTagTwo = component.find('.tags span').at(1).text();
    const renderedTagThree = component.find('.tags span').at(2).text();
    expect(renderedTagOne).toEqual(expectedTags[0]);
    expect(renderedTagTwo).toEqual(expectedTags[1]);
    expect(renderedTagThree).toEqual(expectedTags[2]);
  });

  it('should not render div tags if props tags is false', () => {
    const component = shallow(<TripSummary />);
    expect(component.find('.tags').exists()).toBe(false);
  });
});