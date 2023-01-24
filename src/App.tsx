import { useState, useEffect, useLayoutEffect, createContext } from "react";
import Browser from "./components/Browser/Browser";
import "./styles/App.css";
import getGfifs, { getCategories } from "./data/fetch";
import gif from "./data/gifs";
import Gifs from "./components/Gifs/Gifs";
import Aside from "./components/Aside/Aside";

type context = {
	categories: string[];
	gifName: string;
	gifList: gif[];
	limit: number;
	setLimit: (newLimit: number) => void;
	setGifNameF: (newGifName: string) => void;
};

export const GifsContext = createContext({} as context);

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

	useLayoutEffect(() => {
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
			<div className="h-screen flex-row flex gap-7 md:justify-between">
				<GifsContext.Provider
					value={{ categories, setGifNameF, gifName, gifList, setLimit, limit }}
				>
					<Aside />
					<div className="main w-[85%] flex flex-col items-center ml-[15%] gap-8 pt-6">
						<Browser />
						<div className="w-[70%] flex justify-center md:justify-start box-border">
							<h3 className="text-white text-3xl inline capitalize">
								{gifName}
							</h3>
						</div>
						{/* <Cgifs gifList={gifList} /> */}
						<Gifs />
					</div>
				</GifsContext.Provider>
			</div>
		</div>
	);
}

export default App;
