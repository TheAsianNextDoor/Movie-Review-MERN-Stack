/* eslint-disable camelcase */
import {
    CardContent,
    CardHeader,
    Typography,
} from '@material-ui/core';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import { StyledCard } from './movieCard.styles.js';

export const MovieCard = ({ data }) => {
    const history = useHistory();
    const {
        display_title,
        opening_date,
        summary_short,
    } = data;

    const navigation = async () => {
        await axios.post(`/movie/create/${display_title}`);
        history.push('/collections');
    };

    if (!display_title) {
        return (
            <>
            </>
        );
    }

    return (
        <>
            <StyledCard
                variant="outlined"
                onClick={navigation}

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
