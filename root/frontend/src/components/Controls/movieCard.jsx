/* eslint-disable camelcase */
import {
    CardContent,
    CardHeader,
    Typography,
} from '@material-ui/core';
import { useCallback } from 'react';

import { StyledCard } from './movieCard.styles.js';

export const MovieCard = ({
    data,
    handleCardClick,
}) => {
    const {
        display_title,
        opening_date,
        summary_short,
    } = data;
    const handleOnClick = useCallback(
        (event) => handleCardClick(event, display_title),
        [],
    );

    return (
        <>
            <StyledCard
                variant="outlined"
                onClick={handleOnClick}
            >
                <CardHeader
                    title={data && display_title}
                    subheader={data && opening_date}
                />
                <CardContent style={{ paddingTop: 0 }}>
                    <Typography
                        variant="body2"
                        color="textPrimary"
                        component="p"
                    >
                        {summary_short}
                    </Typography>
                </CardContent>
            </StyledCard>
        </>
    );
};
