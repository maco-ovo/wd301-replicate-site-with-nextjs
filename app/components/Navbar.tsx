import Link from "next/link";
import { Search, Focus, Bell, Menu, Image as ImageIcon } from "lucide-react";

type NavbarProps = {
	categories: string[];
};

export default function Navbar({ categories }: NavbarProps) {
	return (
		<header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-neutral-200">
			<div className="max-w-7xl mx-auto px-4 h-16 flex items-center gap-4">
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

				<button className="p-2 text-neutral-600 hover:text-black md:hidden">
					<Menu className="w-6 h-6" />
				</button>
			</div>

			<nav className="max-w-7xl mx-auto px-4 flex items-center gap-6 overflow-x-auto scrollbar-none py-2 text-sm text-neutral-500 font-medium">
				<span className="text-black border-b-2 border-black pb-2 cursor-pointer shrink-0">
					Featured
				</span>
				{categories.map((category) => (
					<span
						key={category}
						className="hover:text-black pb-2 transition cursor-pointer shrink-0"
					>
						{category}
					</span>
				))}
			</nav>
		</header>
	);
}
