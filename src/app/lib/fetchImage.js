export default async function fetchImage(id) {
	const res = await fetch(`/api/fetch_image?id=${encodeURIComponent(id)}`);

	if (!res.ok) {
		const errBody = await res.text();
		throw new Error(`Failed to fetch image: ${res.status} ${res.statusText} – ${errBody}`);
	}

	return res.json();
}
