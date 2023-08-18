const Store = {
	menu: null,
	cart: [],
};

const handler = {
	set(target, prop, value) {
		target[prop] = value;
		// console.log(prop);
		if (prop === 'menu') {
			window.dispatchEvent(new Event('menuchange'));
		}
		if (prop === 'cart') {
			// console.log('i am from proxy');
			window.dispatchEvent(new Event('cartchange'));
		}
		return true;
	},
};
const proxiedStore = new Proxy(Store, handler);

export default proxiedStore;
