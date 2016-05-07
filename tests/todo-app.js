
import * as React from 'react';

import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import * as chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

import TodoApp from './../src/js/todo-app.js'

chai.use(chaiEnzyme());

describe('<TodoApp />', () => {

  it('component present', () => {
    const wrapper = shallow(<TodoApp />);
    expect(wrapper).to.be.present();
  });

});
