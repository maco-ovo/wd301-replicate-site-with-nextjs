import Image from "next/image";
import { Plus } from "lucide-react";

import { PHOTOS_DATA } from "@/app/data/photos";

const CATEGORY_INFO: Record<string, string> = {
	Wallpapers:
		"From epic drone shots to inspiring moments in nature — enjoy the best background for your desktop or mobile.",
	"3D Renders":
		"This category showcases digitally rendered creations that blend technology and art, exploring the limitless potential of digital creativity.",
	Nature:
		"This category showcases nature's beauty, from vast landscapes to macro details, transporting viewers to the outdoors.",
	Textures:
		"Whether you’re looking for stunning macro-photography or shots of complex architectural shapes — you’ve come to the right place.",
	Film: "This category celebrates film's timeless beauty, capturing moments with rich textures and unique colors that define analog photography.",
	Architecture:
		"Celebrating the artistry of spaces, this category highlights stunning photography of architecture and interiors.",
	"Street Photography":
		"From quiet passages in charming towns to the hustle and bustle of cities, this category examines street photography in every form.",
	Experimental:
		"This category invites photographers to explore new techniques and perspectives, pushing creative boundaries.",
	Travel:
		"Explore the globe through captivating landscapes and vibrant cultures in this Travel category, celebrating diverse destinations worldwide.",
	People:
		"In this category, photographers capture emotions, cultures, and stories through candid moments and formal portraits.",
};

interface TopCardSectionProps {
	category: string;
}

export default function TopCardSection({ category }: TopCardSectionProps) {
	if (category === "Featured") {
		return (
			<section className="px-6 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
				{/* Card 1 */}
				<div className="border border-neutral-200 rounded-xl p-5 flex flex-col justify-between h-56 bg-neutral-50/50">
					<div>
						<h3 className="font-bold text-neutral-900 leading-snug">
							Crop. Resize.
							<br />
							Remove backgrounds.
						</h3>
						<p className="text-xs text-neutral-500 mt-1">
							Available on Unsplash+
						</p>
					</div>
					<div className="relative h-24 w-full rounded-lg overflow-hidden border border-dashed border-neutral-300">
						<Image
							src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&auto=format&fit=crop&q=80"
							alt="Crop preview"
							fill
							priority
							sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
							className="object-cover"
						/>
					</div>
				</div>

				{/* Card 2 */}
				<div className="hidden sm:block lg:block border border-neutral-200 rounded-xl p-5 flex flex-col justify-between h-56 bg-neutral-50/50">
					<h3 className="font-bold text-neutral-900">
						Contribute your first <span className="underline">photo</span>
					</h3>
					<div className="h-28 border-2 border-dashed border-neutral-300 rounded-lg flex items-center justify-center relative bg-white">
						<button
							aria-label="Upload"
							className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md hover:bg-blue-700 transition"
						>
							<Plus className="w-5 h-5" />
						</button>
					</div>
				</div>

				{/* Card 3: Collections */}
				<div className="hidden lg:block border border-neutral-200 rounded-xl p-5 h-56 flex flex-col justify-between bg-white">
					<div className="flex justify-between items-center">
						<h3 className="font-bold text-neutral-900 text-sm">Collections</h3>
						<span className="text-xs text-neutral-500 hover:text-black cursor-pointer underline">
							See all
						</span>
					</div>
					<div className="space-y-2">
						{[
							{
								name: "abstract / electric",
								count: "900 images",
								img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=100&auto=format&fit=crop&q=80",
							},
							{
								name: "End of Dots",
								count: "207 images",
								img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=100&auto=format&fit=crop&q=80",
							},
							{
								name: "City cities",
								count: "81 images",
								img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&auto=format&fit=crop&q=80",
							},
						].map((col) => (
							<div
								key={col.name}
								className="flex items-center gap-3 cursor-pointer group"
							>
								<div className="relative w-7 h-7 rounded overflow-hidden shrink-0">
									<Image
										src={col.img}
										alt={col.name}
										fill
										sizes="28px"
										className="object-cover"
									/>
								</div>
								<div className="min-w-0 flex-1">
									<p className="text-xs font-semibold text-neutral-800 group-hover:underline truncate">
										{col.name}
									</p>
									<p className="text-[10px] text-neutral-400">{col.count}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		);
	}

	// Each Category Header

	const description =
		CATEGORY_INFO[category] ||
		`This category showcases the beauty of ${category.toLowerCase()}, capturing stunning visual moments from around the globe.`;

	const topContributors = Array.from(
		new Map(
			PHOTOS_DATA.map((photo) => [photo.author.name, photo.author]),
		).values(),
	).slice(0, 4);

	return (
		<section className="px-6 py-8 lg:pt-16 grid grid-cols-1 lg:grid-cols-4 gap-6 items-end">
			<div className="lg:col-span-2 space-y-5">
				<h1 className="text-4xl font-bold text-neutral-900 tracking-tight">
					{category}
				</h1>
				<p className="text-xs font-semibold text-neutral-400 tracking-wider">
					Curated by Unsplash
				</p>
				<p className="text-sm lg:text-base text-neutral-600 leading-relaxed max-w-lg">
					{description}
				</p>
				<button className="bg-black text-white px-4 py-2 rounded text-sm font-medium hover:bg-neutral-800 transition">
					Submit to {category}
				</button>
			</div>

			{/* Top Contributors */}
			<div className="hidden lg:flex lg:col-span-1 border border-neutral-200 rounded-xl p-5 bg-white flex-col gap-3 h-[260px]">
				<h3 className="font-bold text-neutral-900 text-sm">
					Monthly top contributors
				</h3>
				<div className="flex flex-col justify-between flex-1">
					{topContributors.map((author) => (
						<div key={author.name} className="flex items-center gap-3">
							<div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0 bg-neutral-100">
								<Image
									src={author.avatar}
									alt={author.name}
									fill
									sizes="32px"
									className="object-cover"
								/>
							</div>
							<div className="text-xs">
								<p className="font-semibold text-neutral-900 hover:underline cursor-pointer">
									{author.name}
								</p>
								<p className="text-neutral-500">11 images</p>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Featured Photo */}
			<div className="hidden lg:block lg:col-span-1 relative h-65 overflow-hidden rounded-xl group border border-neutral-200">
				<Image
					src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&auto=format&fit=crop&q=80"
					alt="Featured preview"
					fill
					priority
					sizes="(max-width: 1024px) 100vw, 25vw"
					className="object-cover transition duration-500 group-hover:scale-105"
				/>
				<div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent flex flex-col justify-end p-4 text-white">
					<p className="text-[10px] uppercase tracking-wider opacity-80 mb-0.5">
						Featured
					</p>
					<p className="text-sm font-semibold hover:underline cursor-pointer">
						Gilles Lambert
					</p>
				</div>
			</div>
		</section>
	);
}
