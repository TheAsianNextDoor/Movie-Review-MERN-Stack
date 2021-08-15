import { TextField } from '@material-ui/core';
import {
    useCallback,
    useEffect,
    useMemo,
    useState,
} from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import {
    getRequestAndReturnData,
    postRequestAndVerifyOk,
} from '../../utils/apiRequestUtils.js';
import { searchByMovieNameUri } from '../../utils/uriUtils.js';
import { MovieCard } from '../Controls/movieCard.jsx';
import {
    StyledCardDiv,
    StyledSearchDiv,
} from './searchPage.styles.jsx';

export const SearchPage = ({ setCurrentTab }) => {
    const history = useHistory();
    const [
        movies,
        setMovies,
    ] = useState();
    const [
        apiKey,
        setApiKey,
    ] = useState();
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm();

    useEffect(
        () => {
            (async () => {
                const { key } = (await getRequestAndReturnData('/apiKey/ny_times'))[0];
                setApiKey(key);
            })();
        },
        [],
    );

    const handleCardClick = useCallback(
        async (event, displayTitle) => {
            await postRequestAndVerifyOk(`/movie/create/${displayTitle}`);
            setCurrentTab(1);
            history.push('/collection');
        },
        [],
    );

    const onSubmit = useCallback(
        async ({ movieTitle }) => {
            const { results } = await getRequestAndReturnData(searchByMovieNameUri(movieTitle, apiKey));
            if (results === null) {
                setError(
                    'movieTitle',
                    { message: 'No movie found with provided name' },
                );
                setMovies([]);
            } else {
                setMovies(results.slice(0, 15));
            }
        },
        [apiKey],
    );

    const renderedCards = useMemo(
        () => movies?.map((movieInfo, index) => (
            <MovieCard
                key={index}
                data={movieInfo}
                handleCardClick={handleCardClick}
            />
        )),
        [
            movies,
            handleCardClick,
        ],
    );

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <StyledSearchDiv>
                <h2>
                    Search For Movies
                </h2>
                <p>Click Card to add to collection</p>
            </StyledSearchDiv>
            <StyledSearchDiv>
                <TextField
                    fullWidth
                    size="small"
                    label="Movie Title"
                    variant="outlined"
                    error={!!errors?.movieTitle}
                    helperText={errors?.movieTitle?.message}
                    color="primary"
                    {...register('movieTitle')}
                />
            </StyledSearchDiv>

            <StyledCardDiv>
                {renderedCards}
            </StyledCardDiv>

        </form>
    );
};
