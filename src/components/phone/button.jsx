const colordict = {
	on: "bg-emerald-700",
	off: "bg-dark",
	undefined: "bg-dark",
};

export default function Button({ onClick, text, state }) {
	return (
		<>
			<button
				className={`${colordict[state]} px-5 py-2 rounded-lg text-white font-bold text-xl text-center active:bg-emerald-700`}
				onClick={onClick}
			>
				{text}
			</button>
		</>
	);
}
