import AboutContainer from './AboutContainer.vue';
import { mount } from '@vue/test-utils';

test('About container', () => {
  expect(AboutContainer).toBeTruthy();

  const wrapper = mount(AboutContainer);

  expect(wrapper.find('h1').text()).toBe('About');
  expect(wrapper.find('p').text()).toContain('playground');
  expect(wrapper.html()).toMatchSnapshot();
});
