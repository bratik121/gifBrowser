import { motion } from "framer-motion";
import Categorie from "../../elements/Categorie";
import { GifsContext } from "../../App";
import { useContext } from "react";

function Categories() {
	const { categories, setGifNameF } = useContext(GifsContext);
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
		<motion.div
			className="no-scrollbar w-[85%] flex flex-col px-5 max-h-[500px] overflow-y-auto"
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
						className=""
					>
						<Categorie
							categorie={categorie}
							categorieId={index}
							setGifNameF={setGifNameF}
						/>
					</motion.div>
				);
			})}
		</motion.div>
	);
}

export default Categories;
