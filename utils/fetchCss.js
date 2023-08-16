const fetchCss = async (url) => {
	const res = await fetch(url);
	const data = await res.text();
	return data;
};
export default fetchCss;
