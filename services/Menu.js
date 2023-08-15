import API from './API.js';

// console.log(window);
export async function loadMenu() {
	return await API.fetchData();
}
