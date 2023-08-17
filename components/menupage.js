import fetchCss from '../utils/fetchCss.js';
class MenuPage extends HTMLElement {
	menuStore = window.app.store.menu;
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
		// const tmpl = document.getElementById('menu-page-template');
		// const childNode = tmpl.content.cloneNode(true);
		// this.root.appendChild(childNode);
		this.render();
	}
	render() {
		// const tmpl = document.getElementById('menu-page-template');
		console.log(this.menuStore);
		if (!this.menuStore) {
			// this.root.innerHTML = '<h2> Loading ....  </h2>';
		} else {
			// this.root.innerHTML = '<h2> Menu Page</h2>';

			this.menuStore[0].products.forEach(({ price, image, name, id }) => {
				const div = document.createElement('div');
				div.className = 'coffee';

				div.innerHTML = `
				<a href="product-${id}">
				  <p> ${name} </p>
					<img src='./data/images/${image}' alt="coffee1" />
					<div class="flex">
						<p>${price} $</p>
						<button>Add</button>
					</div>
				</a>
			`;
				this.root.appendChild(div);
			});

			const coffeeLinks = Array.from(this.root.querySelectorAll('.coffee > a'));
			console.log(coffeeLinks);
			coffeeLinks.forEach((link) => {
				link.addEventListener('click', function (e) {
					e.preventDefault();
					const path = this.getAttribute('href');
					app.store.router.go(path);
				});
			});
			// this.root.innerHTML += html;
		}
		// const parentDOM = document.querySelector('menu-page');

		// console.log(parentDOM);

		// tmpl.innerHTML = `<h2> Hello This is Menu </h2>`;

		// this.root.appendChild(tmpl);
	}
}

customElements.define('menu-page', MenuPage);

export default MenuPage;
