// import { loadMenu } from './services/Menu';
// import Store from './services/Store';

const API = {
	url: '/data/menu.json',
	fetchData: async function () {
		const res = await fetch(this.url);
		return await res.json();
	},
};

async function loadMenu() {
	return await API.fetchData();
}


const Store = {
	menu: null,
	cart: [],
};

window.app = {};
app.store = Store;

window.addEventListener('DOMContentLoaded', async function () {
	console.log('DOM Content Loaded');
	app.store.menu = await loadMenu();
	console.log(app);
});
