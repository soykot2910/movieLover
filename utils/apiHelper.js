export const fetchMovieInfo = async (id) => {
  try {
    const res = await fetch(
      `${process.env.BASE_URL}/movie/${id}?api_key=${process.env.API_KEY}&language=en`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCast = async (id) => {
  try {
    const res = await fetch(
      `${process.env.BASE_URL}/movie/${id}/credits?api_key=${process.env.API_KEY}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchVideo = async (id) => {
  try {
    const res = await fetch(
      `${process.env.BASE_URL}/movie/${id}/videos?api_key=${process.env.API_KEY}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchRecommendations = async (id) => {
  try {
    const res = await fetch(
      `${process.env.BASE_URL}/movie/${id}/recommendations?api_key=${process.env.API_KEY}&language=en-US&page=1`
    );
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
};
