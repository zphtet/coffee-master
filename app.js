import { loadMenu } from './services/Menu.js';
import Store from './services/Store.js';
import Router from './services/Router.js';

import MenuPage from './components/menupage.js';
import DetailPage from './components/detailpage.js';
import OrderPage from './components/orderpage.js';

window.app = {};
app.store = Store;
app.store.router = Router;

window.addEventListener('DOMContentLoaded', async function () {
	console.log(window);
	console.log('DOM Content Loaded');
	app.store.menu = await loadMenu();
	Router.init();
	// window.addEventListener('menuchange', () => this.alert('Hello menu change'));
});
