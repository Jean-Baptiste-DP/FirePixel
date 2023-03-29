import { useEffect, useState } from "react";
import { Joystick } from "react-joystick-component";

export default function BetterJoystick({ move, throttle, ...props }) {
	const [joyPos, setJoyPos] = useState({ x: 0, y: 0 });

	const [ticking, setTicking] = useState(false);
	const [count, setCount] = useState(0);

	useEffect(() => {
		const timer = setTimeout(
			() => ticking && setCount(count + 1),
			throttle
		);
		move(joyPos);
		return () => clearTimeout(timer);
	}, [count, ticking]);

	function handleMove(event) {
		setJoyPos(event);
	}

	function handleStart(event) {
		setTicking(true);
	}

	function handleStop(event) {
		setJoyPos({ x: 0, y: 0 });
		setTicking(false);
	}

	return (
		<Joystick
			{...props}
			throttle={throttle}
			move={handleMove}
			start={handleStart}
			stop={handleStop}
		></Joystick>
	);
}
