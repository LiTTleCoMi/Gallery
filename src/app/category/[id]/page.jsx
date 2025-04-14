"use client";
import GalleryImage from "@/app/_components/GalleryImage";
import ImagesContainer from "@/app/_components/ImagesContainer";
import PageSelector from "@/app/_components/PageSelector";
import { useParams } from "next/navigation";

export default function Category() {
	const { id } = useParams();
	return (
		<div className="flex flex-col items-center gap-y-3 p-2">
			<ImagesContainer>
				<GalleryImage description={"Animals In Nature"} src="/images/green-bird.jpg" id={"a"} route="image" />
				<GalleryImage description={"Animals In Nature"} src="/images/bird.webp" id={"a"} route="image" />
				<GalleryImage description={"Animals In Nature"} src="/images/orange-bird.png" id={"a"} route="image" />
				<GalleryImage description={"Animals In Nature"} src="/images/bird.webp" id={"a"} route="image" />
				<GalleryImage description={"Animals In Nature"} src="/images/bird.webp" id={"a"} route="image" />
				<GalleryImage description={"Animals In Nature"} src="/images/green-bird.jpg" id={"a"} route="image" />
				<GalleryImage description={"Animals In Nature"} src="/images/bird.webp" id={"a"} route="image" />
				<GalleryImage description={"Animals In Nature"} src="/images/bird.webp" id={"a"} route="image" />
				<GalleryImage description={"Animals In Nature"} src="/images/green-bird.jpg" id={"a"} route="image" />
				<GalleryImage description={"Animals In Nature"} src="/images/green-bird.jpg" id={"a"} route="image" />
				<GalleryImage description={"Animals In Nature"} src="/images/bird.webp" id={"a"} route="image" />
				<GalleryImage description={"Animals In Nature"} src="/images/orange-bird.png" id={"a"} route="image" />
			</ImagesContainer>
			<PageSelector totalPages={10} />
		</div>
	);
}
