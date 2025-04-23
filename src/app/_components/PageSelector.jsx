"use state";
import { useState } from "react";

export default function PageSelector({ header, current, setParam }) {
	const [inputValue, setInputValue] = useState('');

    function extractTrailingNumber(str) {
		const m = str.match(/(\d+)$/);
		return m ? Number(m[1]) : null;
	}
	function parseLinkHeader(h) {
		if (!h) return {};
		return Object.fromEntries(
			h.split(",").map((part) => {
				const [urlPart, relPart] = part.split(";").map((s) => s.trim());
				const url = urlPart.slice(1, -1); // remove < >
				const rel = relPart.match(/rel="(.*?)"/)?.[1];
				return [rel, { url: url, page: extractTrailingNumber(url) }];
			})
		);
	}
	const links = parseLinkHeader(header);
	console.log(links);
	function getMinMaxPage() {
		if (links) {
			let min, max;
			if (links.first) min = links.first;
			else min = current;
			if (links.last) max = links.last;
			else max = current;
			return [min, max];
		}
	}
	const [min, max] = getMinMaxPage();
	function goTo(pageNum) {
		setInputValue("");
		let p = Number(pageNum);
		if (isNaN(p)) return;
		if (p < min) p = min;
		if (p > max) p = max;
		setParam("page", String(p));
	}
	function onSubmit(e) {
		e.preventDefault();
		goTo(inputValue);
	}

	return (
		<div className="flex gap-x-2">
			{links?.first && (
				<button onClick={() => goTo(links.first.page)} className="rounded-full bg-slate-800 p-2 hover:bg-slate-600">
					<img src="/svgs/first_page.svg" alt="First" />
				</button>
			)}

			<div className="flex justify-center items-center gap-x-2 px-2 py-1 rounded-full bg-slate-800">
				{links?.prev && (
					<button onClick={() => goTo(links.prev.page)} className="rounded-full p-1 w-8 h-8 hover:bg-slate-600">
						<img src="/svgs/chevron_left.svg" alt="Previous" />
					</button>
				)}
				<button className="flex justify-center items-center rounded-full p-1 bg-slate-600 w-8 h-8">
					<span>{current}</span>
				</button>
				<form onSubmit={onSubmit} className="flex">
					<input type="number" step="1" min="1" max={links.last?.page} value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="w-8 h-8 text-center rounded-full focus:outline-none bg-slate-700" placeholder="…" />
				</form>
				{links?.next && (
					<button onClick={() => goTo(links.next.page)} className="rounded-full p-1 w-8 h-8 hover:bg-slate-600">
						<img src="/svgs/chevron_right.svg" alt="Previous" />
					</button>
				)}
			</div>

			{links?.last && (
				<button onClick={() => goTo(links.last.page)} className="rounded-full bg-slate-800 p-2 hover:bg-slate-600">
					<img src="/svgs/last_page.svg" alt="Last" />
				</button>
			)}
		</div>
	);
}
