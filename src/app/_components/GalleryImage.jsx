import NextImage from "next/image";
import Link from "next/link";

export default function GalleryImage ({ description, id, route, src }) {
	return (
		<Link href={`/${route}/${id}`}>
			<div className="flex flex-col gap-y-1 items-center justify-center">
				<NextImage src={src} alt={description} width={5000} height={5000} className="rounded-sm max-h-50 w-auto" />
				<h5 className="text-md sm:text-lg leading-tight font-semibold text-gray-200 text-center w-9/10">{description}</h5>
			</div>
		</Link>
	);
}
