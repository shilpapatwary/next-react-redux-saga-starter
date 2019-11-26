import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import { should } from 'chai';
import SampleComponent from './SampleComponent';
should();
Enzyme.configure({ adapter: new Adapter() });
describe("<SampleComponent />", () => {
    it('should dispatch sample action', () => {
        const wrapper = mount(<SampleComponent></SampleComponent>);
        wrapper.find(".content").length.should.equal(1); 
    });
});