import { Rating } from '@material-ui/lab';
import { useState } from 'react';

export const WrappedRating = ({
    value: initialValue,
    id,
}) => {
    const [
        ratingValue,
        setRatingValue,
    ] = useState();

    return (
        <Rating
            name={`movieRating-${id}`}
            precision={0.5}
            value={ratingValue || initialValue}
            onChange={(event, newValue) => setRatingValue(newValue)}
        />
    );
};
