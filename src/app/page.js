import ImagesContainer from "./_components/ImagesContainer";
import GalleryImage from "./_components/GalleryImage";
import PageSelector from "./_components/PageSelector";

export default function Home() {
	return (
        <div className="flex flex-col items-center gap-y-3 p-2">
            <h1 className="text-3xl font-bold text-center">Categories</h1>
			<ImagesContainer>
				<GalleryImage description={"Animals In Nature"} src="/images/bird.webp" id={"a"} route="category" />
				<GalleryImage description={"Animals In Nature"} src="/images/green-bird.jpg" id={"a"} route="category" />
				<GalleryImage description={"Animals In Nature"} src="/images/bird.webp" id={"a"} route="category" />
				<GalleryImage description={"Animals In Nature"} src="/images/orange-bird.png" id={"a"} route="category" />
				<GalleryImage description={"Animals In Nature"} src="/images/green-bird.jpg" id={"a"} route="category" />
				<GalleryImage description={"Animals In Nature"} src="/images/bird.webp" id={"a"} route="category" />
				<GalleryImage description={"Animals In Nature"} src="/images/bird.webp" id={"a"} route="category" />
				<GalleryImage description={"Animals In Nature"} src="/images/bird.webp" id={"a"} route="category" />
				<GalleryImage description={"Animals In Nature"} src="/images/green-bird.jpg" id={"a"} route="category" />
				<GalleryImage description={"Animals In Nature"} src="/images/green-bird.jpg" id={"a"} route="category" />
				<GalleryImage description={"Animals In Nature"} src="/images/orange-bird.png" id={"a"} route="category" />
				<GalleryImage description={"Animals In Nature"} src="/images/bird.webp" id={"a"} route="category" />
            </ImagesContainer>
            <PageSelector totalPages={10} />
		</div>
	);
}
