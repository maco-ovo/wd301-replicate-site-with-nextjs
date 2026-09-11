import { PHOTOS_DATA } from "../../../data/photos";
import PhotoDetail from "../../../components/PhotoDetail";
import Modal from "../../../components/Modal";
import { notFound } from "next/navigation";

export default async function PhotoModal({
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
		<Modal>
			<PhotoDetail photo={photo} />
		</Modal>
	);
}
