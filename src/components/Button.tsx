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
			className=" bg-gradient-to-r from-green-400 to-blue-500 h-14
             text-white px-3 md:px-6 py-2 uppercase text-lg tracking-wider relative
                overflow-hidden top-0
				z-10
             "
			onClick={(e) => {
				rippleEfect(e);
				props.searchGif();
			}}
		>
			{props.label}
		</button>
	);
}

export default Button;
