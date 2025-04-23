export default async function handler(req, res) {
	const API_URL = process.env.NEXT_PUBLIC_API_URL;
	const ACCESS_KEY = process.env.API_ACCESS_KEY;
	const { id } = req.query;

	const url = `${API_URL}photos/${id}`;
	console.log("URL:", url);
	const response = await fetch(url, {
		headers: {
			Authorization: `Client-ID ${ACCESS_KEY}`,
			"Accept-Version": "v1",
		},
	});

	response.headers.forEach((value, name) => console.log(`Unsplash header: ${name} = ${value}`));

	if (!response.ok) {
		const errorBody = await response.text();
		const rateLimit = response.headers.get("X-Ratelimit-Remaining");
		console.log("Unsplash X-Ratelimit-Remaining:", rateLimit);
		console.error("Unsplash Error Response:", errorBody);
		return res.status(response.status).json({ error: "Failed to fetch Unsplash", details: errorBody });
	}

	const photo = await response.json();
	res.status(200).json(photo);
}
