import Image from "next/image";

import Navbar from "./components/Navbar";
// import Hero from "@/components/Hero";
// import PhotoGrid from "@/components/PhotoGrid";
// import { PHOTOS_DATA } from "@/data/photos";

const CATEGORIES = [
	"Wallpapers",
	"3D Renders",
	"Nature",
	"Textures",
	"Film",
	"Architecture",
	"Street Photography",
	"Experimental",
	"Travel",
	"People",
];

const TRENDING_TAGS = ["wallpapers", "backgrounds", "nature", "happy", "love"];

export default function Home() {
	return (
		<main className="min-h-screen bg-white text-neutral-900">
			<Navbar categories={CATEGORIES} />
			{/* <Hero
				title="Unsplash"
				subtitle="The internet's source for visuals. Powered by creators everywhere."
				trendingTags={TRENDING_TAGS}
			/>
			<PhotoGrid photos={PHOTOS_DATA} /> */}
		</main>
	);
}
