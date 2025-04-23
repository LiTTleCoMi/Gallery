"use client";
import GalleryImage from "@/app/_components/GalleryImage";
import ImagesContainer from "@/app/_components/ImagesContainer";
import PageSelector from "@/app/_components/PageSelector";
import fetchCategory from "@/app/lib/fetchCategory";
import { useQueryParamSync } from "@/app/lib/useQueryParamSync";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Category() {
	const [data, setData] = useState(null);
	const [links, setLinks] = useState(null);
	const [page, setPage] = useState(null);

	const searchParams = useSearchParams();
	const { setParam, removeParam } = useQueryParamSync();
	let { id } = useParams();
	let idParts = id.split("--");
	id = idParts[0];
	const category = decodeURIComponent(idParts.slice(1));

	useEffect(() => {
		const queryPage = searchParams.get("page");
		if (!queryPage) {
			setParam("page", "1");
			setPage("1");
		} else {
			setPage(queryPage);
		}
	}, [searchParams, setParam]);

	useEffect(() => {
		if (!page) return;

		const load = async () => {
			try {
				const res = await fetchCategory(id, page);
				setData(res.data);
				setLinks(res.link);
				console.log("Fetched category:", res);
			} catch (err) {
				console.error(err);
			}
		};

		load();
	}, [page]);

	return (
		<div className="flex flex-col items-center gap-y-3 p-2">
			<h1 className="text-3xl font-bold text-center">{category}</h1>
			<ImagesContainer>
				{data?.map((item) => {
					return <GalleryImage key={item.id} title={null} alt={item.alt_description ? item.alt_description : "No Description"} src={item.urls.full} id={item.id} route="image" />;
				})}
			</ImagesContainer>
			<PageSelector header={links} current={Number(page)} setParam={setParam} />
		</div>
	);
}
