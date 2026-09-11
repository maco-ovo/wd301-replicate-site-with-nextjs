import Image from "next/image";
import { Photo } from "../types/photo";
import { Heart, Plus, Download } from "lucide-react";

export default function PhotoDetail({ photo }: { photo: Photo }) {
	return (
		<div className="bg-white rounded-t-xl sm:rounded-xl overflow-hidden flex flex-col w-full max-h-[90vh]">
			{/* 1. Header  */}
			<div className="p-3 sm:p-4 flex items-center justify-between sticky top-0 bg-white z-10 border-b border-neutral-100">
				<div className="flex items-center gap-3">
					<div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-neutral-100">
						<Image
							src={photo.author.avatar}
							alt={photo.author.name}
							fill
							sizes="40px"
							className="object-cover"
						/>
					</div>
					<div>
						<h3 className="font-semibold text-neutral-900 text-sm sm:text-base leading-tight">
							{photo.author.name}
						</h3>
						<p className="text-xs text-neutral-500 hover:text-black cursor-pointer transition">
							@{photo.author.username}
						</p>
					</div>
				</div>

				<div className="flex items-center gap-2">
					<button className="p-2 border border-neutral-300 rounded-md hover:border-neutral-400 transition shadow-sm hidden sm:block">
						<Heart className="w-4 h-4 text-neutral-600" />
					</button>
					<button className="p-2 border border-neutral-300 rounded-md hover:border-neutral-400 transition shadow-sm hidden sm:block">
						<Plus className="w-4 h-4 text-neutral-600" />
					</button>
					<button className="px-3 py-1.5 sm:py-2 bg-blue-600 text-white font-medium text-xs sm:text-sm rounded-md hover:bg-blue-700 transition shadow-sm flex items-center gap-2">
						Download{" "}
						<span className="border-l border-white/30 pl-2">
							<Download className="w-4 h-4" />
						</span>
					</button>
				</div>
			</div>

			{/* 2. Image Area */}
			<div className="relative w-full flex-1 min-h-[40vh] sm:min-h-[60vh] bg-neutral-100 flex items-center justify-center p-4 sm:p-8">
				<div className="relative w-full h-full flex items-center justify-center">
					<Image
						src={photo.url}
						alt={photo.title}
						width={300}
						height={200}
						priority
						className="max-w-full max-h-full object-contain drop-shadow-md"
					/>
				</div>
			</div>

			{/* 3. Details & Tags */}
			<div className="p-4 sm:p-6 space-y-6 overflow-y-auto bg-white">
				<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
					<div>
						<h2 className="text-xl font-bold text-neutral-900">
							{photo.title}
						</h2>
						{photo.description && (
							<p className="text-neutral-600 mt-2 text-sm">
								{photo.description}
							</p>
						)}
					</div>
					<div className="flex items-center gap-6 text-sm text-neutral-600 shrink-0">
						<div>
							<p className="text-neutral-400 text-xs font-medium">Likes</p>
							<p className="font-semibold text-neutral-900">
								{photo.likes.toLocaleString()}
							</p>
						</div>
					</div>
				</div>

				<div className="flex flex-wrap gap-2 pt-2">
					{photo.tags.map((tag) => (
						<span
							key={tag}
							className="bg-neutral-100 text-neutral-600 px-3 py-1 rounded-sm text-sm hover:bg-neutral-200 transition cursor-pointer"
						>
							{tag}
						</span>
					))}
				</div>
			</div>
		</div>
	);
}
