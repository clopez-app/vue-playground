import { defineAsyncComponent } from 'vue';

const HelloWorldAsync = defineAsyncComponent(
  () => import('./components/HelloWorld.vue')
);

const AboutContainerAsync = defineAsyncComponent(
  () => import('./components/about/AboutContainer.vue')
);

const ContactContainerAsync = defineAsyncComponent(
  () => import('./components/contact/ContactContainer.vue')
);

export const routes = [
  { path: '/', component: HelloWorldAsync, name: 'Home' },
  { path: '/about', component: AboutContainerAsync, name: 'About' },
  { path: '/contact', component: ContactContainerAsync, name: 'Contact' },
];
