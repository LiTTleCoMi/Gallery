export default async function handler(req, res) {
	const API_URL = process.env.NEXT_PUBLIC_API_URL;
	const ACCESS_KEY = process.env.API_ACCESS_KEY;

	const { page } = req.query;

	const response = await fetch(`${API_URL}topics?${page && "page=" + page}`, {
		headers: {
			Authorization: `Client-ID ${ACCESS_KEY}`,
			"Accept-Version": "v1",
		},
	});

	if (!response.ok) {
		const errorBody = await response.text(); // Sometimes errors aren't JSON
		console.error("Unsplash Error Response:", errorBody);
		return res.status(response.status).json({
			error: "Failed to fetch Unsplash",
			details: errorBody,
		});
	}


    const link = response.headers.get("link")
	const data = await response.json();
	res.status(200).json({data, link});
}
