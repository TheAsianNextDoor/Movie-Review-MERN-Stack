import { Rating } from '@material-ui/lab';
import axios from 'axios';
import { useState } from 'react';

export const WrappedRating = ({
    value: initialValue,
    id,
}) => {
    const [
        ratingValue,
        setRatingValue,
    ] = useState();

    const handleOnChange = async (event, newValue) => {
        setRatingValue(newValue);
        await axios.put(
            '/movie/updateRating',
            {
                title: id,
                rating: newValue,
            },
        );
    };

    return (
        <Rating
            name={`movieRating-${id}`}
            precision={0.5}
            value={ratingValue || initialValue}
            onChange={handleOnChange}
        />
    );
};
