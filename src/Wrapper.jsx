import React from "react";
import Screen from "./routes/screen";
import WebSocket from "./WebSocket";

function Wrapper() {
	const height = Math.floor(screen.height / 10);
	const width = Math.floor((screen.width * 4) / 50); // proportion arbitraire fixé dans le css (1/5 banner et 4/5 pour le canvas)

	return (
		<div className="">
			<WebSocket
				Component={Screen}
				type="screen"
				height={height}
				width={width}
			/>
		</div>
	);
}

export default Wrapper;
