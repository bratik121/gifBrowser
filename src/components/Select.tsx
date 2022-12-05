import { useState } from "react";

function Select(props: any) {
	const [active, setActive] = useState(false);
	const clickHandler = () => {
		setActive(!active);
	};

	const passValue = (value: string) => {
		props.setGifCuantityF(value);
	};
	return (
		<div className="select-box flex flex-col absolute top-20 md:top-2 md:translate-x-0  md:right-1 z-20">
			<div
				className={`selected  px-3 ${
					props.currentLabel == "Cantidad" ? "py-4" : "py-3 "
				} cursor-pointer bg-[rgb(0,21,40)]
				 text-white rounded-lg  relative  ${active ? "active" : " "}`}
				onClick={clickHandler}
			>
				<span>{props.gifCuantity}</span>
			</div>
			<div
				className={`option-container bg-[rgb(0,21,40)] text-white
                rounded-lg  w-full transition duration-[0.4s] overflow-hidden mt-2
                 overflow-y-auto ${active ? "active" : ""}`}
			>
				{props.array.map((numero: string, index: number) => {
					return (
						<div
							className="option px-3 py-4 cursor-pointer hover:bg-[rgba(255,255,255,.5)]"
							key={index}
							onClick={(element) => {
								clickHandler();
								let opcion = element.target as HTMLElement;
								passValue(opcion.textContent!);
							}}
						>
							<input type="radio" className="hidden" id={numero} />
							<label className="cursor-pointer" htmlFor={numero}>
								{numero}
							</label>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Select;
