import config from "../config.json"

export const getRandomCatUrl = async () => {
    const response = await fetch(config.url);
    const data = await response.json();
    return data[0].url
}