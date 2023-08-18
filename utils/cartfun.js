export const addToCart = (tempCart, id) => {
	const menu = app.store.menu[0].products;
	const cart = tempCart;
	const item = menu.filter((coffee) => coffee.id === id);
	const alreadyItem = cart.filter((coffee) => coffee.id === id);
	if (alreadyItem[0]) {
		const modifyCart = cart.map((coffee) => {
			if (coffee.id === id) {
				return { ...coffee, qty: coffee.qty + 1 };
			}
			return coffee;
		});
		return modifyCart;
	}

	cart.push({
		...item[0],
		qty: 1,
	});
	return cart;
};

export const totlaItems = () => {
	const cart = window.app.store.cart;

	const totalNum = cart.reduce((accum, item) => {
		return accum + item.qty;
	}, 0);
	return totalNum;
};
