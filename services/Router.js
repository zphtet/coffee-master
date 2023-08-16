const Router = {
	element: document.querySelector('main'),
	init: () => {
		const links = Array.from(document.querySelectorAll('a.navlink'));
		links.forEach((link) => {
			link.addEventListener('click', function (e) {
				e.preventDefault();
				const path = this.getAttribute('href');
				Router.go(path);
			});
		});
		// console.log(location.pathname);
		if (location.pathname === '/') Router.go('/');

		window.addEventListener('popstate', (_) => {
			const path = location.pathname;
			Router.go(path, false);
		});
	},
	go: function (path, addToHistory = true) {
		if (addToHistory) history.pushState(path, '_', path);
		switch (path) {
			case '/':
				this.element.innerHTML = '<menu-page></menu-page>';
				break;
			case '/order':
				this.element.innerHTML = '<order-page>  </order-page>';
				break;
			default:
				console.log('default route');
		}
	},
};

export default Router;
