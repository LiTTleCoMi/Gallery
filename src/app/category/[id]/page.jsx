import { Suspense } from "react";
import CategoryPage from "./CategoryPage";

export default function Category() {
	return (
		<Suspense fallback={<div className="p-4 text-center">Loading…</div>}>
			<CategoryPage />
		</Suspense>
	);
}
