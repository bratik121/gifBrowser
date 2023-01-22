import { motion } from "framer-motion";
import Categorie from "../../elements/Categorie";

function Categories(props: any) {
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
			className="w-[60%] flex flex-col px-5 "
			variants={categorieContaiener}
			initial="hidden"
			animate="show"
		>
			{/* todo Aqui */}
			{props.categories.map((categorie: string, index: number) => {
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
							setGifNameF={props.setGifNameF}
						/>
					</motion.div>
				);
			})}
		</motion.div>
	);
}

export default Categories;
