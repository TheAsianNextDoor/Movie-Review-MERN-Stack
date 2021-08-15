import { Rating } from '@material-ui/lab';
import {
    useCallback,
    useState,
} from 'react';

import { putRequestAndVerifyOk } from '../../utils/apiRequestUtils.js';
import { useToast } from './toastProvider.jsx';

export const WrappedRating = ({
    value: initialValue,
    id,
}) => {
    const [
        ratingValue,
        setRatingValue,
    ] = useState();
    const {
        updateSuccessToast,
        updateFailureToast,
    } = useToast();

    const handleOnChange = useCallback(
        async (event, newValue) => {
            try {
                setRatingValue(newValue);
                await putRequestAndVerifyOk(
                    '/movie/updateRating',
                    {
                        title: id,
                        rating: newValue,
                    },
                );
                updateSuccessToast('Rating added successfully');
            } catch (e) {
                updateFailureToast('Rating failure');
            }
        },
        [
            id,
            setRatingValue,
            updateSuccessToast,
            updateFailureToast,
        ],
    );

    return (
        <Rating
            name={`movieRating-${id}`}
            precision={0.5}
            value={ratingValue || initialValue}
            onChange={handleOnChange}
        />
    );
};
