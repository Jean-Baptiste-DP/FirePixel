import React from "react";
import { FaceFrownIcon } from "@heroicons/react/20/solid";

export default function FullLobby() {
	return (
		<div className="m-4 bg-white h-fit rounded-md flex flex-col place-items-center">
			<div className="flex mb-2 m-4 place-items-center">
				<p className="m-4 text-xl font-bold">
					Il n'y a plus de place !
				</p>
				<FaceFrownIcon className="text-red-700 h-10 w-10" />
			</div>
			<p className="m-4">
				La partie a atteint le nombre maximal de joueur. Actualisez la
				page pour jouer quand une place se libère.
			</p>
			<button
				className="m-4 bg-gray-500 w-fit rounded-md active:bg-emerald-600"
				onClick={() => window.location.reload()}
			>
				<p className="p-4 text-white font-semibold">Actualiser</p>
			</button>
		</div>
	);
}
