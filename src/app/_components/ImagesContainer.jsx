import CategoryImage from "./CategoryImage";

export default function ImagesContainer({ children }) {
	return <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 p-3">{children}</div>;
}
