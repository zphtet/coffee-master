import fetchCss from '../utils/fetchCss.js';
class MenuPage extends HTMLElement {
	constructor() {
		super();
		this.root = this.attachShadow({ mode: 'open' });

		const style = document.createElement('style');
		this.root.prepend(style);

		async function loadCss() {
			const data = await fetchCss('./components/MenuPage.css');
			style.textContent = data;
		}
		loadCss();
	}
	connectedCallback() {
		const tmpl = document.getElementById('menu-page-template');
		const childNode = tmpl.content.cloneNode(true);
		this.root.appendChild(childNode);
	}
}

customElements.define('menu-page', MenuPage);

export default MenuPage;
