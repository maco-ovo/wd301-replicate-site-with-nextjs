import Image from "next/image";
import { Photo } from "../types/photo";

export default function PhotoDetail({ photo }: { photo: Photo }) {
	return (
		<div className="flex flex-col w-full pb-8">
			<div className="relative w-full min-h-[50vh] sm:min-h-[70vh] flex items-center justify-center p-4 bg-white">
				<Image
					src={photo.url}
					alt={photo.title}
					fill
					priority
					sizes="(max-width: 1024px) 100vw, 80vw"
					className="object-contain"
				/>
			</div>

			{/*  Details & Tags */}
			<div className="px-4 sm:px-6 pt-4 space-y-6 max-w-5xl mx-auto w-full">
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
							<p className="text-neutral-400 text-xs font-medium">Views</p>
							<p className="font-semibold text-neutral-900">
								{(photo.likes * 14).toLocaleString()}
							</p>
						</div>
						<div>
							<p className="text-neutral-400 text-xs font-medium">Likes</p>
							<p className="font-semibold text-neutral-900">
								{photo.likes.toLocaleString()}
							</p>
						</div>
					</div>
				</div>

				<div className="flex flex-wrap gap-2 pt-2 border-t border-neutral-100">
					{photo.tags.map((tag) => (
						<span
							key={tag}
							className="bg-neutral-100 text-neutral-600 px-3 py-1.5 rounded text-sm hover:bg-neutral-200 transition cursor-pointer"
						>
							{tag}
						</span>
					))}
				</div>
			</div>
		</div>
	);
}
