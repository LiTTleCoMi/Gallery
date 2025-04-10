import Image from "next/image";

export default function SingleImage({ src, description, id }) {
	return (
		<div className="flex flex-col items-center justify-center gap-y-3">
			<h5 className="text-3xl leading-tight font-semibold text-gray-200 text-center w-9/10">Animals In Nature</h5>
			<Image className="max-h-screen h-auto w-auto" src={src} alt={description} width={5000} height={5000} />
		</div>
	);
}
