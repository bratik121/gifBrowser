import gif from "./gifs";
const getGfifs = async (subjet: string, limit: string, gifSetter: Function) => {
	let api = `https://g.tenor.com/v1/search?q=${subjet}&key=LIVDSRZULELA&limit=${limit}`;
	let gifs: gif[] = (await fetchGifs(api)) as gif[];
	gifSetter(gifs);
};
const fetchGifs = async (api: string): Promise<gif[] | string> => {
	try {
		const res = await fetch(api);
		const data = await res.json();
		let array = data.results;
		return array.map((gif: any) => {
			return {
				url: gif.media[0].gif.url,
				title:
					gif.content_description === "" ? "default" : gif.content_description,
			};
		});
	} catch (error) {
		return "error: \n" + error;
	}
};
export default getGfifs;
