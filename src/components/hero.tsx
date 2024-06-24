import React from "react";

const HeroSection: React.FC = () => {
	return (
		<section className="text-center p-8 bg-white text-black">
			<h1 className="text-4xl font-bold">
				Access your <span className="text-green-500">folders at any time</span>{" "}
				with minimal hassle. Made for you.
			</h1>
			<p className="mt-4">
				Providing instant access to your folders anytime, anywhere. With a
				user-friendly interface and seamless functionality, managing your
				digital files has never been easier.
			</p>
			<button className="mt-6 bg-green-500 text-black px-6 py-3 rounded">
				Create Folder For Free
			</button>
			<div className="mt-4 flex justify-center space-x-4">
				<span>✔ Up to 300GB storage on free plan</span>
				<span>✔ Unlimited folders</span>
				<span>✔ Set up in just 1 day</span>
			</div>
		</section>
	);
};

export default HeroSection;
