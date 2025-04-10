import SingleImage from "./_components/SingleImage";

export default function ViewImage() {
	return (
		<div className="flex flex-col gap-3 pt-3 px-1">
			<SingleImage src={"/images/bird.webp"} description={"Green Bird"} />
		</div>
	);
}
