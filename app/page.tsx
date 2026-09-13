"use client";

import { useState } from "react";

import Navbar from "./components/Navbar";
import TopCardSection from "./components/TopCardSection";
import PhotoGrid from "./components/PhotoGrid";
import { PHOTOS_DATA } from "./data/photos";
import Newsletter from "./components/Newsletter";

const CATEGORIES = [
	"Featured",
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

export default function Home() {
	const [activeCategory, setActiveCategory] = useState("Featured");

	return (
		<div className="min-h-screen bg-white text-neutral-900 flex">
			{/* Main Content Area */}
			<div className="flex-1 ml-14 sm:ml-16 min-w-0">
				<Navbar
					categories={CATEGORIES}
					activeCategory={activeCategory}
					onSelectCategory={setActiveCategory}
				/>
				<TopCardSection category={activeCategory} />

				<PhotoGrid photos={PHOTOS_DATA} />

				<Newsletter />
			</div>
		</div>
	);
}
