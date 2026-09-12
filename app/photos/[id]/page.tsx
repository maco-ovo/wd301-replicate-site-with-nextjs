// app/photos/[id]/page.tsx
import { PHOTOS_DATA } from "../../data/photos";
import PhotoDetail from "../../components/PhotoDetail";
import { notFound } from "next/navigation";
import { Bookmark, PenTool, Plus, Download } from "lucide-react";
import Searchbar from "@/app/components/Searchbar";
import Image from "next/image";

export default async function PhotoPage({
	params,
}: {
	params: { id: string };
}) {
	const { id } = await params;
	const photo = await PHOTOS_DATA.find((p) => p.id === id);

	if (!photo) {
		return notFound();
	}

	return (
		<main className="ml-15">
			<div className="sticky top-0 z-20">
				{/* Header */}
				<Searchbar />

				<div className=" bg-white px-6 py-3 flex items-center justify-between border-b border-neutral-200">
					{/* Author */}
					<div className="flex items-center gap-3">
						<div className="relative w-10 h-10 rounded-full overflow-hidden bg-neutral-100 border border-neutral-200">
							<Image
								src={photo.author.avatar}
								alt={photo.author.name}
								fill
								sizes="40px"
								className="object-cover"
							/>
						</div>
						<div>
							<h3 className="font-semibold text-neutral-900 text-sm sm:text-base leading-tight cursor-pointer">
								{photo.author.name}
							</h3>
							<p className="text-xs text-neutral-500 hover:text-black cursor-pointer transition">
								@{photo.author.username}
							</p>
						</div>
					</div>

					{/* buttons */}
					<div className="flex items-center gap-2">
						<button className="p-2 border border-neutral-300 rounded-md hover:border-neutral-400 transition shadow-sm text-neutral-600">
							<Bookmark className="w-4 h-4" />
						</button>
						<button className="p-2 border border-neutral-300 rounded-md hover:border-neutral-400 transition shadow-sm text-neutral-600">
							<Plus className="w-4 h-4" />
						</button>
						<button className="px-3 py-1.5 border border-neutral-300 rounded-md hover:border-neutral-400 transition shadow-sm text-neutral-600 text-sm font-medium flex items-center gap-2">
							<PenTool className="w-4 h-4" /> Edit image
						</button>
						<button className="px-3 py-1.5 bg-neutral-900 text-white rounded-md hover:bg-neutral-800 transition shadow-sm text-sm font-medium flex items-center gap-2">
							Download <Download className="w-4 h-4" />
						</button>
					</div>
				</div>
			</div>
			<div>
				<PhotoDetail photo={photo} />
			</div>
		</main>
	);
}
