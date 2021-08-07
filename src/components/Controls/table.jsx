import { DataGrid } from '@material-ui/data-grid';

import { WrappedRating } from './wrappedRating.jsx';

const rows = [
    {
        id: 12,
        movieTitle: 'Avatar',
        comment: 'Snow a whole lot of snow everywhere on the ground, oh my goodness look at it all',
        rating: 4,

    },
    {
        id: 2,
        comment: 'Lannister',
        rating: 3,

    },
    {
        id: 3,
        comment: 'Lannister',
        rating: 2.5,

    },
    {
        id: 4,
        comment: 'Stark',
        rating: 5,

    },
    {
        id: 5,
        comment: 'Targaryen',
        rating: 1,
    },
    {
        id: 6,
        comment: 'Melisandre',
        rating: null,

    },
    {
        id: 7,
        comment: 'Clifford',
        rating: 0,

    },
    {
        id: 8,
        comment: 'Frances',
        rating: 5.5,

    },
    {
        id: 9,
        comment: 'Roxie',
        rating: 10,

    },
];

export const Table = () => {
    const columns = [
        {
            field: 'movieTitle',
            headerName: 'Movie Title',
            description: 'This column has a value getter and is not sortable.',
            flex: 1,
            minWidth: 100,
            editable: false,
        },
        {
            field: 'comment',
            headerName: 'Comments',
            description: 'This column has a value getter and is not sortable.',
            flex: 2,
            minWidth: 200,
            editable: true,
            sortable: false,
        },
        {
            field: 'rating',
            headerName: 'Rating',
            description: 'This column has a value getter and is not sortable.',
            sortable: true,
            type: 'number',
            width: 150,
            renderCell: (params) => (<WrappedRating {...params} />),
        },
    ];

    return (
        <div
            style={{
                height: '100%',
                width: '100%',
            }}
        >
            {/* <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                onChange={(event, newValue) => {
                    console.log(newValue);
                    setValue(newValue);
                }}
            /> */}

            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                hideFooterSelectedRowCount
            />
        </div>
    );
};
