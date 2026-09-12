import Image from "next/image";
import { Photo } from "../types/photo";

export default function PhotoDetail({ photo }: { photo: Photo }) {
	return (
		<div className="bg-white rounded-t-xl sm:rounded-xl flex flex-col w-full max-h-[90vh]">
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

			{/*  Details & Tags */}
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
