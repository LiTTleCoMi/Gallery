export default function PageSelector({ header, current, setParam }) {
	function lastChar(string) {
		return string[string.length - 1];
	}
	function parseLinkHeader(h) {
		if (!h) return {};
		return Object.fromEntries(
			h.split(",").map((part) => {
				const [urlPart, relPart] = part.split(";").map((s) => s.trim());
				const url = urlPart.slice(1, -1); // remove < >
				const rel = relPart.match(/rel="(.*?)"/)?.[1];
				return [rel, { url: url, page: lastChar(url) }];
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
			return [min, max]
		}
	}
	function goTo(pageNum) {
		let p = Number(pageNum);
		if (isNaN(p)) return;
		// if (p < minPage) p = minPage;
		// if (p > maxPage) p = maxPage;
		setParam("page", pageNum);
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
					<button onClick={() => goTo(links.prev.page)} className="rounded-full p-1 w-7 h-7 hover:bg-slate-600">
						<img src="/svgs/chevron_left.svg" alt="Previous" />
					</button>
				)}
				<button className="flex justify-center items-center rounded-full p-1 bg-slate-600 w-7 h-7">
					<span>{current}</span>
				</button>
				<form className="flex justify-center items-center rounded-full hover:bg-slate-600">
					<input type="number" step="1" className="rounded-full w-7 h-7 text-center focus:outline-none" placeholder="..." />
				</form>
				{links?.next && (
					<button onClick={() => goTo(links.next.page)} className="rounded-full p-1 w-7 h-7 hover:bg-slate-600">
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
