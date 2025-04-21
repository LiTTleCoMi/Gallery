"use client";
import { useEffect, useState } from "react";
import fetchCategories from "./lib/fetchCategories";
import ImagesContainer from "./_components/ImagesContainer";
import GalleryImage from "./_components/GalleryImage";
import PageSelector from "./_components/PageSelector";

export default function Home() {
	const [data, setData] = useState(null);

	useEffect(() => {
		const load = async () => {
			try {
				const res = await fetchCategories();
				setData(res);
				console.log("Fetched categories:", res);
			} catch (err) {
				console.error(err);
			}
		};
		load();
	}, []);

	return (
		<div className="flex flex-col items-center gap-y-3 p-2">
			<h1 className="text-3xl font-bold text-center">Categories</h1>
            <ImagesContainer>
                {data?.map(item => {
                    return <GalleryImage key={item.id} title={item.title} alt={item.cover_photo.alt_description} src={item.preview_photos[Math.floor(Math.random() * item.preview_photos.length)].urls.full} id={"a"} route="category" />;
                })}
            </ImagesContainer>
            <PageSelector totalPages={10} />
		</div>
	);
}
