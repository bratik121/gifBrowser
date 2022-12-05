import gif from "./data/gifs";
import { useState } from "react";
import { notGif } from "./data/validations";

function Gifs(props: any) {
	return (
		<div className="gifs-container grid grid-cols-1 md:grid-cols-4 gap-5 ">
			{props.gifList.map((gif: gif, index: number) => {
				const [active, setActive] = useState(false);
				return (
					//img container
					<div
						className="gif-box w-[200px] h-[150px] relative text-white"
						key={index}
					>
						{/* Image */}
						<img
							src={gif.url}
							alt={gif.title}
							className="w-full h-full object-cover"
						/>
						{/* Image overlay */}
						<div
							className="img-overlay absolute w-full h-full opacity-0 top-0 flex flex-col
								items-center bg-[rgba(0,0,0,0.6)] transition duration-100 hover:opacity-100
							   justify-around overflow-hidden"
						>
							{/* Overlay Tittle */}
							<div className="overlay-tittle font-bold text-xl text-center w-[80%]">
								{notGif(gif.title)}
							</div>
							{/* Overlay Buttons */}
							<div className="overlay-buttons grid-cols-2  w-[40%] flex justify-between items-center">
								<button
									className="viewLink w-8 h-8 hover:opacity-60"
									onClick={() => {
										window.open(gif.url, "_blank");
									}}
								></button>
								<div className={`copyMessage ${active ? "active" : ""}`}>
									<button
										className="copyLink w-9 h-9 hover:opacity-60"
										onClick={() => {
											navigator.clipboard.writeText(gif.url);
											setActive(true);
											setTimeout(() => {
												setActive(false);
											}, 500);
										}}
									></button>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default Gifs;
