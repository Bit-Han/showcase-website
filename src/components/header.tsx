import React from "react";

const Header: React.FC = () => {
	return (
		<header className="flex justify-between items-center p-2 bg-black text-white">
			<div className="text-lg font-bold m-2">FOLDERS.CO</div>
			<nav className="flex space-x-4">
				<a href="#" className="hover:underline m-4 hover:bg-green-300">
					Pricing
				</a>
				<a href="#" className="hover:underline m-4">
					Features
				</a>
				<button className="bg-green-500 text-black px-4 py-2 rounded m-3">
					Start for Free
				</button>
			</nav>
		</header>
	);
};

export default Header;
