import "./elements.css";
import { FaSearch } from "react-icons/fa";
function Button(props: any) {
	const rippleEfect = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		let btn = e.target as HTMLButtonElement;
		let x = e.clientX - btn.offsetLeft;
		let y = e.clientY - btn.offsetTop;
		let ripples = document.createElement("span");
		ripples.classList.add("ripples");
		ripples.style.left = x + "px";
		ripples.style.top = y + "px";
		btn.appendChild(ripples);

		setTimeout(() => {
			ripples.remove();
		}, 1000);
	};
	return (
		<button
			className="Button px-3 md:px-6 py-2 md:-translate-x-3"
			onClick={(e) => {
				rippleEfect(e);
				props.searchGif();
			}}
		>
			<FaSearch />
		</button>
	);
}

export default Button;
