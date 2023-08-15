import { loadMenu } from './services/Menu.js';
import Store from './services/Store.js';

window.app = {};
app.store = Store;

window.addEventListener('DOMContentLoaded', async function () {
	console.log('DOM Content Loaded');
	app.store.menu = await loadMenu();
	console.log(app);
	eat();
});
