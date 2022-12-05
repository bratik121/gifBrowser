export const notEmpty = (value: string): boolean =>
	value != "" ? true : false;

export const notGif = (tittle: string): string =>
	tittle.substring(0, tittle.indexOf("GIF") - 1);
