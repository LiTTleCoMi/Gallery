export default function ImagesContainer({ children }) {
	return <div className="grid grid-cols-2 gap-2 p-2 sm:gap-3 sm:p-3 lg:flex lg:flex-wrap lg:justify-center lg:gap-x-3 lg:gap-y-4 lg:p-3">{children}</div>;
}
