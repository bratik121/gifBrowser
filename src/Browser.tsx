import Select from "./components/Select";
import Button from "./components/Button";
import { useState, useRef } from "react";
import { notEmpty } from "./data/validations";
function Browser(props: any) {
	const gif_input = useRef<HTMLInputElement>(null);
	const [input, setInput] = useState("");
	const searchGif = () => {
		if (notEmpty(input) && props.gifCuantity !== "Cantidad") {
			props.setGifNameF(input);
			gif_input.current!.value = "";
		} else {
			console.log("Bad");
		}
	};
	return (
		<div className="w-[70%] h-56  md:h-32 flex flex-col content-between items-center gap-2 ">
			<div
				className="flex flex-wrap md:flex-nowrap w-full
            h-[70%] items-center justify-center md:justify-between relative "
			>
				<div>
					<div className=" w-[80%] h-14 absolute top-1 left-[10%] md:left-[3%] md:top-2 overflow-hidden ">
						<input
							className="browser__input w-full h-full capitalize
							"
							type="text"
							placeholder="Gif"
							ref={gif_input}
							onChange={(e) => {
								setInput(e.target.value);
							}}
						/>
						<span className="input-decoration"></span>
					</div>
				</div>
				<Select
					array={["12", "16", "20", "24", "28"]}
					gifCuantity={props.gifCuantity}
					setGifCuantityF={props.setGifCuantityF}
				/>
			</div>
			<Button label="Buscar" searchGif={searchGif} />
		</div>
	);
}

export default Browser;
