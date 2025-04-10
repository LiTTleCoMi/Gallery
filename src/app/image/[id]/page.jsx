import GalleryImage from "@/app/_components/GalleryImage";

export default function ViewImage() {
	return (
		<div className="flex flex-col gap-3 p-3">
			<GalleryImage description={"Animals In Nature"} src="/images/bird.webp" id={"a"} />
		</div>
	);
}
