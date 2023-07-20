import HelloWorld from './HelloWorld.vue';
import { mount } from '@vue/test-utils';

test('Hellow world component', () => {
  expect(HelloWorld).toBeTruthy();

  const wrapper = mount(HelloWorld, {
    props: {
      msg: 'Test message',
    },
  });

  expect(wrapper.text()).toContain('Test message');
  expect(wrapper.html()).toMatchSnapshot();
});
