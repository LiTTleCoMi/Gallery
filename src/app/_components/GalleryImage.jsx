import Image from "next/image";
import Link from "next/link";

export default function GalleryImage({ description, id, src }) {
	return (
		<Link href={`/categories/${id}`}>
			<div className="flex flex-col gap-y-1 items-center justify-center w-full h-full">
				<Image src={src} alt={description} width={5000} height={5000} className="w-full h-full rounded-sm object-cover" />
				<h5 className="text-xl font-semibold text-gray-200 text-center w-9/10">{description}</h5>
			</div>
		</Link>
	);
}
