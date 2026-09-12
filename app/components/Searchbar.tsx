import { Search, Focus } from "lucide-react";

export default function Searchbar() {
	return (
		<div className="bg-white max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
			<div className="flex-1 relative max-w-3xl">
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
	);
}
