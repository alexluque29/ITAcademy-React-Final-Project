export const exerciseOptions = {
  method: "GET",

  headers: {   
    'X-RapidAPI-Key': '48857c892dmsh75532d80ccc9f80p15e22cjsn6976665c2920',    
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
