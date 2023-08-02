import MainNavigation from './MainNavigation.vue';
import { mount } from '@vue/test-utils';
import { createRouter, createWebHashHistory } from 'vue-router';
import { routes } from '@/routes';

describe('Main navigation component', () => {
  test('Main Navigation works', () => {
    expect(MainNavigation).toBeTruthy();

    const router = createRouter({
      history: createWebHashHistory(),
      routes: routes,
    });
    const wrapper = mount(MainNavigation, {
      global: {
        plugins: [router],
      },
    });
    expect(wrapper.findAll('a').length).toBe(3);
    expect(wrapper.findAll('a')[0].text()).toContain('Home');
    expect(wrapper.findAll('a')[1].text()).toContain('About');
    expect(wrapper.findAll('a')[2].text()).toContain('Contact');
  });
});
