import HelloWorld from './components/HelloWorld.vue';
import AboutContainer from './components/about/AboutContainer.vue';
import ContactContainer from './components/contact/ContactContainer.vue';

export const routes = [
  { path: '/', component: HelloWorld, name: 'Home' },
  { path: '/about', component: AboutContainer, name: 'About' },
  { path: '/contact', component: ContactContainer, name: 'Contact' },
];
