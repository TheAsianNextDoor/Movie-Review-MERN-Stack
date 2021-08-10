import { Rating } from '@material-ui/lab';
import { useState } from 'react';

import { putRequestAndVerifyOk } from '../../utils/apiRequestUtils.js';

export const WrappedRating = ({
    value: initialValue,
    id,
    setSuccessToastOpen,
    setFailureToastOpen,
    setSuccessToastMessage,
    setFailureToastMessage,

}) => {
    const [
        ratingValue,
        setRatingValue,
    ] = useState();

    const handleOnChange = async (event, newValue) => {
        try {
            setRatingValue(newValue);
            await putRequestAndVerifyOk(
                '/movie/updateRating',
                {
                    title: id,
                    rating: newValue,
                },
            );
            setSuccessToastOpen(true);
            setSuccessToastMessage('Rating added successfully');
        } catch (e) {
            setFailureToastOpen(true);
            setFailureToastMessage('Rating failure');
        }
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
