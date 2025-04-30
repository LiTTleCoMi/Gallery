import { Suspense } from "react";
import CategoriesPage from "./CategoriesPage";

export default function Home() {

	return (
		<Suspense fallback={<div className="p-4 text-center">Loading…</div>}>
			<CategoriesPage />
		</Suspense>
	);
}
