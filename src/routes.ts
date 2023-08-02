const HelloWorldAsync = () => import('./components/HelloWorld.vue');

const AboutContainerAsync = () =>
  import('./components/about/AboutContainer.vue');

const ContactContainerAsync = () =>
  import('./components/contact/ContactContainer.vue');

export const routes = [
  { path: '/', component: HelloWorldAsync, name: 'Home' },
  { path: '/about', component: AboutContainerAsync, name: 'About' },
  { path: '/contact', component: ContactContainerAsync, name: 'Contact' },
];
