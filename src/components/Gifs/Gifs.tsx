import { useRef, useEffect, useContext } from "react";
import "./gifs.css";
import gif from "../../data/gifs";
import Gif from "../../elements/Gif";
import { motion } from "framer-motion";
import { GifsContext } from "../../App";

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.5,
			delay: 3,
		},
	},
};

const gifVariant = {
	hidden: { y: 300, opacity: 0 },
	show: { y: 0, opacity: 1 },
};

function Gifs() {
	const { limit, setLimit, gifList } = useContext(GifsContext);
	const observer = new IntersectionObserver(
		(entries, observer) => {
			if (entries[0].isIntersecting) {
				if (limit < 48) {
					let newLimit: number;
					if (limit < 40) {
						newLimit = limit + 10;
					} else {
						newLimit = limit + 8;
					}
					setLimit(newLimit);
				}
			}
		},
		{
			rootMargin: "0px 0px 100px 0px",
			threshold: 1,
		}
	);
	const gifContainer = useRef() as React.MutableRefObject<HTMLDivElement>;
	const findLastGif = () => {
		observer.observe(gifContainer.current.lastChild as Element);
	};
	useEffect(() => {
		if (gifList.length > 0) {
			findLastGif();
		}

		return () => {
			observer.disconnect();
		};
	}, [gifList]);

	return (
		<motion.div
			className="gifs-container grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-5  pb-6 w-[80%]"
			variants={container}
			initial="hidden"
			animate="show"
			ref={gifContainer}
		>
			{gifList.map((gif: gif, index: number) => {
				return (
					<motion.div variants={gifVariant} key={index}>
						<Gif gif={gif} />
					</motion.div>
				);
			})}
		</motion.div>
	);
}

export default Gifs;
