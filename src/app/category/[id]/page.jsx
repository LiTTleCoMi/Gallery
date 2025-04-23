import { Suspense } from "react";
import CategoryView from "./CategoryView";

export default function Category() {
	return (
		<Suspense fallback={<div className="p-4 text-center">Loading…</div>}>
			<CategoryView />
		</Suspense>
	);
}
