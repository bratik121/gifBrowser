import Button from "./components/Button";
import { useState, useRef } from "react";
import { notEmpty } from "./data/validations";
function Browser(props: any) {
	const gif_input = useRef<HTMLInputElement>(null);
	const [input, setInput] = useState("");
	const searchGif = () => {
		if (notEmpty(input)) {
			props.setGifNameF(input);
			gif_input.current!.value = "";
		} else {
			console.log("Bad");
		}
	};

	return (
		<div className="flex w-full h-[15%] justify-center items-center">
			<div className="w-[70%] h-14 top-0 overflow-hidden relative">
				<input
					className="browser__input w-full h-full 
							"
					type="text"
					placeholder="Gif"
					ref={gif_input}
					onKeyUp={(e) => {
						if (e.key === "Enter") {
							searchGif();
						}
					}}
					onChange={(e) => {
						setInput(e.target.value);
					}}
				/>
				<span className="input-decoration"></span>
			</div>
			<Button label="Buscar" searchGif={searchGif} />
		</div>
	);
}

export default Browser;
