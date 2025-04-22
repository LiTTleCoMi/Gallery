export default async function fetchCategories(page = 1) {
	const res = await fetch(`/api/fetch_categories?page=${page}`);

	if (!res.ok) {
		const errBody = await res.text();
		throw new Error(`Failed to fetch categories: ${res.status} ${res.statusText} – ${errBody}`);
	}

	return res.json();
}
