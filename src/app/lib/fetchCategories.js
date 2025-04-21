export default async function fetchCategories() {
	const res = await fetch("/api/fetch_categories");
	if (!res.ok) throw new Error("Failed to fetch categories");
	return res.json();
}
