import { loadMenu } from './services/Menu.js';
import Store from './services/Store.js';
import Router from './services/Router.js';

window.app = {};
app.store = Store;

window.addEventListener('DOMContentLoaded', async function () {
	console.log(window);
	console.log('DOM Content Loaded');
	app.store.menu = await loadMenu();
	Router.init();
	
});
