import { useEffect, useState } from "react";

// Setting useScrollPosition function
export const useScrollPosition = () => {
	// Setting state to handle scroll position
	const [scrollPosition, setScrollPosition] = useState(0);

	// Set scroll postion on page initialization
	useEffect(() => {
		const updatePosition = () => {
			setScrollPosition(window.scrollY);
		};

		// Update scroll postion, using addEventListener "scroll"
		window.addEventListener("scroll", updatePosition);

		updatePosition();

		// return a value of updatePosition
		return () => window.removeEventListener("scroll", updatePosition);
	}, []);

	// return a value
	return scrollPosition;
};
