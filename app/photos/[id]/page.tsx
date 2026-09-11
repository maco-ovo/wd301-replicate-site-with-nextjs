// app/photos/[id]/page.tsx
import { PHOTOS_DATA } from "../../data/photos";
import PhotoDetail from "../../components/PhotoDetail";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

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
		<main className="ml-15 min-h-screen bg-neutral-100 p-4 sm:p-8">
			<div className="max-w-5xl mx-auto">
				{/* <Link
					href="/"
					className="inline-flex items-center gap-2 text-neutral-600 hover:text-black mb-6 transition"
				>
					<ArrowLeft className="w-4 h-4" />
					Back to Home
				</Link> */}
				<div className="shadow-xl rounded-xl overflow-hidden">
					<PhotoDetail photo={photo} />
				</div>
			</div>
		</main>
	);
}
