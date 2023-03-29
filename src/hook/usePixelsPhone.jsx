import { useRef, useEffect } from "react";

export default function usePixels(grid, draw, newPixel, cursor) {
	const canvasRef = useRef(null);
	const height = grid.length;
	const width = grid[0].length;

	function drawNeighbours() {
		const canvas = canvasRef.current;
		const context = canvas.getContext("2d");

		let int = 0;
		for (let i = -2; i <= 2; i++) {
			for (let j = -2; j <= 2; j++) {
				if (
					cursor.y - j >= 0 &&
					cursor.y - j < height &&
					cursor.x + i >= 0 &&
					cursor.x + i < width
				) {
					draw(
						context,
						i + 2,
						j + 2,
						grid[cursor.y - j][cursor.x + i],
						int
					);
					int++;
				} else {
					draw(context, i + 2, j + 2, 12, int);
					int++;
				}
			}
		}
	}

	// mise à jour canvas quand déplacement
	useEffect(() => {
		drawNeighbours();
	}, [cursor]);

	//mise à jour canvas quand un newpixel est mis à proximité
	useEffect(() => {
		let a = newPixel.x - cursor.x;
		let b = newPixel.y - cursor.y;

		if (newPixel.color >= 0 && Math.sqrt(a * a + b * b) < 3) {
			drawNeighbours();
		}
	}, [newPixel]);

	return canvasRef;
}
