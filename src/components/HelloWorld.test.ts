import HelloWorld from './HelloWorld.vue';
import { mount } from '@vue/test-utils';

describe('Hello world component', () => {
  test('renders correctly', () => {
    expect(HelloWorld).toBeTruthy();

    const wrapper = mount(HelloWorld, {
      props: {
        msg: 'Test message',
      },
    });

    expect(wrapper.text()).toContain('Test message');
    expect(wrapper.html()).toMatchSnapshot();
  });
});
