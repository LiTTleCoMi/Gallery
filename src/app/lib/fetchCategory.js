export default async function fetchCategory(id, page = 1) {
	const res = await fetch(`/api/fetch_category?id=${encodeURIComponent(id)}&page=${page}`);

	if (!res.ok) {
		const errBody = await res.text();
		throw new Error(`Failed to fetch category: ${res.status} ${res.statusText} – ${errBody}`);
	}

	return res.json();
}
