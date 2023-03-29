import React from "react";
import { ColorsContext } from "../../colorsContext";
import useCursor from "../../hook/useCursor";
import usePixels from "../../hook/usePixels";

function hexToRgb(hex) {
	var result = /^#?([A-F\d]{2})([A-F\d]{2})([A-F\d]{2})$/i.exec(hex);
	return result
		? {
				r: parseInt(result[1], 16),
				g: parseInt(result[2], 16),
				b: parseInt(result[3], 16),
		  }
		: null;
}

export default function Canvas({ grid, newPixel, squareSide, cursors }) {
	const colors = React.useContext(ColorsContext);

	function draw_pixel(ctx, x, y, color) {
		ctx.fillStyle = colors[color].hexa;
		ctx.fillRect(x * squareSide, y * squareSide, squareSide, squareSide);
		ctx.restore();
	}

	function draw_cursor(ctx, x, y, color, big = false) {
		const rgb = hexToRgb(colors[color].hexa);
		const radius = big ? 2.8 : 1.4;
		ctx.beginPath();
		ctx.arc(
			(x + 0.5) * squareSide,
			(y + 0.5) * squareSide,
			radius * squareSide,
			0,
			2 * Math.PI
		);
		ctx.fillStyle = "rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + ",0.3)";
		ctx.fill();
		ctx.lineWidth = 3;
		ctx.strokeStyle = colors[color].hexa;
		ctx.stroke();
		ctx.strokeRect(x * squareSide, y * squareSide, squareSide, squareSide);
		ctx.restore();
	}

	const height = grid.length * squareSide;
	const width = grid[0].length * squareSide;
	const canvasRef = usePixels(grid, draw_pixel, newPixel);

	useCursor(grid, draw_pixel, canvasRef, cursors, draw_cursor);

	return <canvas ref={canvasRef} height={height} width={width} />;
}
