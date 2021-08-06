import { TextField } from '@material-ui/core';
import axios from 'axios';
import {
    useEffect,
    useState,
} from 'react';
import { useForm } from 'react-hook-form';

import { searchByMovieNameURI } from '../../utils/uriUtils.js';
import { MovieCard } from '../Controls/movieCard.jsx';
import {
    StyledCardDiv,
    StyledSearchDiv,
} from './searchPage.styles.jsx';

export const SearchPage = () => {
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

    const loadData = async () => {
        const { data: document } = await axios.get('/apiKey/ny_times');
        const { key: apiKeyInstance } = document[0];
        setApiKey(apiKeyInstance);
    };

    useEffect(
        () => {
            loadData();
        },
        [],
    );

    const onSubmit = async ({ movieTitle }) => {
        const uri = searchByMovieNameURI(movieTitle).addSearch({ 'api-key': apiKey }).toString();
        const result = await axios.get(uri);
        if (result.data.results === null) {
            setError(
                'movieTitle',
                { message: 'No movie found with provided name' },
            );
        } else {
            setMovies(result.data.results.slice(0, 8));
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <StyledSearchDiv>
                <h2>
                    Search For Movies
                </h2>
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
                {!errors?.movieTitle && movies?.map((movieInfo, index) => (
                    <MovieCard
                        key={index}
                        data={movieInfo}
                    />
                ))}
            </StyledCardDiv>

        </form>
    );
};
