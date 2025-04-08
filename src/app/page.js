import ImagesContainer from "./_components/ImagesContainer";
import CategoryImage from "./_components/CategoryImage";

export default function Home() {
	return (
		<div>
			<h1 className="pt-3 text-3xl font-bold text-center text-gray-200">Categories</h1>
			<ImagesContainer>
				<CategoryImage description={"Animals In Nature"} src="/images/bird.webp" id={"a"} />
				<CategoryImage description={"Animals In Nature"} src="/images/bird.webp" id={"a"} />
				<CategoryImage description={"Animals In Nature"} src="/images/bird.webp" id={"a"} />
				<CategoryImage description={"Animals In Nature"} src="/images/bird.webp" id={"a"} />
				<CategoryImage description={"Animals In Nature"} src="/images/bird.webp" id={"a"} />
				<CategoryImage description={"Animals In Nature"} src="/images/bird.webp" id={"a"} />
				<CategoryImage description={"Animals In Nature"} src="/images/bird.webp" id={"a"} />
				<CategoryImage description={"Animals In Nature"} src="/images/bird.webp" id={"a"} />
				<CategoryImage description={"Animals In Nature"} src="/images/bird.webp" id={"a"} />
				<CategoryImage description={"Animals In Nature"} src="/images/bird.webp" id={"a"} />
				<CategoryImage description={"Animals In Nature"} src="/images/bird.webp" id={"a"} />
				<CategoryImage description={"Animals In Nature"} src="/images/bird.webp" id={"a"} />
			</ImagesContainer>
		</div>
	);
}
