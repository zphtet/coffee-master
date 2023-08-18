import { loadMenu } from './services/Menu.js';
import Store from './services/Store.js';
import Router from './services/Router.js';
import { totlaItems } from './utils/cartfun.js';

import MenuPage from './components/menupage.js';
import DetailPage from './components/detailpage.js';
import OrderPage from './components/orderpage.js';

window.app = {};
app.store = Store;
app.store.router = Router;
// window.addEventListener('cartchange', function (e) {
// 	console.log('Cart changed');
// });
window.addEventListener('DOMContentLoaded', async function () {
	// console.log(window);
	// console.log('DOM Content Loaded');
	app.store.menu = await loadMenu();
	Router.init();

	const badge = this.document.querySelector('#badge');
	// window.addEventListener('menuchange', () => this.alert('Hello menu change'));

	window.addEventListener('cartchange', () => {
		const num = totlaItems();
		// console.log(num);
		// console.dir(badge);

		if (!num) {
			badge.hidden = true;
			return;
		}
		badge.hidden = false;
		badge.innerHTML = num;
		// console.log('cart change handler');
	});
});
