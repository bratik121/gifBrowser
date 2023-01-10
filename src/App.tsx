import { useState, useEffect, Suspense, lazy } from "react";
import Browser from "./Browser";
import Title from "./Title";
import "./styles/App.css";
import getGfifs, { getCategories } from "./data/fetch";
import gif from "./data/gifs";
import Gifs from "./Gifs";
import Aside from "./Aside";

function App() {
	const [gifList, setGifList] = useState<gif[]>([]);
	const [gifName, setGifName] = useState("");
	const [categories, setCategories] = useState<string[]>([]);
	const [limit, setLimit] = useState(20);

	const setGifNameF = (newGifName: string) => {
		setGifName(newGifName);
	};
	const setGifListFun = (newGifList: gif[]) => {
		setGifList(newGifList);
	};

	const setCategoriesFun = (newCategories: string[]) => {
		setCategories(newCategories);
	};

	/*Gifs fetch */
	useEffect(() => {
		if (gifName !== "") {
			setLimit(20);
			getGfifs(gifName, limit, setGifListFun);
		}
		return () => {
			setGifList([]);
		};
	}, [gifName]);

	/*Categories fetch */
	useEffect(() => {
		console.log("App.tsx useEffect");
		getCategories(setCategoriesFun);
	}, []);

	/*scroll fetch */
	useEffect(() => {
		if (gifName !== "") {
			getGfifs(gifName, limit, setGifListFun);
		}
	}, [limit]);

	return (
		<div className="App">
			<div className="h-screen flex-col md:flex-row flex gap-7 md:justify-between">
				<div className="main md:w-[85%] flex flex-col items-center order-2 md:ml-[15%] gap-8 pt-6">
					<Browser setGifNameF={setGifNameF} />
					<div className="w-full flex justify-center md:justify-start box-border md:pl-[10.5rem]">
						<h3 className="text-white text-3xl inline capitalize">{gifName}</h3>
					</div>
					{/* <Cgifs gifList={gifList} /> */}
					<Gifs gifList={gifList} setLimit={setLimit} limit={limit} />
				</div>
				<Aside categories={categories} setGifNameF={setGifNameF} />
			</div>
		</div>
	);
}

export default App;
