import API from './API.js';

export async function loadMenu() {
	return await API.fetchData();
}
