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
			className="m-0 h-screen w-screen max-w-none bg-black/60 backdrop-blur-sm flex items-center justify-center p-0 sm:p-4 md:p-12 z-50 fixed inset-0"
			onClose={onDismiss}
			onClick={(e) => {
				if (e.target === dialogRef.current) {
					onDismiss();
				}
			}}
		>
			<div className="relative w-full max-w-5xl max-h-full flex flex-col animate-in fade-in zoom-in-95 duration-200">
				<button
					onClick={onDismiss}
					className="absolute -top-12 right-0 sm:-right-12 sm:top-0 z-50 p-2 text-white/70 hover:text-white transition"
					aria-label="Close modal"
				>
					<X className="w-6 h-6 sm:w-8 sm:h-8" />
				</button>
				{children}
			</div>
		</dialog>
	);
}
