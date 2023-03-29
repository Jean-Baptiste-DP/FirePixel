import React from "react";
import ReactDOM from "react-dom/client";
import {
	createBrowserRouter,
	createHashRouter,
	RouterProvider,
	Route,
} from "react-router-dom";
import "./index.css";

import WebSocket from "./WebSocket";

import Root from "./routes/root";
import Error from "./routes/error";
import Screen from "./routes/screen";
import Phone from "./routes/phone";
import Home from "./routes/home";
import Wrapper from "./Wrapper";
import { ColorsProvider } from "./colorsContext";

const router = createHashRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <Error />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "screen",
				element: <Wrapper />,
			},
			{
				path: "phone",
				element: (
					<WebSocket
						height={100}
						width={100}
						Component={Phone}
						type="phone"
					/>
				),
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ColorsProvider>
			<RouterProvider router={router} />
		</ColorsProvider>
	</React.StrictMode>
);
