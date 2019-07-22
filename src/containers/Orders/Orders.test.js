import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Orders } from './Orders';
import Spinner from '../../components/UI/Spinner/Spinner';

configure({ adapter: new Adapter() });

describe('<Orders />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Orders />);
  });

  it('should render <Spinner /> when loading', () => {
    wrapper.setProps({ loading: true, orders: [] });
    expect(wrapper.find(Spinner)).toHaveLength(1);
  });
});
