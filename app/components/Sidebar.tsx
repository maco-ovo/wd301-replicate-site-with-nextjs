import Link from "next/link";
import {
	Image as ImageIcon,
	Download,
	Bookmark,
	Bell,
	User,
	Menu,
	PenTool,
	Folders,
} from "lucide-react";

export default function Sidebar() {
	return (
		<aside className="fixed left-0 top-0 bottom-0 w-14 sm:w-16 bg-white border-r border-neutral-200 flex flex-col justify-between items-center py-4 z-40">
			{/* Top */}
			<div className="flex flex-col items-center gap-6">
				<Link
					href="/"
					className="p-2 hover:bg-neutral-100 rounded-lg transition"
					aria-label="Home"
				>
					<svg className="w-6 h-6 fill-black" viewBox="0 0 32 32">
						<path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" />
					</svg>
				</Link>
				<div className="flex flex-col items-center gap-3 text-neutral-500">
					<button
						className="p-2 hover:text-black hover:bg-neutral-100 rounded-lg transition"
						aria-label="Photos"
					>
						<ImageIcon className="w-5 h-5 text-black" />
					</button>
					<button
						className="p-2 hover:text-black hover:bg-neutral-100 rounded-lg transition"
						aria-label="Illustrations"
					>
						<PenTool className="w-5 h-5" />
					</button>

					<div className="w-8 h-[1px] bg-neutral-200 my-1" />

					<button
						className="p-2 hover:text-black hover:bg-neutral-100 rounded-lg transition"
						aria-label="Collections"
					>
						<Folders className="w-5 h-5" />
					</button>
					<button
						className="p-2 hover:text-black hover:bg-neutral-100 rounded-lg transition"
						aria-label="Downloads"
					>
						<Download className="w-5 h-5" />
					</button>

					<div className="w-8 h-[1px] bg-neutral-200 my-1" />

					<button
						className="p-2 hover:text-black hover:bg-neutral-100 rounded-lg transition"
						aria-label="Bookmarks"
					>
						<Bookmark className="w-5 h-5" />
					</button>
				</div>
			</div>

			{/* Bottom */}
			<div className="flex flex-col items-center gap-4 text-neutral-500">
				<button
					className="p-2 hover:text-black hover:bg-neutral-100 rounded-lg transition"
					aria-label="Notifications"
				>
					<Bell className="w-5 h-5" />
				</button>
				<button
					className="p-2 hover:text-black hover:bg-neutral-100 rounded-lg transition"
					aria-label="Profile"
				>
					<User className="w-5 h-5" />
				</button>
				<button
					className="p-2 hover:text-black hover:bg-neutral-100 rounded-lg transition"
					aria-label="Menu"
				>
					<Menu className="w-5 h-5" />
				</button>
			</div>
		</aside>
	);
}
