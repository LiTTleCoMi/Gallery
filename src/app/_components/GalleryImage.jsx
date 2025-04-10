import Image from "next/image";
import Link from "next/link";

export default function GalleryImage({ description, id, src }) {
	return (
		<Link href={`/categories/${id}`}>
			<div className="flex flex-col gap-y-1 items-center justify-center">
				<Image src={src} alt={description} width={5000} height={5000} className="rounded-sm max-h-80 w-auto" />
				<h5 className="text-md sm:text-lg leading-tight font-semibold text-gray-200 text-center w-9/10">{description}</h5>
			</div>
		</Link>
	);
}
