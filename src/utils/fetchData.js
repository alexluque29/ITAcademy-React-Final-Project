export const exerciseOptions = {
  method: "GET",

  headers: {
    // "X-RapidAPI-Key": "98d0b26d91msh7e303c211ac9d13p17c06bjsn9e653ebeeffc",
    "X-RapidAPI-Key": "cb19f6cc6dmsh3ac3cee6b939e6ep1a5611jsn35fd34518f46",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '10d6236308msh1b873d82c44a2eep19add3jsn8ea5475da1c0',
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
