import Searchbar from "./Searchbar";

type NavbarProps = {
	categories: string[];
	activeCategory: string;
	onSelectCategory: (category: string) => void;
};

export default function Navbar({
	categories,
	activeCategory,
	onSelectCategory,
}: NavbarProps) {
	return (
		<header className="sticky top-0 z-30 bg-white border-b border-neutral-200">
			<Searchbar />
			<nav className="px-12 flex items-center gap-6 overflow-x-auto scrollbar-none text-bold text-sm font-semibold text-neutral-500">
				{categories.map((category) => {
					const isActive = activeCategory === category;
					return (
						<button
							key={category}
							onClick={() => onSelectCategory(category)}
							className={`pb-3 transition relative whitespace-nowrap ${
								isActive ? "text-black" : "hover:text-black"
							}`}
						>
							{category}
							{isActive && (
								<span className="absolute bottom-0 left-0 right-0 h-0.5 bg-black" />
							)}
						</button>
					);
				})}
			</nav>
		</header>
	);
}
