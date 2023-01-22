import { motion } from "framer-motion";
function Categorie(props: any) {
	return (
		<motion.div
			className="hover:cursor-pointer text-[font-size:8px] text-justify categorie-item box-content inline-block"
			key={props.categorieId}
			whileHover={{ scale: 1.25 }}
			onClick={() => {
				props.setGifNameF(props.categorie);
			}}
		>
			{props.categorie}
		</motion.div>
	);
}

export default Categorie;
