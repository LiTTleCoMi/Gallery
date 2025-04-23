"use client";

import { useEffect, useState } from "react";
import fetchCategories from "./lib/fetchCategories";
import ImagesContainer from "./_components/ImagesContainer";
import GalleryImage from "./_components/GalleryImage";
import PageSelector from "./_components/PageSelector";
import { useSearchParams } from "next/navigation";
import { useQueryParamSync } from "./lib/useQueryParamSync";

export default function HomeClient() {
	const [data, setData] = useState(null);
	const [links, setLinks] = useState(null);
	const [page, setPage] = useState(null);

	const searchParams = useSearchParams();
	const { setParam } = useQueryParamSync();

	useEffect(() => {
		const qp = searchParams.get("page");
		if (!qp) {
			setParam("page", "1");
			setPage("1");
		} else {
			setPage(qp);
		}
	}, [searchParams, setParam]);

	useEffect(() => {
		if (!page) return;
		(async () => {
			try {
				const res = await fetchCategories(page);
				setData(res.data);
				setLinks(res.link);
			} catch (err) {
				console.error(err);
			}
		})();
	}, [page]);

	return (
		<div className="flex flex-col items-center gap-y-3 p-2">
			<h1 className="text-3xl font-bold text-center">Categories</h1>
			<ImagesContainer>
				{data?.map((item) => {
					const preview = item.preview_photos[Math.floor(Math.random() * item.preview_photos.length)];
					return <GalleryImage key={item.id} title={item.title} alt={item.cover_photo.alt_description} src={preview.urls.full} id={`${item.id}--${item.title}`} route="category" />;
				})}
			</ImagesContainer>
			<PageSelector header={links} current={Number(page)} setParam={setParam} />
		</div>
	);
}
