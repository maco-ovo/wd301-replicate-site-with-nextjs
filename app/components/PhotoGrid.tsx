"use client";

import Image from "next/image";
import Link from "next/link";
import { Photo } from "../types/photo";
import { Bookmark, Plus, ArrowDown } from "lucide-react";

interface PhotoGridProps {
	photos: Photo[];
}

export default function PhotoGrid({ photos }: PhotoGridProps) {
	return (
		<section className="px-6 py-4">
			<div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
				{photos.map((photo) => (
					<div
						key={photo.id}
						className="break-inside-avoid group relative rounded-lg overflow-hidden bg-neutral-100 transition-all duration-300 hover:shadow-md"
					>
						<Link href={`/photos/${photo.id}`} scroll={false}>
							<div className="relative w-full">
								<Image
									src={photo.url}
									alt={photo.title}
									width={600}
									height={800}
									className="w-full h-auto object-cover"
									sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
									loading="lazy"
								/>
							</div>

							{/* Hover */}
							<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-3 flex flex-col justify-between pointer-events-none">
								<div className="flex justify-end gap-1.5 pointer-events-auto">
									<button
										aria-label="Bookmark"
										onClick={(e) => e.preventDefault()}
										className="p-2 bg-white/90 hover:bg-white text-neutral-800 rounded-md transition shadow"
									>
										<Bookmark className="w-4 h-4" />
									</button>
									<button
										aria-label="Add to collection"
										onClick={(e) => e.preventDefault()}
										className="p-2 bg-white/90 hover:bg-white text-neutral-800 rounded-md transition shadow"
									>
										<Plus className="w-4 h-4" />
									</button>
								</div>

								<div className="flex items-center justify-between pointer-events-auto text-white">
									<div className="flex items-center gap-2 min-w-0 drop-shadow-md">
										<div className="relative w-7 h-7 rounded-full overflow-hidden shrink-0 border border-white/40">
											<Image
												src={photo.author.avatar}
												alt={photo.author.name}
												fill
                        sizes="28px"
												className="object-cover"
											/>
										</div>
										<span className="text-xs font-medium truncate">
											{photo.author.name}
										</span>
									</div>

									<button
										aria-label="Download"
										onClick={(e) => e.preventDefault()}
										className="p-2 bg-white/90 hover:bg-white text-neutral-800 rounded-md transition shadow shrink-0"
									>
										<ArrowDown className="w-4 h-4" />
									</button>
								</div>
							</div>
						</Link>
					</div>
				))}
			</div>
		</section>
	);
}
