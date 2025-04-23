import { Suspense } from "react";
import CategoriesView from "./CategoriesView";

export default function Home() {

	return (
		<Suspense fallback={<div className="p-4 text-center">Loading…</div>}>
			<CategoriesView />
		</Suspense>
	);
}
