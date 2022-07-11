import { createApp } from 'vue';
import maska from 'maska';

import App from './App.vue';
import icons from './components/icons';
import Container from '@/components/ContainerBlock';
import uiElements from '@/components/ui';

const app = createApp(App);

app.use(maska);

icons.forEach((icon) => {
	app.component(icon.name, icon);
});

uiElements.forEach((el) => {
	app.component(el.name, el);
});

app.component(Container.name, Container);

app.mount('#app');
