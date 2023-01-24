import Button from "../../elements/Button";
import { useState, useRef, useContext } from "react";
import { notEmpty } from "../../data/validations";
import { GifsContext } from "../../App";
import Input from "../../elements/Input";
function Browser() {
	const gif_input = useRef<HTMLInputElement>(null);
	const [input, setInput] = useState("");
	const { setGifNameF } = useContext(GifsContext);
	const searchGif = () => {
		if (notEmpty(input)) {
			setGifNameF(input);
			gif_input.current!.value = "";
		}
	};

	return (
		<div className="flex w-[80%]  h-[100px]  max-h-[100px] justify-around items-center mt-6 ">
			<Input
				refe={gif_input}
				tittle="Buscar gif"
				searchGif={searchGif}
				setInput={setInput}
			/>
			<Button label="Buscar" searchGif={searchGif} />
		</div>
	);
}

export default Browser;
