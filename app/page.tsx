import Image from "next/image";
import Navbar from "./components/Navbar";

import PhotoGrid from "./components/PhotoGrid";
import { PHOTOS_DATA } from "./data/photos";

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


export default function Home() {
	return (
		<main className="min-h-screen bg-white text-neutral-900">
			<Navbar categories={CATEGORIES} />
			<PhotoGrid photos={PHOTOS_DATA} />
		</main>
	);
}
