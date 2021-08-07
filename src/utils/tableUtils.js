import { WrappedRating } from '../components/Controls/wrappedRating.jsx';

export const columnsConfig = [
    {
        field: 'id',
        headerName: 'Movie Title',
        description: 'The movie title',
        flex: 1,
        minWidth: 100,
        editable: false,
        selectable: false,
    },
    {
        field: 'comment',
        headerName: 'Comments',
        description: 'Your personal comments on the movie',
        flex: 2,
        minWidth: 200,
        editable: true,
        sortable: false,
    },
    {
        field: 'rating',
        headerName: 'Rating',
        description: 'Your rating of the movie',
        sortable: true,
        type: 'number',
        width: 150,
        // sortComparator: (v1, v2, param1, param2) => param1.api.getCellValue(param1.id, 'rating')
        //     - param2.api.getCellValue(param2.id, 'rating'),
        renderCell: (params) => (<WrappedRating {...params} />),
    },
];

/**
 * Transforms the response from the DB into the table rows
 * @param {Object[]} responseArray
 * @returns {Object[]}
 */
export const constructRows = (responseArray) => responseArray.map(({
    title, comment, rating,
}) => ({
    id: title,
    comment,
    rating,
}));
