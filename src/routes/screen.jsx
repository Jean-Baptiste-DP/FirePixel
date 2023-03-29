import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";
import Canvas from "../components/screen/Canvas";

export default function Screen({ grid, cursor, newPixel }) {
	return (
		<>
			<div className="block sm:hidden rounded-md bg-yellow-100 p-4 m-4">
				<div className="flex">
					<div className="flex-shrink-0">
						<ExclamationTriangleIcon
							className="h-5 w-5 text-yellow-400"
							aria-hidden="true"
						/>
					</div>
					<div className="ml-3">
						<h3 className="text-sm font-medium text-yellow-800">
							Attention
						</h3>
						<div className="mt-2 text-sm text-yellow-700">
							<p>
								Cette page n'est pas censée être consultée
								depuis un écran aussi petit !
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="hidden sm:block">
				<div className="w-full min-h-screen flex">
					<div className="w-1/5 p-2 h-screen bg-gradient-to-t from-dark to-gray-500 flex flex-col items-center justify-evenly text-center">
						<div className="flex flex-col items-center justify-between gap-2">
							<img
								src="logo_fire_pixel.png"
								alt="Logo FirePixel"
								className="w-3/5"
							/>
							<h1 className="text-white text-[3.5vw] font-title">
								FirePixel
							</h1>
						</div>
						<h2 className="text-[2.5vw] font-['Arvo'] text-gray-300">
							Start drawing !
						</h2>
						<div className="bg-white p-2 rounded-xl grid place-items-center">
							<img
								src="qr-code.png"
								alt="melisse.ovh1.ec-m.fr/#/phone"
								className="w-full"
							/>
						</div>
					</div>
					<div className="w-4/5 bg-secondary">
						<Canvas
							grid={grid}
							newPixel={newPixel}
							squareSide={10}
							cursors={cursor}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
