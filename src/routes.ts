import HelloWorld from './components/HelloWorld.vue';
import AboutContainer from './components/about/AboutContainer.vue';

export const routes = [
  { path: '/', component: HelloWorld },
  { path: '/about', component: AboutContainer },
];
