import { Search, Focus, Image as ImageIcon } from "lucide-react";

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
		<header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-neutral-200">
			<div className="max-w-7xl mx-auto px-6 h-16 flex items-center gap-4">
				<div className="flex-1 relative max-w-2xl">
					<Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
					<input
						type="text"
						placeholder="Search photos and illustrations"
						className="w-full bg-neutral-100 hover:bg-neutral-200/70 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black/10 text-sm rounded-full pl-10 pr-4 py-2.5 transition"
					/>
					<Focus className="w-4 h-4 text-neutral-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
				</div>

				<div className="hidden md:flex items-center gap-3 text-sm font-medium text-neutral-600">
					<button className="px-3 py-1.5 hover:text-black transition">
						Get Unsplash+
					</button>
					<button className="px-3 py-1.5 bg-neutral-900 text-white rounded-md hover:bg-neutral-800 transition">
						Submit an image
					</button>
				</div>
			</div>

			{/* Categories Bar */}
			<nav className="px-6 flex items-center gap-6 overflow-x-auto scrollbar-none text-bold text-sm font-semibold text-neutral-500">
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
