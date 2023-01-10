import { useRef, useEffect, Suspense, lazy } from "react";
import gif from "./data/gifs";
import Gif from "./components/Gif";
import { motion } from "framer-motion";

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

function Gifs(props: any) {
	const observer = new IntersectionObserver(
		(entries, observer) => {
			if (entries[0].isIntersecting) {
				if (props.limit < 48) {
					let newLimit: number;
					if (props.limit < 40) {
						newLimit = props.limit + 10;
					} else {
						newLimit = props.limit + 8;
					}
					props.setLimit(newLimit);
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
		if (props.gifList.length > 0) {
			findLastGif();
		}

		return () => {
			observer.disconnect();
		};
	}, [props.gifList]);

	return (
		<motion.div
			className="gifs-container grid grid-cols-1 md:grid-cols-4 gap-5 pb-6"
			variants={container}
			initial="hidden"
			animate="show"
			ref={gifContainer}
		>
			{props.gifList.map((gif: gif, index: number) => {
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
