import React from 'react';
import If from '../if.js';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import faker from 'faker';

Enzyme.configure({ adapter: new Adapter() });

describe('<If /> component', () => {
  const foo = faker.random.alphaNumeric();
  const bar = faker.random.alphaNumeric();
  const baz = faker.random.alphaNumeric();

  const Foo = () => <div>{foo}</div>;
  const Bar = () => <div>{bar}</div>;
  const Baz = () => <div>{baz}</div>;

  const empty = {};
  // Expected outcome
  // Expected failure
  // Edge Case

  describe('Expected usage', () => {
    it('returns children if the `condition` prop is truthy and the element has children', () => {
      const result = mount(
        <If condition={true}>
          <Foo />
        </If>
      );
      expect(result.find('div').text()).toContain(foo);
    });

    it('returns the `then` value if the `condition` prop is truthy', () => {
      const result = mount(<If condition={true} then={<Foo />} />);
      expect(result.find('div').text()).toContain(foo);
    });

    it('returns the `then` value if the `condition` prop is truthy, even if there are children', () => {
      const result = mount(
        <If condition={true} then={<Foo />}>
          <Bar />
        </If>
      );
      expect(result.find('div').text()).toContain(foo);
    });

    it('returns `empty` if the `condition` prop is falsy and there is no `else` or `unless` prop', () => {
      const result = mount(
        <If condition={false} then={<Foo />}>
          <Bar />
        </If>
      );
      expect(result).toEqual(empty);
    });

    it('returns the `else` value if the `condition` prop is falsy and there is no `unless` prop', () => {
      const result = mount(
        <If condition={false} then={<Foo />} else={<Bar />} />
      );
      expect(result.find('div').text()).toContain(bar);
    });

    it('returns the `else` value if the `condition` prop is falsy and the `unless` prop is falsy', () => {
      const result = mount(
        <If condition={false} then={<Foo />} else={<Baz />} />
      );
      expect(result.find('div').text()).toContain(baz);
    });

    it('returns the `unless` value if the `condition` prop is falsy and the `unless` prop is truthy', () => {
      const result = mount(
        <If condition={false} then={<Foo />} else={<Bar />} unless={<Baz />} />
      );
      expect(result.find('div').text()).toContain(baz);
    });
  });

  describe('Unexpected usage', () => {
    it('returns `empty` if given no props', () => {
      const result = shallow(<If />);
      expect(result).toEqual(empty);
    });

    it('returns `empty` if the `condition` prop is truthy but there are no other props or children', () => {
      const result = shallow(<If condition={true} />);
      expect(result).toEqual(empty);
    });

    it('returns `empty` if the `condition` prop is missing, even if other valid props are passed', () => {
      const result = mount(
        <If then={<Foo />} else={<Bar />} unless={<Baz />}>
          <Foo />
        </If>
      );
      expect(result).toEqual(empty);
    });
  });
});
