import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar";

export const metadata: Metadata = {
	title: "Unsplash Clone",
	description: "WD-301 Assignment",
};

export default function RootLayout({
	children,
	modal,
}: Readonly<{
	children: React.ReactNode;
	modal: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="antialiased">
				<Sidebar />
				<div>
					<Searchbar />
					{children}
				</div>
				{modal}
			</body>
		</html>
	);
}
