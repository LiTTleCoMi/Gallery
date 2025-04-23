"use client";
import fetchImage from "@/app/lib/fetchImage";
import SingleImage from "./_components/SingleImage";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ViewImage() {
	const [data, setData] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		const load = async () => {
			try {
				const res = await fetchImage(id);
				setData(res);
				console.log("Fetched image:", res);
				console.log("Description:", res.description);
			} catch (err) {
				console.error(err);
			}
		};
		load();
	}, [id]);

	if (!data) {
		return <div className="p-4 text-center">Loading image…</div>;
	}

	return (
		<div className="flex flex-col gap-3 pt-3 px-1">
			<SingleImage src={data.urls.full} description={data.description ? data.description : data.alt_description} />
		</div>
	);
}
