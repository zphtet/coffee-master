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
		console.log(location.pathname);

		window.addEventListener('popstate', (_) => {
			const path = location.pathname;
			Router.go(path, false);
		});
	},
	go: function (path, addToHistory = true) {
		if (addToHistory) history.pushState(path, '_', path);
		switch (path) {
			case '/':
				this.element.innerHTML = '<h1>This is Home</h1>';
				break;
			case '/order':
				this.element.innerHTML = '<h1>This is Order</h1>';
				break;
			default:
				console.log('default route');
		}
	},
};

export default Router;
