import fetchCss from '../utils/fetchCss.js';
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
	}
	render() {
		const h2 = document.createElement('h2');
		h2.textContent = 'This is Detail Page';
		this.root.appendChild(h2);
	}
}

customElements.define('detail-page', DetailPage);

export default DetailPage;
