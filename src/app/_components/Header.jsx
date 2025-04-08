export default function Header () {
    return (
        <header className="flex justify-center px-5 py-5 text-white bg-slate-800">
            <div className="flex items-center justify-between rounded-full bg-slate-900 px-5 py-3 w-100 max-w-full">
                <input className="w-full outline-0" placeholder="Search..."></input>
                <img src="/svgs/search.svg" alt="search"></img>
            </div>
        </header>
    )
}