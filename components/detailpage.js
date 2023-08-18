import fetchCss from '../utils/fetchCss.js';
import { addToCart } from '../utils/cartfun.js';

import proxiedStore from '../services/Store.js';
class DetailPage extends HTMLElement {
	constructor() {
		super();

		this.root = this.attachShadow({ mode: 'open' });
		const style = document.createElement('style');
		this.root.prepend(style);

		async function loadCss() {
			const data = await fetchCss('./components/DetailsPage.css');
			style.textContent = data;
		}
		loadCss();
	}
	connectedCallback() {
		// const tmpl = document.getElementById('cart-item-template');
		// const child = tmpl.content.cloneNode(true);
		// this.root.appendChild(child);
		this.render();
		// window.addEventListener('cartchange', () => {
		// 	console.log('cart change handler');
		// });
	}
	render() {
		const pathname = location.pathname;
		const indx = pathname.lastIndexOf('-') + 1;
		const itemId = +pathname.slice(indx);
		const item = app.store.menu[0].products.find(
			(coffee) => coffee.id === itemId
		);

		const { description, name, price, image } = item;
		const div = document.createElement('div');
		div.innerHTML = `
		<a href='/'>Back </a>
		<img src="data/images/${image}" alt="coffee image">
		<p class="price">${price}$</p>
		<h2> ${name}</h2>
		<p class="description">${description}</p>
		 <button>Add to Cart </button>
		`;

		this.root.appendChild(div);

		this.root.querySelector('a').addEventListener('click', function (e) {
			e.preventDefault();
			const path = this.getAttribute('href');
			app.store.router.go(path);
		});

		this.root.querySelector('button').addEventListener('click', function (e) {
			let tempCart = [...app.store.cart] || [];
			let resultArr = addToCart(tempCart, itemId);
			app.store.cart = resultArr;
		});
	}
}

customElements.define('detail-page', DetailPage);

export default DetailPage;
