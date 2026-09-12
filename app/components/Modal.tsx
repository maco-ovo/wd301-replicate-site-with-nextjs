"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, ReactNode } from "react";
import { X } from "lucide-react";

export default function Modal({ children }: { children: ReactNode }) {
	const router = useRouter();
	const dialogRef = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		if (!dialogRef.current?.open) {
			dialogRef.current?.showModal();
		}
	}, []);

	function onDismiss() {
		router.back();
	}

	return (
		<dialog
			ref={dialogRef}
			className="m-0 h-screen w-screen max-w-none max-h-none bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-12 z-50 fixed inset-0"
			onClose={onDismiss}
			onClick={(e) => {
				if (e.target === dialogRef.current) onDismiss();
			}}
		>
			<button
				onClick={onDismiss}
				className="absolute top-4 left-4 z-50 p-2 text-white/60 hover:text-white transition"
				aria-label="Close modal"
			>
				<X className="w-8 h-8" />
			</button>

			{/* Modal*/}
			<div className="m-4 relative w-full max-w-6xl max-h-[95vh] bg-white rounded-xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200 shadow-2xl">
				{children}
			</div>
		</dialog>
	);
}
