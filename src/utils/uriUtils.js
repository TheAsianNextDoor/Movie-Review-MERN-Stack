import URI from 'urijs';

const baseSearchURI = new URI('https://api.nytimes.com/svc/movies/v2/reviews/search.json');

export const searchByMovieNameURI = (movieName) => baseSearchURI
    .query({ query: movieName });
