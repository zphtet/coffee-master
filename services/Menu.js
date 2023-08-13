import API from './API';

export async function loadMenu() {
	return await API.fetchData();
}
