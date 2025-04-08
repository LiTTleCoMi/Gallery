import Image from "next/image";
import Link from "next/link";

export default function CategoryImage({ description, id }) {
	return (
		<Link href={`/categories/${id}`}>
			<div className="flex flex-col items-center justify-center w-full h-full">
				<Image src="/images/bird.webp" alt="empty" width={1000} height={1000} className="w-full h-full rounded-sm" />
				<h1 className="text-xl font-semibold text-slate-900">{description}</h1>
			</div>
		</Link>
	);
}
