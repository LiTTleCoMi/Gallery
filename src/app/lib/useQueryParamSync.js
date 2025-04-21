"use client";
import { useSearchParams, useRouter } from "next/navigation";

export function useQueryParamSync() {
	const searchParams = useSearchParams();
	const router = useRouter();

	const setParam = (key, value) => {
		const params = new URLSearchParams(searchParams.toString());
		params.set(key, value);
		router.push(`?${params.toString()}`);
	};

	const removeParam = (key) => {
		const params = new URLSearchParams(searchParams.toString());
		params.delete(key);
		router.push(`?${params.toString()}`);
	};

	return { setParam, removeParam };
}
