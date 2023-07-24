import MainNavigation from './MainNavigation.vue';
import { mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from '@/routes';

test('Main Navigation works', () => {
  expect(MainNavigation).toBeTruthy();

  const router = createRouter({
    history: createWebHistory(),
    routes: routes,
  });

  const wrapper = mount(MainNavigation, {
    global: {
      plugins: [router],
    },
  });

  expect(wrapper.findAll('a').length).toBe(2);
  expect(wrapper.findAll('a')[0].text()).toContain('Home');
  expect(wrapper.findAll('a')[1].text()).toContain('About');
});
