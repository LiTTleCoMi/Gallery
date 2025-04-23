import NextImage from "next/image";
import Link from "next/link";

export default function GalleryImage({ title, alt, id, route, src }) {
	return (
		<Link href={`/${route}/${id}`}>
			<div className="flex flex-col gap-y-1 items-center justify-center">
				<NextImage src={src} alt={alt} width={5000} height={5000} className="rounded-sm max-h-60 md:max-h-75 lg:max-h-80 xl:max-h-90 w-auto" />
				<h5 className="text-md sm:text-lg leading-tight font-semibold text-gray-200 text-center">{title}</h5>
			</div>
		</Link>
	);
}
