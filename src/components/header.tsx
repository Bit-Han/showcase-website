import React from "react";

const Header: React.FC = () => {
	return (
		<header className="flex justify-between items-center p-4 bg-white text-black">
			<div className="text-lg font-bold">FOLDERS.CO</div>
			<nav className="flex space-x-4">
				<a href="#" className="hover:underline">
					Pricing
				</a>
				<a href="#" className="hover:underline">
					Features
				</a>
				<button className="bg-green-500 text-black px-4 py-2 rounded">
					Start for Free
				</button>
			</nav>
		</header>
	);
};

export default Header;
