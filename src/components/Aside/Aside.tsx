import logo from "../../assets/Logo.png";
import fire from "../../assets/RedFireEmoji.gif";
import { FaBars } from "react-icons/fa";
import "./aside.css";
import Categories from "./Categories";
import { useState } from "react";

function Aside(props: any) {
	const [active, setActive] = useState(false);

	const toggleState = () => {
		setActive(!active);
	};

	const leave = () => {
		if (active === true) {
			toggleState();
		}
	};

	let categories = props.categories;
	return (
		<div
			className={`aside bottom-0  md:w-[15%] h-full 
			fixed text-white flex flex-col gap-3 ${
				active === true ? "w-[50%]" : "w-[15%] "
			}`}
			onMouseLeave={leave}
		>
			{/* aside top */}
			<div className="top w-full flex flex-col items-center justify-center mt-5">
				<FaBars
					className="md:hidden"
					onClick={(e) => {
						toggleState();
					}}
				/>
				<div
					className={`logo w-[130px] md:w-[160px] h-[60px] ${
						active === true ? "show" : "hide"
					} md:block`}
				>
					<a href="#input">
						<img className="w-full h-full object-cover " src={logo} alt="" />
					</a>
				</div>
			</div>
			{/* Aside body */}
			<div className="body text-white flex flex-col justify-between items-center">
				<div className="body__top text-center flex  w-[80%] justify-center ">
					<h3
						className={`text-2xl italic md:block ${
							active === true ? "show" : "hide"
						}	`}
					>
						Trending
					</h3>
					<div className="h-[25px] aspect-square">
						<img className="w-full object-scale-down" src={fire} alt="" />
					</div>
				</div>
				<div
					className={`body__bottom ${
						active === true ? "show" : "hide"
					} md:block `}
					onClick={(e) => toggleState()}
				>
					<Categories categories={categories} setGifNameF={props.setGifNameF} />
				</div>
			</div>
		</div>
	);
}

export default Aside;
