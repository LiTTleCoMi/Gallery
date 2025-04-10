import ImagesContainer from "./_components/ImagesContainer";
import GalleryImage from "./_components/GalleryImage";

export default function Home() {
	return (
		<div>
			<ImagesContainer>
				<GalleryImage description={"Animals In Nature"} src="/images/bird.webp" id={"a"} />
				<GalleryImage description={"Animals In Nature"} src="/images/green-bird.jpg" id={"a"} />
				<GalleryImage description={"Animals In Nature"} src="/images/bird.webp" id={"a"} />
				<GalleryImage description={"Animals In Nature"} src="/images/orange-bird.png" id={"a"} />
				<GalleryImage description={"Animals In Nature"} src="/images/green-bird.jpg" id={"a"} />
				<GalleryImage description={"Animals In Nature"} src="/images/bird.webp" id={"a"} />
				<GalleryImage description={"Animals In Nature"} src="/images/bird.webp" id={"a"} />
				<GalleryImage description={"Animals In Nature"} src="/images/bird.webp" id={"a"} />
				<GalleryImage description={"Animals In Nature"} src="/images/green-bird.jpg" id={"a"} />
				<GalleryImage description={"Animals In Nature"} src="/images/green-bird.jpg" id={"a"} />
				<GalleryImage description={"Animals In Nature"} src="/images/orange-bird.png" id={"a"} />
				<GalleryImage description={"Animals In Nature"} src="/images/bird.webp" id={"a"} />
			</ImagesContainer>
		</div>
	);
}
