import logo from "./assets/Logo.png";
import { motion } from "framer-motion";
import Categorie from "./components/Categorie";

function Aside(props: any) {
	let categories = props.categories;
	/*==========Categories Variants========= */
	const categorieContaiener = {
		hidden: {
			opacity: 0,
		},
		show: {
			opacity: 1,
		},
	};

	return (
		<div
			className="aside bottom-0 sticky w-full h-[15%] md:w-[15%] md:h-full bg-gradient-to-b
		md:bg-gradient-to-r from-[rgba(0,0,0,1)] to-transparent md:fixed text-white flex md:flex-col"
		>
			<div className="top w-full flex justify-center mt-5">
				<div className="logo w-[130px] md:w-[160px] h-[60px]">
					<img className="w-full h-full object-cover " src={logo} alt="" />
				</div>
			</div>
			<div className="body text-white flex flex-col justify-between">
				<motion.div
					className="w-full flex md:flex-col"
					variants={categorieContaiener}
					initial="hidden"
					animate="show"
				>
					{/* todo Aqui */}
					{categories.map((categorie: string, index: number) => {
						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, x: 300 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: index * 0.02 }}
							>
								<Categorie
									categorie={categorie}
									categorieId={index}
									setGifNameF={props.setGifNameF}
								/>
							</motion.div>
						);
					})}
				</motion.div>
			</div>
		</div>
	);
}

export default Aside;
