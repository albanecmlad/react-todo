
import React from 'react';

import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import chaiImmutable from 'chai-immutable';

import TodoApp from './../src/js/todo-app.js'
import TodoItem from './../src/js/todo-item.js'

chai.use(chaiEnzyme());
chai.use(chaiImmutable);

let wrapper;

describe('<TodoApp />', () => {

  describe('component', () => {

    before( () => {
      wrapper = shallow(<TodoApp />);
    });

    it('present...', () => {
      expect(wrapper).to.be.present();
    });
    it('initial state of newTodo...', () => {
      expect(wrapper.state('data').get('newTodo')).to.be.equal('');
    });
    it('initial state of todos...', () => {
      expect(wrapper.state('data').get('todos')).to.have.size(0);
    });
    it('initial todo-list DOM...', () => {
      expect(wrapper.find(TodoItem)).to.have.length(0);
    });
    it('initial new-todo DOM...', () => {
      expect(wrapper.find('input.new-todo')).to.have.value('');
    });
  });

  describe('new-todo changeable', () => {

    before( () => {
      wrapper.find('input.new-todo').simulate('change', {target: {value: 'test todo'}});
    });

    it('state changing...', () => {
      expect(wrapper.state('data').get('newTodo')).to.be.equal('test todo');
    });
    it('component changing...', () => {
      expect(wrapper.find('input.new-todo')).to.have.value('test todo');
    });
  });

  describe('new-todo not creatable', () => {

    before( () => {
      wrapper.find('input.new-todo').simulate('keyDown', {preventDefault: () => {}});
    });

    it('state not changing...', () => {
      expect(wrapper.state('data').get('todos')).to.have.size(0);
    });
    it('component not changing...', () => {
      expect(wrapper.find(TodoItem)).to.have.length(0);
    });
  });

  describe('new-todo creatable', () => {

    before( () => {
      wrapper.find('input.new-todo').simulate('keyDown', {keyCode: 13, preventDefault: () => {}});
    });

    it('state changing...', () => {
      expect(wrapper.state('data').get('todos')).to.have.size(1);
    });
    it('state content...', () => {
      expect(wrapper.state('data').get('todos').get(0)).to.be.equal('test todo');
    });
    it('component changing...', () => {
      expect(wrapper.find(TodoItem)).to.have.length(1);
    });
    it('component content...', () => {
      expect(wrapper.find(TodoItem)).to.have.prop('todo').equal('test todo');
    });
  });

  describe('todos destroyable', () => {

    before( () => {
      wrapper.instance().destroyTodo(0);
      wrapper.update();
    });

    it('state changing...', () => {
      expect(wrapper.state('data').get('todos')).to.have.size(0);
    });
    it('component changing...', () => {
      expect(wrapper.find(TodoItem)).to.have.length(0);
    });
  });

});
