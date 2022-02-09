import React from 'react';
import { shallow } from 'enzyme';
import { MyPostComponent } from './MyPost';

describe('Component MyPost', () => {
  it('should render without crashing', () => {
    const component = shallow(<MyPostComponent />);
    expect(component).toBeTruthy();
  });
});
