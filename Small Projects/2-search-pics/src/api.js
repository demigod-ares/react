import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID 8O50V7bNzfKdVixwS9W9nZVdr0VnrCv9gmeimfdvp6Y', // unsplash user app api key
    },
    params: {
      query: term,
    },
  });

  return response.data.results; // removed useless
};

export default searchImages;
