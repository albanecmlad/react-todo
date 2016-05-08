
import * as React from 'react';

import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import * as chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

import TodoItem from './../src/js/todo-item.js'

chai.use(chaiEnzyme());

let wrapper;

describe('<TodoItem />', () => {

  describe('component', () => {

    before( () => {
      wrapper = shallow(<TodoItem todo="test todo" onDestroy={ () => {} }/>);
    });

    it('present...', () => {
      expect(wrapper).to.be.present();
    });
    it('initial state...', () => {
      expect(wrapper).to.have.state('completed', false);
    });
    it('initial DOM...', () => {
      expect(wrapper.find('input.toggle')).to.not.be.checked();
    });
  });

  describe('completed changeable', () => {

    before( () => {
      wrapper.find('input.toggle').simulate('change');
    });

    it('state changing...', () => {
      expect(wrapper).to.have.state('completed', true);
    });
    it('component changing...', () => {
      expect(wrapper.find('input.toggle')).to.be.checked();
    });
  });

});
