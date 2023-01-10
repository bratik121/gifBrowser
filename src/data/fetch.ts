import gif from "./gifs";
const getGfifs = async (subjet: string, limit: number, gifSetter: Function) => {
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

export const getCategories = async (categoriesSetter: Function) => {
	let api = `https://g.tenor.com/v1/categories?key=LIVDSRZULELA`;
	let categories: string[] = (await fetchCategories(api)) as string[];
	let newCategories = categories.slice(0, 19).sort();
	categoriesSetter(newCategories);
};

const fetchCategories = async (api: string): Promise<string[] | string> => {
	try {
		const res = await fetch(api);
		const data = await res.json();
		return data.tags.map((trend: any) => {
			return trend.searchterm;
		});
	} catch (error) {
		return "error: \n" + error;
	}
};
export default getGfifs;
