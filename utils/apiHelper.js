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

export const fetchCast=async(id)=>{
    try {
        const res = await fetch(
          `${process.env.BASE_URL}/movie/${id}/credits?api_key=${process.env.API_KEY}`
        );
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
}