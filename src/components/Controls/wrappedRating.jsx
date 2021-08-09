import { Rating } from '@material-ui/lab';
import { useState } from 'react';

import { putRequestAndVerifyOk } from '../../utils/apiRequestUtils.js';

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
        await putRequestAndVerifyOk(
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
