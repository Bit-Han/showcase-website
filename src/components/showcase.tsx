import Image from "next/image";
import CustomButton from "../components/customButton";
import Preview from "../components/preview";

const buttonCode = `
    import React from 'react';
    import { Button } from 'shadcn';

    const CustomButton = () => {
        return <Button className="bg-blue-500 text-white py-2 px-4 rounded">Click Me</Button>;
    };

    export default CustomButton;
    `;
export default function ShowCase() {
	return (
		<>
			<div className="container mx-auto p-4">
				<h1 className="text-4xl font-bold mb-5">UI Showcase</h1>
				<Preview component={CustomButton} code={buttonCode} />
			</div>
		</>
	);
}
