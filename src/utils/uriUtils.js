import URI from 'urijs';

const baseSearchURI = new URI('https://api.nytimes.com/svc/movies/v2/reviews/search.json');

/**
 * Constructs a stringified Uri for querying the NY Times public api
 * @param {string} movieName
 * @param {string} apiKey
 * @returns {string}
 */
export const searchByMovieNameUri = (movieName, apiKey) => baseSearchURI
    .query({ query: movieName })
    .addSearch({ 'api-key': apiKey })
    .toString();
