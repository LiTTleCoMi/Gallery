export default async function fetchCategories(page) {
	const res = await fetch(`/api/fetch_categories?page=${page}`);

	if (!res.ok) {
		const errorText = await res.text(); // capture any error body for debugging
		throw new Error(`Failed to fetch categories: ${res.status} ${res.statusText} - ${errorText}`);
	}

	return res.json();
}
