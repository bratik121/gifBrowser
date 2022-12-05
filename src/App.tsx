import { useState, useEffect, Suspense, lazy } from "react";
import Browser from "./Browser";
import Title from "./Title";
import "./styles/App.css";
import getGfifs from "./data/fetch";
import gif from "./data/gifs";
import Gifs from "./Gifs";

function App() {
	const [gifList, setGifList] = useState<gif[]>([]);
	const [gifCuantity, setGifCuantity] = useState("Cantidad");
	const [gifName, setGifName] = useState("");
	const setGifCuantityF = (newGifCuantity: string) => {
		setGifCuantity(newGifCuantity);
	};
	const setGifNameF = (newGifName: string) => {
		setGifName(newGifName);
	};
	const setGifListFun = (newGifList: gif[]) => {
		setGifList(newGifList);
	};
	useEffect(() => {
		if (gifCuantity !== "Cantidad" && gifName !== "") {
			getGfifs(gifName, gifCuantity, setGifListFun);
			setGifCuantity("Cantidad");
		}
	}, [gifName]);

	return (
		<div className="App">
			<div className="h-screen ">
				<div className="mx-auto flex flex-col justify-center items-center gap-8">
					<Title />
					<Browser
						gifCuantity={gifCuantity}
						setGifCuantityF={setGifCuantityF}
						setGifNameF={setGifNameF}
					/>
					{/* <Cgifs gifList={gifList} /> */}
					<Gifs gifList={gifList} />
				</div>
			</div>
		</div>
	);
}

export default App;
