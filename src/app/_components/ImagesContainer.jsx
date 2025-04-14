export default function ImagesContainer({ children }) {
	return <div className="grid grid-cols-2 gap-2 sm:gap-3 md:flex md:flex-wrap md:justify-evenly md:gap-x-3 md:gap-y-4">{children}</div>;
}
