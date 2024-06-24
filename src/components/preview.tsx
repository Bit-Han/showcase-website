import React from "react";

interface PreviewProps {
	component: React.ComponentType;
	code: string;
}

const Preview: React.FC<PreviewProps> = ({ component: Component, code }) => {
	return (
		<div className="my-4">
			<div className="preview mb-4">
				<Component />
			</div>
			<pre className="bg-gray-100 p-4 rounded">
				<code>{code}</code>
			</pre>
		</div>
	);
};

export default Preview;
