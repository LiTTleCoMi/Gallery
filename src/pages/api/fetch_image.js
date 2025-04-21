export default async function handler(req, res, id) {
	const API_URL = process.env.NEXT_PUBLIC_API_URL;
	const ACCESS_KEY = process.env.API_ACCESS_KEY;

	const response = await fetch(`${API_URL}photos/${id}`, {
		headers: {
			Authorization: `Client-ID ${ACCESS_KEY}`,
			"Accept-Version": "v1",
		},
	});

	if (!response.ok) {
		return res.status(response.status).json({ error: "Failed to fetch Unsplash" });
	}

	const data = await response.json();
	res.status(200).json(data);
}
