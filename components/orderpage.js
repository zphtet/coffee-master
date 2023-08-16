import fetchCss from '../utils/fetchCss.js';
class OrderPage extends HTMLElement {
	constructor() {
		super();

		this.root = this.attachShadow({ mode: 'open' });
		const style = document.createElement('style');
		this.root.prepend(style);

		async function loadCss() {
			const data = await fetchCss('./components/OrderPage.css');
			style.textContent = data;
		}
		loadCss();
	}
	connectedCallback() {
		const tmpl = document.getElementById('cart-item-template');
		const child = tmpl.content.cloneNode(true);
		this.root.appendChild(child);
	}
}

customElements.define('order-page', OrderPage);

export default OrderPage;
